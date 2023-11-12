import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('api/numberOfWheels')
export class NumberOfWheelsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getNumberOfWheels(): Promise<number[]> {
    try {
      const numberOfWheels = await this.appService.getNumberOfWheels();
      return numberOfWheels;
    } catch (error) {
      console.error('Error fetching number of wheels:', error.message);
      throw new Error('failed to fetch number of Wheels');
    }
  }
}
