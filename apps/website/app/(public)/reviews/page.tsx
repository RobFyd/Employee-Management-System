import { Header } from '@ems/common-ui';
import { fetchReviews, fetchReviewsCount } from './services';
import Link from 'next/link';

export default async function ReviewsPage() {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const reviews = await fetchReviews();
    const reviewsCount = await fetchReviewsCount();

    return (
        <div>
            <Header>Reviews</Header>
            <p>This is the reviews page.</p>
            <Link href="/reviews/create" className="my-3 block text-blue-600 flex justify-center">Create a review</Link>

            <h3 className="mb-4 flex justify-center">Count: {reviewsCount}</h3>

            <ul>{reviews?.map((elem) => (
                <li key={elem.id}>
                    <div className="font-bold">{elem.content}</div>
                    <div className="text-red-900">{elem.author}</div>
                    <div className="mb-4">{elem.created_at}</div>
                </li>
            ))}</ul>
        </div>
    );
}