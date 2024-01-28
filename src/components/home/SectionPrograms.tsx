import '@/styles/home/sectionPrograms.scss';
import { fondProjects } from '@/fondProjects';
import Link from 'next/link';
import { ProjectGroupCard } from './ProjectGroupCard';
import { ProjectsGroupCardCarousel } from './ProjectsGroupCardCarousel';

const getHelpSteps = [
  'Перейдите в нашу группу Вконтакте и напишите в сообщения группы, что хотите получить помощь',
  'Бот в сообщениях предложит на выбор несколько проектов',
  'После выбора проекта бот предложит заполнить анкету',
  'После отправления анкеты, с вами свяжется координатор и объяснит дальнейшее взаимодействие',
];

const actionsButtons = [{ name: 'ПЕРЕЙТИ В ГРУППУ ВКОНТАКТЕ', link: '' }];

export function SectionPrograms() {
  const getProjectGroupCards = (isMobile: boolean = false) => {
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

    return props.map((el) => <ProjectGroupCard key={el.link} {...el} isMobile={isMobile} />);
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
        <div className="fond-projects__title">
          <div className="fond-projects__title-star" />
          <h3>ПРОЕКТЫ ФОНДА</h3>
          <div className="fond-projects__title-star fond-projects__title-star_small" />
        </div>
        <div className="fond-projects__list">
          <div className="fond-projects__background fond-projects__background_blue" />
          <div className="fond-projects__background fond-projects__background_pink" />
          {getProjectGroupCards()}
        </div>
        <div className="fond-projects__list-mobile">
          <ProjectsGroupCardCarousel slides={getProjectGroupCards(true)} />
        </div>
      </div>
    </section>
  );
}
