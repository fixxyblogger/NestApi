import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';


async function bootstrap() {
  // Create a new NestJS application using the Fastify adapter
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  // Enable CORS
  app.enableCors();

  // Start the application on port 3000
  await app.listen(3000);

  console.log('🚀 Local server running at http://localhost:3000');

}

bootstrap();