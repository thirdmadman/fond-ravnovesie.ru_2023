import '@/styles/home/sectionInfo.scss';
import Image from 'next/image';

export function SectionInfo() {
  return (
    <section className="section-info">
      <div className="section-info__background section-info__background_white-square" />
      <Image
        className="section-info__background"
        src="/images/ellipse-subtraction-white-home.svg"
        alt="background"
        width="1920"
        height="1000"
      />
      <Image
        className="section-info__background section-info__background_gray"
        src="/images/ellipse-gray-home.svg"
        alt="background"
        width="1920"
        height="1000"
      />
      <Image src="/images/visuals/gray-star-black.svg" alt="separator" width="50" height="50" />
      <div className="section-info__main-text">
        Фонд уделяет особое внимание
        <div className="underline-red underline-red_left">
          групповым
          <div className="section-info__offset-text section-info__offset-text_left">
            Исследование себя через взаимодействие с другими в поддерживающей и дружелюбной обстановке{' '}
          </div>
        </div>{' '}
        программам,
        <br /> созданию{' '}
        <div className="underline-red underline-red_right">
          сообщества
          <div className="section-info__offset-text section-info__offset-text_right">
            Сообщество – это объединение людей со схожими интересами и опытом.
          </div>
        </div>
        <br />
        и, как следствие, борьбе со стигматизацией психических расстройств
      </div>
      <div className="section-info__additional-text">
        Психоактивные и психические расстройства диагностируются у каждого 7 человека в России
      </div>
    </section>
  );
}
