import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

interface IUseDotButton {
  selectedIndex: number;
  scrollSnaps: Array<number>;
  onDotButtonClick: (index: number) => void;
}

export const useDotButton = (emblaApi: EmblaCarouselType | undefined): IUseDotButton => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApiType: EmblaCarouselType) => {
    setScrollSnaps(emblaApiType.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApiType: EmblaCarouselType) => {
    setSelectedIndex(emblaApiType.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

export function DotButton({ children = '', ...restProps }: PropType) {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}
