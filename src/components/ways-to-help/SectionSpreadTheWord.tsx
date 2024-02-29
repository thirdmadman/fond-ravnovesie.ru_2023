import '@/styles/ways-to-help/sectionSpreadTheWord.scss';

const dummyDescription =
  'блок текста на 300 символов на символов блок текста блок текста на 300 символов на символов блок текста блок текста на 300 символов на символов блок текста блок текста на 300 символов на символов блок текста блок текста на 300 символов на символов блок текста блок текста на 300 символов на символов блок текста ';

const spreadTheWordWays = [
  {
    title: 'Распространение информации о Фонде',
    description: dummyDescription,
  },
  { title: 'Для блогеров и пользователей соц сетей', description: dummyDescription },
  { title: 'Для журналистов', description: dummyDescription },
  { title: 'Для компаний', description: dummyDescription },
  { title: 'Для контента-мейкера, рекламных и креативных агентств', description: dummyDescription },
];

export function SectionSpreadTheWord() {
  return (
    <section className="section-spread-the-word" id="spread-the-word">
      <h2>Распространить информацию</h2>
      <div className="section-spread-the-word__main-text">
        {spreadTheWordWays.map((way) => (
          <div className="section-spread-the-word__text-line text-line" key={way.title}>
            <div className="text-line__title">
              <p>{way.title}</p>
            </div>
            <div className="text-line__description">
              <p>{way.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
