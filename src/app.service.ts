import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from NestJS on Vercel Edge!';
  }
  getHealthStatus(): { status: string } {
    return { status: 'ok' };
  }
}
