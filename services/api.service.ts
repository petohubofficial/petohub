import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CategoryResponse } from "types/category";
import type { PetResponse } from "types/pet";
import type { BrandResponse } from "types/brand";
import type { GetProductsFilters, GetProductsResponse } from "types/product";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse, void>({
      query: () => "category",
    }),
    getPets: builder.query<PetResponse, void>({
      query: () => "pet",
    }),
    getBrands: builder.query<BrandResponse, void>({
      query: () => "brand",
    }),
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
        return `product?${params.join("&")}`;
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetPetsQuery, useGetBrandsQuery, useGetProductsQuery } =
  api;
