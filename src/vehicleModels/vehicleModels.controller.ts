import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api/vehicleModels')
export class vehicleModelsController {
  constructor(private readonly appService: AppService) {}

  @Get(':vehicleType')
  getVehicleModels(@Param('vehicleType') vehicleType: string): string[] {
    return this.appService.getVehicleModels(vehicleType);
  }
}
