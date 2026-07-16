"use client";

import { useHoloviseThemeToggle } from "@/components/navigation/useHoloviseThemeToggle";

export function ThemeToggleButton({ className = "" }: { className?: string }) {
  const { isLight, toggleTheme } = useHoloviseThemeToggle();

  return (
    <button
      type="button"
      data-theme-toggle
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      aria-pressed={isLight}
      onClick={toggleTheme}
      className={`cursor-pointer bg-transparent ${className}`}
    />
  );
}
