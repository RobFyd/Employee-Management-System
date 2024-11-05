import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsPositive } from 'class-validator';

export class CreateReviewDto {
  //   id: number;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  rate: number;
}
