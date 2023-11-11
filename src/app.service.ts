import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNumberOfWheels(): number[] {
    return [2, 4];
  }
}
