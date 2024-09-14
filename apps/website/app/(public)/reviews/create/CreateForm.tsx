'use client';

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

import { Button, Input } from "@ems/common-ui";

import { createReview } from "./actions";

export const CreateForm = () => {
    const [isError, setIsError] = useState(false);

    const clientAction = async (formData: FormData) => {
        const serverResult = await createReview(formData);
        console.log({ serverResult });
        if (serverResult.status === 'error') {
            setIsError(true);
        }
    };

    return (
        <>
            {isError && <p>Oh no server error!</p>}
            <form action={clientAction}>
                <Input label="Content" name="content" />
                <Input label="Author" name="author" />
                <Input label="Points" name="points" />
                <Button label="Submit" type="submit" />
            </form>
        </>
    );
};

