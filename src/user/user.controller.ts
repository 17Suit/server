import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUser } from './dto/update-user.dto';
import { User } from './dto/create-user.dto';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<User[]> {
    return await this.userService.findOne(id);
  }

  @Post()
  async createUser(@Body() user: User) {
    return await this.userService.create(user);
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() user: UpdateUser) {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
