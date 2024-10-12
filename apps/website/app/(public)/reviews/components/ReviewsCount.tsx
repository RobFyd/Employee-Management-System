import { fetchReviewsCount } from '../services';

export default async function ReviewsCount() {
    const reviewsCount = await fetchReviewsCount();

    return (
        <div>
            <h3 className="mb-6 pt-2 py-1 font-bold flex justify-center bg-blue-100 rounded-full">Count in Airtable: {reviewsCount}</h3>
        </div>
    );
}