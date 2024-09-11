import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export default function Home() {
  const images = [
    "/images/gallery/1.jpeg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
    "/images/gallery/9.jpg",
    "/images/gallery/10.jpg",
    "/images/gallery/11.jpg",
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {images.map((image) => <Image key={image} as={NextImage} isZoomed src={image} width={300} height={300} />)}
    </section >
  );
}

