import { useId, type ComponentProps } from "react";
import { Label } from "../../atoms/Label";

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
            <Label id={id}>{label}</Label>
            <input id={id} type={type} defaultValue={value} onChange={onChange} {...rest} />
        </div>
    );
};