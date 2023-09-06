import '../../styles/home/sectionNeeders.scss';
import needersSlideImage from '../../../public/images/needers-slide-image.png';
import Image from 'next/image';

export function SlideNeeders() {
  return (
    <section className='slide-needers'>
      <div className='slide-needers__images'>
        <Image src={needersSlideImage} alt='needers'></Image>
      </div>
      <div className='slide-needers__text slide'>
        <div className='slide-title'>Мы оказываем помощь людям из любого города России:</div>
        <div className='slide__main-profile'>
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
        <div className='slide__additional-profile'>
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
