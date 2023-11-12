import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNumberOfWheels(): number[] {
    try {
      const wheels = [2, 4];
      return wheels;
    } catch (error) {
      console.error('Error in getNumberOfWheels Service', error.message);
      throw new Error('Failed to get number of wheels');
    }
  }

  getVehicleTypes(numberOfWheels: number): string[] {
    try {
      if (numberOfWheels === 2) {
        return ['Cruiser', 'Sports'];
      } else if (numberOfWheels === 4) {
        return ['Hatchback', 'Sedan', 'SUV'];
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error in getVehicleTypes Service', error.message);
      throw new Error('Failed to get vehicle types');
    }
  }

  getVehicleModels(vehicleType: string): string[] {
    try {
      switch (vehicleType) {
        case 'Cruiser':
          return ['RE classic 300', 'Jawa 42', 'triumph Speed 400'];
        case 'Sports':
          return ['mt-15', 'apache rtr-160', 'duke-200'];
        case 'hatchback':
          return ['Maruti Swift, Hyundai i20, Tata Tiago, Ford Focus'];
        case 'sedan':
          return [
            'Honda Amaze',
            'Audi A4',
            'Hyundai Accent',
            'Volkswagen Virtus',
            'Tata Tigor',
            'Skoda Slavia',
          ];
        case 'suv':
          return [
            'Hyundai Creta',
            'Toyota Fortuner',
            'Tata Harrier',
            'Mahindra Bolero',
          ];
        default:
          return [];
      }
    } catch (error) {
      console.error('Error in getVehiclModels Service', error.message);
      throw new Error('Failed to get vehicle Models');
    }
  }
}
