import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { vehicleModel } from './vehicleModel.entity';

@Entity()
export class vehicleType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numberOfWheels: string;

  @OneToMany(() => vehicleModel, (vehicle) => vehicle.type)
  vehicles: vehicleModel[];
}
