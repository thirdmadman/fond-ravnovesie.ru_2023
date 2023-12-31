import '../../styles/home/sectionMission.scss';
import { ButtonDropdown } from './ButtonDropdown';

export function SectionMission() {
  return (
    <section className="section-mission">
      <h1 className="section-mission__title-text">
        <span className="section-mission__text-bage">Равновесие</span> - это благотворительный фонд, оказывающий{' '}
        <span className="underline-blue">комплексную</span> поддержку людям старше 18 лет с психическими расстройствами,
        <br />
        не включающими шизофрению.
      </h1>
      <div className="section-mission__description description">
        <div className="description__buttons">
          <ButtonDropdown buttonText="ПОМОЧЬ ФОНДУ">
            <a href="/help-ways#donate">Пожертвовать</a>
            <a href="/help-ways#become-volunteer">Стать волонтером</a>
            <a href="/help-ways#become-partner">Стать партнером</a>
            <a href="/help-ways#share">Распространить информацию</a>
            <a href="/help-ways#provide-room">Предоставить помещение</a>
          </ButtonDropdown>
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
