"use client";
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './CarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrowButton';
import useEmblaCarousel from 'embla-carousel-react';
import { FC } from 'react';

type PropType<T> = {
  slides: Array<T>
  options?: EmblaOptionsType
  Component: FC<{ item: T }>
}

export function Carousel<T>(props: PropType<T>) {
  const { slides, options, Component } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <section className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl pb-4">
      <div className="overflow-hidden px-1" ref={emblaRef}>
        <div className="touch-pan-y flex flex-row gap-4 p-4">
          {slides.map((item, index) => (
            <div key={`${item}__${index}`} className="w-fit h-fit">
              <Component item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center content-center justify-between">
        <div className="hidden md:flex flex-row items-center content-center justify-start gap-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="space-x-3 ml-auto">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={index === selectedIndex ? "dark:bg-orange-400 bg-orange-500" : "bg-default-300"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
