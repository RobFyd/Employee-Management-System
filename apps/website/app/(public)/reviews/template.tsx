'use client';

import { useEffect } from "react";

type Props = {
    children: React.ReactNode;
};

export default function TemplateReviews({ children }: Props) {
    useEffect(() => {
        return () => {
            console.log('hello from reviews template');
        }
    }, [])
    return <div>
        <h3>Template</h3>
        <div>{children}</div>
    </div>
}