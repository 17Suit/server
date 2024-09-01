import { Module } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { DestinationController } from './destination.controller';

@Module({
  controllers: [DestinationController],
  providers: [DestinationService],
})
export class DestinationModule {}
