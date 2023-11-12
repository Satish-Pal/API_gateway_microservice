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
    @InjectRepository(vehicleType)
    private readonly vehicleTypeRepository: Repository<vehicleType>,
    @InjectRepository(vehicleModel)
    private readonly vehicleModelRepository: Repository<vehicleModel>,
  ) {}

  async seedData() {
    try {
      const carType = await this.numberOfWheelsRepository.save({
        numberOfWheels: '4',
      });
      const bikeType = await this.numberOfWheelsRepository.save({
        numberOfWheels: '2',
      });

      await this.vehicleTypeRepository.save([
        { vehicleType: 'Hatchback', numberOfWheels: carType },
        { vehicleType: 'SUV', numberOfWheels: carType },
        { vehicleType: 'Sedan', numberOfWheels: carType },
        { vehicleType: 'Cruiser', numberOfWheels: bikeType },
        { vehicleType: 'Sports', numberOfWheels: bikeType },
      ]);

      await this.vehicleModelRepository.save([
        {
          model: 'RE classic 300',
          type: { vehicleType: 'Cruiser', numberOfWheels: bikeType },
        },
        {
          model: 'Jawa 42',
          type: { vehicleType: 'Cruiser', numberOfWheels: bikeType },
        },
        {
          model: 'triumph Speed 400',
          type: { vehicleType: 'Cruiser', numberOfWheels: bikeType },
        },
        {
          model: 'mt-15',
          type: { vehicleType: 'Sports', numberOfWheels: bikeType },
        },
        {
          model: 'apache rtr-160',
          type: { vehicleType: 'Sports', numberOfWheels: bikeType },
        },
        {
          model: 'duke-200',
          type: { vehicleType: 'Sports', numberOfWheels: bikeType },
        },
        {
          model: 'Maruti Swift',
          type: { vehicleType: 'Hatchback', numberOfWheels: carType },
        },
        {
          model: 'Hyundai i20',
          type: { vehicleType: 'Hatchback', numberOfWheels: carType },
        },
        {
          model: 'Tata Tiago',
          type: { vehicleType: 'Hatchback', numberOfWheels: carType },
        },
        {
          model: 'Ford Focus',
          type: { vehicleType: 'Hatchback', numberOfWheels: carType },
        },
        {
          model: 'Honda Amaze',
          type: { vehicleType: 'Sedan', numberOfWheels: carType },
        },
        {
          model: 'Audi A4',
          type: { vehicleType: 'Sedan', numberOfWheels: carType },
        },
        {
          model: 'Hyundai Accent',
          type: { vehicleType: 'Sedan', numberOfWheels: carType },
        },
        {
          model: 'Volkswagen Virtus',
          type: { vehicleType: 'Sedan', numberOfWheels: carType },
        },
        {
          model: 'Tata Tigor',
          type: { vehicleType: 'Sedan', numberOfWheels: carType },
        },
        {
          model: 'Skoda Slavia',
          type: { vehicleType: 'Sedan', numberOfWheels: carType },
        },
        {
          model: 'Hyundai Creta',
          type: { vehicleType: 'SUV', numberOfWheels: carType },
        },
        {
          model: 'Toyota Fortuner',
          type: { vehicleType: 'SUV', numberOfWheels: carType },
        },
        {
          model: 'Tata Harrier',
          type: { vehicleType: 'SUV', numberOfWheels: carType },
        },
        {
          model: 'Mahindra Bolero',
          type: { vehicleType: 'SUV', numberOfWheels: carType },
        },
      ]);

      console.log('Data seeded successfully');
    } catch (error) {
      console.error(`Error seeding data:`, error.message);
      throw new Error('Failed to seed data. See logs for details.');
    }
  }
}
