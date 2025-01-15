import { getTranslations } from "next-intl/server";

import { title } from "@/components/primitives";
import { LubricantItems } from "@/components/lubricants/LubricantItems";
import { Suspense } from "react";
import { Loading } from "@/components/_layout/Loading";
import { getAllProducts } from "@/actions/getAllProducts";

export default async function LubricantsPage(props: {
  searchParams: Promise<{
    page: string | undefined;
    filter: string | undefined;
    term: string | undefined;
  }>;
}) {
  const t = await getTranslations("Navigation");
  const { page: _page, filter: _filter, term: _term } = await props.searchParams;
  const page = parseInt(_page || "1");
  const filter: string[] = _filter ? _filter.split(",").filter(a => a) : [];
  const term: string = _term || "";

  const { products, error } = await getAllProducts(page, filter, term);

  const totalPages = products.pagination.next
    ? Math.ceil(products.pagination.count / products.data.length)
    : page;
  const isNextPageAvailable = products.pagination.next !== null;
  const isPreviousPageAvailable = products.pagination.previous !== null;


  return (
    <main className="pt-6 lg:pt-10 w-full h-full">
      <h1 className={title()}>{t("lubricants")}</h1>
      <Suspense fallback={<Loading />}>
        <LubricantItems
          totalPages={totalPages}
          isNextPageAvailable={isNextPageAvailable}
          isPreviousPageAvailable={isPreviousPageAvailable}
          products={products}
          error={error}
          page={page}
        />
      </Suspense>
    </main>
  );
}
