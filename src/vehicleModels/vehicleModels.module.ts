import { Module } from '@nestjs/common';
import { vehicleModelsController } from './vehicleModels.controller';
import { AppService } from 'src/app.service';
import { numberOfWheels } from 'src/seeding/numberOfWheels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NumberOfWheelsModule } from 'src/numberOfWheels/numberOfWheels.module';

@Module({
  imports: [TypeOrmModule.forFeature([numberOfWheels]), NumberOfWheelsModule],
  controllers: [vehicleModelsController],
  providers: [AppService],
})
export class vehicleModelsModule {}
