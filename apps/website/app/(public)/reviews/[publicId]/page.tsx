import { notFound } from "next/navigation";
import { fetchReview } from "../services";

type Props = {
    params: {
        publicId: string;
    };
}

export default async function ReviewPage({ params }: Props) {
    const publicId = params.publicId;
    const review = await fetchReview(publicId);

    if (!review) {
        notFound();
    }

    return (
        <div>
            <h1>{review.fields.content}</h1>
            <p>{review.fields.author}</p>
            <p>{review.fields.created_at}</p>
        </div>
    )
}