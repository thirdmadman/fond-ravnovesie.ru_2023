import '../../styles/home/sectionMission.scss';

export function SectionMission() {
  return (
    <section className="section-mission">
      <div className="section-mission__title-text">
        <span className="section-mission__text-bage">Равновесие</span> - это благотворительный фонд, оказывающий{' '}
        <span className="underline-blue">комплексную</span> поддержку людям старше 18 лет с психическими расстройствами,
        <br />
        не включающими шизофрению.
      </div>
      <div className="section-mission__description description">
        <div className="description__buttons">
          <button className="button" type="button">
            <p>ПОМОЧЬ ФОНДУ</p>
          </button>
          <button className="button" type="button">
            <p>ПОЛУЧИТЬ ПОМОЩЬ</p>
          </button>
        </div>
        <div className="description__text">
          Мы поможем построить маршрут к стабильному состоянию. Важной частью работы мы считаем создание сообщества,
          объединяющего профильных специалистов и людей, понимающих важность психического здоровья. Мы хотим, чтобы
          каждый, столкнувшись с проблемой, мог получить поддержку, реализовать свой потенциал и не зависеть от
          расстройства.
        </div>
      </div>
    </section>
  );
}
