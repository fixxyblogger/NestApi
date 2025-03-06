import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';


let app: NestFastifyApplication;

export default async function handler(req: Request): Promise<Response> {
  if (!app) {
    app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
    await app.init();
  }

  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
  });

  const url = new URL(req.url);
  if (url.pathname === '/') {
    return new Response(JSON.stringify({ message: 'Hello from NestJS Edge!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }



  return new Response('Not Found', { status: 404 });
}

// Local Development Mode
if (require.main === module) {
  NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
    .then(async (localApp) => {
      await localApp.listen(3000, '0.0.0.0');
      console.log('🚀 Local server running at http://localhost:3000');
    })
    .catch((err) => console.error('Error starting server:', err));
}