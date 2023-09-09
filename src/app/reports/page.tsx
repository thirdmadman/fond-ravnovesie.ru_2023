import { Header } from '@/components/Header';
import '../../styles/reports/reports.scss';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { SectionReports } from '@/components/reports/SectionReports';

export const metadata: Metadata = {
  title: 'Отчёты | Благотворительный фонд Равновесие',
  description:
    'Комплексная поддержка людей с депрессивным, биполярным, тревожным и другими психическими расстройствами',
};

export default function Reports() {
  return (
    <div className="reports-page">
      <div className="container">
        <Header />
        <SectionReports />
        <Footer />
      </div>
    </div>
  );
}
