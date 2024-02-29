'use client';

import { useState } from 'react';
import '@/styles/projects/projectHint.scss';

interface IProjectHintProps {
  title: string;
  description: string;
}

export function ProjectHint({ title, description }: IProjectHintProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={`project-group__hint project-hint${isOpened ? ' project-hint_is-opened' : ''}`}>
      <button className="project-hint__link" onClick={() => setIsOpened(!isOpened)} type="button">
        {title}
      </button>
      <div className="project-hint__popup">
        <div className="project-hint__popup-container">
          <div className="project-hint__popup-title">{title}</div>
          <div className="project-hint__popup-description">{description}</div>
          <button
            className="project-hint__popup-close"
            type="button"
            aria-label="Close hint"
            onClick={() => setIsOpened(!isOpened)}
          />
        </div>
      </div>
    </div>
  );
}
