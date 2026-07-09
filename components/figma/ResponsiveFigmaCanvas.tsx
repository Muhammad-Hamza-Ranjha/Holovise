"use client";

import type { ReactNode } from "react";

type ResponsiveFigmaCanvasProps = {
  height: number;
  background: string;
  nodeId: string;
  children: ReactNode;
};

export function ResponsiveFigmaCanvas({
  height,
  background,
  nodeId,
  children,
}: ResponsiveFigmaCanvasProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: `calc(${height}px * (100vw / 1440))`,
        background,
      }}
      data-responsive-canvas
    >
      <div
        className="relative w-[1440px] origin-top-left overflow-hidden"
        style={{
          height,
          background,
          transform: "scale(calc(100vw / 1440))",
        }}
        data-figma-node={nodeId}
      >
        {children}
      </div>
    </div>
  );
}
