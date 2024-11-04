/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './app/filters/http-exception-filter';
import { ApiGuard } from './app/guards/api-guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new ApiGuard());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('MEWA API')
    .setDescription('Endpoints for backend API')
    .setVersion('1.0')
    .addTag('offers')
    .addTag('reviews')
    .addTag('ai')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
