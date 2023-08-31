import '../../styles/home/sidePrograms.scss';
import {fondProjects} from './fondProjects';
import {ProjectGroupCard} from './projectGroupCard';

export function SlidePrograms() {
  const getProjectGroupCards = () => {
    const props = fondProjects.groups.map((projectsGroup, i) => {
      const projectGroupNumber = i + 1;
      const projectGroupName = projectsGroup.groupTitle;

      const projectNamesInGroup = fondProjects.projects.filter((el) => projectsGroup.projectIds.includes(el.id)).map((el) => el.name);

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
    <div className='slide-programs'>
      <div className='slide-programs__get-help get-help'>
        <div className='get-help__title'>КАК ПОЛУЧИТЬ ПОМОЩЬ</div>
        <ol className='get-help__list'>
          <li>Перейдите в нашу группу Вконтакте и напишите в сообщения группы, что хотите получить помощь</li>
          <li>Бот в сообщениях предложит на выбор несколько проектов</li>
          <li>После выбора проекта бот предложит заполнить анкету</li>
          <li>После отправления анкеты, с вами свяжется координатор и объяснит дальнейшее взаимодействие</li>
        </ol>
        <button className='get-help__button-to-vk' type='button'>
          ПЕРЕЙТИ В ГРУППУ ВКОНТАКТЕ
        </button>
      </div>
      <div className='slide-programs__fond-projects fond-projects'>
        <div className='fond-projects__title'>ПРОЕКТЫ ФОНДА</div>
        <div className='fond-projects__list'>{getProjectGroupCards()}</div>
      </div>
    </div>
  );
}
