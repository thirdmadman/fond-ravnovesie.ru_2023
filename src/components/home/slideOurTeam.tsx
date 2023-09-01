import directorImage from '../../../public/images/image 120.png';
import Image from 'next/image';
import '../../styles/home/slideOurTeam.scss';
import '../../styles/home/teamCard.scss';

export function SlideOurTeam() {
  return (
    <div className='slide-our-team'>
      <div className='slide-our-team__title'>Наша команда</div>
      <div className='slide-our-team__list team-list'>
        <div className='team-list__title'>короткая информация по опыту специалистов</div>
        <div className='team-card team-card_lead'>
          <p>
            <div className='team-card__name'>Ксения Ковалева</div>
            <div className='team-card__job-title'>Учредитель и директор фонда</div>
          </p>
          <Image src={directorImage} alt='director' />
        </div>
      </div>
    </div>
  );
}
