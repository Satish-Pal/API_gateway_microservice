import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsModule } from './bookings/bookings.module';
import { Booking } from './bookings/entities/booking.entity';
import { NumberOfWheelsModule } from './numberOfWheels/numberOfWheels.module';
import { vehicleTypesModule } from './vehicleTypes/vehicleTypes.module';
import { vehicleModelsModule } from './vehicleModels/vehicleModels.module';
import { SeedingModule } from './seeding/seeding.module';
import { vehicleType } from './seeding/vehicleTypes.entity';
import { vehicleModel } from './seeding/vehicleModel.entity';
import { numberOfWheels } from './seeding/numberOfWheels.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rent_a_vehicle',
      entities: [Booking, numberOfWheels, vehicleType, vehicleModel],
      synchronize: true,
    }),
    BookingsModule,
    NumberOfWheelsModule,
    vehicleTypesModule,
    vehicleModelsModule,
    SeedingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
