import { Inject, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { numberOfWheels } from '../seeding/numberOfWheels.entity';
import { vehicleType } from '../seeding/vehicleTypes.entity';
import { vehicleModel } from '../seeding/vehicleModel.entity';
import { users } from '../seeding/users.entity';
import { Booking } from '../bookings/entities/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'vehicle_rent',
        entities: [numberOfWheels, users, vehicleType, vehicleModel, Booking],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
