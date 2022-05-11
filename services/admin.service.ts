import type { GetProductsFilters, GetProductsResponse } from "types/product";
import { GetUsersFilters, GetUsersResponse } from "types/user";
import { api } from "./api.service";

export enum Tags {
  PRODUCTS = "admin/product",
  USERS = "admin/user",
}

export const adminApi = api.enhanceEndpoints({ addTagTypes: Object.values(Tags) }).injectEndpoints({
  endpoints: (builder) => ({
    getAdminProducts: builder.query<GetProductsResponse, GetProductsFilters>({
      query: (params) => ({ url: "admin/product", params }),
      providesTags: [Tags.PRODUCTS],
    }),
    getAdminUsers: builder.query<GetUsersResponse, GetUsersFilters>({
      query: (params) => ({ url: "admin/user", params }),
      providesTags: [Tags.USERS],
    }),
  }),
});

export const { useGetAdminProductsQuery, useGetAdminUsersQuery } = adminApi;
