import type { BrandResponse } from "types/brand";
import type { CategoryResponse } from "types/category";
import { DirectoriesResponse, GetDirectoriesFilters } from "types/directory";
import type { PetResponse } from "types/pet";
import type { GetProductsFilters, ProductsResponse } from "types/product";
import { api } from "./api.service";

export enum Tags {
  CATEGORIES = "categories",
  PETS = "pets",
  BRANDS = "brands",
  PRODUCTS = "products",
  DIRECTORIES = "directories",
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
      getProducts: builder.query<ProductsResponse, GetProductsFilters>({
        query: (params) => ({ url: "product", params }),
        providesTags: [Tags.PRODUCTS],
      }),
      getDirectories: builder.query<DirectoriesResponse, GetDirectoriesFilters>({
        query: (params) => ({ url: "directory", params }),
        providesTags: [Tags.DIRECTORIES],
      }),
    }),
  });

export const {
  useGetCategoriesQuery,
  useGetPetsQuery,
  useGetBrandsQuery,
  useGetProductsQuery,
  useGetDirectoriesQuery,
} = publicApi;
