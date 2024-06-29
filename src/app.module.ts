import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Common module
import { EdgeDbModule } from './database/edgedb.module';
import { AuthModule } from './auth/auth.module';
// Application module
import { SuiteModule } from './suite/suite.module';
import { OptModule } from './opt/opt.module';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { EventLoopMiddleware } from './middleware/event-loop/event-loop.middleware';

@Module({
  imports: [AuthModule, EdgeDbModule, SuiteModule, OptModule],
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
