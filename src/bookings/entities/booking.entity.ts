import { Entity, Unique, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bookings')
@Unique(['vehicleType', 'startDate', 'endDate'])
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  lastName: string;

  @Column()
  noOfWheels: number;

  @Column({ length: 50 })
  vehicleType: string;

  @Column({ length: 50 })
  vehicleModel: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;
}
