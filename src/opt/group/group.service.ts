import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(@Inject('PRISMA_CLIENT') private readonly prisma: PrismaClient) {}

  async create(createGroupDto: CreateGroupDto) {
    return createGroupDto;
  }

  async findAll() {}

  async findOne(id: number) {
    return await this.prisma.planGroup.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return await this.prisma.planGroup.update({
      where: { id },
      data: updateGroupDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.planGroup.delete({
      where: { id },
    });
  }
}
