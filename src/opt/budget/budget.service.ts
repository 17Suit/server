import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetService {
  constructor(@Inject('PRISMA_CLIENT') private prisma: PrismaClient) {}

  async create(createBudgetDto: CreateBudgetDto): Promise<Budget> {
    return this.prisma.budget.create({
      data: createBudgetDto,
    });
  }

  async findAll(): Promise<Budget[]> {
    return this.prisma.budget.findMany();
  }

  async findOne(id: number): Promise<Budget | null> {
    return this.prisma.budget.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateBudgetDto: UpdateBudgetDto): Promise<Budget> {
    return this.prisma.budget.update({
      where: { id },
      data: updateBudgetDto,
    });
  }

  async remove(id: number): Promise<Budget> {
    return this.prisma.budget.delete({
      where: { id },
    });
  }
}
