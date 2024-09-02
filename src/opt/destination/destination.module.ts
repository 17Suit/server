import { AuthMiddleware } from 'src/auth/middleware/auth.middleware';
import { PrismaModule } from 'src/database/prisma.module';
import { LoggerMiddleware } from 'src/middleware/logger/logger.middleware';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { DestinationController } from './destination.controller';
import { DestinationService } from './destination.service';

@Module({
  imports: [PrismaModule],
  controllers: [DestinationController],
  providers: [DestinationService],
})
export class DestinationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('destiny')
      .apply(AuthMiddleware)
      .forRoutes('destiny');
  }
}
