import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class EventLoopMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = process.hrtime();

    const checkEventLoop = () => {
      const diff = process.hrtime(start);
      const time = diff[0] * 1e3 + diff[1] / 1e6;
      if (time > 100) {
        res.status(HttpStatus.SERVICE_UNAVAILABLE).send('Event loop blocked');
      }
    };

    setImmediate(checkEventLoop);
    next();
  }
}
