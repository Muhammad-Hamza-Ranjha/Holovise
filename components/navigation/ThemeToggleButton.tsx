"use client";

import { useTheme } from "next-themes";
import { useMounted } from "@/components/hooks/useMounted";

declare global {
  interface WindowEventMap {
    "holovise-theme-change": CustomEvent<"dark" | "light">;
  }
}

export function ThemeToggleButton({ className = "" }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isLight = mounted && (theme === "light" || resolvedTheme === "light");

  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.classList.contains("light") || isLight ? "dark" : "light";

    root.classList.toggle("dark", nextTheme === "dark");
    root.classList.toggle("light", nextTheme === "light");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
    window.dispatchEvent(new CustomEvent("holovise-theme-change", { detail: nextTheme }));
  }

  return (
    <button
      type="button"
      data-theme-toggle
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      onClick={toggleTheme}
      className={`cursor-pointer bg-transparent ${className}`}
    />
  );
}
