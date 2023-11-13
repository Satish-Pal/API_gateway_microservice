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

@Controller('api/bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  // post request for adding a booking
  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    try {
      // checking if fields are expty or not
      const isEmpty =
        await this.bookingsService.checkEmptyFields(createBookingDto);

      if (isEmpty) {
        throw new ConflictException('please fill the fields');
      }

      // checking if the vehicle model already exists or not
      const isOverlapping = await this.bookingsService.checkBookingOverlap(
        createBookingDto.vehicleModel,
        createBookingDto.startDate,
        createBookingDto.endDate,
      );

      // checking if the same model is exist on in between dates
      if (isOverlapping) {
        throw new ConflictException(
          'Booking Overlaps with an existing vehicle model',
        );
      }

      // checking if startdate is greater than endDate
      const checkDate = await this.bookingsService.checkDates(
        createBookingDto.startDate,
        createBookingDto.endDate,
      );

      if (checkDate) {
        throw new ConflictException(
          'start Date should be less than the endDate',
        );
      }

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
  async findAll() {
    try {
      const bookings = await this.bookingsService.findAll();
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
