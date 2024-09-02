import * as fs from 'fs';

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'server';
  app.setGlobalPrefix(globalPrefix);

  // Configuración de Swagger
  const appConfig = new DocumentBuilder()
    .setTitle('17 Suit server')
    .setDescription('17Suit API documentation')
    .setVersion('1.0')
    .build();
  const appDocument = SwaggerModule.createDocument(app, appConfig, {
    ignoreGlobalPrefix: false,
  });
  fs.writeFileSync('openapi.json', JSON.stringify(appDocument, null, 2));
  SwaggerModule.setup(`${globalPrefix}/`, app, appDocument);

  // Enable CORS con configuración correcta
  const allowedOrigins = [
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
    'https://www.17suit.com',
    'https://oneplantrip.17suit.com',
  ];

  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true, // Si necesitas enviar cookies
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
