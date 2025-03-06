import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service'

// Describe the test suite for AppController
describe('AppController', () => {
  let appController: AppController;

  // Before each test, create a testing module and compile it
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Declare the controller to be tested
      providers: [AppService], // Declare the service provider
    }).compile();

    // Get an instance of AppController from the testing module
    appController = app.get<AppController>(AppController);
  });

  // Describe the test case for the root route
  describe('root', () => {
    // Test if the getHello method returns the expected string
    it('should return "Hello from NestJS on Vercel Edge!"', () => {
      expect(appController.getHello()).toBe('Hello from NestJS on Vercel Edge!');
    });
  });
});