import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

class BudgetDto {
  @ApiProperty({ description: 'Budget amount' })
  amount: number;

  @ApiProperty({ description: 'Minimum budget' })
  min: number;

  @ApiProperty({ description: 'Maximum budget' })
  max: number;

  @ApiProperty({ description: 'Currency ID' })
  currencyId: string;
}

export class CreatePlanDto {
  @ApiProperty({ description: 'Title of the plan' })
  readonly title: string;

  @ApiProperty({ description: 'Description of the plan' })
  readonly description: string;

  @ApiProperty({ description: 'Status ID of the plan' })
  readonly statusId: string;

  @ApiProperty({ description: 'Owner ID of the plan' })
  readonly ownerId: string;

  @ApiProperty({ description: 'Start date of the plan', required: false })
  @IsDate()
  @Type(() => Date)
  readonly startDate?: Date;

  @ApiProperty({ description: 'End date of the plan', required: false })
  @IsDate()
  @Type(() => Date)
  readonly endDate?: Date;

  @ApiProperty({
    description: 'Budget of the plan',
    type: BudgetDto,
    required: false,
  })
  readonly budget?: BudgetDto;

  @ApiProperty({ description: 'Destination ID of the plan', required: false })
  readonly destinationId?: string;

  @ApiProperty({
    description: 'Array of member IDs to be added to the plan',
    type: [String],
    required: false,
  })
  readonly memberIds?: string[];

  @ApiProperty({
    description: 'Array of activity IDs to be added to the plan',
    type: [String],
    required: false,
  })
  readonly activityIds?: string[];
}
