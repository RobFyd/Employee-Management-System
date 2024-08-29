import { Header } from '@ems/common-ui';
import { ReviewsList } from './ReviewsList';

export default function ReviewsPage() {
    return (
        <div>
            <Header>Reviews</Header>
            <p>This is the reviews page.</p>
            <ReviewsList />
        </div>
    );
}