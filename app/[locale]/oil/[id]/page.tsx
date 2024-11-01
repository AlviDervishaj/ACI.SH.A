export default async function SingleOilSupplierPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
  const { id } = params;

  return <h1>ID PARAM: {id}</h1>;
}
