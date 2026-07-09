"use client";

import { useTheme } from "next-themes";
import { useMounted } from "@/components/hooks/useMounted";
import { useViewportWidth } from "@/components/hooks/useViewportWidth";
import { DarkHomepage } from "@/components/home/DarkHomepage";
import { LightHomepage } from "@/components/home/LightHomepage";
import { MobileHomepage } from "@/components/home/MobileHomepage";

export function ThemedHomepage() {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const viewportWidth = useViewportWidth();
  const activeTheme = mounted && (theme === "light" || resolvedTheme === "light") ? "light" : "dark";

  if (viewportWidth <= 640) {
    return <MobileHomepage theme={activeTheme} />;
  }

  return activeTheme === "light" ? <LightHomepage /> : <DarkHomepage />;
}
