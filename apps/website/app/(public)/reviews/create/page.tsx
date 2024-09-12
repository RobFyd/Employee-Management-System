import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';

import { Button, Header, Input } from "@ems/common-ui";
import { CreateReviewDto } from "../types";
import { createReviewInAirtable } from "../services";

const createReview = async (formData: FormData) => {
    'use server';

    const review: CreateReviewDto = {
        content: formData.get('content') as string,
        author: formData.get('author') as string,
    };

    await createReviewInAirtable(review);
    revalidatePath('/reviews');  // no cashing
    redirect('/reviews');
}

export default function CreateReview() {
    return (
        <div>
            <Header>Create review</Header>
            <form action={createReview}>
                <Input label="Content" />
                <Input label="Author" />
                <Button label="Submit" type="submit" />
            </form>
        </div>
    )
}