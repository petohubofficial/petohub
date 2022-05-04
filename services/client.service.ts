import { api } from "./api.service";
import type { GetProductsFilters, GetProductsResponse } from "types/product";

export enum Tags {
  PRODUCTS = "client/products",
}

export const clientApi = api
  .enhanceEndpoints({ addTagTypes: Object.values(Tags) })
  .injectEndpoints({
    endpoints: (builder) => ({
      getClientProducts: builder.query<GetProductsResponse, GetProductsFilters>({
        query: (params) => ({ url: "client/products", params }),
        providesTags: [Tags.PRODUCTS],
      }),
    }),
  });

export const { useGetClientProductsQuery } = clientApi;
