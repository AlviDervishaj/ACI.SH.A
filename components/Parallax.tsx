"use client";
import { ReactNode } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export function ParallaxBackground({ children }: { children: ReactNode }) {
  return (
    <ParallaxBanner
      className="aspect-[2/1] w-full h-full"
      layers={[
        { image: "/images/oil-pouring.jpg", speed: -20 },
        {
          speed: 50,
          children: children,
        },
        { image: "/images/oil-pouring.jpg", speed: -10 },
      ]}
    >
      {children}
    </ParallaxBanner>
  );
}
