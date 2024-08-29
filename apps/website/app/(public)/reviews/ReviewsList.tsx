'use client';

import { useState, useEffect } from "react";

type ReviewDto = {
    id: string;
    content: string;
    author: string;
    created_at: string;
}

// curl "https://api.airtable.com/v0/appWX9InzcayFH6G4/Reviews?maxRecords=3&view=Grid%20view" \
// -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"

// sort%5B0%5D%5Bfield%5D=content
// sort%5B0%5D%5Bdirection%5D=desc

export const ReviewsList = () => {
    const [reviews, setReviews] = useState<ReviewDto[] | undefined>(undefined);

    console.log('token: ', process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN);

    useEffect(() => {
        fetch('https://api.airtable.com/v0/appWX9InzcayFH6G4/Reviews?view=Grid%20view&sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=desc', {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
            }
        })
    }, []);

    return <div></div>;
}