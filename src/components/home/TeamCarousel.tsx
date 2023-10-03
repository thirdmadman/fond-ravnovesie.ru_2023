'use client';

import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import '../../styles/home/teamCarousel.scss';

type PropType = {
  slides: JSX.Element[];
  options?: EmblaOptionsType;
};

export function TeamCarousel({ slides, options = {} }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className="team-carousel">
      <button
        className="team-carousel__next-left"
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="scrollPrev"
      />
      <div className="team-carousel__viewport" ref={emblaRef}>
        <div className="team-carousel__container">{slides}</div>
      </div>
      <button
        className="team-carousel__next-right"
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="scrollNext"
      />
    </div>
  );
}
