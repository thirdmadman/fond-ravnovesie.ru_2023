import '../../styles/home/sectionNeeders.scss';
import needersSectionImage from '../../../public/images/needers-slide-image.png';
import Image from 'next/image';

export function SectionNeeders() {
  return (
    <section className="section-needers">
      <div className="section-needers__images">
        <Image src={needersSectionImage} alt="needers"></Image>
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
