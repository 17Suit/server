import { AuthMiddleware } from 'src/auth/middleware/auth.middleware';
import { PrismaModule } from 'src/database/prisma.module';
import { LoggerMiddleware } from 'src/middleware/logger/logger.middleware';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';

@Module({
  imports: [PrismaModule],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('activity')
      .apply(AuthMiddleware)
      .forRoutes('activity');
  }
}
