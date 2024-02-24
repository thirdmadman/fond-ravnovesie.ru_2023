'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

import '@/styles/home/teamCarousel.scss';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

interface ITeamCarouselProps {
  slides: Array<JSX.Element>;
  options?: EmblaOptionsType;
}

export function TeamCarousel({ slides, options = {} }: ITeamCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

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
        <div className="team-carousel__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'team-carousel__dot'.concat(index === selectedIndex ? ' team-carousel__dot_selected' : '')}
            />
          ))}
        </div>
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
