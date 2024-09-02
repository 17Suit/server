import { IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateBudgetDto {
  @ApiProperty({ description: 'El monto del presupuesto' })
  @IsNumber()
  amount: number;

  @ApiProperty({ description: 'El valor mínimo del presupuesto' })
  @IsNumber()
  min: number;

  @ApiProperty({ description: 'El valor máximo del presupuesto' })
  @IsNumber()
  max: number;

  @ApiProperty({ description: 'El ID de la moneda asociada al presupuesto' })
  @IsNumber()
  currencyId: number;

  @ApiProperty({ description: 'El ID del usuario propietario del presupuesto' })
  @IsString()
  userId: string;
}
