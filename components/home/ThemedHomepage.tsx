"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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
  const [manualTheme, setManualTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    function syncTheme(event: WindowEventMap["holovise-theme-change"]) {
      setManualTheme(event.detail);
    }

    window.addEventListener("holovise-theme-change", syncTheme);
    return () => window.removeEventListener("holovise-theme-change", syncTheme);
  }, []);

  const providerTheme = mounted && (theme === "light" || resolvedTheme === "light") ? "light" : "dark";
  const activeTheme = manualTheme ?? providerTheme;

  if (viewportWidth <= 640) {
    return <MobileHomepage theme={activeTheme} />;
  }

  return activeTheme === "light" ? <LightHomepage /> : <DarkHomepage />;
}
