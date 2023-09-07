import '../styles/footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__horizontal-line"></div>
      <div className="footer__social-links-list links-list">
        <a href="/" aria-label="tg">
          <div className="links-list__item links-list__item_tg"></div>
        </a>
        <a href="/" aria-label="vk">
          <div className="links-list__item links-list__item_vk"></div>
        </a>
        <a href="/" aria-label="yt">
          <div className="links-list__item links-list__item_yt"></div>
        </a>
      </div>
      <div className="footer__contacts" itemScope itemType="http://schema.org/LocalBusiness">
        <a className="footer__link-email" href="email:info@fond-ravnovesie.ru" itemProp="email">
          info@fond-ravnovesie.ru
        </a>
        <a className="footer__link-phone" href="tel:89313634616" itemProp="telephone">
          8 (931) 363-46-16
        </a>
      </div>

      <p className="footer__fond-name">© CC BY-NC-SA <span itemScope itemType="http://schema.org/LocalBusiness" itemProp="name" >Благотворительный фонд “РАВНОВЕСИЕ”</span></p>

      <a href="/">Политика конфиденциальности</a>
      <a href="/">Оферта</a>
    </footer>
  );
}
