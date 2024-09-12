export type Review = {
    id: string;
    content: string;
    author: string;
    points: number;
    created_at: string;
}

export type CreateReviewDto = Pick<Review, 'content' | 'author' | 'points'>;