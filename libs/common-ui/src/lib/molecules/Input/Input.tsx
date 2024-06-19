import { useId, type ComponentProps } from "react";
import { Label } from "../../atoms/Label";

type Props = ComponentProps<"input"> & {
    label: string;
};

export const Input = ({ label, type, value, onChange, ...rest }: Props) => {
    const id = useId();
    return (
        <div className="mb-2">
            <Label id={id}>{label}</Label>
            <input
                id={id}
                type={type}
                defaultValue={value}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                dark:bg-gray-800 dark:text-slate-300 dark:border-gray-700 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                {...rest}
            />
        </div>
    );
};