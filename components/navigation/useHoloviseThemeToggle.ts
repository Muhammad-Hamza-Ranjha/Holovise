"use client";

import { useCallback } from "react";
import { useTheme } from "next-themes";
import { useMounted } from "@/components/hooks/useMounted";

declare global {
  interface WindowEventMap {
    "holovise-theme-change": CustomEvent<"dark" | "light">;
  }
}

export function useHoloviseThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isLight = mounted && (theme === "light" || resolvedTheme === "light");

  const setHoloviseTheme = useCallback(
    (nextTheme: "dark" | "light") => {
      const root = document.documentElement;

      setTheme(nextTheme);
      root.classList.toggle("dark", nextTheme === "dark");
      root.classList.toggle("light", nextTheme === "light");
      localStorage.setItem("theme", nextTheme);
      window.dispatchEvent(new CustomEvent("holovise-theme-change", { detail: nextTheme }));
    },
    [setTheme],
  );

  const toggleTheme = useCallback(() => {
    setHoloviseTheme(isLight ? "dark" : "light");
  }, [isLight, setHoloviseTheme]);

  return {
    mounted,
    isLight,
    isDark: !isLight,
    toggleTheme,
    setHoloviseTheme,
  };
}
