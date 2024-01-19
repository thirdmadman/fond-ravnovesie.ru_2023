'use client';

import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import '../../styles/home/projectsGroupCardCarousel.scss';

type PropType = {
  slides: JSX.Element[];
  options?: EmblaOptionsType;
};

export function ProjectsGroupCardCarousel({ slides, options = {} }: PropType) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="projects-group-card-carousel">
      <div className="projects-group-card-carousel__viewport" ref={emblaRef}>
        <div className="projects-group-card-carousel__container">{slides}</div>
      </div>
    </div>
  );
}
