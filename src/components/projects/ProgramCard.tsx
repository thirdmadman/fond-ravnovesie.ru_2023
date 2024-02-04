interface IProgramCardProps {
  number: number;
  title: string;
  description: string;
}

export function ProgramCard({ number, title, description }: IProgramCardProps) {
  return (
    <div className="program-card">
      <div className="program-card__number">
        <p>{number}</p>
      </div>
      <div className="program-card__body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button className="program-card__button" aria-label="Read more" type="button" />
    </div>
  );
}
