"use client";

import { useTheme } from "next-themes";
import { useMounted } from "@/components/hooks/useMounted";
import { DarkHomepage } from "@/components/home/DarkHomepage";
import { LightHomepage } from "@/components/home/LightHomepage";

export function ThemedHomepage() {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  return mounted && (theme === "light" || resolvedTheme === "light") ? <LightHomepage /> : <DarkHomepage />;
}
