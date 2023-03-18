import type { DirectoryContextValue } from "contexts/directory";
import { DirectoryContext } from "contexts/directory";
import { useContext } from "react";
export const useDirectory = (): DirectoryContextValue => useContext(DirectoryContext) as any;
