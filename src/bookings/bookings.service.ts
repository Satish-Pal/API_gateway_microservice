import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepopsitory: Repository<Booking>,
  ) {}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingRepopsitory.save(createBookingDto);
  }

  findAll() {
    return this.bookingRepopsitory.find();
  }

  findOne(id: number) {
    return this.bookingRepopsitory.findOneBy({ id });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepopsitory.update(id, updateBookingDto);
  }

  remove(id: number) {
    return this.bookingRepopsitory.delete(id);
  }
}
