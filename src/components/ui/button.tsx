type ButtonProps = {
  layout: string;
};

const Button: React.FC<ButtonProps> = ({ layout }) => {
  return (
    <button className="bg-primary hover:bg-primary_hover text-white font-bold py-1 px-2 rounded border-primary_hover">
      {layout}
    </button>
  );
};

export default Button;
