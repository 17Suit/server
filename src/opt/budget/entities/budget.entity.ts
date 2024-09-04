import { ApiProperty } from '@nestjs/swagger';

export class Budget {
  @ApiProperty({ description: 'El identificador único del presupuesto' })
  id: number;

  @ApiProperty({ description: 'El monto del presupuesto' })
  amount: number;

  @ApiProperty({ description: 'El valor mínimo del presupuesto' })
  min: number;

  @ApiProperty({ description: 'El valor máximo del presupuesto' })
  max: number;

  @ApiProperty({ description: 'El ID de la moneda asociada al presupuesto' })
  currencyId: number;

  @ApiProperty({ description: 'El ID del usuario propietario del presupuesto' })
  userId: string;
}
