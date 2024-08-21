import { Module } from '@nestjs/common';

import { GroupModule } from './group/group.module';
import { OptController } from './opt.controller';
import { OptService } from './opt.service';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [GroupModule, TripModule],
  controllers: [OptController],
  providers: [OptService],
})
export class OptModule {}
