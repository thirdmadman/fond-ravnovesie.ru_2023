import Image from 'next/image';

import '@/styles/ways-to-help/sectionProvidePremises.scss';

export function SectionProvidePremises() {
  return (
    <section className="section-provide-premises" id="provide-premises">
      <h2>Предоставить помещение</h2>
      <div className="section-provide-premises__body">
        <div className="section-provide-premises__image-container">
          <div className="section-provide-premises__image-wrapper">
            <Image
              src="/images/ways-to-help/provide-premises-image.png"
              alt="photo of use example"
              width={985}
              height={657}
            />
          </div>
        </div>
        <div className="section-provide-premises__text">
          <h3>Для чего нам нужны помещения</h3>
          <p className="section-provide-premises__purposes">
            Тренинги — Группы поддержки — Терапевтические группы — Арт-группы — Индивидуальные консультации — Встречи с
            волонтерами — Интервизии и супервизии — Встречи равных консультантов с подопечными — Лекции — Открытые
            мероприятия, праздники
          </p>
          <p className="section-provide-premises__description">
            Почти для всех наших проектов нужны пространства.Мы будем рады помещению на постоянной основе, регулярной,
            временной или одноразовой, так как у наших проектов разные задачи. А также размеры помещений могут быть
            различными — например, зал для лекции на 100 человек, помещение для тренинга на 12 человек или кабинет для
            консультации на двоих
          </p>
        </div>
      </div>
    </section>
  );
}
