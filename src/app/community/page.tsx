import { Header } from '@/components/Header';
import '../../styles/community/community.scss';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { SectionCommunityInfo } from '@/components/community/SectionCommunityInfo';

export const metadata: Metadata = {
  title: 'Сообщество | Благотворительный фонд Равновесие',
  description:
    'Комплексная поддержка людей с депрессивным, биполярным, тревожным и другими психическими расстройствами',
};

export default function Community() {
  return (
    <div className="community-page">
      <div className="container">
        <Header />
        <SectionCommunityInfo />
        <Footer />
      </div>
    </div>
  );
}
