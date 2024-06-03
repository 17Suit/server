import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { EdgeDbModule } from './database/edgedb.module';
import { AuthModule } from './auth/auth.module';
import { PlanModule } from './plan/plan.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [AuthModule, UsersModule, EdgeDbModule, PlanModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
