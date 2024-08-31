import { format } from 'date-fns';

import { Header } from '@ems/common-ui';
// import { ReviewsList } from './ReviewsList';

type Review = {
    id: string;
    content: string;
    author: string;
    created_at: string;
}

type AirtableReviewResponseDto = {
    records: {
        id: string;
        fields: {
            content: string;
            author: string;
            created_at: string;
        };
    }[];
};

export default async function ReviewsPage() {
    const response = await fetch('https://api.airtable.com/v0/appWX9InzcayFH6G4/Reviews?view=default&sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=asc',
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
            }
        }
    )
    const data: AirtableReviewResponseDto = await response.json();
    const _reviews: Review[] = [];
    data.records.forEach((elem) => {
        _reviews.push({
            id: elem.id,
            content: elem.fields.content,
            author: elem.fields.author,
            created_at: format(elem.fields.created_at, 'hh:mm:ss dd/MM/yyyy'),
        });
    });

    return (
        <div>
            <Header>Reviews</Header>
            <p>This is the reviews page.</p>
            {/* <ReviewsList /> */}
            <ul>{_reviews?.map((elem) => (
                <li key={elem.id}>
                    <div className="font-bold">{elem.content}</div>
                    <div className="text-red-900">{elem.author}</div>
                    <div className="mb-4">{elem.created_at}</div>
                </li>
            ))}</ul>
        </div>
    );
}