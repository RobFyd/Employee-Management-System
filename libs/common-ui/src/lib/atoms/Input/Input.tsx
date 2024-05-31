type Props = {
    label: string;
    type: string;
    placeholder: string;
    name: string;
};

export const Input = ({ label, type, placeholder, name }: Props) => {
    return <input type={type} placeholder={placeholder} name={name} />;
};