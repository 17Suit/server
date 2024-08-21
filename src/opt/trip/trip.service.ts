import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Injectable()
export class TripService {
  constructor(@Inject('PRISMA_CLIENT') private readonly prisma: PrismaClient) {}

  async create(createTripDto: CreateTripDto) {
    const {
      title,
      description,
      userId,
      budgetId,
      tripGroupId,
      startDate,
      endDate,
      priority,
      status,
      tripType,
    } = createTripDto;

    return this.prisma.trip.create({
      data: {
        title,
        description,
        userId,
        budgetId,
        tripGroupId,
        startDate,
        endDate,
        priority,
        status,
        tripType,
      },
    });
  }

  async findAll() {
    return await this.prisma.trip.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.trip.findUnique({
      where: { id },
      include: {
        budget: {
          select: {
            amount: true,
            max: true,
            min: true,
            currency: true,
          },
        },
        destinations: {
          select: {
            name: true,
            description: true,
            address: true,
            latitude: true,
            longitude: true,
            city: true,
          },
        },
      },
    });
  }

  async update(id: string, updateTripDto: UpdateTripDto) {
    return { id, updateTripDto };
  }

  async remove(id: string) {
    return await this.prisma.trip.delete({
      where: { id },
    });
  }
}
