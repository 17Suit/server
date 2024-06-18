import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerMiddleware } from 'src/middleware/logger/logger.middleware';
import { AuthMiddleware } from 'src/auth/middleware/auth.middleware';
import { EdgeDbModule } from 'src/database/edgedb.module';

@Module({
  imports: [EdgeDbModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users')
      .apply(AuthMiddleware)
      .forRoutes('users');
  }
}
