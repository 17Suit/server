import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty({ description: 'Name of the group' })
  readonly name: string;

  @ApiProperty({ description: 'Description of the group' })
  readonly description: string;

  @ApiProperty({
    description: 'ID of the user who is the creator of the group',
  })
  readonly creatorId: string;

  @ApiProperty({ description: 'Array of member IDs to be added to the group' })
  readonly memberIds: string[];
}
