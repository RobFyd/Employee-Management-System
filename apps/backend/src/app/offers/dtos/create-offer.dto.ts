import { IsNumber, IsString, IsPositive } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  role: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  salary: number;
}
