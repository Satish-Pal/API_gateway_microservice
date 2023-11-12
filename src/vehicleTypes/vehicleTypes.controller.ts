import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api/vehicleTypes')
export class vehicleTypesController {
  constructor(private readonly appService: AppService) {}

  @Get(':numberOfWheels')
  getVehicleTypes(@Param('numberOfWheels') numberOfWheels: number): string[] {
    try {
      const vehicleType = this.appService.getVehicleTypes(
        Number(numberOfWheels),
      );

      if (!vehicleType) {
        throw new NotFoundException('Model not found');
      }

      return vehicleType;
    } catch (error) {
      console.error('Error fetching vehicle Type:', error.message);
      throw new Error('failed to fetch vehicle Type');
    }
  }
}
