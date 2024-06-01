import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Holi mi vida hermosa ya logre hacer que esto funcione, como te fue hoy? por cierto te quiero muchoteee!!!. esto es un servidor hecho con Nest.js desplegado en vercel';
  }
}
