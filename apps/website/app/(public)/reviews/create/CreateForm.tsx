'use client';

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

import { Button, Input } from "@ems/common-ui";

import { createReview } from "./actions";

export const CreateForm = () => {
    const [isError, setIsError] = useState(false);

    const ClientAction = async (formData: FormData) => {
        const serverResult = await createReview(formData);
        console.loglog({ serverResult });
        if (serverResult.status === 'error') {
            setIsError(true);
        }
    };
};