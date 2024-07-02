import { Inject, Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Client } from 'edgedb';
import { e } from 'src/database/edgedb.module';

@Injectable()
export class GroupService {
  constructor(@Inject('EDGEDB_CLIENT') private readonly client: Client) {}

  async create(createGroupDto: CreateGroupDto): Promise<any> {
    const { creatorId, memberIds, name, description } = createGroupDto;

    console.log(memberIds);

    const groupMembers =
      memberIds.length > 0
        ? e.select(e.User, (user) => ({
            filter: e.op(user.username, 'in', e.set(...memberIds)),
          }))
        : undefined;

    const query = e
      .insert(e.PlanGroup, {
        name,
        description,
        created_at: e.datetime_current(),
        creator: e.assert_single(
          e.select(e.User, (user) => ({
            filter: e.op(user.id, '=', e.uuid(creatorId)),
          })),
        ),
        members: groupMembers,
      })
      .run(this.client);

    return query;
  }

  async findAll(): Promise<any[]> {
    const query = e.select(e.PlanGroup, () => ({
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

    const result = await query.run(this.client);
    return result;
  }

  async findOne(id: string): Promise<any> {
    const query = e.select(e.PlanGroup, (group) => ({
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

    const result = await query.run(this.client);
    return result;
  }

  async update(id: string, updateGroupDto: UpdateGroupDto): Promise<any> {
    const { memberIds, ...groupData } = updateGroupDto;

    const groupMembers =
      memberIds.length > 0
        ? e.select(e.User, (user) => ({
            filter: e.op(user.username, 'in', e.set(...memberIds)),
          }))
        : undefined;

    const query = e
      .update(e.PlanGroup, (group) => ({
        filter: e.op(group.id, '=', e.uuid(id)),
        set: {
          ...groupData,
          members: groupMembers,
        },
      }))
      .run(this.client);
    return query;
  }

  async remove(id: string): Promise<void> {
    const query = e.delete(e.PlanGroup, (group) => ({
      filter: e.op(group.id, '=', e.uuid(id)),
    }));

    await query.run(this.client);
  }
}
