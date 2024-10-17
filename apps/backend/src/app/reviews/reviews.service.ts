import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Review } from './entities/review.entity';

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

  createReview(data: Review) {
    reviews.push(data);
    return data;
  }

  deleteReview(id: string) {
    return null;
  }
}
