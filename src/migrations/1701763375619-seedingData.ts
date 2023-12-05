import { MigrationInterface, QueryRunner } from 'typeorm';
import { numberOfWheels } from '../seeding/numberOfWheels.entity';
import { vehicleType } from '../seeding/vehicleTypes.entity';
import { vehicleModel } from '../seeding/vehicleModel.entity';

const numberOfWheelsSeedData = [
  { id: 1, numberOfWheels: '2' },
  { id: 2, numberOfWheels: '4' },
];

const vehicleTypeSeedData = [
  { vehicleType: 'Hatchback', numberOfWheels: { id: 1 } },
  { vehicleType: 'SUV', numberOfWheels: { id: 1 } },
  { vehicleType: 'Sedan', numberOfWheels: { id: 1 } },
  { vehicleType: 'Cruiser', numberOfWheels: { id: 2 } },
  { vehicleType: 'Sports', numberOfWheels: { id: 2 } },
];

const vehicleModelSeedData = [
  { model: 'RE classic 300', type: { id: 4 } },
  { model: 'Jawa 42', type: { id: 4 } },
  { model: 'triumph Speed 400', type: { id: 4 } },
  { model: 'mt-15', type: { id: 5 } },
  { model: 'apache rtr-160', type: { id: 5 } },
  { model: 'duke-200', type: { id: 5 } },
  { model: 'Maruti Swift', type: { id: 1 } },
  { model: 'Hyundai i20', type: { id: 1 } },
  { model: 'Tata Tiago', type: { id: 1 } },
  { model: 'Ford Focus', type: { id: 1 } },
  { model: 'Honda Amaze', type: { id: 3 } },
  { model: 'Toyota Innova', type: { id: 3 } },
  { model: 'Audi A4', type: { id: 3 } },
  { model: 'Hyundai Accent', type: { id: 3 } },
  { model: 'Volkswagen Virtus', type: { id: 3 } },
  { model: 'Tata Tigor', type: { id: 3 } },
  { model: 'Skoda Slavia', type: { id: 3 } },
  { model: 'Hyundai Creta', type: { id: 2 } },
  { model: 'Toyota Fortuner', type: { id: 2 } },
  { model: 'Tata Harrier', type: { id: 2 } },
  { model: 'Mahindra Bolero', type: { id: 2 } },
];

export class SeedingData1701763375619 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await this.seed(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await this.revert(queryRunner);
  }

  private async seed(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(numberOfWheels, numberOfWheelsSeedData);
    await queryRunner.manager.save(vehicleType, vehicleTypeSeedData);
    await queryRunner.manager.save(vehicleModel, vehicleModelSeedData);
  }

  private async revert(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(vehicleModel, {});
    await queryRunner.manager.delete(vehicleType, {});
    await queryRunner.manager.delete(numberOfWheels, {});
  }
}
