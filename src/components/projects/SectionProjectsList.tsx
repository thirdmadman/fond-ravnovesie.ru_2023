import { fondProjects } from '@/fondProjects';
import { ProjectGroup } from './ProjectGroup';

import '@/styles/projects/sectionProjectsList.scss';

export function SectionProjectsList() {
  const getProjectGroups = () => {
    const { projects, programs } = fondProjects;

    const props = projects.map((project) => {
      const title = project.projectTitle;

      const programsInProject = programs.filter((el) => project.programIds.includes(el.id));

      return {
        title,
        programsInProject: programsInProject.map((program) => ({
          number: program.id,
          name: program.name,
          description: program.description,
          textBlocks: program.text_blocks,
          tags: program.tags,
          link: program.link,
        })),
        scrollToId: project.tag,
        hints: project.hints,
      };
    });

    return props.map((el) => (
      <ProjectGroup
        key={el.title}
        title={el.title}
        programs={el.programsInProject}
        scrollToId={el.scrollToId}
        hints={el.hints}
      />
    ));
  };

  return <section className="projects-list">{getProjectGroups()}</section>;
}
