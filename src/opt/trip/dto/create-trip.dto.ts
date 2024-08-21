import { IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TripPriority, TripStatus, TripType } from '@prisma/client';

export class CreateTripDto {
  @ApiProperty({ description: 'The title of the trip' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'A description of the trip' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'The ID of the user creating the trip' })
  @IsString()
  userId: string;

  @ApiPropertyOptional({ description: 'The ID of the associated budget' })
  @IsOptional()
  @IsInt()
  budgetId?: number;

  @ApiPropertyOptional({ description: 'The ID of the associated trip group' })
  @IsOptional()
  @IsInt()
  tripGroupId?: string;

  @ApiPropertyOptional({ description: 'The start date of the trip' })
  @IsOptional()
  @IsDate()
  startDate?: Date;

  @ApiPropertyOptional({ description: 'The end date of the trip' })
  @IsOptional()
  @IsDate()
  endDate?: Date;

  @ApiProperty({
    description: 'The priority of the trip',
    enum: TripPriority,
  })
  @IsEnum(TripPriority)
  priority: TripPriority;

  @ApiPropertyOptional({
    description: 'The status of the trip',
    enum: TripStatus,
    default: TripStatus.PLANNING,
  })
  @IsOptional()
  @IsEnum(TripStatus)
  status?: TripStatus = TripStatus.PLANNING;

  @ApiPropertyOptional({
    description: 'The type of the trip',
    enum: TripType,
    default: TripType.SOLO,
  })
  @IsOptional()
  @IsEnum(TripType)
  tripType?: TripType = TripType.SOLO;
}
