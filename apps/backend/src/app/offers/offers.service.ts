import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { type User } from '@prisma/client';

import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  async getOffers(page?: number, offset?: number): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async getOffer(id: User['id']): Promise<User> {
    const review: User = await this.prisma.user.findFirst({
      where: { id },
    });
    if (!review) {
      throw new NotFoundException('ooops');
    }
    return review;
  }

  createOffer(createOfferDto: CreateOfferDto) {
    return createOfferDto;
  }

  updateOffer(id: User['id'], updateOfferDto: UpdateOfferDto) {
    return updateOfferDto;
  }
}
