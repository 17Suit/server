import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { EdgeDbModule } from 'src/database/edgedb.module';

@Module({
  imports: [EdgeDbModule],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}
