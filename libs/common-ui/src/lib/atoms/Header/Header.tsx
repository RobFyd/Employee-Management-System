type Props = Readonly<{
    children: string;
  }>;
  
  export const Header = ({ children }: Props) => {
    return <h1 className="text-3xl font-bold my-4">{children}</h1>;
  };