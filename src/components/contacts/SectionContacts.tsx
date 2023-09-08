import '../../styles/contacts/sectionContacts.scss';
import Image from 'next/image';

export function SectionContacts() {
  return (
    <section className="section-contacts">
      <div className="section-contacts__info info">
        <h1>Контакты</h1>
        <p className="info__address">ст. метро Гостиный двор, ул. Думская 1/3</p>
        <p className="info__phone">8(931) 363-46-16</p>
        <p className="info__emails">
          Координаторы проектов: info@fond-ravnovesie.ru
          <br />
          Директор: fond2020bpr@gmail.com
        </p>
        <p className="info__legal-address">
          Юридический адрес: 195197, г. Санкт-Петербург, пр-т Маршала Блюхера, д. 11, к.2, стр.1, кв. 23
        </p>
        <div className="info__socials">
          Свяжитесь с нами в соц сетях!
          <a href="/">
            <Image src="/images/socials/telegram-logo.svg" width="49" height="49" alt="telegram-logo" />
          </a>
          <a href="/">
            <Image src="/images/socials/vk-logo-orogonal-blue.svg" width="49" height="49" alt="vk-logo" />
          </a>
        </div>
      </div>
      <div className="section-contacts__map">!</div>
    </section>
  );
}
