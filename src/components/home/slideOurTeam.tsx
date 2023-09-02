import {EmblaOptionsType} from 'embla-carousel-react';
import '../../styles/home/slideOurTeam.scss';

import {TeamCard} from './teamCard';
import {TeamCarousel} from './teamCarousel';
import {fondTeam} from './fondTeam';

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export function SlideOurTeam() {
  const leadCardInfo = fondTeam.members[0];

  const teamMembers = fondTeam.members.filter((el, i) => i !== 0);

  return (
    <div className='slide-our-team'>
      <div className='slide-our-team__title'>Наша команда</div>
      <div className='slide-our-team__list team-list'>
        <div className='team-list__title'>короткая информация по опыту специалистов</div>
        <div className='team-list__cards'>
          <TeamCard name={leadCardInfo.name} jobTitle={leadCardInfo.jobTitle} imageSrc='../../../public/images/image120.png' isLead />
          <TeamCarousel
            slides={teamMembers.map((el) => (
              <TeamCard key={el.name} name={el.name} jobTitle={el.jobTitle} imageSrc={el.img} />
            ))}
            options={OPTIONS}
          />
        </div>
      </div>
    </div>
  );
}
