import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from '../bookings/entities/booking.entity';

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(()=>Booking, (booking)=> booking.user)
  bookings: Booking[];
}
