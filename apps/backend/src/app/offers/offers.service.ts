import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { type Offer } from '@prisma/client';

import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  async getOffers(page?: number, offset?: number): Promise<Offer[]> {
    return await this.prisma.offer.findMany();
  }

  async getOffer(id: Offer['public_id']): Promise<Offer> {
    const offer: Offer = await this.prisma.offer.findUnique({
      where: { public_id: id },
    });
    if (!offer) {
      throw new NotFoundException('ooops! offer not found');
    }
    return offer;
  }

  async createOffer(createOfferDto: CreateOfferDto) {
    return await this.prisma.offer.create({
      data: createOfferDto,
    });
  }

  async updateOffer(id: Offer['public_id'], updateOfferDto: UpdateOfferDto) {
    return await this.prisma.offer.update({
      where: { public_id: id },
      data: updateOfferDto,
    });
  }
}
