"use client";

import { useState } from "react";

export type FigmaVariantCrop = {
  key: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type FigmaVariantHotspot = {
  key: string;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
  toggle?: boolean;
};

type FigmaVariantOverlayProps = {
  left: number;
  top: number;
  width: number;
  height: number;
  sprite: string;
  spriteWidth: number;
  spriteHeight: number;
  initialKey: string;
  variants: FigmaVariantCrop[];
  hotspots: FigmaVariantHotspot[];
};

export function FigmaVariantOverlay({
  left,
  top,
  width,
  height,
  sprite,
  spriteWidth,
  spriteHeight,
  initialKey,
  variants,
  hotspots,
}: FigmaVariantOverlayProps) {
  const [activeKey, setActiveKey] = useState(initialKey);
  const activeVariant = variants.find((variant) => variant.key === activeKey);

  return (
    <div className="absolute z-20" style={{ left, top, width, height }}>
      {activeVariant && activeKey !== initialKey ? (
        <div
          key={activeKey}
          className="pointer-events-none absolute left-0 top-0 overflow-hidden bg-[#080d19]"
          style={{
            width: activeVariant.width,
            height: activeVariant.height,
            animation: "figma-state-in 300ms ease-out",
          }}
        >
          <img
            src={sprite}
            alt=""
            draggable={false}
            className="absolute max-w-none select-none"
            style={{
              left: -activeVariant.x,
              top: -activeVariant.y,
              width: spriteWidth,
              height: spriteHeight,
            }}
          />
        </div>
      ) : null}

      {hotspots.map((hotspot) => (
        <button
          key={hotspot.key}
          type="button"
          aria-label={hotspot.label}
          aria-pressed={activeKey === hotspot.key}
          onClick={() =>
            setActiveKey((currentKey) =>
              hotspot.toggle && currentKey === hotspot.key ? initialKey : hotspot.key,
            )
          }
          className="absolute z-10 cursor-pointer bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3871f2]"
          style={{
            left: hotspot.left,
            top: hotspot.top,
            width: hotspot.width,
            height: hotspot.height,
          }}
        />
      ))}
    </div>
  );
}
