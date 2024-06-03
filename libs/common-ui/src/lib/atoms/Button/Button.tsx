
// better for security:
// const colors: Record<"emerald" | "peterRiver" | "amethyst", string> = {
//   emerald: "#2ecc71",
//   peterRiver: "#3498db",
//   amethyst: "#9b59b6",
//   red: "#ff0000",
// };

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
  const _color = color ? colors[color] : "";
  const _bgColor = bgColor ? colors[bgColor] : "";

  return <button style={{
    backgroundColor: _bgColor,
    color: _color,
  }}>{label}</button>;
};
