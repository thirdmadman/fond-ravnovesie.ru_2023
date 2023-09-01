import { Header } from '@/components/home/header'
import '../styles/home/home.scss';
import { SlideMission } from '@/components/home/slideMission';
import { SlideNeeders } from '@/components/home/slideNeeders';
import { SlideInfo } from '@/components/home/slideInfo';
import { SlidePrograms } from '@/components/home/slidePrograms';
import { SlideOurTeam } from '@/components/home/slideOurTeam';

export default function Home() {
  return <div className='main-page'>
    <Header></Header>
    <SlideMission></SlideMission>
    <SlideNeeders></SlideNeeders>
    <SlideInfo></SlideInfo>
    <SlidePrograms></SlidePrograms>
    <SlideOurTeam></SlideOurTeam>
  </div>
}
