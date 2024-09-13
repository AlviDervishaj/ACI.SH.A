"use client";
import { Image } from "@nextui-org/image";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import NextImage, { StaticImageData } from "next/image";
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

export default function GalleryHomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState<StaticImageData>();
  const images = [G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11,];

  function handleOnOpen(_img: StaticImageData) {
    setImage(_img);
    onOpen();
  }

  return (
    <section className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 w-full h-full">
      {images.map((_img) =>
        <Image onClick={() => handleOnOpen(_img)}
          key={_img.src} className="cursor-pointer"
          alt={_img.src} as={NextImage} isZoomed
          src={_img.src} width={200} height={120}
        />)}
      <Modal backdrop={"blur"}
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">AÇI SH.A Photo</ModalHeader>
              <ModalBody className="flex flex-row items-center content-center justify-center w-full h-full">
                {image ?
                  <div className="relative w-[100dvw] h-[40dvh] md:w-[70dvw] md:h-[50dvh] lg:w-[70dvw] lg:w-[70dvh]">
                    <NextImage fill={true} key={image.src} className="object-contain aspect-sqaure" alt={image.src} src={image} />
                  </div>
                  : null
                }
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}

        </ModalContent>
      </Modal>
    </section >
  );
}

