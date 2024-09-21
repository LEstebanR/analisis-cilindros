type ButtonProps = {
  layout: string;
};

const Button: React.FC<ButtonProps> = ({ layout }) => {
  return (
    <button className="bg-primary hover:bg-primary_hover text-white font-bold py-2 px-4 rounded">
      {layout}
    </button>
  );
};

export default Button;
