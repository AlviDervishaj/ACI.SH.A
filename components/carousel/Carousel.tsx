"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButton";
import { DotButton, useDotButton } from "./CarouselDotButton";

type PropType<T> = {
  slides: Array<T>;
  options?: EmblaOptionsType;
  Component: FC<{ item: T }>;
};

export function Carousel<T>(props: PropType<T>) {
  const { slides, options, Component } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 10 * 1000 }),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-[24rem] md:w-full pb-4">
      <div ref={emblaRef} className="overflow-hidden px-1">
        <div className="touch-pan-y flex flex-row gap-4 p-4">
          {slides.map((item, index) => (
            <div key={`${item}__${index}`} className="w-fit h-fit">
              <Component item={item} />
            </div>
          ))}
        </div>
      </div>

      {scrollSnaps.length > 1 ? (
        <div className="flex flex-row items-center content-center justify-between">
          <div className="hidden md:flex flex-row items-center content-center justify-start gap-4">
            <PrevButton
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
            />
            <NextButton
              disabled={nextBtnDisabled}
              onClick={onNextButtonClick}
            />
          </div>
          <div className="space-x-3 ml-auto">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                className={
                  index === selectedIndex
                    ? "dark:bg-orange-400 bg-orange-500"
                    : "bg-slate-400"
                }
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
