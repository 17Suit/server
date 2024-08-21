import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';
import { TripPriority, TripStatus, TripType } from '@prisma/client';

export class UpdateTripDto {
  @ApiPropertyOptional({ description: 'The updated title of the trip' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'The updated description of the trip' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'The updated user ID associated with the trip',
  })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiPropertyOptional({
    description: 'The updated budget ID associated with the trip',
  })
  @IsOptional()
  @IsInt()
  budgetId?: number;

  @ApiPropertyOptional({
    description: 'The updated trip group ID associated with the trip',
  })
  @IsOptional()
  @IsInt()
  tripGroupId?: number;

  @ApiPropertyOptional({ description: 'The updated start date of the trip' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  startDate?: Date;

  @ApiPropertyOptional({ description: 'The updated end date of the trip' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  endDate?: Date;

  @ApiPropertyOptional({
    description: 'The updated priority of the trip',
    enum: TripPriority,
  })
  @IsOptional()
  @IsEnum(TripPriority)
  priority?: TripPriority;

  @ApiPropertyOptional({
    description: 'The updated status of the trip',
    enum: TripStatus,
  })
  @IsOptional()
  @IsEnum(TripStatus)
  status?: TripStatus;

  @ApiPropertyOptional({
    description: 'The updated type of the trip',
    enum: TripType,
  })
  @IsOptional()
  @IsEnum(TripType)
  tripType?: TripType;
}
