import Image from 'next/image';
import '@/styles/home/sectionSocials.scss';

const socialsImages = [
  {
    imageSrc: '/images/socials/need-help-logo.png',
    title: 'Need Help Logo',
    link: '',
  },
  {
    imageSrc: '/images/socials/spb.sobaka.ru-logo.png',
    title: 'Spb Sobaka Ru logo',
    link: '',
  },
  {
    imageSrc: '/images/socials/hse-outreach-logo.png',
    title: 'HSE Outreach logo',
    link: '',
  },
  {
    imageSrc: '/images/socials/78.ru-logo.png',
    title: '78 Ru Logo',
    link: '',
  },
];

export function SectionSocials() {
  return (
    <section className="section-socials">
      <div className="section-socials__title">Мы в сми</div>
      <div className="section-socials__list">
        <div className="section-socials__list-wrapper">
          {socialsImages.map((el) => (
            <a href={el.link} key={el.imageSrc} className="section-socials__list-item">
              <Image src={el.imageSrc} alt={el.title} width={156} height={156} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
