import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  constructor(@Inject('PRISMA_CLIENT') private prisma: PrismaClient) {}

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    return this.prisma.activity.create({
      data: createActivityDto,
    });
  }

  async findAll(): Promise<Activity[]> {
    return this.prisma.activity.findMany();
  }

  async findOne(id: string): Promise<Activity | null> {
    return this.prisma.activity.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateActivityDto: UpdateActivityDto,
  ): Promise<Activity> {
    return this.prisma.activity.update({
      where: { id },
      data: updateActivityDto,
    });
  }

  async remove(id: string): Promise<Activity> {
    return this.prisma.activity.delete({
      where: { id },
    });
  }
}
