import { Module } from '@nestjs/common';
import { SuiteController } from './suite.controller';
import { SuiteService } from './suite.service';

@Module({
  controllers: [SuiteController],
  providers: [SuiteService],
})
export class SuiteModule {}
