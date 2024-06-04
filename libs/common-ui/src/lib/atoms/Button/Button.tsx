import type { ComponentProps } from "react";

// colors from pallette: https://flatuicolors.com/palette/defo

// better for security:
// const colors: Record<"emerald" | "peterRiver" | "amethyst", string> = {
//   emerald: "#2ecc71",
//   peterRiver: "#3498db",
//   amethyst: "#9b59b6",
//   red: "#ff0000",
// };

import { MouseEventHandler } from "react";

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
  // onClick?: () => void; // avoid using void when unnecessary
  // onClick: MouseEventHandler<HTMLButtonElement>; // better for security
  // className?: string;
};

export const Button = ({ label, bgColor, color, onClick, className }: ComponentProps<"button"> & Props) => {
  const _color = color ? colors[color] : "";
  const _bgColor = bgColor ? colors[bgColor] : "";

  return <button
    onClick={onClick}
    className={className}
    style={{
      backgroundColor: _bgColor,
      color: _color,
    }}>{label}</button>;
};
