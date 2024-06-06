import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

import { Swagger } from '@nestjs/swagger';
import { e } from 'src/database/edgedb.module';

@Injectable()
export class GroupService {
  constructor(
    @InjectEdgeDBClient()
    private readonly edgedb: e.Client,
  ) {}

  @Swagger.ApiOperation({ summary: 'Create a new group' })
  @Swagger.ApiResponse({
    status: 201,
    description: 'The group has been successfully created.',
  })
  @Swagger.ApiResponse({ status: 400, description: 'Invalid input data.' })
  async create(createGroupDto: CreateGroupDto): Promise<any> {
    const { creatorId, memberIds, name, description } = createGroupDto;

    const query = e.insert(e.Group, {
      name,
      description,
      created_at: e.datetime_current(),
      creator: e.select(e.User, {
        filter: e.op(e.User.id, '=', e.uuid(creatorId)),
      }),
      members: e.select(e.User, {
        filter: e.op(
          e.User.id,
          'in',
          memberIds.map((id) => e.uuid(id)),
        ),
      }),
    });

    const result = await query.run(this.edgedb);
    return result;
  }

  @Swagger.ApiOperation({ summary: 'Get all groups' })
  @Swagger.ApiResponse({ status: 200, description: 'Return all groups.' })
  async findAll(): Promise<any[]> {
    const query = e.select(e.Group, () => ({
      id: true,
      name: true,
      description: true,
      created_at: true,
      creator: {
        id: true,
        username: true,
      },
      members: {
        id: true,
        username: true,
      },
    }));

    const result = await query.run(this.edgedb);
    return result;
  }

  @Swagger.ApiOperation({ summary: 'Get a group by ID' })
  @Swagger.ApiResponse({
    status: 200,
    description: 'Return the group with the specified ID.',
  })
  @Swagger.ApiResponse({ status: 404, description: 'Group not found.' })
  async findOne(id: string): Promise<any> {
    const query = e.select(e.Group, (group) => ({
      filter: e.op(group.id, '=', e.uuid(id)),
      id: true,
      name: true,
      description: true,
      created_at: true,
      creator: {
        id: true,
        username: true,
      },
      members: {
        id: true,
        username: true,
      },
    }));

    const result = await query.run(this.edgedb);
    return result;
  }

  @Swagger.ApiOperation({ summary: 'Update a group by ID' })
  @Swagger.ApiResponse({
    status: 200,
    description: 'The group has been successfully updated.',
  })
  @Swagger.ApiResponse({ status: 404, description: 'Group not found.' })
  async update(id: string, updateGroupDto: UpdateGroupDto): Promise<any> {
    const { memberIds, ...groupData } = updateGroupDto;

    const query = e.update(e.Group, (group) => ({
      filter: e.op(group.id, '=', e.uuid(id)),
      set: {
        ...groupData,
        members: memberIds
          ? e.select(e.User, {
              filter: e.op(
                e.User.id,
                'in',
                memberIds.map((memberId) => e.uuid(memberId)),
              ),
            })
          : undefined,
      },
    }));

    const result = await query.run(this.edgedb);
    return result;
  }

  @Swagger.ApiOperation({ summary: 'Delete a group by ID' })
  @Swagger.ApiResponse({
    status: 200,
    description: 'The group has been successfully deleted.',
  })
  @Swagger.ApiResponse({ status: 404, description: 'Group not found.' })
  async remove(id: string): Promise<void> {
    const query = e.delete(e.Group, (group) => ({
      filter: e.op(group.id, '=', e.uuid(id)),
    }));

    await query.run(this.edgedb);
  }
}
