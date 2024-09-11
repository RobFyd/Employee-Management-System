import { Button, Header, Input } from "@ems/common-ui";
import { CreateReviewDto } from "../types";
import { redirect } from "next/dist/server/api-utils";

const createReview = async (formData: FormData) => {
    'use server';

    const review: CreateReviewDto = {
        content: formData.get('content') as string,
        author: formData.get('author') as string,
    };

    await createReviewInAirtable(review);

    redirect('/reviews');
}

export default function CreateReview() {
    return (
        <div>
            <Header>Create review</Header>
            <form>
                <Input label="Content" />
                <Input label="Author" />
                <Button label="Submit" type="submit" />
            </form>
        </div>
    )
}