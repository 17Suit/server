import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { EdgeDbModule } from 'src/database/edgedb.module';
import { LoggerMiddleware } from 'src/middleware/logger/logger.middleware';
import { AuthMiddleware } from 'src/auth/middleware/auth.middleware';

@Module({
  imports: [EdgeDbModule],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('group')
      .apply(AuthMiddleware)
      .forRoutes('group');
  }
}
