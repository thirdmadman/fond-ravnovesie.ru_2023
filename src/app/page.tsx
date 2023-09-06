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
      <Header></Header>
      <SectionMission></SectionMission>
      <SectionNeeders></SectionNeeders>
      <SectionInfo></SectionInfo>
      <SectionPrograms></SectionPrograms>
      <SectionOurTeam></SectionOurTeam>
      <SectionHistory></SectionHistory>
      <SectionDonation></SectionDonation>
      <SectionSocials></SectionSocials>
      <Footer></Footer>
    </div>
  );
}
