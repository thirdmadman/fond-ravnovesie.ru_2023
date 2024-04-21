import '@/styles/home/home.scss';
import { Header } from '@/components/shared/Header';
import { SectionMission } from '@/components/home/SectionMission';
import { SectionNeeders } from '@/components/home/SectionNeeders';
import { SectionInfo } from '@/components/home/SectionInfo';
import { SectionPrograms } from '@/components/home/SectionPrograms';
import { SectionOurTeam } from '@/components/home/SectionOurTeam';
import { SectionHistory } from '@/components/home/SectionHistory';
import { SectionDonation } from '@/components/home/SectionDonation';
import { SectionSocials } from '@/components/home/SectionSocials';
import { Footer } from '@/components/shared/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Благотворительный фонд Равновесие',
  description:
    'Комплексная поддержка людей с депрессивным, биполярным, тревожным и другими психическими расстройствами',
};

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="container">
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
    </div>
  );
}
