import { FILTER_MAP, SORT_PARAMS } from "./Api";

export type ProductSearchFormType = {
  filter_by: Partial<FILTER_MAP>[];
  sort_by: { [key in keyof SORT_PARAMS]: SORT_PARAMS[key] }[];
};
