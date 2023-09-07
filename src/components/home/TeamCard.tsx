import '../../styles/home/teamCard.scss';
import Image from 'next/image';

interface TeamCardProps {
  name: string;
  jobTitle: string;
  imageSrc: string;
  isLead?: boolean;
}

export function TeamCard({ name, jobTitle, imageSrc, isLead = true }: TeamCardProps) {
  return (
    <div className={`team-card ${isLead ? 'team-card_lead' : ''}`}>
      <div className="team-card__text">
        <div className="team-card__name">{name}</div>
        <div className="team-card__job-title">{jobTitle}</div>
      </div>
      <Image src={imageSrc} alt={name} width={isLead ? '250' : '205'} height="400" />
    </div>
  );
}
