"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useMounted } from "@/components/hooks/useMounted";
import { useViewportWidth } from "@/components/hooks/useViewportWidth";

const DarkHomepage = dynamic(() =>
  import("@/components/home/DarkHomepage").then((module) => module.DarkHomepage),
);
const LightHomepage = dynamic(() =>
  import("@/components/home/LightHomepage").then((module) => module.LightHomepage),
);
const MobileHomepage = dynamic(() =>
  import("@/components/home/MobileHomepage").then((module) => module.MobileHomepage),
);

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
