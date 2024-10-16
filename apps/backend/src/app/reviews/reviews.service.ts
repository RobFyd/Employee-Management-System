import { Injectable } from '@nestjs/common';

type Review = {
  id: number;
  content: string;
  rate: number;
};

const reviews: Review[] = [
  { id: 1, content: 'Review 1', rate: 5 },
  { id: 2, content: 'Review 2', rate: 4 },
];

@Injectable()
export class ReviewsService {
  getReviews(page?: number, offset?: number): Review[] {
    return reviews;
  }

  getReview(id: Review['id']): Review {
    return reviews[0];
  }

  createReview(data: Review) {
    reviews.push(data);
    return data;
  }

  deleteReview(id: Review['id']) {
    return null;
  }
}
