import '../../styles/community/sectionCommunityInfo.scss';
import Image from 'next/image';

export function SectionCommunityInfo() {
  return (
    <section className="community-info">
      <div className="community-info__header">Сообщество объединяет людей со схожими интересами и опытом</div>
      <div className="community-info__img-wrapper">
        {/*  eslint-disable-next-line react/jsx-boolean-value */}
        <Image src="/images/community/lines.svg" fill={true} alt="lines" className="lines-img" />
      </div>
      <p className="community-info__description">
        Мы организовываем мероприятия и развиваем волонтерство в сфере психического и психологического здоровья. В нашем
        сообществе люди с расстройствами и профильные специалисты оказывают помощь и поддержку, как подопечным, так и
        друг другу.
      </p>
      <div className="community-info__pictures">
        <Image
          src="/images/community/picture1.png"
          width={650}
          height={570}
          alt="motivation"
          className="community-picture picture-left"
          sizes="(max-width: 190px) 100vw"
        />
        <Image
          src="/images/community/picture2.png"
          width={960}
          height={570}
          alt="dance"
          className="community-picture picture-right"
          sizes="(max-width: 290px) 100vw"
        />
      </div>
    </section>
  );
}
