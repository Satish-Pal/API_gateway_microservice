import {
  Injectable,
  NotFoundException,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import {
  Connection,
  EntityManager,
  QueryRunner,
  Repository,
  Transaction,
  getManager,
} from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { validate } from 'class-validator';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { users } from 'src/seeding/users.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    @InjectRepository(users)
    private readonly usersRepository: Repository<users>,
    private readonly connection: Connection,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const queryRunner = this.connection.createQueryRunner();

    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();

      // checking booking overlap within transaction
      const isOverlapping = await this.checkBookingOverlap(
        createBookingDto.vehicleModel,
        createBookingDto.startDate,
        createBookingDto.endDate,
        queryRunner,
      );

      // If overlap found, throwing an exception
      if (isOverlapping) {
        throw new HttpException(
          'Booking Overlaps with an existing vehicle model',
          HttpStatus.CONFLICT,
        );
      }

      // checking if user is already existing in the db
      let user = await this.usersRepository.findOne({
        where: {
          firstName: createBookingDto.firstName.toLowerCase(),
          lastName: createBookingDto.lastName.toLowerCase(),
        },
      });

      if (!user) {
        user = this.usersRepository.create({
          firstName: createBookingDto.firstName.toLowerCase(),
          lastName: createBookingDto.lastName.toLowerCase(),
        });
        await this.usersRepository.save(user);
      }

      // use the provided manager for the transaction
      const newBooking = await this.bookingRepository.create({
        ...createBookingDto,
        user,
      });
      await this.bookingRepository.save(newBooking);

      // commit transaction
      await queryRunner.commitTransaction();

      return newBooking;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error(
        'Error in BookingService.createWithTransaction',
        error.message,
      );
      throw new Error('Failed to create booking');
    } finally {
      await queryRunner.release();
    }
  }

  // checking transaction
  async checkTransactionStatus(bookingId: number): Promise<boolean> {
    try {
      const booking = await this.bookingRepository.findOne({
        where: { id: bookingId },
      } as any);

      if (!booking) {
        throw new NotFoundException(`Booking with ID ${bookingId} not found`);
      }
      console.log(`Transaction status for Booking ID ${bookingId}: Success`);
      return true;
    } catch (error) {
      console.error(`Error checking transaction status`, error.message);
    }
  }

  // checking existing data based on vehicle model
  async checkBookingOverlap(
    vehicleModel: string,
    startDate: Date,
    endDate: Date,
    queryRunner: QueryRunner,
  ): Promise<boolean> {
    const existingBooking = await queryRunner.manager
      .createQueryBuilder(Booking, 'booking')
      .where('booking.vehicleModel = :vehicleModel', { vehicleModel })
      .andWhere(
        '(booking.startDate <= :endDate AND booking.endDate >= :startDate)',
        { startDate, endDate },
      )
      .getOne();

    return !!existingBooking;
  }

  //  get all the bookings
  async findAll() {
    try {
      const bookings = await this.bookingRepository.find();
      return bookings;
    } catch (error) {
      console.error('Error in BookingsService.findAll', error.message);
      throw new Error('Failed to retrieve all bookings');
    }
  }

  // get the bookings based on id
  findOne(id: number) {
    return this.bookingRepository.findOneBy({ id });
  }

  // update the bookings based on id
  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepository.update(id, updateBookingDto);
  }

  // remove the booking based on id
  remove(id: number) {
    return this.bookingRepository.delete(id);
  }
}
