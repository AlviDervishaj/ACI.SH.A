import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";
import { ParallaxBackground } from "@/components/Parallax";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 lg:py-0 md:py-10  h-full">
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
          <br />
        </ParallaxBackground>
      </div>
    </section>
  );
}
