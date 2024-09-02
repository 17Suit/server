import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { Destination } from './entities/destination.entity';

@Injectable()
export class DestinationService {
  constructor(@Inject('PRISMA_CLIENT') private prisma: PrismaClient) {}

  async create(
    createDestinationDto: CreateDestinationDto,
  ): Promise<Destination> {
    return this.prisma.destination.create({
      data: createDestinationDto,
    });
  }

  async findAll(): Promise<Destination[]> {
    return this.prisma.destination.findMany();
  }

  async findOne(id: string): Promise<Destination | null> {
    return this.prisma.destination.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateDestinationDto: UpdateDestinationDto,
  ): Promise<Destination> {
    return this.prisma.destination.update({
      where: { id },
      data: updateDestinationDto,
    });
  }

  async remove(id: string): Promise<Destination> {
    return this.prisma.destination.delete({
      where: { id },
    });
  }
}
