import { createContext, Dispatch, SetStateAction } from "react";
import { GetDirectoriesFilters } from "types/directory";

export interface DirectoryContextValue {
  filters: GetDirectoriesFilters;
  appliedFilters: GetDirectoriesFilters;
  setFilters: Dispatch<SetStateAction<GetDirectoriesFilters>>;
  setAppliedFilters: Dispatch<SetStateAction<GetDirectoriesFilters>>;
}

export const initialFilters: GetDirectoriesFilters = {
  limit: 10,
  page: 1,
  category: "",
  sort: "",
  pet: "",
  min: 0,
  max: 50000,
};

export const DirectoryContext = createContext<DirectoryContextValue>({
  filters: initialFilters,
  appliedFilters: initialFilters,
  setFilters: () => void 0,
  setAppliedFilters: () => void 0,
});

export const DirectoryProvider = DirectoryContext.Provider;
