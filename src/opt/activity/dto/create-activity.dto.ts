import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Priority } from '@prisma/client';

export class CreateActivityDto {
  @ApiProperty({ description: 'El nombre de la actividad' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Una descripción de la actividad' })
  @IsString()
  description: string;

  @ApiPropertyOptional({ description: 'El tiempo de inicio de la actividad' })
  @IsOptional()
  @IsDateString()
  startTime?: Date;

  @ApiPropertyOptional({
    description: 'El tiempo de finalización de la actividad',
  })
  @IsOptional()
  @IsDateString()
  endTime?: Date;

  @ApiProperty({
    description: 'La prioridad de la actividad',
    enum: Priority,
    default: Priority.Medium,
  })
  @IsEnum(Priority)
  priority: Priority;

  @ApiPropertyOptional({
    description: 'El ID del viaje relacionado con la actividad',
  })
  @IsOptional()
  @IsString()
  tripId?: string;

  @ApiPropertyOptional({
    description: 'El ID del destino relacionado con la actividad',
  })
  @IsOptional()
  @IsString()
  destinationId?: string;
}
