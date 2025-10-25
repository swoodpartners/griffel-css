import { coreTokens, type BaseTheme } from "./theme-base";

export const financeLightTheme: BaseTheme = {
  ...coreTokens,
  accent: `var(--green50)`,
  accentBackgroundDefault: `var(--accent)`,
};

export const financeDarkTheme: BaseTheme = {
  ...coreTokens,
  accent: `var(--green800)`,
  accentBackgroundDefault: `var(--accent)`,
};
