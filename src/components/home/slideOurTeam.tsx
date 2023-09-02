import {EmblaOptionsType} from 'embla-carousel-react';
import '../../styles/home/slideOurTeam.scss';

import {TeamCard} from './teamCard';
import {TeamCarousel} from './teamCarousel';
import {fondTeam} from './fondTeam';

const OPTIONS: EmblaOptionsType = {};

export function SlideOurTeam() {
  const leadCardInfo = fondTeam.members[0];

  const teamMembers = fondTeam.members.filter((el, i) => i !== 0);

  return (
    <div className='slide-our-team'>
      <div className='slide-our-team__title'>Наша команда</div>
      <div className='slide-our-team__list team-list'>
        <div className='team-list__title'>короткая информация по опыту специалистов</div>
        <div className='team-list__cards'>
          <TeamCard name={leadCardInfo.name} jobTitle={leadCardInfo.jobTitle} imageSrc={leadCardInfo.img} isLead />
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