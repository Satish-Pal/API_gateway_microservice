import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { vehicleType } from './vehicleTypes.entity';

@Entity()
export class vehicleModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  numberOfWheels: string;

  @ManyToOne(() => vehicleType, (type) => type.vehicles)
  type: vehicleType;
}
