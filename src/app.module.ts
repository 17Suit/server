import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { PlanModule } from './plan/plan.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, PlanModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
