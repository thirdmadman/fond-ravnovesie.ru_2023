import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Metadata } from 'next';
import { SectionCommunityInfo } from '@/components/community/SectionCommunityInfo';
import '../../styles/community/community.scss';

export const metadata: Metadata = {
  title: 'Сообщество | Благотворительный фонд Равновесие',
  description:
    'Комплексная поддержка людей с депрессивным, биполярным, тревожным и другими психическими расстройствами',
};

export default function Community() {
  return (
    <div className="community-page">
      <Header />
      <div className="container">
        <SectionCommunityInfo />
        <Footer />
      </div>
    </div>
  );
}
