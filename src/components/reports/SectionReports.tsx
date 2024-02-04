import '@/styles/reports/sectionReports.scss';
import { fondReports } from '@/fondReports';
import { ReportCard } from './ReportCard';

export function SectionReports() {
  return (
    <section className="section-reports">
      <h1>Отчёты</h1>
      <div className="section-reports__list">
        {fondReports.data.map((el) => (
          <ReportCard {...el} key={el.year} />
        ))}
      </div>
    </section>
  );
}
