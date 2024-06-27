import type { ComponentProps } from "react";

type Props = Readonly<{
  children: string | undefined;
}>;

export const Header = ({ children }: ComponentProps<'header'> & Props) => {
  return <header className="text-3xl font-bold my-3">{children}</header>;
  // return <header className="text-3xl font-bold my-3 dark:text-white">{children}</header>;
};