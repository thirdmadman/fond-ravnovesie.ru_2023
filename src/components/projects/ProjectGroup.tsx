import { ProgramCard } from '@/components/projects/ProgramCard';
import '@/styles/projects/projectGroup.scss';
import { ProjectHint } from './ProjectHint';

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
  hints: Array<{
    title: string;
    description: string;
  }>;
}

export function ProjectGroup({ title, programs, scrollToId, hints }: IProjectGroupProps) {
  return (
    <div className="project-group" id={scrollToId}>
      <div className="project-group__title">
        <h2>{`Проект "${title}"`}</h2>
        {hints?.length > 0 && (
          <div className="project-group__hints">
            {hints.map((hint) => (
              <ProjectHint key={hint.title} title={hint.title} description={hint.description} />
            ))}
          </div>
        )}
      </div>

      <div className="project-group__programs-container">
        <div className="project-group__background" />
        {programs.map((program) => (
          <ProgramCard {...program} key={program.name} />
        ))}
      </div>
    </div>
  );
}
