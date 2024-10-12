import { format } from 'date-fns';
import { CreateReviewDto } from './types';

import db from '@ems/prisma-client';

type Review = {
  id: string;
  content: string;
  author: string;
  created_at: string;
};

type AirTableFields = {
  content: string;
  author: string;
  created_at: string;
};

type AirTableReview = {
  id: string;
  fields: AirTableFields;
};

type AirtableReviewResponseDto = {
  records: AirTableReview[];
};

//airtable
export const fetchReviews = async () => {
  //noStore();
  const response = await fetch(
    `${process.env.AIRTABLE_BASE_URL}/reviews?view=default&sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
      },
    }
  );
  const data: AirtableReviewResponseDto = await response.json();
  const reviews: Review[] = [];
  data.records.forEach((elem) => {
    reviews.push({
      id: elem.id,
      content: elem.fields.content,
      author: elem.fields.author,
      created_at: format(elem.fields.created_at, 'dd.MM.yyyy HH:mm:ss'),
    });
  });

  return reviews;
};

//server
export const fetchReviews2 = async () => {
  const reviews = await db.user.findMany({
    select: {
      public_id: true,
      author: true,
      content: true,
      created_at: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  });

  return reviews;
};

export const fetchReviewsCount = async () => {
  const response = await fetch(
    `${process.env.AIRTABLE_BASE_URL}/reviews?view=default&sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
      },
    }
  );
  const data: AirtableReviewResponseDto = await response.json();
  return data.records.length;
};

export const createReviewInAirtable = async (review: CreateReviewDto) => {
  const response = await fetch(`${process.env.AIRTABLE_BASE_URL}/reviews`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ records: [{ fields: review }] }),
  });
  const data = await response.json();

  console.log('createReviewInAirtable', { data: data.records[0] });
};

export const fetchReview = async (publicId: string) => {
  // noStore();
  const response = await fetch(
    `${process.env.AIRTABLE_BASE_URL}/reviews/${publicId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
      },
    }
  );
  const data: AirTableReview = await response.json();

  return data;
};

export const fetchReview2 = async (publicId: string) => {
  const review = await db.user.findUnique({
    where: {
      public_id: publicId,
    },
    select: {
      public_id: true,
      author: true,
      content: true,
      created_at: true,
    },
  });

  return review;
};
