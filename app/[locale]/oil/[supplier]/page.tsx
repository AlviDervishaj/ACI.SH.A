export default function SingleOilSupplierPage({
  params,
}: {
  params: { supplier: string };
}) {
  const { supplier } = params;

  return <h1>{supplier}</h1>;
}
