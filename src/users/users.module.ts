import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { usersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'src/seeding/users.entity';

@Module({
  imports:[TypeOrmModule.forFeature([users])],
  controllers: [usersController],
  providers: [AppService],
})

export class usersModule {}