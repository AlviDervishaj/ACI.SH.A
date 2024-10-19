"use client";

import Image, { StaticImageData } from "next/image";
import { useCallback, useMemo, useState } from "react";

import G1 from "../../../public/images/gallery/1.jpeg";
import G2 from "../../../public/images/gallery/2.jpg";
import G3 from "../../../public/images/gallery/3.jpg";
import G4 from "../../../public/images/gallery/4.jpg";
import G5 from "../../../public/images/gallery/5.jpg";
import G6 from "../../../public/images/gallery/6.jpg";
import G7 from "../../../public/images/gallery/7.jpg";
import G8 from "../../../public/images/gallery/8.jpg";
import G9 from "../../../public/images/gallery/9.jpg";
import G10 from "../../../public/images/gallery/10.jpg";
import G11 from "../../../public/images/gallery/11.jpg";

import { Button } from "@/components/ui/button";
import { useDialog } from "@/hooks/useDialog";

const images = [G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11];

export default function GalleryHomePage() {
  const { isOpened, ref, openDialog, closeDialog } = useDialog();
  const [image, setImage] = useState<StaticImageData>({
    src: "",
    width: 0,
    height: 0,
  });

  const handleOnOpen = useCallback(
    (_img: StaticImageData) => {
      setImage(_img);
      openDialog();
    },
    [openDialog],
  );

  const currentImageIndex = useMemo(() => {
    return images.findIndex((_img) => _img.src === image.src);
  }, [images.length, image.src]);

  const hasNext = useMemo(() => {
    return currentImageIndex + 1 < images.length;
  }, [currentImageIndex]);

  const hasPrevious = useMemo(() => {
    return currentImageIndex - 1 >= 0;
  }, [currentImageIndex]);

  return (
    <section className="grid place-items-center grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-6 md:mt-6 lg:mt-0 p-1 md:p-4 lg:p-6 w-full h-full">
      {images.map((_img) => (
        <Image
          key={_img.src}
          alt={_img.src}
          className="cursor-pointer w-full h-full object-contain aspect-square"
          src={_img}
          onClick={() => handleOnOpen(_img)}
        />
      ))}
      <dialog
        ref={ref}
        className="w-dvw h-dvh lg:w-4/12 backdrop:bg-slate-200/70 dark:backdrop:bg-slate-800/70"
      >
        {isOpened && (
          <section className="w-full h-full p-4 m-0 flex flex-col items-center content-between">
            <h1 className="flex flex-col gap-1 text-lg lg:text-xl font-medium">
              AÇI SH.A Photo
            </h1>
            <div className="flex flex-row items-center content-center justify-center my-auto">
              <Image
                key={image.src}
                alt={image.src}
                className="object-contain aspect-sqaure"
                src={image}
              />
            </div>
            <section className="w-full flex flex-row items-center content-center justify-between pt-4">
              <Button
                className="bg-red-500 dark:bg-red-500 dark:text-white text-base"
                variant={"destructive"}
                onClick={closeDialog}
              >
                Close
              </Button>
              <div className="flex gap-4">
                <Button
                  className="dark:bg-foreground dark-background"
                  disabled={!hasPrevious}
                  onClick={() => setImage(images[currentImageIndex - 1])}
                >
                  <svg className="w-4 h-4" viewBox="0 0 532 532">
                    <path
                      d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
                <Button
                  className="dark:bg-foreground dark-background"
                  disabled={!hasNext}
                  onClick={() => setImage(images[currentImageIndex + 1])}
                >
                  <svg className="w-4 h-4" viewBox="0 0 532 532">
                    <path
                      d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </div>
            </section>
          </section>
        )}
      </dialog>
    </section>
  );
}
