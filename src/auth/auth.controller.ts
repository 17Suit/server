import { Request, Response } from 'express';

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthGuard } from './guard/auth.guard';

@ApiTags('Authentication')
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get a greeting message if authorized' })
  @ApiResponse({ status: 200, description: 'Authorized' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getHello(@Req() request: Request) {
    const userId: string = request['user'].id;
    return await this.authService.validateUser(userId);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    try {
      const result = await this.authService.register(registerDto);
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      return res.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login a user' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'User successfully logged in' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const result = await this.authService.login(loginDto);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      return res.status(error.status || HttpStatus.UNAUTHORIZED).json({
        message: error.message,
      });
    }
  }
}
