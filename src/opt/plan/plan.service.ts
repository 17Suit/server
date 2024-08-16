import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlanService {
  constructor(@Inject('PRISMA_CLIENT') private readonly prisma: PrismaClient) {}

  async create(createPlanDto: CreatePlanDto) {
    const {
      userId,
      title,
      description,
      statusId,
      budget,
      destinations,
      endDate,
      startDate,
    } = createPlanDto;
    return await this.prisma.plan.create({
      data: {
        userId,
        title,
        description,
        status: {
          connect: { id: statusId },
        },
        endDate,
        startDate,
        budget: {
          create: {
            amount: budget.amount,
            max: budget.max,
            min: budget.min,
            currency: {
              connect: { id: budget.currencyId },
            },
          },
        },
        destinations: {
          create: destinations.map((destination) => ({
            name: destination.name,
            description: destination.description,
            address: destination.address,
            latitude: destination.latitude,
            longitude: destination.longitude,
            city: {
              connect: { id: destination.cityId }, // Conecta la ciudad por su ID
            },
          })),
        },
      },
      include: {
        status: true,
        budget: {
          include: {
            currency: true,
          },
        },
        destinations: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.plan.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.plan.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    return { id, updatePlanDto };
  }

  async remove(id: number) {
    return await this.prisma.plan.delete({
      where: { id },
    });
  }
}
