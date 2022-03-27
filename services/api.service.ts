import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CategoryResponse } from "types/category";
import type { PetResponse } from "types/pet";
import type { BrandResponse } from "types/brand";

export const api = createApi({
  reducerPath: "category",
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
  }),
});

export const { useGetCategoriesQuery, useGetPetsQuery, useGetBrandsQuery } = api;
