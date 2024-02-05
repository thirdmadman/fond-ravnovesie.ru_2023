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
        })),
        scrollToId: project.tag,
      };
    });

    return props.map((el) => (
      <ProjectGroup key={el.title} title={el.title} programs={el.programsInProject} scrollToId={el.scrollToId} />
    ));
  };

  return <section className="projects-list">{getProjectGroups()}</section>;
}
