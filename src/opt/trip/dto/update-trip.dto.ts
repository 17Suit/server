import { IsOptional } from 'class-validator';
import { Activity } from 'src/opt/activity/entities/activity.entity';
import { Budget } from 'src/opt/budget/entities/budget.entity';
import { Destiny } from 'src/opt/destiny/entities/destiny.entity';

import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';

import { CreateTripDto } from './create-trip.dto';

export class UpdateTripDto extends PartialType(CreateTripDto) {
  @ApiPropertyOptional({
    description: 'El ID del presupuesto asociado al viaje',
  })
  @IsOptional()
  budget?: Budget;
  @ApiPropertyOptional({ description: 'Los destinos asociados al viaje' })
  @IsOptional()
  destinies?: Destiny[];
  @ApiPropertyOptional({ description: 'Las actividades asociadas al viaje' })
  @IsOptional()
  activities?: Activity[];

  @ApiPropertyOptional({ description: 'El ID del viaje' })
  @IsOptional()
  id: string;

  @IsOptional()
  createdAt: Date;
}
