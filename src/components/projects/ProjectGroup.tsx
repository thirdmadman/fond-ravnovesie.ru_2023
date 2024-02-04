import { ProgramCard } from './ProgramCard';

interface IProjectGroupProps {
  title: string;
  programs: Array<{
    number: number;
    title: string;
    description: string;
  }>;
  scrollToId: string;
}

export function ProjectGroup({ title, programs, scrollToId }: IProjectGroupProps) {
  return (
    <div className="project-group" id={scrollToId}>
      <h2>{title}</h2>
      <div className="project-group__programs-container">
        {programs.map((program) => (
          <ProgramCard {...program} key={program.title} />
        ))}
      </div>
    </div>
  );
}
