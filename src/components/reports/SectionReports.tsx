import '@/styles/reports/sectionReports.scss';
import { fondReports } from '@/fondReports';
import { ReportCard } from './ReportCard';

export function SectionReports() {
  return (
    <section className="section-reports">
      <h2>Отчёты</h2>
      <div className="section-reports__list">
        {fondReports.data.map((el) => (
          <ReportCard {...el} key={el.year} />
        ))}
      </div>
    </section>
  );
}
