import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewsModule } from './reviews/reviews.module';
import { OffersModule } from './offers/offers.module';
import { AIModule } from './ai/ai.module';
@Module({
  imports: [ReviewsModule, OffersModule, AIModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
