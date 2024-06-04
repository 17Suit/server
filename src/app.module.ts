import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './suite/user/user.module';
import { EdgeDbModule } from './database/edgedb.module';
import { AuthModule } from './auth/auth.module';
import { PlanModule } from './opt/plan/plan.module';
import { GroupModule } from './opt/group/group.module';
import { SuiteModule } from './suite/suite.module';
import { OptModule } from './opt/opt.module';

@Module({
  imports: [
    AuthModule,
    EdgeDbModule,
    SuiteModule,
    OptModule,
    UsersModule,
    PlanModule,
    GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
