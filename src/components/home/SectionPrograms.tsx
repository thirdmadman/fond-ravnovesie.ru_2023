import '../../styles/home/sectionPrograms.scss';
import { fondProjects } from '@/fondProjects';
import Link from 'next/link';
import { ProjectGroupCard } from './ProjectGroupCard';

const getHelpSteps = [
  'Перейдите в нашу группу Вконтакте и напишите в сообщения группы, что хотите получить помощь',
  'Бот в сообщениях предложит на выбор несколько проектов',
  'После выбора проекта бот предложит заполнить анкету',
  'После отправления анкеты, с вами свяжется координатор и объяснит дальнейшее взаимодействие',
];

const actionsButtons = [{ name: 'ПЕРЕЙТИ В ГРУППУ ВКОНТАКТЕ', link: '' }];

export function SectionPrograms() {
  const getProjectGroupCards = () => {
    const props = fondProjects.groups.map((projectsGroup, i) => {
      const projectGroupNumber = i + 1;
      const projectGroupName = projectsGroup.groupTitle;

      const projectNamesInGroup = fondProjects.projects
        .filter((el) => projectsGroup.projectIds.includes(el.id))
        .map((el) => el.name);

      return {
        projectGroupNumber,
        projectGroupName,
        projectNamesInGroup,
        link: projectsGroup.link,
      };
    });

    return props.map((el) => <ProjectGroupCard key={el.link} {...el} />);
  };

  return (
    <section className="section-programs">
      <div className="section-programs__get-help get-help">
        <div className="get-help__title">КАК ПОЛУЧИТЬ ПОМОЩЬ</div>
        <ol className="get-help__list">
          {getHelpSteps.map((el, i) => (
            <li key={el}>
              <span>{i + 1}</span>
              <span>{el}</span>
            </li>
          ))}
        </ol>
        {actionsButtons.map((el) => (
          <Link className="get-help__button-to-vk" href={el.link} key={el.link}>
            {el.name}
          </Link>
        ))}
      </div>
      <div className="section-programs__fond-projects fond-projects">
        <div className="fond-projects__title">ПРОЕКТЫ ФОНДА</div>
        <div className="fond-projects__list">{getProjectGroupCards()}</div>
      </div>
    </section>
  );
}
