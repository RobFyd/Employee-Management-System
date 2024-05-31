type Props = {
    type: string;
    placeholder: string;
    name: string;
};

export const Input = ({ type, placeholder, name }: Props) => {
    return <input type={type} placeholder={placeholder} name={name} />;
};