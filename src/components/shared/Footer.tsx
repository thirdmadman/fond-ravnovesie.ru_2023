import '@/styles/shared/footer.scss';

export function Footer() {
  return (
    <footer className="footer" itemScope itemType="http://schema.org/Organization">
      <div className="footer__horizontal-line" />
      <div className="footer__social-links-list links-list">
        <a href="/" aria-label="tg">
          <div className="links-list__item links-list__item_tg" />
        </a>
        <a href="/" aria-label="vk">
          <div className="links-list__item links-list__item_vk" />
        </a>
        <a href="/" aria-label="yt">
          <div className="links-list__item links-list__item_yt" />
        </a>
      </div>
      <div className="footer__mobile mobile">
        <nav className="mobile__navigation">
          <ul className="mobile__navigation-block">
            <li>Вам нужна помощь?</li>
            <li>
              <a href="/">Проекты</a>
            </li>
            <li>
              <a href="/">Сообщество</a>
            </li>
          </ul>
          <ul className="mobile__navigation-block">
            <li>
              <a href="/">Отчёты</a>
            </li>
            <li>
              <a href="/">Помочь фонду</a>
            </li>
            <li>
              <a href="/">Получить помощь</a>
            </li>
          </ul>
        </nav>
        <div className="mobile__horizontal-separator" />
      </div>
      <div className="footer__contacts">
        <a className="footer__link-email" href="email:info@fond-ravnovesie.ru" itemProp="email">
          info@fond-ravnovesie.ru
        </a>
        <a className="footer__link-phone" href="tel:89313634616" itemProp="telephone">
          8 (931) 363-46-16
        </a>
      </div>

      <p className="footer__fond-name">
        © CC BY-NC-SA <span itemProp="name">Благотворительный фонд “РАВНОВЕСИЕ”</span>
      </p>

      <a href="/">Политика конфиденциальности</a>
      <a href="/">Оферта</a>
    </footer>
  );
}
