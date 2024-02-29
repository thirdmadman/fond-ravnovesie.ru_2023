import '@/styles/reports/reportCard.scss';

interface IReportCardProps {
  year: number;
  description: string;
  link: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ReportCard({ year, description, link }: IReportCardProps) {
  return (
    <div className="report-card">
      <h3>{year}</h3>
      <a href={link}>
        <p>Смотреть</p>
      </a>
    </div>
  );
}
