import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { vehicleModel } from './vehicleModel.entity';
import { numberOfWheels } from './numberOfWheels.entity';

@Entity()
export class vehicleType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleType: string;

  @ManyToOne(() => numberOfWheels, (wheels) => wheels.types)
  numberOfWheels: numberOfWheels;

  @OneToMany(() => vehicleModel, (model) => model.type)
  models: vehicleModel[];
}
