import { Module } from '@nestjs/common';
import { vehicleTypesController } from './vehicleTypes.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [vehicleTypesController],
  providers: [AppService],
})
export class vehicleTypesModule {}
