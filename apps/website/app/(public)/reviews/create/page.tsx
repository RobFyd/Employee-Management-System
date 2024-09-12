import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';

import { Button, Header, Input } from "@ems/common-ui";
import { CreateReviewDto } from "../types";
import { createReviewInAirtable } from "../services";
// import { error } from "console";

const createReview = async (formData: FormData) => {
    'use server';

    const review: CreateReviewDto = {
        content: formData.get('content') as string,
        author: formData.get('author') as string,
        // points: formData.get('points') as string,
        points: parseInt(formData.get('points') as string)
    };

    const result = createReviewSchema.safeParse(review);
    if (!result.success) {
        console.log(result.error.issues);

        return {
            status: error,
        };
    } else {
        await createReviewInAirtable(review);
        revalidatePath('/reviews');  // no cashing
        redirect('/reviews');
    }
};

export default function CreateReview() {
    return (
        <div>
            <Header>Create review</Header>
            <form action={createReview}>
                <Input label="Content" name="content" />
                <Input label="Author" name="author" />
                <Input label="Points" name="points" />
                <Button label="Submit" type="submit" />
            </form>
        </div>
    )
}