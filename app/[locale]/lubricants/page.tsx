import { getTranslations } from "next-intl/server";

import { title } from "@/components/primitives";
import Filters from "@/components/lubricants/Filters";
import { LubricantItems } from "@/components/lubricants/LubricantItems";

export default async function LubricantsPage(props: {
  searchParams: Promise<{ page: string | undefined }>;
}) {
  const t = await getTranslations("Navigation");
  const { page } = await props.searchParams;

  return (
    <>
      <h1 className={title()}>{t("lubricants")}</h1>
      <div className="self-end pt-6 md:p-0">
        <Filters />
      </div>
      <LubricantItems page={parseInt(page || "1")} />
    </>
  );
}
