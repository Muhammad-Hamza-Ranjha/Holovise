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
  return document.documentElement.clientWidth || 1440;
}

function getServerSnapshot() {
  return 1440;
}

export function useViewportWidth() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
