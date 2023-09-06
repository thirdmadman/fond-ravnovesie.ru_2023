import '../../styles/home/sectionInfo.scss';
import imageSeparator from '../../../public/images/visuals/gray-star.svg';
import Image from 'next/image'

export function SectionInfo() {
  return (
    <section className='section-info'>
      <Image src={imageSeparator} alt='separator'></Image>
      <div className='section-info__main-text'>
        Фонд уделяет особое внимание 
        <div className='underline-red underline-red_left'>
        групповым
          <div className='section-info__offset-text section-info__offset-text_left'>
            Исследование себя через взаимодействие с другими в поддерживающей и дружелюбной обстановке{' '}
          </div>
        </div>
        {' '}программам,<br></br> созданию{' '}
        <div className='underline-red underline-red_right'>
        сообщества 
          <div className='section-info__offset-text section-info__offset-text_right'>
            Сообщество – это объединение людей со схожими интересами и опытом.
          </div>
        </div>
        <br></br>и, как следствие, борьбе со стигматизацией психических расстройств
      </div>
      <div className='section-info__additional-text'>
        Психоактивные и психические расстройства диагностируются у каждого 7 человека в России
      </div>
    </section>
  );
}
