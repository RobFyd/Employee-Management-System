import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Patch,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reviews')
@Controller('reviews') // http://localhost:3000/api/reviews
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  async getReviews(@Query() query) {
    const { page, offset } = query;
    return await this.reviewsService.getReviews(page, offset);
    // return this.reviewsService.getReviews();
  }

  @Get(':id')
  async getReview(@Param('id') id: number) {
    return await this.reviewsService.getReview(id);
  }

  @Delete(':id')
  async deleteReview(@Param(':id') id: number) {
    await this.reviewsService.deleteReview(id);
    return {};
  }

  @Post()
  createReview(@Body() createReviewDto: CreateReviewDto) {
    console.log(createReviewDto instanceof CreateReviewDto);
    return this.reviewsService.createReview(createReviewDto);
  }

  @Patch(':id')
  updateReview(
    @Param('id') id: number,
    @Body() updateReviewDto: UpdateReviewDto
  ) {
    return this.reviewsService.updateReview(id, updateReviewDto);
  }
}
