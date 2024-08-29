'use client';

import { useState, useEffect } from "react";

type ReviewDto = {
    id: string;
    content: string;
    author: string;
    created_at: string;
}

export const ReviewsList = () => {
    const [reviews, setReviews] = useState<ReviewDto[] | undefined>(undefined);

    useEffect(() => {
        fetch('/api/reviews')
            .then(response => response.json())
            .then(data => setReviews(data));
    }, []);
}