'use client';

import Image from 'next/image';
import '@/styles/ways-to-help/helpWayCard.scss';
import { useState } from 'react';

interface IHelpWayCardProps {
  title: string;
  description: string;
  imageLink: string;
  actionLink: string;
}

export function HelpWayCard({ title, description, imageLink, actionLink }: IHelpWayCardProps) {
  const [isDescriptionOpened, setIsDescriptionOpened] = useState(false);

  return (
    <div className="help-way-card">
      <Image src={imageLink} alt={title} width={365} height={200} />
      <div className="help-way-card__text">
        <h5>{title}</h5>
        <p>{isDescriptionOpened ? description : `${description.slice(0, 200)}...`}</p>
        <button onClick={() => setIsDescriptionOpened(!isDescriptionOpened)} type="button">
          {isDescriptionOpened ? 'Свернуть' : 'Развернуть'}
        </button>
      </div>
      <a href={actionLink} target="_blank" rel="noreferrer">
        Пожертвовать
      </a>
    </div>
  );
}
