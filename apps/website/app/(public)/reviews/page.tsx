import { Header } from '@ems/common-ui';
import { fetchReviews } from './services';
// import { ReviewsList } from './ReviewsList';

export default async function ReviewsPage() {
    const reviews = await fetchReviews();

    return (
        <div>
            <Header>Reviews</Header>
            <p>This is the reviews page.</p>
            {/* <ReviewsList /> */}
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