import Link from 'next/link';
import { fetchReviews } from '../services';

export default async function ReviewsList() {
    const reviews = await fetchReviews();

    return (
        <div>
            <ul>{reviews?.map((elem) => (
                <li key={elem.id}>
                    <div className="font-bold text-blue-700"><Link href={`
                        /reviews/${elem.id}
                    `}>{elem.content}</Link></div>
                    <div className="text-red-900">{elem.author}</div>
                    <div className="mb-4">{elem.created_at}</div>
                </li>
            ))}</ul>
        </div>
    );
}