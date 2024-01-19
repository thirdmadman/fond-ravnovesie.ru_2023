import '../../styles/home/projectGroupCard.scss';

interface ProjectGroupCardProps {
  projectGroupNumber: number;
  projectGroupName: string;
  projectNamesInGroup: string[];
  link: string;
  isMobile: boolean;
}

export function ProjectGroupCard(props: ProjectGroupCardProps) {
  const { projectGroupNumber, projectGroupName, projectNamesInGroup, link, isMobile } = props;

  if (isMobile) {
    return (
      <a href={link} aria-label="Open">
        <div className="project-group-card-mobile">
          <ul>
            {projectNamesInGroup.map((el) => (
              <li key={el}>“{el}“</li>
            ))}
          </ul>
          <div className="project-group-card-mobile__title">{projectGroupName}</div>
        </div>
      </a>
    );
  }

  return (
    <div className="project-group-card">
      <div className="project-group-card__title">
        <span>{projectGroupNumber < 10 ? `0${projectGroupNumber}` : projectGroupNumber}</span>
        {projectGroupName}
      </div>
      <ul>
        {projectNamesInGroup.map((el) => (
          <li key={el}>“{el}“</li>
        ))}
      </ul>
      <a href={link} className="project-group-card__button">
        ПОДРОБНЕЕ
      </a>
    </div>
  );
}
