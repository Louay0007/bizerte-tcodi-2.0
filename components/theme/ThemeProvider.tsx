"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const themes = ["fire", "air", "classic", "water", "earth"] as const;
export type ThemeName = (typeof themes)[number];

export const themeDetails: Record<ThemeName, { label: string; accent: string; particleColors: string[] }> = {
  fire: { label: "Fire", accent: "#ef4444", particleColors: ["#ffffff", "#ef4444", "#fb7185"] },
  air: { label: "Air", accent: "#22d3ee", particleColors: ["#ffffff", "#22d3ee", "#67e8f9"] },
  classic: { label: "Classic", accent: "#e5e7eb", particleColors: ["#ffffff", "#e5e7eb", "#a3a3a3"] },
  water: { label: "Water", accent: "#3b82f6", particleColors: ["#ffffff", "#3b82f6", "#60a5fa"] },
  earth: { label: "Earth", accent: "#22c55e", particleColors: ["#ffffff", "#22c55e", "#86efac"] },
};

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const storageKey = "bizertet-codi-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("classic");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey);
    if (savedTheme && themes.includes(savedTheme as ThemeName)) {
      setThemeState(savedTheme as ThemeName);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    setTheme: setThemeState,
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
