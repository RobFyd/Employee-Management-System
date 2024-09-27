// import { redirect } from "next/navigation";
// import { revalidatePath } from 'next/cache';
// import { Button, Header, Input } from "@ems/common-ui";
// import { CreateReviewDto, createReviewSchema } from "../types";
// import { createReviewInAirtable } from "../services";
// const createReview = async (formData: FormData) => {
//     'use server';
//     const review: CreateReviewDto = {
//         content: formData.get('content') as string,
//         author: formData.get('author') as string,
//         points: parseInt(formData.get('points') as string)
//         // points: formData.get('points') as string,
//     };
//     const result = createReviewSchema.safeParse(review);
//     if (!result.success) {
//         console.log(result.error.issues);
//         return {
//             status: 'error',
//         };
//     } else {
//         return {
//             status: 'success',
//             payload: review,
//         };
//     }
// };

// export default function CreateReview() {
//     const formAction = async (formData: FormData) => {
//         'use server';
//         const serverResult = await createReview(formData);
//         console.log({ serverResult });
//         if (serverResult.status === 'success') {
//             await createReviewInAirtable(serverResult.payload!);
//             revalidatePath('/reviews');  // no cashing
//             redirect('/reviews');
//         }
//     };
//     return (
//         <div>
//             <Header>Create review</Header>
//             <form action={formAction}>
//                 <Input label="Content" name="content" />
//                 <Input label="Author" name="author" />
//                 <Input label="Points" name="points" />
//                 <Button label="Submit" type="submit" />
//             </form>
//         </div>
//     )
// }

import { Header } from '@ems/common-ui';
import { CreateForm } from './CreateForm';

export default function CreateReview() {
  return (
    <div>
      <Header>Create review</Header>
      <CreateForm />
    </div>
  );
}