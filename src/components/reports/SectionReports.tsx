import '../../styles/reports/sectionReports.scss';
import { ReportCard } from './ReportCard';

const reports = {
  data: [
    {
      year: 2023,
      description: '',
      link: '/',
    },
    {
      year: 2022,
      description: '',
      link: '/',
    },
    {
      year: 2021,
      description: '',
      link: '/',
    },
  ],
};

export function SectionReports() {
  return (
    <div className="section-reports">
      <h1>Отчёты</h1>
      <div className="section-reports__list">
        {reports.data.map((el) => (
          <ReportCard {...el} key={el.year} />
        ))}
      </div>
    </div>
  );
}
