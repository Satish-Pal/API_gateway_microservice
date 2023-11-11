import { Module } from '@nestjs/common';
import { NumberOfWheelsController } from './numberOfWheels.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [NumberOfWheelsController],
  providers: [AppService],
})

export class NumberOfWheelsModule {}
