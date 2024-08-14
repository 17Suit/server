import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlanService {
  constructor(@Inject('PRISMA_CLIENT') private readonly prisma: PrismaClient) {}

  async create(createPlanDto: CreatePlanDto) {
    return createPlanDto;
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
