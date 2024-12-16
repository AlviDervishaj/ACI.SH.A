import { getTranslations } from "next-intl/server";

import { title } from "@/components/primitives";
import { LubricantItems } from "@/components/lubricants/LubricantItems";

export default async function LubricantsPage(props: {
  searchParams: Promise<{ page: string | undefined }>;
}) {
  const t = await getTranslations("Navigation");
  const { page } = await props.searchParams;

  return (
    <main className="pt-6 lg:pt-10 w-full h-full">
      <h1 className={title()}>{t("lubricants")}</h1>
      <LubricantItems page={parseInt(page || "1")} />
    </main>
  );
}
