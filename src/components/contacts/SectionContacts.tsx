import '@/styles/contacts/sectionContacts.scss';
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
      <div className="section-contacts__map">
        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
          >
            Санкт‑Петербург
          </a>
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/house/dumskaya_ulitsa_1_3/Z0kYdQVoQEICQFtjfXVydX1qbQ==/?indoorLevel=1&ll=30.328975%2C59.934200&utm_medium=mapframe&utm_source=maps&z=17"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
          >
            Думская улица, 1-3 на карте Санкт‑Петербурга, ближайшее метро Невский проспект — Яндекс Карты
          </a>
          <iframe
            title="Map"
            src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=30.328975%2C59.934200&mode=whatshere&whatshere%5Bpoint%5D=30.328975%2C59.934199&whatshere%5Bzoom%5D=17&z=17"
            width="100%"
            height="100%"
            frameBorder="1"
            allowFullScreen
            style={{ position: 'relative' }}
          />
        </div>
      </div>
    </section>
  );
}
