"use client";

import { useTheme } from "next-themes";
import { useMounted } from "@/components/hooks/useMounted";

export function ThemeToggleButton({ className = "" }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isLight = mounted && (theme === "light" || resolvedTheme === "light");

  return (
    <button
      type="button"
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={`cursor-pointer bg-transparent ${className}`}
    />
  );
}
