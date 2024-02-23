'use client';

import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import '@/styles/ways-to-help/waysToHelpCarousel.scss';

interface IWaysToHelpCarouselProps {
  slides: JSX.Element[];
  options?: EmblaOptionsType;
}

export function WaysToHelpCarousel({ slides, options = {} }: IWaysToHelpCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className="ways-to-help-carousel">
      <button
        className="ways-to-help-carousel__next-left"
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="scrollPrev"
      />
      <div className="ways-to-help-carousel__viewport" ref={emblaRef}>
        <div className="ways-to-help-carousel__container">{slides}</div>
      </div>
      <button
        className="ways-to-help-carousel__next-right"
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="scrollNext"
      />
    </div>
  );
}
