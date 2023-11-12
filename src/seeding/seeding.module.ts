import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedingService } from './seeding.service';
import { vehicleType } from './vehicleTypes.entity';
import { vehicleModel } from './vehicleModel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([vehicleType, vehicleModel])],
  providers: [SeedingService],
  exports: [SeedingService],
})
export class SeedingModule {}
