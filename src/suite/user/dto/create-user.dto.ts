import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsArray()
  // @IsUUID('4', { each: true })
  planIds?: number[];

  @IsOptional()
  @IsArray()
  // @IsUUID('4', { each: true })
  planGroupIds?: number[];

  @IsOptional()
  // @IsUUID('4')
  roleId?: number;
}
