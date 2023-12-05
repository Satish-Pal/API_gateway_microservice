import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { vehicleModel } from './vehicleModel.entity';
import { vehicleType } from './vehicleTypes.entity';
import { numberOfWheels } from './numberOfWheels.entity';

@Injectable()
export class SeedingService {
  constructor(
    @InjectRepository(numberOfWheels)
    private readonly numberOfWheelsRepository: Repository<numberOfWheels>,
  ) {}

  async seedData() {
    try {
      const carType = await this.numberOfWheelsRepository.save({
        numberOfWheels: '4',
      });
      const bikeType = await this.numberOfWheelsRepository.save({
        numberOfWheels: '2',
      });

      console.log('Data seeded successfully');
    } catch (error) {
      console.error(`Error seeding data:`, error.message);
      throw new Error('Failed to seed data. See logs for details.');
    }
  }
}
