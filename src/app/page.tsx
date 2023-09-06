import { Header } from '@/components/Header'
import '../styles/home/home.scss';
import { SlideMission } from '@/components/home/SlideMission';
import { SlideNeeders } from '@/components/home/SlideNeeders';
import { SlideInfo } from '@/components/home/SlideInfo';
import { SlidePrograms } from '@/components/home/SlidePrograms';
import { SlideOurTeam } from '@/components/home/SlideOurTeam';
import { SectionHistory } from '@/components/home/SectionHistory';
import { SectionDonation } from '@/components/home/SectionDonation';
import { SectionSocials } from '@/components/home/SectionSocials';
import { Footer } from '@/components/Footer';

export default function Home() {
  return <div className='main-page'>
    <Header></Header>
    <SlideMission></SlideMission>
    <SlideNeeders></SlideNeeders>
    <SlideInfo></SlideInfo>
    <SlidePrograms></SlidePrograms>
    <SlideOurTeam></SlideOurTeam>
    <SectionHistory></SectionHistory>
    <SectionDonation></SectionDonation>
    <SectionSocials></SectionSocials>
    <Footer></Footer>
  </div>
}
