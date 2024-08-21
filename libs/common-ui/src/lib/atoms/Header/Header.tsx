import type { ComponentProps } from "react";

type Props = Readonly<{
  children: string | undefined;
}>;

export const Header = ({ children }: ComponentProps<'h1'> & Props) => {
  return <h1 className="text-3xl font-bold my-2">{children}</h1>;
  // return <header className="text-3xl font-bold my-3 dark:text-white">{children}</header>;
};