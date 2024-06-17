import { ComponentProps } from "react";

type Props = ComponentProps<"label"> & {
    children: string;
};

export const Label = ({ id, children }: Props) => {
    return (
        <label htmlFor={id}>
            <span>{children}</span>
        </label>
    );
};