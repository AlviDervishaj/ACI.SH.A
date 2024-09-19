export default function SingleOilSupplierPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return <h1>ID PARAM: {id}</h1>;
}
