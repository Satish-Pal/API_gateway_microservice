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

  async findAll() {
    try {
      const bookings = await this.bookingRepository.find();
      return bookings;
    } catch (error) {
      console.error('Error in BookingsService.findAll', error.message);
      throw new Error('Failed to retrieve all bookings');
    }
  }

  findOne(id: number) {
    return this.bookingRepository.findOneBy({ id });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepository.update(id, updateBookingDto);
  }

  remove(id: number) {
    return this.bookingRepository.delete(id);
  }
}
