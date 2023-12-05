import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ConflictException,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

import { ApiTags, ApiResponse,ApiOperation } from '@nestjs/swagger';
import { Booking } from './entities/booking.entity';

@Controller('api/bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  // post request for adding a booking
  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    try {

      const result = await this.bookingsService.create(createBookingDto);
      return result;
    } catch (error) {
      console.error('Error in BookingsController.create', error.message);
      throw new HttpException(
        'Failed to create booking',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // get request for getting all the bookings
  @Get()
  async findAll(): Promise<Booking[]> {
    try {
      const bookings = await this.bookingsService.findAll();
      console.log(bookings);
      return bookings;
    } catch (error) {
      console.error('Error in bookingsController.findAll', error.message);
      throw new HttpException(
        'Failed to fetch bookings',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // get the bookings based on id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(+id);
  }

  // patch the bookings based on id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingsService.update(+id, updateBookingDto);
  }

  // delete the bookings based on id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingsService.remove(+id);
  }
}
