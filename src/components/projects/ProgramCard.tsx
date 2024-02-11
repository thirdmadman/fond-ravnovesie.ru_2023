'use client';

import '@/styles/projects/programCard.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface IProgramCardProps {
  number: number;
  name: string;
  description: string;
  textBlocks: Array<{
    title: string;
    description: string;
  }>;
  tags: Array<{
    name: string;
    link: string;
  }>;
  link: string;
}

export function ProgramCard({ number, name, description, link, textBlocks, tags }: IProgramCardProps) {
  const [isDescriptionHidden, setIsDescriptionHidden] = useState(true);

  return (
    <div className={`program-card ${isDescriptionHidden ? '' : 'program-card_is-opened'}`}>
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
          />
        </button>
      </div>

      <div className={`program-card__description ${isDescriptionHidden ? 'program-card__description_is-hidden' : ''}`}>
        <hr className="program-card__description-separator" />
        <div className="description-body">
          {textBlocks?.length > 0 && (
            <div className="description-body__text-list">
              {textBlocks.map((textBlock) => (
                <div className="text-block" key={textBlock.title}>
                  <h4 className="text-block__title">{textBlock.title}</h4>
                  <p className="text-block__description">{textBlock.description}</p>
                </div>
              ))}
            </div>
          )}
          {tags?.length > 0 && (
            <div className="description-body__tags-list">
              {tags.map((tag) => (
                <div className="description-body__tag" key={tag.name}>
                  {tag.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <Link href={link} className="button-sign-up" type="button">
          Записаться на программу
        </Link>
      </div>
    </div>
  );
}
