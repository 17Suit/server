import { CreateUserDto } from 'src/suite/user/dto/create-user.dto';

import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: CreateUserDto) {
    if (typeof value !== typeof CreateUserDto) {
      throw new HttpException('Age is not a date', HttpStatus.BAD_REQUEST);
    }

    return { ...value };
  }
}
