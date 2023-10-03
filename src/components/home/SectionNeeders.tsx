import '../../styles/home/sectionNeeders.scss';
import Image from 'next/image';
import needersSectionPhoto1 from '/public/images/needers/photo1.png';
import needersSectionPhoto2 from '/public/images/needers/photo2.png';
import needersSectionPhoto3 from '/public/images/needers/photo3.png';

export function SectionNeeders() {
  return (
    <section className="section-needers">
      <div className="section-needers__images">
        <div className="section-needers__image image-first">
          <div className="image-first__background" />
          <Image src={needersSectionPhoto1} alt="needers" />
        </div>
        <div className="section-needers__image image-second">
          <div className="image-second__background" />
          <Image src={needersSectionPhoto2} alt="needers" />
        </div>
        <div className="section-needers__image image-third">
          <div className="image-third__background" />
          <Image src={needersSectionPhoto3} alt="needers" />
        </div>
      </div>
      <div className="section-needers__text main-text">
        <div className="main-text__title">Мы оказываем помощь людям из любого города России:</div>
        <div className="main-text__main-profile">
          <ul>
            <li>биполярное аффективное расстройство</li>
            <li>циклотимия</li>
            <li>депрессивное расстройство</li>
            <li>тревожное и тревожно-депрессивное расстройство</li>
          </ul>
          <ul>
            <li>пограничное и нарциссическое расстройство личности</li>
            <li>расстройство пищевогоповедения</li>
            <li>зависимости</li>
          </ul>
        </div>
        <div className="main-text__additional-profile">
          <p>Также оказываем поддержку</p>
          <ul>
            <li>близким и родственникам людей с психическими расстройствами</li>
            <li>подозревающим у себя психическое расстройство</li>
            <li>помогающим специалистам</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
