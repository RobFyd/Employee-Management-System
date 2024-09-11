import { Button, Header, Input } from "@ems/common-ui";

export default function CreateReview() {
    return (
        <div>
            <Header>Create review</Header>
            <form>
                <Input label="Author" />
                <Input label="Author" />
                <Button label="Submit" type="submit" />
            </form>
        </div>
    )
}