import { GetProductsFilters, ProductResponse, ProductsResponse } from "types/product";
import { api } from "./api.service";

export enum Tags {
  PRODUCTS = "client/product",
}

export const clientApi = api
  .enhanceEndpoints({ addTagTypes: Object.values(Tags) })
  .injectEndpoints({
    endpoints: (builder) => ({
      getClientProducts: builder.query<ProductsResponse, GetProductsFilters>({
        query: (params) => ({ url: "client/product", params }),
        providesTags: (result) =>
          result
            ? [
                ...result.data.results.map(({ _id }) => ({
                  type: Tags.PRODUCTS as const,
                  id: _id.toString(),
                })),
                { type: Tags.PRODUCTS, id: "LIST" },
              ]
            : [{ type: Tags.PRODUCTS, id: "LIST" }],
      }),
      getClientProduct: builder.query<ProductResponse, string>({
        query: (id) => ({ url: `client/product`, params: { id } }),
        providesTags: (_result, _error, id) => [{ type: Tags.PRODUCTS, id }],
      }),
      addClientProduct: builder.mutation<ProductResponse, FormData>({
        query: (body) => ({ url: "client/product", method: "POST", body }),
        invalidatesTags: [{ type: Tags.PRODUCTS, id: "LIST" }],
      }),
      editClientProduct: builder.mutation<ProductResponse, { id: string; body: FormData }>({
        query: ({ id, body }) => ({ url: "client/product", method: "PUT", params: { id }, body }),
        invalidatesTags: (result) =>
          result
            ? [{ type: Tags.PRODUCTS, id: result.product._id.toString() }]
            : [{ type: Tags.PRODUCTS, id: "LIST" }],
      }),
      deleteClientProduct: builder.mutation<ProductResponse, string>({
        query: (id) => ({ url: "client/product", method: "DELETE", params: { id } }),
        invalidatesTags: (result) =>
          result
            ? [{ type: Tags.PRODUCTS, id: result.product._id.toString() }]
            : [{ type: Tags.PRODUCTS, id: "LIST" }],
      }),
    }),
  });

export const {
  useGetClientProductsQuery,
  useGetClientProductQuery,
  useAddClientProductMutation,
  useEditClientProductMutation,
  useDeleteClientProductMutation,
} = clientApi;
