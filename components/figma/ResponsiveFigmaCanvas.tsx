"use client";

import type { ReactNode } from "react";
import { useViewportWidth } from "@/components/hooks/useViewportWidth";

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
  const viewportWidth = useViewportWidth();
  const scale = viewportWidth / 1440;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: height * scale, background }}
      data-responsive-canvas
      data-canvas-scale={scale}
    >
      <div
        className="relative w-[1440px] origin-top-left overflow-hidden"
        style={{
          height,
          background,
          transform: `scale(${scale})`,
          willChange: "transform",
        }}
        data-figma-node={nodeId}
      >
        {children}
      </div>
    </div>
  );
}
