import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { validate } from 'class-validator';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  // creating a bookings
  async create(createBookingDto: CreateBookingDto) {
    try {
      const errors = await validate(createBookingDto);
      console.log(errors);
      if (errors.length > 0) {
        throw new Error(
          `Validation failed: ${errors
            .map((error) => Object.values(error.constraints).join(', '))
            .join(', ')}`,
        );
      }
      const newBooking = this.bookingRepository.create(createBookingDto);
      return this.bookingRepository.save(newBooking);
    } catch (error) {
      console.error('Error in BookingService.create', error.message);
      throw new Error('failed to create booking');
    }
  }

  // checks startDate and endDate
  async checkDates(startDate: Date, endDate: Date): Promise<boolean> {
    if (new Date(startDate) >= new Date(endDate)) {
      return true;
    }
    return false;
  }

  // checcking empty fields 
  async checkEmptyFields(createBookingDto: CreateBookingDto): Promise<boolean> {
    const {
      firstName,
      lastName,
      numberOfWheels,
      vehicleType,
      vehicleModel,
      startDate,
      endDate,
    } = createBookingDto;

    if (
      !firstName ||
      !lastName ||
      !numberOfWheels ||
      !vehicleType ||
      !vehicleModel ||
      !startDate ||
      !endDate
    ) {
      return true;
    }

    return false;
  }

  // checking existing data based on vehicle model
  async checkBookingOverlap(
    vehicleModel: string,
    startDate: Date,
    endDate: Date,
  ): Promise<boolean> {
    const existingBooking = await this.bookingRepository
      .createQueryBuilder('booking')
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
