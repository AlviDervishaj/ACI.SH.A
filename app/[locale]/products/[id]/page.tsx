export default async function SingleProductPage(
  props: {
    params: Promise<{ productId: string }>;
  }
) {
  const params = await props.params;
  const { productId: supplier } = params;

  return <h1>{supplier}</h1>;
}
