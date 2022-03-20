import type { Theme } from "@mui/material";
import { createTheme as createMuiTheme, responsiveFontSizes } from "@mui/material";
import { baseTheme } from "./base";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral?: Neutral;
  }

  interface PaletteOptions {
    neutral?: Neutral;
  }
}

interface ThemeConfig {
  responsiveFontSizes?: boolean;
  theme: "light" | "dark";
}

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(baseTheme, config.theme === "dark" ? darkTheme : lightTheme);
  if (config.responsiveFontSizes) theme = responsiveFontSizes(theme);
  return theme;
};
