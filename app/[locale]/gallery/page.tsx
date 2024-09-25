"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

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

export default function GalleryHomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState<StaticImageData>();
  const images = [G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11];

  function handleOnOpen(_img: StaticImageData) {
    setImage(_img);
    onOpen();
  }

  return (
    <section className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 w-full h-full">
      {images.map((_img) => (
        <Image
          key={_img.src}
          alt={_img.src}
          className="cursor-pointer object-contain aspect-square hover:scale-105 transition-transform duration-300 ease-in-out"
          src={_img}
          onClick={() => handleOnOpen(_img)}
        />
      ))}
      <Modal
        className="bg-foreground dark:bg-background"
        isOpen={isOpen}
        size="full"
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-base md:text-lg lg:text-xl text-background dark:text-foreground">
                AÇI SH.A Photo
              </ModalHeader>
              <ModalBody className="flex flex-row items-center content-center justify-center w-full h-full">
                {image ? (
                  <Image
                    key={image.src}
                    alt={image.src}
                    className="object-contain aspect-sqaure"
                    src={image}
                  />
                ) : null}
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-red-500 dark:bg-red-500 dark:text-white text-base"
                  variant={"destructive"}
                  onClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
