import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('api/numberOfWheels')
export class NumberOfWheelsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNumberOfWheels(): number[] {
    return this.appService.getNumberOfWheels();
  }
}
