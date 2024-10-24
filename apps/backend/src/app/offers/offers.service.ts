import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { type User } from '@prisma/client';

import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';
import { PrismaService } from '../prisma.service';

// const reviews: Review[] = [
//   { id: 1, content: 'Review 1', rate: 5 },
//   { id: 2, content: 'Review 2', rate: 4 },
// ];

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async getReviews(page?: number, offset?: number): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async getReview(id: User['id']): Promise<User> {
    const review: User = await this.prisma.user.findFirst({
      where: { id },
    });
    if (!review) {
      throw new NotFoundException('ooops');
    }
    return review;
  }

  createReview(createReviewDto: CreateReviewDto) {
    return createReviewDto;
  }

  updateReview(id: User['id'], updateReviewDto: UpdateReviewDto) {
    return updateReviewDto;
  }

  deleteReview(id: User['id']) {
    return null;
  }
}
