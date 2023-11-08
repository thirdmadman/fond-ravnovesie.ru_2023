import Image from 'next/image';
import '../../styles/home/sectionSocials.scss';

import needHelpLogo from '/public/images/socials/need-help-logo.png';
import spbSobakaRuLogo from '/public/images/socials/spb.sobaka.ru-logo.png';
import hseOutreachLogo from '/public/images/socials/hse-outreach-logo.png';
import channel78RuLogo from '/public/images/socials/78.ru-logo.png';

export function SectionSocials() {
  return (
    <section className="section-socials">
      <div className="section-socials__title">Мы в сми</div>
      <div className="section-socials__list">
        <div className="section-socials__list-wrapper">
          <div className="section-socials__list-item">
            <Image src={needHelpLogo} alt="need-help-logo.png" />
          </div>
          <div className="section-socials__list-item">
            <Image src={spbSobakaRuLogo} alt="spb.sobaka.ru-logo.png" />
          </div>
          <div className="section-socials__list-item">
            <Image src={hseOutreachLogo} alt="hse-outreach.png" />
          </div>
          <div className="section-socials__list-item">
            <Image src={channel78RuLogo} alt="78.ru.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
