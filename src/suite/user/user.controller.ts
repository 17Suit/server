import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('/?id')
  async findOne(@Query('id') id: string): Promise<CreateUserDto> {
    return await this.userService.findOne(id);
  }

  @Post()
  async createUser(
    @Body()
    createUserDto: {
      email: string;
      name: string;
      password: string;
    },
  ) {
    return await this.userService.create(createUserDto);
  }

  @Put('/?id')
  async updateUser(@Query('id') id: string, @Body() user: UpdateUserDto) {
    return await this.userService.update(id, user);
  }

  @Delete('?id')
  async delete(@Query('id') id: string) {
    return await this.userService.delete(id);
  }
}
