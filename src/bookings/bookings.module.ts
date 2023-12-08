import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Booking } from './entities/booking.entity';
import { users } from 'src/seeding/users.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, users]),
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://dgcxgife:BB4UVIDUfWiBKlq_SBJpGWTUe_I-V4zf@puffin.rmq2.cloudamqp.com/dgcxgife',
          ],
          queue: 'NOTIFICATION_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'NOTIFICATION_SERVICE_KAFKA',
        transport: Transport.KAFKA,
        options:{
          client:{
            clientId: 'booking',
            brokers:['localhost:9092']
          },
          consumer:{
            groupId:'booking_notification'
          }
        }
      },
      {
        name: 'NOTIFICATION_SERVICE_NATS',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4444'],
        }
      }
    ]),
  ],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}
