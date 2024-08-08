import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";
import { ParallaxBackground } from "@/components/Parallax";
import { Oil } from "@/components/Oil";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full relative">
      <div className="inline-block w-screen h-screen text-center justify-center">
        <ParallaxBackground>
          <section className="absolute inset-0 w-full flex items-center justify-center bg-white/20 dark:bg-black/50">
            <h1
              className={title({
                size: "lg",
                className:
                  "text-center drop-shadow-md w-fit h-fit p-2 light:text-black",
              })}
            >
              {t.rich("title", {
                distributor: (chunk) => (
                  <p className={title({ size: "lg", color: "orange" })}>
                    &nbsp;{chunk}&nbsp;
                  </p>
                ),
              })}
            </h1>
          </section>
        </ParallaxBackground>
      </div>
      <div className="w-full gap-2 flex flex-col md:flex-row items-center content-center justify-evenly p-8 my-8">
        <Oil image={"/images/galp.png"} title={"Galp"} />
        <Oil image={"/images/repsol-car.jpg"} title={"Repsol"} />
        <Oil
          image={"/images/prefix.jpg"}
          imageStyle={"-translate-x-10"}
          title={"Prefix"}
        />
      </div>
    </section>
  );
}
