import Button from "./button";
import { H1 } from "./typography";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between p-4 border">
      <H1>Análisis de cilindros</H1>
      <Button layout="Agregar datos" />
    </header>
  );
};

export default Header;
