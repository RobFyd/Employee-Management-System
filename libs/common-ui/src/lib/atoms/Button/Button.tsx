import type { ComponentProps } from "react";
import clsx from "clsx";

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
  // onClick: MouseEventHandler<HTMLButtonElement>; // better
  // className?: string;
};

const UserForm = () => {

  // const handleSubmit: FormEventHandler = (e) => {}; // for forms
  // const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {}; // for input fields
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Form submitted");
  };

  return (
    <div>
      <Button label="Submit" onClick={handleClick} />
    </div>
  );
}

export const Button = ({
  label,
  bgColor,
  color,
  onClick,
  className,
  ...rest // universal component props
}: ComponentProps<"button"> & Props) => {
  const _color = color ? colors[color] : "";
  const _bgColor = bgColor ? colors[bgColor] : "";

const classes = clsx(
  "px-4 py-1", // padding
  "text-sm text-white", // text size and color
  "bg-blue-600", // background color
  "font-semibold", // font weight
  "rounded-full border border-blue-200", // border
  "hover:text-white hover:bg-blue-500 hover:border-transparent", // hover effects
  className, // custom classes
  // "focus:outline-none", // focus effects
  // "focus:ring-2",
  // "focus:ring-offset-2",
  // "focus:ring-offset-gray-800",
  // "focus:ring-white",
  // "transition-colors", // transition effects
  // "duration-300", // duration
  // "ease-in-out",
  // "hover:bg-opacity-80",
  // "active:bg-opacity-100", // active effects
  // "disabled:opacity-50", // disabled effects
  // "disabled:cursor-not-allowed",
  // "disabled:hover:bg-opacity-100",
  // "disabled:active:bg-opacity-100",
  // "disabled:focus:ring-offset-gray-800",
  // "disabled:focus:ring-white",
);

  return <button
    onClick={onClick}
    className={classes}
    style={{
      backgroundColor: _bgColor,
      color: _color,
    }}
    {...rest}
  >{label}</button>;
};
