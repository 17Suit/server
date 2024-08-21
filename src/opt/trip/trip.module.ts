import { AuthMiddleware } from 'src/auth/middleware/auth.middleware';
import { PrismaModule } from 'src/database/prisma.module';
import { LoggerMiddleware } from 'src/middleware/logger/logger.middleware';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { TripController } from './trip.controller';
import { TripService } from './trip.service';

@Module({
  imports: [PrismaModule],
  controllers: [TripController],
  providers: [TripService],
})
export class TripModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('trips')
      .apply(AuthMiddleware)
      .forRoutes('trips');
  }
}
