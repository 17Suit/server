import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateGroupDto {
  @ApiPropertyOptional({ description: 'Name of the group' })
  readonly name?: string;

  @ApiPropertyOptional({ description: 'Description of the group' })
  readonly description?: string;

  @ApiPropertyOptional({
    description: 'Array of member IDs to be added to the group',
  })
  readonly memberIds?: string[];
}
