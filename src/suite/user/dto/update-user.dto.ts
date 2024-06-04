import {
  IsDate,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Rol } from './create-user.dto';
import { Type } from 'class-transformer';
import { Plan } from 'src/opt/plan/entities/plan.entity';

export class UpdateUser {
  @IsEmpty()
  id: string;
  @IsString()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsDate()
  @Type(() => Date)
  birthday?: Date;
  @IsNotEmpty()
  rol: Rol;
  plans?: Plan[];
}
export class UserProfile {
  @IsNumber()
  id: number;
  @IsNumber()
  userId: number;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  bio?: string;
  @IsString()
  avatarUrl?: string;
}
