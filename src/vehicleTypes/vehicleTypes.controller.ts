import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api/vehicleTypes')
export class vehicleTypesController {
  constructor(private readonly appService: AppService) {}

  @Get(':numberOfWheels')
  getVehicleTypes(@Param('numberOfWheels') numberOfWheels: string): string[] {
    return this.appService.getVehicleTypes(Number(numberOfWheels));
  }
}
