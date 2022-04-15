import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetProductsFilters, GetProductsResponse } from "types/product";

export const admin = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/admin", credentials: "include" }),
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsFilters>({
      query: (filters) => {
        const { page = 1, limit = 20, q, sort, category, pet, brand, min, max } = filters;
        const params = [];
        if (page) params.push(`page=${page}`);
        if (limit) params.push(`limit=${limit}`);
        if (q) params.push(`q=${q}`);
        if (sort) params.push(`sort=${sort}`);
        if (category) params.push(`category=${category}`);
        if (pet) params.push(`pet=${pet}`);
        if (brand) params.push(`brand=${brand}`);
        if (min) params.push(`min=${min}`);
        if (max) params.push(`max=${max}`);
        return `/products?${params.join("&")}`;
      },
    }),
  }),
});

export const { useGetProductsQuery } = admin;
