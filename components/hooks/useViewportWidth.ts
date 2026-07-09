"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("resize", onStoreChange);
  window.visualViewport?.addEventListener("resize", onStoreChange);

  return () => {
    window.removeEventListener("resize", onStoreChange);
    window.visualViewport?.removeEventListener("resize", onStoreChange);
  };
}

function getSnapshot() {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
    Math.floor(window.visualViewport?.width ?? 0),
    1,
  );
}

function getServerSnapshot() {
  return 1440;
}

export function useViewportWidth() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
