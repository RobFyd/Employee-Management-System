'use client';

import { useState, useEffect } from "react";
import { format } from "date-fns";

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

// curl "https://api.airtable.com/v0/appWX9InzcayFH6G4/Reviews?maxRecords=3&view=Grid%20view" \
// -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"

// sort%5B0%5D%5Bfield%5D=content
// sort%5B0%5D%5Bdirection%5D=desc

export const ReviewsList = () => {
    const [reviews, setReviews] = useState<Review[] | undefined>(undefined);

    // console.log('token: ', process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN);

    useEffect(() => {
        fetch('https://api.airtable.com/v0/appWX9InzcayFH6G4/Reviews?view=default&sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=asc', {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
            }
        }
        )
            .then((response) => response.json())
            .then((data: AirtableReviewResponseDto) => {
                const _reviews: Review[] = [];
                data.records.forEach((elem) => {
                    _reviews.push({
                        id: elem.id,
                        content: elem.fields.content,
                        author: elem.fields.author,
                        created_at: format(elem.fields.created_at, 'hh:mm:ss dd/MM/yyyy'),
                    });
                });
                setReviews(_reviews);
            });
    }, []);

    return <div><ul>{reviews?.map((elem) => (
        <li key={elem.id}>
            <div className="font-bold">{elem.content}</div>
            <div className="text-red-900">{elem.author}</div>
            <div className="mb-4">{elem.created_at}</div>
        </li>
    ))}</ul></div>;
}