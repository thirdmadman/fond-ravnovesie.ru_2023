import '@/styles/home/projectGroupCard.scss';

interface IProjectGroupCardProps {
  projectNumber: number;
  projectName: string;
  programNamesInGroup: Array<string>;
  link: string;
  isMobile: boolean;
}

export function ProjectGroupCard({
  projectNumber,
  projectName,
  programNamesInGroup,
  link,
  isMobile,
}: IProjectGroupCardProps) {
  if (isMobile) {
    return (
      <a href={link} aria-label="Open">
        <div className="project-group-card project-group-card_mobile">
          <ul>
            {programNamesInGroup.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
          <div className="project-group-card__title">{projectName}</div>
        </div>
      </a>
    );
  }

  return (
    <div className="project-group-card">
      <div className="project-group-card__title">
        <span>{projectNumber < 10 ? `0${projectNumber}` : projectNumber}</span>
        {projectName}
      </div>
      <ul>
        {programNamesInGroup.map((el) => (
          <li key={el}>“{el}“</li>
        ))}
      </ul>
      <a href={link} className="project-group-card__button">
        ПОДРОБНЕЕ
      </a>
    </div>
  );
}
