import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { vehicleType } from './vehicleTypes.entity';

@Entity()
export class vehicleModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @ManyToOne(() => vehicleType, (vehicleType) => vehicleType.vehicles)
  type: vehicleType;
}
