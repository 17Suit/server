import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Injectable()
@ApiBearerAuth()
export class AuthMiddleware implements NestMiddleware {
  @ApiOperation({ summary: 'Middleware to verify JWT token' })
  @ApiResponse({ status: 401, description: 'Not authorized' })
  @ApiResponse({ status: 403, description: 'Invalid token' })
  @ApiResponse({ status: 200, description: 'Authorized' })
  use(req: Request, res: Response, next: () => void) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
    }

    const token = authHeader.split(' ')[1];
    try {
      const decoded = verify(token, process.env.JWT_SECRET);
      req['user'] = decoded;
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new HttpException('Token expired', HttpStatus.UNAUTHORIZED);
      }
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }
  }
}
