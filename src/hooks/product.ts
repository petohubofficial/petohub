import type { ProductContextValue } from "contexts/product";
import { ProductContext } from "contexts/product";
import { useContext } from "react";
export const useProduct = (): ProductContextValue => useContext(ProductContext) as any;
