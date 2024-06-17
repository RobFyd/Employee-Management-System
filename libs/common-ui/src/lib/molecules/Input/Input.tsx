import { useId, type ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
    label: string;
    type: string;
    placeholder: string;
    name: string;
};

export const Input = ({ label, type, value, onChange, ...rest }: Props) => {
    const id = useId();
    return (
        <div className="mb-2">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} defaultValue={value} onChange={onChange} {...rest} />
        </div>
    );
};