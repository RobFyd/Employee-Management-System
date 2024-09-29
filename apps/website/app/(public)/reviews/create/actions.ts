'use server';

import { revalidatePath } from 'next/cache';
import { createReviewInAirtable } from '../services';
import { CreateReviewDto, createReviewSchema } from '../types';

export const createReview = async (review: CreateReviewDto) => {
  'use server';

  const result = createReviewSchema.safeParse(review);
  if (!result.success) {
    console.log(result.error.issues);

    return {
      status: 'error',
    };
  } else {
    await createReviewInAirtable(review);
    revalidatePath('/reviews');

    return {
      status: 'success',
      payload: review,
    };
  }
};
