import { ApiProperty } from '@nestjs/swagger';

export class Currency {
  @ApiProperty({ description: 'El identificador único de la moneda' })
  id: number;

  @ApiProperty({ description: 'El nombre de la moneda' })
  name: string;

  @ApiProperty({ description: 'El símbolo de la moneda' })
  symbol: string;
}
