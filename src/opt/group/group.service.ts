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

  async findOne(id: string) {
    return await this.prisma.tripGroup.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    return await this.prisma.tripGroup.update({
      where: { id },
      data: updateGroupDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.tripGroup.delete({
      where: { id },
    });
  }
}
