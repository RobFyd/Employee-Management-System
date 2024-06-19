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
                className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-slate-300 dark:border-gray-700 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                {...rest}
            />
        </div>
    );
};