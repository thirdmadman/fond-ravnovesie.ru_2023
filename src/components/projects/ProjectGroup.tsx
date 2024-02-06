import { ProgramCard } from '@/components/projects/ProgramCard';
import '@/styles/projects/projectGroup.scss';

interface IProjectGroupProps {
  title: string;
  programs: Array<{
    number: number;
    name: string;
    description: string;
    textBlocks: Array<{
      title: string;
      description: string;
    }>;
    tags: Array<{
      name: string;
      link: string;
    }>;
    link: string;
  }>;
  scrollToId: string;
}

export function ProjectGroup({ title, programs, scrollToId }: IProjectGroupProps) {
  return (
    <div className="project-group" id={scrollToId}>
      <h2>{`Проект "${title}"`}</h2>
      <div className="project-group__programs-container">
        {programs.map((program) => (
          <ProgramCard {...program} key={program.name} />
        ))}
      </div>
    </div>
  );
}
