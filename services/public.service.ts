import { api } from "./api.service";
import type { CategoryResponse } from "types/category";
import type { PetResponse } from "types/pet";
import type { BrandResponse } from "types/brand";
import type { GetProductsFilters, GetProductsResponse } from "types/product";

export enum Tags {
  CATEGORIES = "categories",
  PETS = "pets",
  BRANDS = "brands",
  PRODUCTS = "products",
}

export const publicApi = api
  .enhanceEndpoints({ addTagTypes: Object.values(Tags) })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCategories: builder.query<CategoryResponse, void>({
        query: () => "category",
        providesTags: [Tags.CATEGORIES],
      }),
      getPets: builder.query<PetResponse, void>({
        query: () => "pet",
        providesTags: [Tags.PETS],
      }),
      getBrands: builder.query<BrandResponse, void>({
        query: () => "brand",
        providesTags: [Tags.BRANDS],
      }),
      getProducts: builder.query<GetProductsResponse, GetProductsFilters>({
        query: (params) => ({ url: "product", params }),
      }),
    }),
  });

export const { useGetCategoriesQuery, useGetPetsQuery, useGetBrandsQuery, useGetProductsQuery } =
  publicApi;
