import { useTranslations } from "next-intl";

import { SUPPORT_TEAM } from "@/config/api";
import { Link } from "@/i18n/routing";

export function TryAgainLater({ isSearchError }: { isSearchError?: boolean }) {
  const t = useTranslations("Errors");

  return (
    <section className="w-full h-full p-2 my-2 grid place-items-center gap-3 text-center">
      {isSearchError ? (
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          {t("no_search_results")}
        </h2>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            {t("no_products")}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            {t("try_again_later")}
          </p>

          <small className="text-base lg:text-lg">
            {t.rich("contact_support_team", {
              supportTeamEmail: (chunk) => (
                <Link
                  className="text-sky-500"
                  href={`mailto:${SUPPORT_TEAM.general_email}`}
                  target="_blank"
                >
                  {chunk}
                </Link>
              ),
            })}
          </small>
        </>
      )}
    </section>
  );
}
