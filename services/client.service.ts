import { api } from "./api.service";
import type { AddProductResponse, GetProductsFilters, GetProductsResponse } from "types/product";

export enum Tags {
  PRODUCTS = "client/products",
}

export const clientApi = api
  .enhanceEndpoints({ addTagTypes: Object.values(Tags) })
  .injectEndpoints({
    endpoints: (builder) => ({
      getClientProducts: builder.query<GetProductsResponse, GetProductsFilters>({
        query: (params) => ({ url: "client/product", params }),
        providesTags: [{ type: Tags.PRODUCTS, id: "list" }],
      }),
      addClientProduct: builder.mutation<AddProductResponse, FormData>({
        query: (body) => ({ url: "client/product", method: "POST", body }),
        invalidatesTags: [{ type: Tags.PRODUCTS, id: "list" }],
      }),
    }),
  });

export const { useGetClientProductsQuery, useAddClientProductMutation } = clientApi;
