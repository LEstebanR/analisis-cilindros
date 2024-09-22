type props = {
  children: React.ReactNode;
};

export const H1: React.FC<props> = ({ children }) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};

export const Title: React.FC<props> = ({ children }) => {
  return (
    <h1 className="text-6xl font-bold text-primary underline decoration-dotted">
      {children}
    </h1>
  );
};

export const Body: React.FC<props> = ({ children }) => {
  return <p className="text-lg">{children}</p>;
};
