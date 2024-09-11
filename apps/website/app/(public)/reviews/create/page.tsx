import { Button, Header, Input } from "@ems/common-ui";

const createReview = async (formDta: formData) => {
    'use server';

    const review = {
        content: formData.get('content'),
        author: formData.get('author'),
    }
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