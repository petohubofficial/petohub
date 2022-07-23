import type { SettingsContextValue } from "contexts/settings";
import { SettingsContext } from "contexts/settings";
import { useContext } from "react";
export const useSettings = (): SettingsContextValue => useContext(SettingsContext);
