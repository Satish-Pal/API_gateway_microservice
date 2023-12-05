import { DataSource, DataSourceOptions } from 'typeorm';

import { numberOfWheels } from '../src/seeding/numberOfWheels.entity';
import { vehicleModel } from '../src/seeding/vehicleModel.entity';
import { vehicleType } from '../src/seeding/vehicleTypes.entity';
import { Booking } from '../src/bookings/entities/booking.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'vehicle_rent',
  entities: [vehicleType, vehicleModel, numberOfWheels, Booking],
  migrations: ['src/migrations/**'],
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
