import { IsNumber, IsOptional, IsString } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDestinationDto {
  @ApiProperty({ description: 'The name of the destination' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'A description of the destination' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'The address of the destination' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'The city of the destination' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ description: 'The state of the destination' })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiPropertyOptional({ description: 'The country of the destination' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ description: 'The country code of the destination' })
  @IsOptional()
  @IsString()
  countryCode?: string;

  @ApiPropertyOptional({ description: 'The continent of the destination' })
  @IsOptional()
  @IsString()
  continent?: string;

  @ApiPropertyOptional({ description: 'The postal code of the destination' })
  @IsOptional()
  @IsString()
  postalCode?: string;

  @ApiProperty({ description: 'The latitude of the destination' })
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: 'The longitude of the destination' })
  @IsNumber()
  longitude: number;
}
