import { IsString, IsNotEmpty, Validate } from 'class-validator';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'datesOrder', async: false })
export class DatesOrderConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const startDateString = args.object[args.constraints[0]];
    const endDateString = value;

    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    if (startDate instanceof Date && endDate instanceof Date) {
      return startDate < endDate;
    }

    return false;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Start date must be before the end date.';
  }
}

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  numberOfWheels: number;

  @IsString()
  @IsNotEmpty()
  vehicleType: string;

  @IsString()
  @IsNotEmpty()
  vehicleModel: string;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  @Validate(DatesOrderConstraint, ['startDate'])
  endDate: Date;
}
