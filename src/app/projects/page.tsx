import '@/styles/projects/projects.scss';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Metadata } from 'next';
import { SectionProjectsList } from '@/components/projects/SectionProjectsList';

export const metadata: Metadata = {
  title: 'Проекты | Благотворительный фонд Равновесие',
  description:
    'Комплексная поддержка людей с депрессивным, биполярным, тревожным и другими психическими расстройствами',
};

export default function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <div className="container">
        <SectionProjectsList />
        <Footer />
      </div>
    </div>
  );
}
