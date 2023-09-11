import '../../styles/reports/sectionReports.scss';
import { ReportCard } from './ReportCard';

import { fondReports } from '../../fondReports';

export function SectionReports() {
  return (
    <div className="section-reports">
      <h1>Отчёты</h1>
      <div className="section-reports__list">
        {fondReports.data.map((el) => (
          <ReportCard {...el} key={el.year} />
        ))}
      </div>
    </div>
  );
}
