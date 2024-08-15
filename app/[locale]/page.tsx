import { ParallaxBackground } from "@/components/Parallax";
import { RenderOilCompanies } from "@/components/oil/RenderOilCompanies";
import { OilCompaniesHeader } from "@/components/oil/OilCompaniesHeader";
import { FadeInHeader } from "@/components/FadeInHeader";
import { useTranslations } from "next-intl";
import { title } from "@/components/primitives";
import { convertMillisecondsToSeconds } from "@/lib/utils";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full relative">
      <div className="inline-block w-screen h-screen text-center justify-center">
        <ParallaxBackground>
          <section className="absolute inset-0 w-full flex flex-col gap-10 items-center justify-center dark:backdrop-blur-none backdrop-blur bg-black/50">
            <FadeInHeader delay={convertMillisecondsToSeconds(500)}>
              <p className={title({ size: "lg" })}>
                {t("title")}
              </p>
            </FadeInHeader>
            <FadeInHeader delay={convertMillisecondsToSeconds(700)}>
              <p className={title({ size: "md" })}>
                {t.rich("header_description", {
                  distributor: (chunk) => (
                    <p className={title({ size: "lg", color: "orange" })}>
                      &nbsp;{chunk}&nbsp;
                    </p>
                  ),
                })}
              </p>
            </FadeInHeader>
          </section>
        </ParallaxBackground>
      </div>
      <OilCompaniesHeader />
      <RenderOilCompanies />
    </section >
  );
}
