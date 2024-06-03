import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "17 Suit server is running - you can see the Swagger documentation in /api"', () => {
      expect(appController.getHello()).toBe(
        '17 Suit server is running - you can see the Swagger documentation in /api',
      );
    });
  });
});
