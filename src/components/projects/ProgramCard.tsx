'use client';

import '@/styles/projects/programCard.scss';
import Image from 'next/image';
import { useState } from 'react';

interface IProgramCardProps {
  number: number;
  name: string;
  description: string;
}

export function ProgramCard({ number, name, description }: IProgramCardProps) {
  const [isDescriptionHidden, setIsDescriptionHidden] = useState(true);

  return (
    <div className="program-card">
      <div className="program-card__header">
        <div className="program-card__number">
          <p>{`0${number}`}</p>
        </div>
        <div className="program-card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <button
          className="program-card__button"
          aria-label="Read more"
          type="button"
          onClick={() => setIsDescriptionHidden(!isDescriptionHidden)}
        >
          <Image
            src="images/icons/icon-arrow-down-black-rounded-accordion.svg"
            width={50}
            height={26}
            alt="arrow down"
            style={{ rotate: isDescriptionHidden ? '0deg' : '180deg' }}
          />
        </button>
      </div>

      <div className={`program-card__description ${isDescriptionHidden ? 'program-card__description_is-hidden' : ''}`}>
        <hr className="program-card__description-separator" />
        <div className="description-body">
          <p>Some text here</p>
        </div>
      </div>
    </div>
  );
}
