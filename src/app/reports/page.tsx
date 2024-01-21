import { Header } from '@/components/shared/Header';
import '../../styles/reports/reports.scss';
import { Footer } from '@/components/shared/Footer';
import { Metadata } from 'next';
import { SectionReports } from '@/components/reports/SectionReports';
import { SectionLegalInfo } from '@/components/reports/SectionLegalInfo';

export const metadata: Metadata = {
  title: 'Отчёты | Благотворительный фонд Равновесие',
  description:
    'Комплексная поддержка людей с депрессивным, биполярным, тревожным и другими психическими расстройствами',
};

export default function Reports() {
  return (
    <div className="reports-page">
      <Header />
      <div className="container">
        <SectionReports />
        <SectionLegalInfo />
        <Footer />
      </div>
    </div>
  );
}
