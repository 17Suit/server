import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateDestinyDto } from './dto/create-destiny.dto';
import { UpdateDestinyDto } from './dto/update-destiny.dto';
import { Destiny } from './entities/destiny.entity';

@Injectable()
export class DestinyService {
  constructor(@Inject('PRISMA_CLIENT') private prisma: PrismaClient) {}

  async create(createDestinyDto: CreateDestinyDto): Promise<Destiny> {
    return this.prisma.destiny.create({
      data: createDestinyDto,
    });
  }

  async findAll(): Promise<Destiny[]> {
    return this.prisma.destiny.findMany();
  }

  async findOne(id: string): Promise<Destiny | null> {
    return this.prisma.destiny.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateDestinyDto: UpdateDestinyDto,
  ): Promise<Destiny> {
    return this.prisma.destiny.update({
      where: { id },
      data: updateDestinyDto,
    });
  }

  async remove(id: string): Promise<Destiny> {
    return this.prisma.destiny.delete({
      where: { id },
    });
  }
}
