import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '17 Suit server is running - you can see the Swagger documentation in /api';
  }
}
