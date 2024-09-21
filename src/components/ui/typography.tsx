type props = {
  children: React.ReactNode;
};

export const H1: React.FC<props> = ({ children }) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};
