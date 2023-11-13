import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api/vehicleModels')
export class vehicleModelsController {
  constructor(private readonly appService: AppService) {}

  // Get the vehicle model based on vehicle type

  @Get(':vehicleType')
  getVehicleModels(@Param('vehicleType') vehicleType: string): string[] {
    try {
      const vehicleModel = this.appService.getVehicleModels(vehicleType);
      return vehicleModel;
    } catch (error) {
      console.log(`Error fetching vehicle model:`, error.message);
      throw new Error('failed to fetch vehicle model');
    }
  }
}
