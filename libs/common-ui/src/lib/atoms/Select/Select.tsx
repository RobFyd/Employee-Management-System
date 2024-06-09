type Props = {
    name: string;
    id: string;
    size: number;
    required: boolean;
};

export const Select = ({ name, id, size, required }: Props) => {
    return (
        <select name={name} id={id} size={size} required={required}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    );
};