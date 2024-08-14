import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// Common module
import { PrismaModule } from './database/prisma.module';
import { EventLoopMiddleware } from './middleware/event-loop/event-loop.middleware';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { OptModule } from './opt/opt.module';
// Application module
import { SuiteModule } from './suite/suite.module';

@Module({
  imports: [AuthModule, PrismaModule, SuiteModule, OptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      })
      .apply(EventLoopMiddleware)
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
