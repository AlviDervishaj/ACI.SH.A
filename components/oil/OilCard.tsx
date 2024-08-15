"use client";
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useEffect } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { useRouter } from "@/config/routing";

type OilProps = {
  title: string;
  image: string;
  description?: string;
  imageStyle?: string;
} & { delay: number };
export function OilCard({ title, description, image, imageStyle, delay }: OilProps) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/oil/${title.toLowerCase()}`);
  }, [router]);

  function handleCardPress() {
    router.push(`/oil/${title.toLowerCase()}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{ opacity: 0, x: -200 }}
    >
      <Card
        isPressable
        className="md:w-[250px] md:h-[250px] w-[350px] h-[300px] group col-span-12 sm:col-span-5 border-3 border-transparent hover:border-yellow-600 transition-transform-colors duration-1000 ease-in-out"
        onPress={handleCardPress}
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {description}
          </p>
          <h4 className="text-white font-bold tracking-wide text-2xl group-hover:text-yellow-500 transition-colors duration-300 ease-in-out">
            {title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className={clsx(
            "z-0 w-full h-full scale-125 translate-y-7 translate-x-0 object-cover",
            imageStyle,
          )}
          src={image}
        />
      </Card>
    </motion.div>
  );
}
