import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './dto/create-user.dto';
import { UpdateUser } from './dto/update-user.dto';
import { Client } from 'edgedb';
import e from '../database/edgedb-schema';

@Injectable()
export class UserService {
  constructor(@Inject('DATABASE_CLIENT') private readonly client: Client) {}

  private readonly users: User[] = [];

  async findAll(): Promise<User[]> {
    try {
      const query = await e
        .select(e.User, () => ({
          id: true,
          username: true,
          email: true,
          password: false,
          birthday: true,
          rol: {
            name: true,
            description: false,
            permissions: false,
          },
        }))
        .run(this.client);
      return query;
    } catch (error) {
      console.log(error.message);
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(userId: string): Promise<User[]> {
    try {
      const user = await e
        .select(e.User, () => ({
          filter_single: { id: userId },
          id: true,
          username: true,
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
    try {
      const role = await e
        .select(e.Rol, () => ({
          filter_single: { name: user.rol.name },
          id: true,
          name: true,
          description: true,
          permissions: true,
        }))
        .run(this.client);

      console.log(role);

      const result = await e
        .insert(e.User, {
          username: user.username,
          email: user.email,
          password: user.password,
          birthday: user.birthday,
        })
        .run(this.client);

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
