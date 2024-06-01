import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guard/auth/auth.guard';

@Controller('/auth')
export class AuthController {
  @Get()
  @UseGuards(AuthGuard)
  getHello(): string {
    return 'Hello World!';
  }
}
