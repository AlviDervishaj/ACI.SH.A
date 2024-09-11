import { CustomCheckbox } from "@/components/custom/CustomCheckbox";

export default function SingleOilSupplierPage({
  params,
}: {
  params: { supplier: string };
}) {
  const { supplier } = params;
  return <CustomCheckbox>
    <h2>{supplier}</h2>
  </CustomCheckbox>;
}
