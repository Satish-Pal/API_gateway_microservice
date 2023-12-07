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
  Inject,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Booking } from './entities/booking.entity';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/bookings')
export class BookingsController {
  constructor(
    private readonly bookingsService: BookingsService,
    @Inject('NOTIFICATION_SERVICE') private readonly rabbitClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE_KAFKA') private readonly kafkaClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE_NATS') private readonly natsClient: ClientProxy,

  ) {}

  // post request for adding a booking
  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    try {
      const result = await this.bookingsService.create(createBookingDto);
      if (result) {
        this.rabbitClient.emit('booking_created', createBookingDto);
        this.kafkaClient.emit('booking_created', createBookingDto);
        this.natsClient.emit('booking_created', createBookingDto);
        return result;
      }
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
