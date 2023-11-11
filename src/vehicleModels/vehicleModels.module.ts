import { Module } from '@nestjs/common';
import { vehicleModelsController } from './vehicleModels.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [vehicleModelsController],
  providers: [AppService],
})
export class vehicleModelsModule {}
