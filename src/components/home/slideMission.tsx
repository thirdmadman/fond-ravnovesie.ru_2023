import '../../styles/home/slideMission.scss'

export function SlideMission() {
  return (
    <div className='slide-mission'>
      <div className='slide-mission__title-text'>
        Равновесие - это благотворительный фонд, оказывающий <span className='underline-blue'>комплексную</span> поддержку людям старше 18 лет с психическими расстройствами, не
        включающими шизофрению.
      </div>
      <div className='slide-mission__description description'>
        <div className='description__buttons'>
          <button className='button' type='button'>
          <p>ПОМОЧЬ ФОНДУ</p>
          </button>
          <button className='button' type='button'>
            <p>ПОЛУЧИТЬ ПОМОЩЬ</p>
          </button>
        </div>
        <div className='description__text'>
          Мы поможем построить маршрут к стабильному состоянию. Важной частью работы мы считаем создание сообщества, объединяющего
          профильных специалистов и людей, понимающих важность психического здоровья. Мы хотим, чтобы каждый, столкнувшись с проблемой, мог
          получить поддержку, реализовать свой потенциал и не зависеть от расстройства.
        </div>
      </div>
    </div>
  );
}
