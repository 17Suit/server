import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { User } from 'src/suite/user/dto/create-user.dto';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: User, metadata: ArgumentMetadata) {
    const agedate = typeof value.birthday;
    if (agedate !== 'string') {
      throw new HttpException('Age is not a date', HttpStatus.BAD_REQUEST);
    }

    return { ...value, birthday: agedate };
  }
}
