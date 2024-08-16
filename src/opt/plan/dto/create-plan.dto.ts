import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

class CreateDestinationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  cityId: number;

  @ApiProperty()
  @IsNotEmpty()
  latitude: number;

  @ApiProperty()
  @IsNotEmpty()
  longitude: number;
}

class CreateBudgetDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  currencyId: number;

  @ApiProperty()
  @IsNotEmpty()
  amount: number;

  @ApiProperty()
  @IsOptional()
  min?: number;

  @ApiProperty()
  @IsOptional()
  max?: number;
}
export class CreatePlanDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @Type(() => Date) // Transforma la cadena en instancia de Date
  @IsDate()
  startDate?: Date;

  @ApiProperty()
  @IsOptional()
  @Type(() => Date) // Transforma la cadena en instancia de Date
  @IsDate()
  endDate?: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  statusId: number;

  @ApiProperty({ type: () => CreateBudgetDto })
  @ValidateNested()
  @Type(() => CreateBudgetDto)
  budget: CreateBudgetDto;

  @ApiProperty({ type: () => [CreateDestinationDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDestinationDto)
  destinations: CreateDestinationDto[];
}
