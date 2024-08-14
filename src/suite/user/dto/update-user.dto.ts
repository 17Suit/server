import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  image?: string;

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
