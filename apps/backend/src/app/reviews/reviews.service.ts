import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';

const reviews: Review[] = [
  { id: 1, content: 'Review 1', rate: 5 },
  { id: 2, content: 'Review 2', rate: 4 },
];

@Injectable()
export class ReviewsService {
  getReviews(page?: number, offset?: number): Review[] {
    return reviews;
  }

  getReview(id: string): Review {
    const review: Review = reviews.find((item) => item.id === +id);
    if (!review) {
      // throw new Error('Review not found');
      // throw new HttpException('Review not found', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Review not found');
    }
    return review;
  }

  createReview(createReviewDto: CreateReviewDto) {
    // TODO:
    // reviews.push(CreateReviewDto);
    return createReviewDto;
  }

  updateReview(id: string, updateReviewDto: UpdateReviewDto) {
    return updateReviewDto;
  }

  deleteReview(id: string) {
    return null;
  }
}
