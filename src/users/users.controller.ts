import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('api/users')
export class usersController {
  constructor(private readonly appService: AppService) {}

  // get the user if not exist then save it to db
  @Get()
  async getNumberOfWheels(): Promise<string[]> {
    try {
      const numberOfWheels = await this.appService.getUsers();
      return numberOfWheels;
    } catch (error) {
      console.error('Error fetching users:', error.message);
      throw new Error('failed to fetch users');
    }
  }
}