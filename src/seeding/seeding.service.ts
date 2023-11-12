import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { vehicleModel } from './vehicleModel.entity';
import { vehicleType } from './vehicleTypes.entity';

@Injectable()
export class SeedingService {
  constructor(
    @InjectRepository(vehicleType)
    private readonly vehicleTypeRepository: Repository<vehicleType>,
    @InjectRepository(vehicleModel)
    private readonly vehicleModelRepository: Repository<vehicleModel>,
  ) {}

  async seedData() {
    const carType = await this.vehicleTypeRepository.save({
      numberOfWheels: '4',
    });
    const bikeType = await this.vehicleTypeRepository.save({
      numberOfWheels: '2',
    });

    await this.vehicleModelRepository.save([
      { model: 'Hatchback 1', type: carType },
      { model: 'Hatchback 2', type: carType },
      { model: 'SUV 1', type: carType },
      { model: 'Sedan 1', type: carType },
      { model: 'Cruiser 1', type: carType },
      { model: 'Sports Bike 1', type: bikeType },
      { model: 'Sports Bike 2', type: bikeType },
      { model: 'Sports Bike 3', type: bikeType },
    ]);

    console.log('Data seeded successfully');
  }
}
