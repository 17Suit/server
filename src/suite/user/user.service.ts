import { Client } from 'edgedb';
import { e } from 'src/database/edgedb.module';

import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { User } from './dto/create-user.dto';
import { UpdateUser } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('EDGEDB_CLIENT') private readonly client: Client) {}

  async findAll(): Promise<User[]> {
    try {
      const query = await e
        .select(e.User, () => ({
          ...e.User['*'],
        }))
        .run(this.client);
      console.log(query);
      return query;
    } catch (error) {
      console.log(error.message);
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }

  async findOneByEmail(email: string) {
    try {
      const emailFound = await e
        .assert_single(
          e.select(e.User, (user) => ({
            filter: e.op(user.email, '=', email),
            id: true,
            email: true,
            emailVerified: true,
            name: true,
            image: true,
            password: true,
          })),
        )
        .run(this.client);
      return emailFound;
    } catch (error) {}
  }

  async findOne(userId: string): Promise<User[]> {
    try {
      const user = await e
        .select(e.User, () => ({
          filter_single: { id: userId },
          id: true,
          username: true,
          name: true,
          email: true,
          birthday: true,
          password: false,
          rol: {
            id: false,
            name: true,
            description: true,
            permissions: {
              id: false,
              read: false,
              write: false,
              create: false,
              update: false,
              delete: false,
            },
          },
        }))
        .run(this.client);

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return user;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(user: User): Promise<any> {
    const roleName = user.rol ? user.rol.name : 'user';
    try {
      const result = await e
        .insert(e.User, {
          username: user.username,
          email: user.email,
          name: user.name,
          password: user.password,
          birthday: user.birthday,
          rol: e.assert_single(
            e.select(e.Rol, (rol) => ({
              filter: e.op(rol.name, '=', roleName),
            })),
          ),
        })
        .run(this.client);
      console.log(result);
      return result;
    } catch (error) {
      if (error.message.includes('constraint')) {
        throw new HttpException(
          'Username name must be unique',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw error;
    }
  }
  async update(userId: string, updateUserDto: UpdateUser): Promise<any> {
    const userToUpdate = await e
      .update(e.User, (user) => ({
        filter_single: { id: userId },
        set: {
          username: updateUserDto.username,
          email: updateUserDto.email,
          password: updateUserDto.password,
          birthday: updateUserDto.birthday,
          rol: updateUserDto.rol
            ? e.select(e.Rol, () => ({
                filter_single: { name: user.rol.name },
                id: true,
                name: true,
                description: true,
                permissions: true,
              }))[0]
            : undefined,
        },
      }))
      .run(this.client);
    if (!userToUpdate) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return await userToUpdate;
  }
  async delete(userId: string): Promise<any> {
    const query = e.delete(e.User, () => ({
      filter_single: { id: userId },
    }));
    return await query.run(this.client);
  }
}
