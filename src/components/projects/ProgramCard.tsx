import '@/styles/projects/programCard.scss';

interface IProgramCardProps {
  number: number;
  name: string;
  description: string;
}

export function ProgramCard({ number, name, description }: IProgramCardProps) {
  return (
    <div className="program-card">
      <div className="program-card__number">
        <p>{`0${number}`}</p>
      </div>
      <div className="program-card__body">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <button className="program-card__button" aria-label="Read more" type="button" />
    </div>
  );
}
