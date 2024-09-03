export default function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId: supplier } = params;
  return <h1>{supplier}</h1>;
}

