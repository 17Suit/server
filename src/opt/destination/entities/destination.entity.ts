import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Destination {
  @ApiProperty({ description: 'El identificador único del destino' })
  id: string;

  @ApiProperty({ description: 'El nombre del destino' })
  name: string;

  @ApiPropertyOptional({ description: 'Una descripción del destino' })
  description?: string;

  @ApiPropertyOptional({ description: 'La dirección del destino' })
  address?: string;

  @ApiPropertyOptional({ description: 'La ciudad del destino' })
  city?: string;

  @ApiPropertyOptional({ description: 'El estado del destino' })
  state?: string;

  @ApiPropertyOptional({ description: 'El país del destino' })
  country?: string;

  @ApiPropertyOptional({ description: 'El código del país del destino' })
  countryCode?: string;

  @ApiPropertyOptional({ description: 'El continente del destino' })
  continent?: string;

  @ApiProperty({ description: 'La latitud del destino' })
  latitude: number;

  @ApiProperty({ description: 'La longitud del destino' })
  longitude: number;

  @ApiProperty({ description: 'La fecha de creación del registro del destino' })
  createdAt: Date;
}
