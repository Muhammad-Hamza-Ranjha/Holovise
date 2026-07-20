"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ResponsiveFigmaCanvasProps = {
  height: number;
  designWidth?: number;
  background: string;
  nodeId: string;
  mode?: "legacy-scaled-frame" | "responsive";
  cropTop?: number;
  cropBottom?: number;
  children: ReactNode;
};

export function ResponsiveFigmaCanvas({
  height,
  designWidth = 1440,
  background,
  nodeId,
  mode = "legacy-scaled-frame",
  cropTop = 0,
  cropBottom = 0,
  children,
}: ResponsiveFigmaCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(designWidth);
  const isLegacyFrame = mode === "legacy-scaled-frame";
  const scale = isLegacyFrame ? containerWidth / designWidth : 1;
  const visibleHeight = Math.max(1, height - cropTop - cropBottom);
  const renderedHeight = isLegacyFrame ? Math.ceil(visibleHeight * scale) : visibleHeight;

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let frameId = 0;
    const updateWidth = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        setContainerWidth(Math.max(1, element.getBoundingClientRect().width));
      });
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="figma-responsive-canvas relative w-full overflow-hidden"
      style={{
        height: renderedHeight,
        background,
      }}
      data-responsive-canvas
      data-canvas-mode={mode}
      data-canvas-scale={scale}
      data-frame-width={designWidth}
    >
      <div
        className={`figma-responsive-stage relative origin-top-left ${isLegacyFrame ? "overflow-hidden" : ""}`}
        style={{
          width: designWidth,
          height,
          background,
          marginInline: isLegacyFrame ? undefined : "auto",
          top: isLegacyFrame ? -cropTop * scale : -cropTop,
          transform: isLegacyFrame ? `scale(${scale})` : undefined,
          willChange: isLegacyFrame ? "transform" : undefined,
        }}
        data-figma-node={nodeId}
        data-overlay-layer-model="base-frame decorative-overlay interactive-overlay navigation-chrome floating-action modal"
      >
        {children}
      </div>
    </div>
  );
}
