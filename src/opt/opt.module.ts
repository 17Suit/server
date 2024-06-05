import { Module } from '@nestjs/common';
import { OptController } from './opt.controller';
import { OptService } from './opt.service';
import { GroupModule } from './group/group.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [GroupModule, PlanModule],
  controllers: [OptController],
  providers: [OptService],
})
export class OptModule {}
