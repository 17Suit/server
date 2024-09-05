import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Priority } from '@prisma/client';

export class Activity {
  @ApiProperty({ description: 'El identificador único de la actividad' })
  id: string;

  @ApiProperty({ description: 'El nombre de la actividad' })
  name: string;

  @ApiProperty({ description: 'Una descripción de la actividad' })
  description: string;

  @ApiProperty({ description: 'La fecha de creación de la actividad' })
  createdAt: Date;

  @ApiPropertyOptional({ description: 'El tiempo de inicio de la actividad' })
  startTime?: Date;

  @ApiPropertyOptional({
    description: 'El tiempo de finalización de la actividad',
  })
  endTime?: Date;

  @ApiProperty({
    description: 'La prioridad de la actividad',
    enum: Priority,
    default: Priority.Medium,
  })
  priority: Priority;

  @ApiPropertyOptional({
    description: 'El ID del viaje relacionado con la actividad',
  })
  tripId?: string;

  @ApiPropertyOptional({
    description: 'El ID del destino relacionado con la actividad',
  })
  destinyId?: string;
}
