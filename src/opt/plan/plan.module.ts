import { AuthMiddleware } from 'src/auth/middleware/auth.middleware';
import { EdgeDbModule } from 'src/database/edgedb.module';
import { LoggerMiddleware } from 'src/middleware/logger/logger.middleware';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';

@Module({
  imports: [EdgeDbModule],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('plans')
      .apply(AuthMiddleware)
      .forRoutes('plans');
  }
}
