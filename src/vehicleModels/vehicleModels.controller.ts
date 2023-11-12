import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api/vehicleModels')
export class vehicleModelsController {
  constructor(private readonly appService: AppService) {}

  @Get(':vehicleType')
  async getVehicleModels(
    @Param('vehicleType') vehicleType: string,
  ): Promise<string[]> {
    try {
      const vehicleModel = await this.appService.getVehicleModels(vehicleType);
      return vehicleModel;
    } catch (error) {
      console.log(`Error fetching vehicle model:`, error.message);
      throw new Error('failed to fetch vehicle model');
    }
  }
}
