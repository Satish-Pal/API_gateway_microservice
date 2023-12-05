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
import { dataSourceOptions } from 'db/data-source';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config/dist';
import { usersModule } from './users/users.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot({isGlobal:true}),
    BookingsModule,
    NumberOfWheelsModule,
    vehicleTypesModule,
    vehicleModelsModule,
    SeedingModule,
    DatabaseModule,
    usersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
