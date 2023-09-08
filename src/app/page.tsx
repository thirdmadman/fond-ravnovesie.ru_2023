import { Header } from '@/components/Header';
import '../styles/home/home.scss';
import { SectionMission } from '@/components/home/SectionMission';
import { SectionNeeders } from '@/components/home/SectionNeeders';
import { SectionInfo } from '@/components/home/SectionInfo';
import { SectionPrograms } from '@/components/home/SectionPrograms';
import { SectionOurTeam } from '@/components/home/SectionOurTeam';
import { SectionHistory } from '@/components/home/SectionHistory';
import { SectionDonation } from '@/components/home/SectionDonation';
import { SectionSocials } from '@/components/home/SectionSocials';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Благотворительный фонд Равновесие',
  description:
    'Комплексная поддержка людей с депрессивным, биполярным, тревожным и другими психическими расстройствами',
};

export default function Home() {
  return (
    <div className="home-page">
      <style key="title">
        {`body {
            background:
            url('/images/three-color-gradient-home.svg') no-repeat calc(100vw - 1035px) 143px,
            url('/images/ellipse-subtraction-white-home.svg') no-repeat center 2037px,
            url('/images/ellipse-offset-gradient-white-home.svg') no-repeat calc(100vw - 1529px) 5198px;
          }`}
      </style>
      <Header />
      <SectionMission />
      <SectionNeeders />
      <SectionInfo />
      <SectionPrograms />
      <SectionOurTeam />
      <SectionHistory />
      <SectionDonation />
      <SectionSocials />
      <Footer />
    </div>
  );
}
