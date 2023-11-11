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

  getVehicleModels(vehicleType: string): string[] {
    if (vehicleType.toLowerCase() === 'hatchback') {
      return ['Maruti Swift, Hyundai i20, Tata Tiago, Ford Focus'];
    } else if (vehicleType.toLowerCase() === 'hatchback1') {
      return ['Hatchback', 'Sedan', 'SUV'];
    } else if (vehicleType.toLowerCase() === 'sedan') {
      return [
        'Honda Amaze',
        'Audi A4',
        'Hyundai Accent',
        'Volkswagen Virtus',
        'Tata Tigor',
        'Skoda Slavia',
      ];
    } else if (vehicleType.toLowerCase() === 'suv') {
      return [
        'Hyundai Creta',
        'Toyota Fortuner',
        'Tata Harrier',
        'Mahindra Bolero',
      ];
    } else if (vehicleType.toLowerCase() === 'cruiser') {
      return ['RE classic 300', 'Jawa 42', 'triumph Speed 400'];
    } else if (vehicleType.toLowerCase() === 'sports') {
      return ['mt-15', 'apache rtr-160', 'duke-200'];
    } else if (vehicleType.toLowerCase() === 'hatchback2') {
      return ['Hatchback', 'Sedan', 'SUV'];
    } else if (vehicleType.toLowerCase() === 'hatchback3') {
      return ['Hatchback', 'Sedan', 'SUV'];
    } else {
      return [];
    }
  }
}
