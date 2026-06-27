"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { footerFrameLinks } from "@/components/figma/StaticFrameLinks";
import type { StaticFigmaPageProps } from "@/components/figma/StaticFigmaPage";
import { useMounted } from "@/components/hooks/useMounted";
import { FigmaAboutDropdown } from "@/components/navigation/AboutMenu";
import { FigmaLanguageDropdown } from "@/components/navigation/LanguageMenu";
import { FigmaServicesDropdown } from "@/components/navigation/ServicesMenu";
import { ThemeToggleButton } from "@/components/navigation/ThemeToggleButton";

export function ThemeAwareStaticFigmaPage({
  asset,
  alt,
  nodeId,
  height,
  lightAsset,
  lightHeight,
  lightNodeId,
  links = [],
  lightLinks,
  children,
  renderChildrenInLight = false,
  showNavigationOverlays = true,
}: StaticFigmaPageProps) {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const isLight = mounted && (theme === "light" || resolvedTheme === "light") && Boolean(lightAsset);
  const pageHeight = isLight ? (lightHeight ?? height) : height;
  const pageAsset = isLight ? (lightAsset ?? asset) : asset;
  const pageNodeId = isLight ? (lightNodeId ?? nodeId) : nodeId;
  const activeLinks = isLight && lightLinks ? lightLinks : links;
  const pageLinks = pageHeight > 2000 ? [...activeLinks, ...footerFrameLinks(pageHeight)] : activeLinks;
  const background = isLight ? "#eaf0fe" : "#080d19";

  return (
    <main className="min-h-screen overflow-x-hidden font-sans" style={{ background }}>
      <div
        className="relative w-full overflow-hidden"
        style={
          {
            "--figma-scale": "calc(100vw / 1440px)",
            height: `calc(${pageHeight}px * var(--figma-scale))`,
            background,
          } as CSSProperties
        }
      >
        <div
          className="relative w-[1440px] origin-top-left overflow-hidden"
          style={{ height: pageHeight, transform: "scale(var(--figma-scale))", background } as CSSProperties}
          data-figma-node={pageNodeId}
        >
          <img
            src={pageAsset}
            alt={alt}
            className="absolute inset-0 h-full w-full select-none object-fill"
            draggable={false}
          />
          {pageLinks.map((link) => (
            <Link
              key={`${link.href}-${link.left}-${link.top}`}
              href={link.href}
              prefetch={false}
              aria-label={link.label}
              className="absolute block"
              style={{
                left: link.left,
                top: link.top,
                width: link.width,
                height: link.height,
              }}
            />
          ))}
          {!isLight || renderChildrenInLight ? children : null}
          <ThemeToggleButton className="absolute left-[1295px] top-[75px] z-[80] h-[31px] w-[31px]" />
          {showNavigationOverlays ? (
            <>
              <FigmaAboutDropdown />
              <FigmaServicesDropdown />
              <FigmaLanguageDropdown />
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}
