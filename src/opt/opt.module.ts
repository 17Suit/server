import { Module } from '@nestjs/common';

import { GroupModule } from './group/group.module';
import { OptController } from './opt.controller';
import { OptService } from './opt.service';
import { TripModule } from './trip/trip.module';
import { BudgetModule } from './budget/budget.module';
import { DestinationModule } from './destination/destination.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [GroupModule, TripModule, BudgetModule, DestinationModule, ActivityModule],
  controllers: [OptController],
  providers: [OptService],
})
export class OptModule {}
