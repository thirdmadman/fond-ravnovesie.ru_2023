import Image from 'next/image';

import '@/styles/reports/legalPaperCard.scss';

interface ILegalPaperCardProps {
  src: string;
  description: string;
  link: string;
}

export function LegalPaperCard({ src, description, link }: ILegalPaperCardProps) {
  return (
    <div className="legal-paper-card">
      <a href={link}>
        <Image src={src} width="153" height="201" alt={description.slice(0, 10)} />
        <p>{description}</p>
      </a>
    </div>
  );
}
