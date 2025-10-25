import { type BaseTheme, coreTokens } from "./theme-base";

export const newsLightTheme: BaseTheme = {
  ...coreTokens,
  accent: `var(--red50)`,
  accentBackgroundDefault: `var(--accent)`,
};

export const newsDarkTheme: BaseTheme = {
  ...coreTokens,
  accent: `var(--red800)`,
  accentBackgroundDefault: `var(--accent)`,
};
