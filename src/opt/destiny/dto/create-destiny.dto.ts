import { IsNumber, IsOptional, IsString } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDestinyDto {
  @ApiProperty({ description: 'The name of the destiny' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'A description of the destiny' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'The Google Places ID of the destiny' })
  @IsOptional()
  @IsString()
  placeId?: string;

  @ApiPropertyOptional({ description: 'The address of the destiny' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'The city of the destiny' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ description: 'The state of the destiny' })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiPropertyOptional({ description: 'The country of the destiny' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ description: 'The country code of the destiny' })
  @IsOptional()
  @IsString()
  countryCode?: string;

  @ApiPropertyOptional({ description: 'The continent of the destiny' })
  @IsOptional()
  @IsString()
  continent?: string;

  @ApiProperty({ description: 'The latitude of the destiny' })
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: 'The longitude of the destiny' })
  @IsNumber()
  longitude: number;
}
