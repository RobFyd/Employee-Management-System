import { IsNumber, IsString, IsPositive } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  role: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  salary: number;
}
