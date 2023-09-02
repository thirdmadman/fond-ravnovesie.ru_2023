import '../../styles/home/teamCard.scss';

interface TeamCardProps {
  name: string;
  jobTitle: string;
  imageSrc: string;
  isLead?: boolean;
}

export function TeamCard(props: TeamCardProps) {

  const {name, jobTitle, imageSrc, isLead} = props;

  return (
    <div className={`team-card ${isLead ? 'team-card_lead' : ''}`}>
    <div className='team-card__text'>
      <div className='team-card__name'>{name}</div>
      <div className='team-card__job-title'>{jobTitle}</div>
    </div>
    <img src={imageSrc} alt={name} />
  </div>
  );
}