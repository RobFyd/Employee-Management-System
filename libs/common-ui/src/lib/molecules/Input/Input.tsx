// import { useId, type ComponentProps, Ref, forwardRef } from "react";
// import { Label } from "../../atoms/Label";

// type Props = ComponentProps<"input"> & {
//     label: string;
// };

// export const Input = forwardRef(
//     (
//         { label, type, value, onChange, ...rest }: Props,
//         ref: Ref<HTMLInputElement>
//     ) => {
//         const id = useId();
//         return (
//             <div className="mb-2">
//                 <Label id={id}>{label}</Label>
//                 <input
//                     id={id}
//                     ref={ref}
//                     type={type}
//                     defaultValue={value}
//                     onChange={onChange}
//                     className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
//                 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
//                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed
//                 invalid:border-pink-500 invalid:text-pink-600
//                 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
//                 dark:bg-gray-800 dark:text-slate-300 dark:border-gray-700 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
//                     {...rest}
//                 />
//             </div>
//         );
//     });



import {
    forwardRef,
    type ForwardedRef,
    type ComponentPropsWithRef,
  } from 'react';
  import { FieldError } from 'react-hook-form';
  
//   import { classMerge } from '../../utils/cn';
  import { Label } from '../../atoms';
  
  type Props = {
    label: string;
    error?: FieldError;
  } & ComponentPropsWithRef<'input'>;
  
  export const Input = forwardRef(
    (
      { label, error, className, ...rest }: Props,
      ref: ForwardedRef<HTMLInputElement>
    ) => {
      // id is needed to provide accessibility and point which label is for which field
      const id = label.replace(' ', '-').toLocaleLowerCase();
      return (
        <div className="my-2">
          <Label id={id}>{label}</Label>
          <input
            id={id}
            ref={ref}
            className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed
                 invalid:border-pink-500 invalid:text-pink-600
                 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                 dark:bg-gray-800 dark:text-slate-300 dark:border-gray-700 dark:focus:ring-indigo-500 dark:focus:border-indigo-500'

            {...rest}
          />
          {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
      );
    }
  );