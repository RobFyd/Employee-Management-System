import Link from 'next/link';
import { fetchReviews, fetchReviews2 } from '../services';

import { format } from 'date-fns';

export default async function ReviewsList() {
    const reviews = await fetchReviews();
    const reviews2 = await fetchReviews2();

    return (
        <div className="flex flex-row">
            <div className="mr-20">
                <h1 className="mb-6">AirTable</h1>
                <ul>{reviews?.map((elem) => (
                    <li key={elem.id}>
                        <div className="text-blue-700"><Link href={`
                        /reviews/${elem.id}
                    `}>{elem.content}</Link></div>
                        <div className="text-red-900">{elem.author}</div>
                        <div className="mb-4">{elem.created_at}</div>
                    </li>
                ))}</ul>
            </div>
            <div>
                <h1 className="mb-6">Server</h1>
                <ul>{reviews2?.map((elem) => (
                    <li key={elem.public_id}>
                        <div className="text-blue-700"><Link href={`
                        /reviews/${elem.public_id}
                    `}>{elem.content}</Link></div>
                        <div className="text-red-900">{elem.author}</div>
                        <div className="mb-4">{format(elem.created_at, 'dd.MM.yyyy HH.mm.ss')}</div>
                    </li>
                ))}</ul>
            </div>
        </div>
    );
}