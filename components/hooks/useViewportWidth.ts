"use client";

import { useEffect, useState } from "react";

function measureViewportWidth() {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
    Math.floor(window.visualViewport?.width ?? 0),
    window.screen?.width || 0,
    1,
  );
}

export function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(1440);

  useEffect(() => {
    function updateViewportWidth() {
      setViewportWidth(measureViewportWidth());
    }

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    window.addEventListener("orientationchange", updateViewportWidth);
    window.visualViewport?.addEventListener("resize", updateViewportWidth);

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
      window.removeEventListener("orientationchange", updateViewportWidth);
      window.visualViewport?.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  return viewportWidth;
}
