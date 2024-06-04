import { Module } from '@nestjs/common';
import { OptController } from './opt.controller';
import { OptService } from './opt.service';

@Module({
  controllers: [OptController],
  providers: [OptService]
})
export class OptModule {}
