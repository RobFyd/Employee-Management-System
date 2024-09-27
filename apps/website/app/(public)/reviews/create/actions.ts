// 'use server';

// import { CreateReviewDto, createReviewSchema } from '../types';

// export const createReview = async (formData: FormData) => {
//   'use server';

//   const review: CreateReviewDto = {
//     content: formData.get('content') as string,
//     author: formData.get('author') as string,
//     points: parseInt(formData.get('points') as string),
//     // points: formData.get('points') as string,
//   };

//   const result = createReviewSchema.safeParse(review);
//   if (!result.success) {
//     console.log(result.error.issues);

//     return {
//       status: 'error',
//     };
//   } else {
//     return {
//       status: 'success',
//       payload: review,
//     };
//   }
// };

'use server';

import { redirect } from 'next/navigation';
import { createReviewInAirtable } from '../services';
import { CreateReviewDto, createReviewSchema } from '../types';

export const createReview = async (formData: FormData) => {
  const rawReview: CreateReviewDto = {
    content: formData.get('content') as string,
    author: formData.get('author') as string,
  };

  const result = createReviewSchema.safeParse(rawReview);
  if (!result.success) {
    return {
      error: true,
    };
  } else {
    await createReviewInAirtable(rawReview);

    redirect('/reviews');
  }
};
