import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext<string | null>(null);

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme must be used within a ThemeProvider");
  return theme;
}
