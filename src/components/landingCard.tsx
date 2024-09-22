type CardProps = {
  data: {
    title: string;
    body: string;
  };
};

const LandingCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="border p-1 rounded border-dashed border-primary">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p>Gráfico</p>
      <p className="text-lg">{data.body}</p>
    </div>
  );
};

export default LandingCard;
