import { useContext } from "react";
import { SettingsContext } from "contexts/settings";
import type { SettingsContextValue } from "contexts/settings";
export const useSettings = (): SettingsContextValue => useContext(SettingsContext);
