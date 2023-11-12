import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api/vehicleTypes')
export class vehicleTypesController {
  constructor(private readonly appService: AppService) {}

  @Get(':numberOfWheels')
  getVehicleTypes(
    @Param('numberOfWheels') numberOfWheels: string,
  ): Promise<string[]> {
    try {
      const vehicleType = this.appService.getVehicleTypes(
        Number(numberOfWheels),
      );
      return vehicleType;
    } catch (error) {
      console.error('Error fetching vehicle Type:', error.message);
      throw new Error('failed to fetch vehicle Type');
    }
  }
}
