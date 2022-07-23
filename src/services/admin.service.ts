import type {
  ApproveProductResponse,
  GetProductResponse,
  GetProductsFilters,
  GetProductsResponse,
} from "types/product";
import { GetUserResponse, GetUsersFilters, GetUsersResponse, VerifyUserResponse } from "types/user";
import { api } from "./api.service";

export enum Tags {
  PRODUCTS = "admin/product",
  USERS = "admin/user",
}

export const adminApi = api.enhanceEndpoints({ addTagTypes: Object.values(Tags) }).injectEndpoints({
  endpoints: (builder) => ({
    getAdminProducts: builder.query<GetProductsResponse, GetProductsFilters>({
      query: (params) => ({ url: "admin/product", params }),
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
    getAdminProduct: builder.query<GetProductResponse, string>({
      query: (id) => ({ url: `admin/product`, params: { id } }),
      providesTags: (_result, _error, id) => [{ type: Tags.PRODUCTS, id }],
    }),
    approveProduct: builder.mutation<ApproveProductResponse, string>({
      query: (id) => ({ url: `admin/product/approve`, params: { id }, method: "POST" }),
      invalidatesTags: (result) =>
        result
          ? [{ type: Tags.PRODUCTS, id: result.product._id.toString() }]
          : [{ type: Tags.PRODUCTS, id: "LIST" }],
    }),
    getAdminUsers: builder.query<GetUsersResponse, GetUsersFilters>({
      query: (params) => ({ url: "admin/user", params }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.results.map(({ _id }) => ({
                type: Tags.USERS as const,
                id: _id.toString(),
              })),
              { type: Tags.USERS, id: "LIST" },
            ]
          : [{ type: Tags.USERS, id: "LIST" }],
    }),
    getAdminUser: builder.query<GetUserResponse, string>({
      query: (id) => ({ url: "admin/user", params: { id } }),
      providesTags: (_result, _error, id) => [{ type: Tags.USERS, id }],
    }),
    verifyUser: builder.mutation<VerifyUserResponse, string>({
      query: (id) => ({ url: `admin/user/verify`, params: { id }, method: "POST" }),
      invalidatesTags: (result) =>
        result
          ? [{ type: Tags.USERS, id: result.user._id.toString() }]
          : [{ type: Tags.USERS, id: "LIST" }],
    }),
  }),
});

export const {
  useGetAdminProductsQuery,
  useApproveProductMutation,
  useGetAdminUsersQuery,
  useVerifyUserMutation,
} = adminApi;
