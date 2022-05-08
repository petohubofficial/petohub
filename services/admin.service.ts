import type { GetProductsFilters, GetProductsResponse } from "types/product";
import { api } from "./api.service";

export enum Tags {
  PRODUCTS = "admin/products",
}

export const adminApi = api.enhanceEndpoints({ addTagTypes: Object.values(Tags) }).injectEndpoints({
  endpoints: (builder) => ({
    getAdminProducts: builder.query<GetProductsResponse, GetProductsFilters>({
      query: (params) => ({ url: "admin/product", params }),
      providesTags: [Tags.PRODUCTS],
    }),
  }),
});

export const { useGetAdminProductsQuery } = adminApi;
