import { Module } from '@nestjs/common';
import { SuiteController } from './suite.controller';
import { SuiteService } from './suite.service';
import { UsersModule } from './user/user.module';

@Module({
  imports: [UsersModule],
  controllers: [SuiteController],
  providers: [SuiteService],
})
export class SuiteModule {}
