import {
  IsDate,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Plan } from 'src/opt/plan/entities/plan.entity';

export class Rol {
  @IsString()
  name: string;
  @IsString()
  description: string;
  permissions: Permissions;
}

class Permissions {
  read: boolean;
  write: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
}
export class User {
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
