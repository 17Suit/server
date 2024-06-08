import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

class BudgetDto {
  @ApiPropertyOptional({ description: 'Budget amount' })
  amount?: number;

  @ApiPropertyOptional({ description: 'Minimum budget' })
  min?: number;

  @ApiPropertyOptional({ description: 'Maximum budget' })
  max?: number;

  @ApiPropertyOptional({ description: 'Currency ID' })
  currencyId?: string;
}

export class UpdatePlanDto {
  @ApiPropertyOptional({ description: 'Title of the plan' })
  readonly title?: string;

  @ApiPropertyOptional({ description: 'Description of the plan' })
  readonly description?: string;

  @ApiPropertyOptional({ description: 'Status ID of the plan' })
  readonly statusId?: string;

  @ApiPropertyOptional({ description: 'Owner ID of the plan' })
  readonly ownerId?: string;

  @ApiPropertyOptional({ description: 'Start date of the plan' })
  @IsDate()
  @Type(() => Date)
  readonly startDate?: Date;

  @ApiPropertyOptional({ description: 'End date of the plan' })
  @IsDate()
  @Type(() => Date)
  readonly endDate?: Date;

  @ApiPropertyOptional({ description: 'Budget of the plan', type: BudgetDto })
  readonly budget?: BudgetDto;

  @ApiPropertyOptional({ description: 'Destination ID of the plan' })
  readonly destinationId?: string;

  @ApiPropertyOptional({
    description: 'Array of member IDs to be added to the plan',
    type: [String],
  })
  readonly memberIds?: string[];

  @ApiPropertyOptional({
    description: 'Array of activity IDs to be added to the plan',
    type: [String],
  })
  readonly activityIds?: string[];
}
