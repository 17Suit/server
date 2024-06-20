import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SuiteModule } from './suite/suite.module';
import { OptModule } from './opt/opt.module';
import { PlanModule } from './opt/plan/plan.module';
import { GroupModule } from './opt/group/group.module';
import { UsersModule } from './suite/user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger configuration to all modules
  const appConfig = new DocumentBuilder()
    .setTitle('17 Suit server')
    .setDescription('17Suit API documentation')
    .setVersion('1.0')
    .build();
  const appDocument = SwaggerModule.createDocument(app, appConfig);
  SwaggerModule.setup('api', app, appDocument);

  // Swagger configuration to suite modules
  const suiteConfig = new DocumentBuilder()
    .setTitle('Suite API')
    .setDescription('Suite API documentation')
    .setVersion('1.0')
    .addTag('Suite')
    .build();
  const suiteDocument = SwaggerModule.createDocument(app, suiteConfig, {
    include: [SuiteModule, UsersModule],
  });
  SwaggerModule.setup('suite/api', app, suiteDocument);

  // Swagger configuration to one plan trip modules
  const optConfig = new DocumentBuilder()
    .setTitle('One plan trip API')
    .setDescription('One plan trip API documentation')
    .setVersion('1.0')
    .addTag('One plan trip')
    .build();
  const optDocument = SwaggerModule.createDocument(app, optConfig, {
    include: [OptModule, PlanModule, GroupModule],
  });
  SwaggerModule.setup('opt/api', app, optDocument);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const globalPrefix = 'server';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
}
bootstrap();
