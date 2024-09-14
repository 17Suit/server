import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { Trip } from './entities/trip.entity';

@Injectable()
export class TripService {
  constructor(@Inject('PRISMA_CLIENT') private readonly prisma: PrismaClient) {}

  async create(createTripDto: CreateTripDto): Promise<Trip> {
    const { userId, budgetId, tripGroupId } = createTripDto;

    if (budgetId) {
      try {
        await this.prisma.budget.findUniqueOrThrow({
          where: { id: budgetId },
        });
      } catch (error) {
        throw new BadRequestException(
          `Budget with ID ${budgetId} does not exist`,
        );
      }
    }

    if (tripGroupId) {
      try {
        await this.prisma.tripGroup.findUniqueOrThrow({
          where: { id: tripGroupId },
        });
      } catch (error) {
        throw new BadRequestException(
          `TripGroup with ID ${tripGroupId} does not exist`,
        );
      }
    }
    try {
      await this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
      });
    } catch (error) {
      throw new UnauthorizedException(`User with ID ${userId} does not exist`);
    }

    return await this.prisma.trip.create({
      data: createTripDto,
    });
  }

  async findAll(userId: string) {
    try {
      await this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
      });
    } catch (error) {
      throw new UnauthorizedException(`User with ID ${userId} does not exist`);
    }

    return await this.prisma.trip.findMany({ where: { userId } });
  }

  async findOne(id: string) {
    const trip = await this.prisma.trip
      .findUnique({
        where: { id },
        include: {
          budget: {
            select: {
              id: true,
              amount: true,
              max: true,
              min: true,
              currency: true,
            },
          },
          destinies: {
            select: {
              id: true,
              name: true,
              description: true,
              address: true,
              latitude: true,
              longitude: true,
              city: true,
            },
          },
          activities: {
            select: {
              id: true,
              name: true,
              description: true,
              startTime: true,
              endTime: true,
              priority: true,
            },
          },
        },
      })
      .catch((err) => {
        Logger.error(err);
        throw new InternalServerErrorException("Can't reach database server");
      });

    if (!trip) {
      throw new NotFoundException(`Trip with ID ${id} does not exist`);
    }
    return trip;
  }

  async update(id: string, updateTripDto: UpdateTripDto) {
    return await this.prisma.trip.update({
      where: { id },
      data: updateTripDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.trip.delete({
      where: { id },
    });
  }
}
