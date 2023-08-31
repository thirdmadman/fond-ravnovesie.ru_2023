import '../../styles/home/projectGroupCard.scss';

interface ProjectGroupCardProps {
  projectGroupNumber: number;
  projectGroupName: string;
  projectNamesInGroup: string[];
  link: string;
}

export function ProjectGroupCard(props: ProjectGroupCardProps) {
  const {projectGroupNumber, projectGroupName, projectNamesInGroup, link} = props;
  return (
    <div className='project-group-card'>
      <div className='project-group-card__title'>
        <span>{projectGroupNumber < 10 ? `0${projectGroupNumber}` : projectGroupNumber}</span>
        {projectGroupName}
      </div>
      <ul>
        {projectNamesInGroup.map((el) => (
          <li key={el}>“{el}“</li>
        ))}
      </ul>
      <button type='button' className='project-group-card__button'>
        ПОДРОБНЕЕ
      </button>
    </div>
  );
}
