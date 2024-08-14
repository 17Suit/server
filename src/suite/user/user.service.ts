import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('PRISMA_CLIENT') private readonly prisma: PrismaClient) {}

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // Obtener un usuario por email
  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  // Ejemplo de método para crear un nuevo usuario
  async create(data: { email: string; name: string; password: string }) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });
  }

  // Ejemplo de método para actualizar un usuario
  async update(
    id: string,
    data: { email?: string; username?: string; password?: string },
  ) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Ejemplo de método para eliminar un usuario
  async delete(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
