import { Header } from '@/components/home/header'
import '../styles/home/home.scss';
import { SlideMission } from '@/components/home/slideMission';
import { SlideNeeders } from '@/components/home/slideNeeders';
import { SlideInfo } from '@/components/home/slideInfo';
import { SlidePrograms } from '@/components/home/slidePrograms';
import { SlideOurTeam } from '@/components/home/slideOurTeam';
import { SectionHistory } from '@/components/home/sectionHistory';
import { SectionDonation } from '@/components/home/sectionDonation';
import { SectionSocials } from '@/components/home/sectionSocials';
import { Footer } from '@/components/footer';

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
