import { type BaseTheme, coreTokens } from "./theme-base";

export const gamingLightTheme: BaseTheme = {
  ...coreTokens,
  accent: `var(--blue50)`,
  accentBackgroundDefault: `var(--accent)`,
};

export const gamingDarkTheme: BaseTheme = {
  ...coreTokens,
  accent: `var(--blue800)`,
  accentBackgroundDefault: `var(--accent)`,
};
