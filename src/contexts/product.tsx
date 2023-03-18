import { createContext, Dispatch, SetStateAction } from "react";
import { GetProductsFilters } from "types/product";

export interface ProductContextValue {
  filters: GetProductsFilters;
  appliedFilters: GetProductsFilters;
  setFilters: Dispatch<SetStateAction<GetProductsFilters>>;
  setAppliedFilters: Dispatch<SetStateAction<GetProductsFilters>>;
}

export const initialFilters: GetProductsFilters = {
  limit: 10,
  page: 1,
  category: "",
  sort: "",
  pet: "",
  min: 0,
  max: 50000,
};

export const ProductContext = createContext<ProductContextValue>({
  filters: initialFilters,
  appliedFilters: initialFilters,
  setFilters: () => void 0,
  setAppliedFilters: () => void 0,
});

export const ProductProvider = ProductContext.Provider;
