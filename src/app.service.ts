import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello moto!!!!';
  }

  getPing(): string {
    return 'Pong!';
  }
}
