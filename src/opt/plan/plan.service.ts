import { Inject, Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Client } from 'edgedb';
import { e } from 'src/database/edgedb.module';

@Injectable()
export class PlanService {
  constructor(@Inject('EDGEDB_CLIENT') private readonly client: Client) {}

  async create(createPlanDto: CreatePlanDto): Promise<any> {
    const {
      title,
      description,
      statusId,
      ownerId,
      startDate,
      endDate,
      budget,
      destinationId,
      memberIds,
      activityIds,
    } = createPlanDto;

    const planMembers =
      memberIds.length > 0
        ? e.select(e.User, (user) => ({
            filter: e.op(user.username, 'in', e.set(...memberIds)),
          }))
        : undefined;

    const planActivities =
      activityIds.length > 0
        ? e.select(e.Activity, (activity) => ({
            filter: e.op(`${activity.id}`, 'in', e.set(...memberIds)),
          }))
        : undefined;

    const query = e.insert(e.Plan, {
      title,
      description,
      created_at: e.datetime_current(),
      status: e.assert_single(
        e.select(e.Status, (status) => ({
          filter: e.op(status.id, '=', e.uuid(statusId)),
        })),
      ),
      owner: e.assert_single(
        e.select(e.User, (user) => ({
          filter: e.op(user.id, '=', e.uuid(ownerId)),
        })),
      ),
      startDate,
      endDate,
      // budget: budget
      //   ? {
      //       amount: budget.amount,
      //       min: budget.min,
      //       max: budget.max,
      //       currency: e.select(e.Currency, (currency) => ({
      //         filter: e.op(currency.id, '=', e.uuid(budget.currencyId)),
      //       })),
      //     }
      //   : undefined,
      destination: e.assert_single(
        e.select(e.Destination, (destination) => ({
          filter: e.op(destination.id, '=', e.uuid(destinationId)),
        })),
      ),
      members: planMembers,
      activities: planActivities,
    });

    const result = await query.run(this.client);
    return result;
  }

  async findAll(): Promise<any[]> {
    const query = e.select(e.Plan, () => ({
      id: true,
      title: true,
      description: true,
      created_at: true,
      status: {
        id: true,
        name: true,
      },
      owner: {
        id: true,
        username: true,
      },
      startDate: true,
      endDate: true,
      budget: {
        amount: true,
        min: true,
        max: true,
        currency: {
          id: true,
          name: true,
          symbol: true,
        },
      },
      destination: {
        id: true,
        name: true,
        description: true,
      },
      members: {
        id: true,
        username: true,
      },
      activities: {
        id: true,
        name: true,
        description: true,
      },
    }));

    const result = await query.run(this.client);
    return result;
  }

  async findOne(id: string): Promise<any> {
    const query = e.select(e.Plan, (plan) => ({
      filter: e.op(plan.id, '=', e.uuid(id)),
      id: true,
      title: true,
      description: true,
      created_at: true,
      status: {
        id: true,
        name: true,
      },
      owner: {
        id: true,
        username: true,
      },
      startDate: true,
      endDate: true,
      budget: {
        amount: true,
        min: true,
        max: true,
        currency: {
          id: true,
          name: true,
          symbol: true,
        },
      },
      destination: {
        id: true,
        name: true,
        description: true,
      },
      members: {
        id: true,
        username: true,
      },
      activities: {
        id: true,
        name: true,
        description: true,
      },
    }));

    const result = await query.run(this.client);
    return result;
  }

  async update(id: string, updatePlanDto: UpdatePlanDto): Promise<any> {
    const { memberIds, activityIds, budget, ...planData } = updatePlanDto;
    const planMembers =
      memberIds.length > 0
        ? e.select(e.User, (user) => ({
            filter: e.op(user.username, 'in', e.set(...memberIds)),
          }))
        : undefined;

    const planActivities =
      activityIds.length > 0
        ? e.select(e.Activity, (activity) => ({
            filter: e.op(`${activity.id}`, 'in', e.set(...memberIds)),
          }))
        : undefined;

    const query = e.update(e.Plan, (plan) => ({
      filter: e.op(plan.id, '=', e.uuid(id)),
      set: {
        ...planData,
        members: planMembers,
        activities: planActivities,
        // budget: budget
        //   ? {
        //       amount: budget.amount,
        //       min: budget.min,
        //       max: budget.max,
        //       currency: e.select(e.Currency, (currency) => ({
        //         filter: e.op(currency.id, '=', e.uuid(budget.currencyId)),
        //       })),
        //     }
        //   : undefined,
      },
    }));

    const result = await query.run(this.client);
    return result;
  }

  async remove(id: string): Promise<void> {
    const query = e.delete(e.Plan, (plan) => ({
      filter: e.op(plan.id, '=', e.uuid(id)),
    }));

    await query.run(this.client);
  }
}
