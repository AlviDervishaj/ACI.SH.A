import Image from "next/image";
import { useFormatter } from "next-intl";

import { getOneProduct } from "@/actions/getOneProduct";
import { Link } from "@/i18n/routing";

export default async function SingleProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;
  // Decode uri to get the product name
  const productName = decodeURI(id);

  const { products, error } = await getOneProduct(productName);

  const product = products.data[0];

  const numberF = useFormatter();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {error && <h1>{error}</h1>}
      {product && (
        <section
          key={`${product.id} ${product.name}`}
          className="min-w-32 bg-slate-100 w-full h-full p-0 m-0 group relative
      flex flex-col items-center content-center rounded-lg
      sm:w-8/12 md:w-[12.25rem] md:h-fit"
        >
          <Image
            alt={product.name}
            className="object-cover aspect-square w-[7rem] h-[7rem] md:w-[8.25rem] md:h-[8.25rem] pt-2"
            height={150}
            src={product.main_image || "/images/no-image.avif"}
            width={150}
          />
          <div className="lg:p-2 w-11/12 lg:w-full flex flex-col justify-between items-center content-center">
            <Link
              className="text-orange-600/90 dark:text-orange-400 pt-2 text-left hover:border-b-foreground dark:hover:border-b-background border-b border-b-transparent transition-all duration-300 text-xm md:text-sm font-medium tracking-wide self-end w-full truncate inline word-break"
              href={`/lubricants/${product.name}/`}
            >
              {product.name}
            </Link>
            <p className="font-semibold tracking-wide self-end text-sm md:text-base pb-2 lg:pb-0">
              {product.has_discount ? (
                <>
                  <span className="line-through text-xs md:text-sm text-red-500">
                    {numberF.number(product.sell_price, "currency")}
                  </span>{" "}
                  {numberF.number(product.total_discount, "currency")}
                </>
              ) : (
                numberF.number(product.sell_price, "currency")
              )}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
