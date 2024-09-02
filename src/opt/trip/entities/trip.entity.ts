import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TripPriority, TripStatus, TripType } from '@prisma/client';

export class Trip {
  @ApiProperty({ description: 'El identificador único del viaje' })
  id: string;

  @ApiProperty({ description: 'El título del viaje' })
  title: string;

  @ApiProperty({ description: 'Una descripción del viaje' })
  description: string;

  @ApiProperty({ description: 'La fecha de creación del viaje' })
  createdAt: Date;

  @ApiProperty({ description: 'El ID del usuario que creó el viaje' })
  userId: string;

  @ApiPropertyOptional({
    description: 'El ID del presupuesto asociado al viaje',
  })
  budgetId?: number;

  @ApiPropertyOptional({ description: 'El ID del grupo de viaje asociado' })
  tripGroupId?: string;

  @ApiPropertyOptional({ description: 'La fecha de inicio del viaje' })
  startDate?: Date;

  @ApiPropertyOptional({ description: 'La fecha de finalización del viaje' })
  endDate?: Date;

  @ApiProperty({ description: 'La prioridad del viaje', enum: TripPriority })
  priority: TripPriority;

  @ApiProperty({ description: 'El estado actual del viaje', enum: TripStatus })
  status: TripStatus;

  @ApiProperty({ description: 'El tipo de viaje', enum: TripType })
  tripType: TripType;

  @ApiPropertyOptional({ description: 'El enlace compartible del viaje' })
  shareableLink?: string;

  @ApiPropertyOptional({ description: 'El código QR asociado al viaje' })
  qrCode?: string;

  @ApiPropertyOptional({ description: 'Los destinos asociados al viaje' })
  destinations?: string[];

  @ApiPropertyOptional({ description: 'Las actividades asociadas al viaje' })
  activities?: string[];
}
