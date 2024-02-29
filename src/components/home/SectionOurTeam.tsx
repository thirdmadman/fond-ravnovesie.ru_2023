import { EmblaOptionsType } from 'embla-carousel';
import '@/styles/home/sectionOurTeam.scss';

import { fondTeam } from '@/fondTeam';
import { TeamCard } from './TeamCard';
import { TeamCarousel } from './TeamCarousel';

const OPTIONS: EmblaOptionsType = {};

export function SectionOurTeam() {
  const leadCardInfo = fondTeam.members[0];

  const teamMembers = fondTeam.members.filter((el, i) => i !== 0);

  return (
    <section className="section-our-team">
      <div className="section-our-team__background" />
      <div className="section-our-team__title">Наша команда</div>
      <div className="section-our-team__list team-list">
        <div className="team-list__title">короткая информация по опыту специалистов</div>
        <div className="team-list__cards">
          <TeamCard name={leadCardInfo.name} jobTitle={leadCardInfo.jobTitle} imageSrc={leadCardInfo.img} isLead />
          <TeamCarousel
            slides={teamMembers.map((el) => (
              <TeamCard key={el.name} name={el.name} jobTitle={el.jobTitle} imageSrc={el.img} />
            ))}
            options={OPTIONS}
          />
        </div>
      </div>
    </section>
  );
}
