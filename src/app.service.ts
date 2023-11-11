import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNumberOfWheels(): number[] {
    return [2, 4];
  }

  getVehicleTypes(numberOfWheels: number): string[] {
    if (numberOfWheels === 2) {
      return ['Cruiser', 'Sports'];
    } else if (numberOfWheels === 4) {
      return ['Hatchback', 'Sedan', 'SUV'];
    } else {
      return [];
    }
  }
}
