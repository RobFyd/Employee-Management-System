import { z } from 'zod';

export type Review = {
  id: string;
  content: string;
  author: string;
  points: number;
  // points: string;
  created_at: string;
};

export const createReviewSchema = z.object({
  content: z.string().min(1, 'Content is required'),
  author: z.string().min(1, 'Author is required'),
  points: z.number().int().min(1, 'Points is required'),
  // points: z.string().min(1, 'Points is required'),
});

export type CreateReviewDto = z.infer<typeof createReviewSchema>;
