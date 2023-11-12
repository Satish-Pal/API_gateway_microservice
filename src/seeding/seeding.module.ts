import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedingService } from './seeding.service';
import { vehicleType } from './vehicleTypes.entity';
import { vehicleModel } from './vehicleModel.entity';
import { numberOfWheels } from './numberOfWheels.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([numberOfWheels, vehicleType, vehicleModel]),
  ],
  providers: [SeedingService],
  exports: [SeedingService],
})
export class SeedingModule {}
