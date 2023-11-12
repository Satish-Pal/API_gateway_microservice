import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { vehicleType } from './vehicleTypes.entity';

@Entity()
export class numberOfWheels {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numberOfWheels: string;

  @OneToMany(() => vehicleType, (type) => type.numberOfWheels)
  types: vehicleType[];
}
