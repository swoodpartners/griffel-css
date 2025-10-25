import type { Theme } from "@fluentui/react-components";

type CoreTokens = {
  green50: string;
  green800: string;
  red50: string;
  red800: string;
  blue50: string;
  blue800: string;
} & Partial<Theme>;

export const coreTokens: CoreTokens = {
  green50: "oklch(0.982 0.018 155.826)",
  green800: "oklch(44.8% 0.119 151.328)",
  red50: "oklch(0.97 0.014 254.604)",
  red800: "oklch(0.56 0.15 46.79)",
  blue50: "oklch(0.971 0.013 17.38)",
  blue800: "oklch(0.45 0.26 283.58)",
};

export type BaseTheme = {
  accent: string;
  accentBackgroundDefault: string;
} & CoreTokens &
  Partial<Theme>;

export const semanticTokens: Partial<Record<keyof BaseTheme, string>> = {
  accent: `var(--accent)`,
  accentBackgroundDefault: `var(--accentBackgroundDefault)`,
};
