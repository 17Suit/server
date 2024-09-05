import { AuthMiddleware } from 'src/auth/middleware/auth.middleware';
import { PrismaModule } from 'src/database/prisma.module';
import { LoggerMiddleware } from 'src/middleware/logger/logger.middleware';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { DestinyController } from './destiny.controller';
import { DestinyService } from './destiny.service';

@Module({
  imports: [PrismaModule],
  controllers: [DestinyController],
  providers: [DestinyService],
})
export class DestinyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('destiny')
      .apply(AuthMiddleware)
      .forRoutes('destiny');
  }
}
