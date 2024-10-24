import { Header } from '@ems/common-ui';
import Link from 'next/link';
import ReviewsList from './components/ReviewsList';
import ReviewsCount from './components/ReviewsCount';
import { Suspense } from 'react';

export default async function ReviewsPage() {

    return (
        <div>
            <Header>Reviews</Header>
            <p>This is the reviews page.</p>
            {/* <Link href="/reviews/create" className="my-3 font-bold text-blue-700 flex justify-center">Create a review</Link> */}
            <Link href="/reviews/create" className="my-5 px-4 py-1 text-white bg-blue-600 flex justify-center rounded-full border border-blue-200 hover:text-white hover:bg-blue-500 hover:border-transparent">Create a review</Link>

            <Suspense fallback={<div>Loading count...</div>}>
                <ReviewsCount />
            </Suspense>

            <Suspense fallback={<div>Loading list...</div>}>
                <ReviewsList />
            </Suspense>
        </div>
    );
}