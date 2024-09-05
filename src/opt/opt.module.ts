import { Module } from '@nestjs/common';

import { ActivityModule } from './activity/activity.module';
import { BudgetModule } from './budget/budget.module';
import { DestinyModule } from './destiny/destiny.module';
import { GroupModule } from './group/group.module';
import { OptController } from './opt.controller';
import { OptService } from './opt.service';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [
    GroupModule,
    TripModule,
    BudgetModule,
    DestinyModule,
    ActivityModule,
  ],
  controllers: [OptController],
  providers: [OptService],
})
export class OptModule {}
