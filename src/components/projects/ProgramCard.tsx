interface IProgramCardProps {
  number: number;
  name: string;
  description: string;
}

export function ProgramCard({ number, name, description }: IProgramCardProps) {
  return (
    <div className="program-card">
      <div className="program-card__number">
        <p>{number}</p>
      </div>
      <div className="program-card__body">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <button className="program-card__button" aria-label="Read more" type="button" />
    </div>
  );
}
