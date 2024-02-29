'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

import '@/styles/home/projectsGroupCardCarousel.scss';

interface IProjectsGroupCardCarouselProps {
  slides: Array<JSX.Element>;
  options?: EmblaOptionsType;
}

const defaultOptions = {};

export function ProjectsGroupCardCarousel({ slides, options = defaultOptions }: IProjectsGroupCardCarouselProps) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="projects-group-card-carousel">
      <div className="projects-group-card-carousel__viewport" ref={emblaRef}>
        <div className="projects-group-card-carousel__container">{slides}</div>
      </div>
    </div>
  );
}
