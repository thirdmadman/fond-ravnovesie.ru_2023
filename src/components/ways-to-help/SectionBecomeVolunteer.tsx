import '@/styles/ways-to-help/sectionBecomeVolunteer.scss';

const volunteerHelpDirectionGroupHints = [
  {
    id: 1,
    title: 'Кто такой равной консультант?',
    text: 'Равным консультантом может стать человек, имеющий психиатрический диагноз, находящийся в стабильном состоянии, наблюдающийся у психиатра и психолога',
  },
];

const volunteerHelpDirectionGroups = [
  {
    title: 'Digital',
    list: 'Снимать видеоролики\nВести социальные сети\nПисать тексты для сайта\nЗаниматься дизайном\nЗаниматься продвижением социальных сетей\nЗаниматься продвижением сайта',
    hints: [],
  },
  {
    title: 'Фандрайзеры',
    list: 'Поиск средств для работы фонда\nРазработка акций\nОрганизация акций\nПодача заявок на получение грантов\nНалаживание контактов с бизнесом\nКоммуникация с блогерами',
    hints: [],
  },
  {
    title: 'Координаторы и организаторы проектов',
    list: 'Организация процессов\nВыполнение задач\nКонтроль за выполнением задач',
    hints: [],
  },
  {
    title: 'Психологи',
    list: 'Вести индивидуальные консультации\nВести терапевтические группы\nВести КПТ-тренинги\nГотовить полезные материалы для сайта или социальных сетей\nПроводить супервизии для помогающих специалистов фонда\nПроводить лекции',
    hints: [],
  },
  {
    title: 'Равные консультанты',
    list: 'Консультировать и поддерживать подопечных фонда',
    hints: [1],
  },
];

export function SectionBecomeVolunteer() {
  return (
    <section className="section-become-volunteer" id="become-volunteer">
      <h2>Стать волонтёром</h2>
      <div className="section-become-volunteer__content">
        {volunteerHelpDirectionGroups.map((group) => (
          <div className="section-become-volunteer__help-direction-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="section-become-volunteer__directions-list">
              {group.list.split('\n').map((item) => (
                <li key={item}>{item}</li>
              ))}
              {group.hints.length > 0 &&
                group.hints.map((hintId) => (
                  <li key={hintId}>{volunteerHelpDirectionGroupHints.find((hint) => hint.id === hintId)?.title}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
