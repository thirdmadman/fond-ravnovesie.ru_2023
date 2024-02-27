'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

import '@/styles/ways-to-help/waysToHelpCarousel.scss';

interface IWaysToHelpCarouselProps {
  slides: Array<JSX.Element>;
  options?: EmblaOptionsType;
}

const defaultOptions = {};

export function WaysToHelpCarousel({ slides, options = defaultOptions }: IWaysToHelpCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className={`ways-to-help-carousel ${slides.length < 3 && 'ways-to-help-carousel_short-slide'}`}>
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
