import { PartialType } from '@nestjs/swagger';

import { CreateDestinyDto } from './create-destiny.dto';

export class UpdateDestinyDto extends PartialType(CreateDestinyDto) {}
