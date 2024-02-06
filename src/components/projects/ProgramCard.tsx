'use client';

import '@/styles/projects/programCard.scss';
import Image from 'next/image';
import Link from 'next/link';
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
          <div className="description-body__text-list">
            <div className="text-block">
              <h4 className="text-block__title">block__title</h4>
              <p className="text-block__description">block__description</p>
            </div>
            <div className="text-block">
              <h4 className="text-block__title">block__title</h4>
              <p className="text-block__description">block__description</p>
            </div>
          </div>
          <div className="description-body__tags-list">
            <div className="description-body__tag">tag</div>
            <div className="description-body__tag">tag</div>
          </div>
        </div>
        <Link href="." className="button-sign-up" type="button">
          Записаться на программу
        </Link>
      </div>
    </div>
  );
}
