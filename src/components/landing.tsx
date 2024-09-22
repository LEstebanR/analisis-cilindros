import LandingCard from "./landingCard";
import { Body, Title } from "./ui/typography";

const CARDS_DATA = [
  {
    title: "Sube un archivo",
    body: "Selecciona un archivo con los resultados de ensayo a compresión de cilindros de concreto.",
  },
  {
    title: "Obtén un análisis",
    body: "Recibe un análisis estadístico de los datos, incluyendo la resistencia a compresión promedio.",
  },
  {
    title: "Descarga los resultados",
    body: "Descarga un archivo con los resultados del análisis para su uso posterior.",
  },
];

const Landing = () => {
  return (
    <div className="flex flex-col p-8 gap-8 items-center max-w-4xl">
      <Title>Análisis de cilindros</Title>
      <Body>
        Sube un archivo con los resultados de ensayo a compresión de cilindros
        de concreto y obtén un análisis estadístico de los datos.
      </Body>
      <div className="grid grid-cols-3 gap-4">
        {CARDS_DATA.map((card, index) => (
          <LandingCard key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
