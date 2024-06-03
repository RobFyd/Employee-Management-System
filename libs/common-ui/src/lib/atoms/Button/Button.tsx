const colors = {
  emerald: "#2ecc71",
  peterRiver: "#3498db",
  amethyst: "#9b59b6",
}

type ColorType = keyof typeof colors;

type Props = {
  label: string;
  bgColor?: ColorType;
  color?: ColorType;
};

export const Button = ({ label, bgColor, color }: Props) => {
  return <button style={{
    backgroundColor: bgColor,
    color,
  }}>{label}</button>;
};
