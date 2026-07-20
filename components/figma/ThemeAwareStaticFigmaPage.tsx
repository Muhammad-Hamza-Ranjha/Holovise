"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { footerFrameLinks } from "@/components/figma/StaticFrameLinks";
import { ResponsiveFigmaCanvas } from "@/components/figma/ResponsiveFigmaCanvas";
import type { StaticFigmaPageProps } from "@/components/figma/StaticFigmaPage";
import { useMounted } from "@/components/hooks/useMounted";
import { FigmaContactForm } from "@/components/forms/FigmaContactForm";
import { FigmaAboutDropdown } from "@/components/navigation/AboutMenu";
import { FigmaLanguageDropdown } from "@/components/navigation/LanguageMenu";
import { FigmaServicesDropdown } from "@/components/navigation/ServicesMenu";
import { ThemeToggleButton } from "@/components/navigation/ThemeToggleButton";
import { SiteChrome } from "@/components/SiteChrome";

const BAKED_HEADER_HEIGHT = 140;
const BAKED_FOOTER_HEIGHT = 1501;

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
  disableAutoContactForm = false,
  contactFormTop,
  lightContactFormTop,
  disableGeneratedLightFilter = false,
  useSiteChrome = true,
  beforeCanvas,
  contentCropTop,
}: StaticFigmaPageProps) {
  const { theme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const mounted = useMounted();
  const wantsLightTheme = mounted && (theme === "light" || resolvedTheme === "light");
  const usesLightAsset = wantsLightTheme && Boolean(lightAsset);
  const pageHeight = usesLightAsset ? (lightHeight ?? height) : height;
  const pageAsset = usesLightAsset ? (lightAsset ?? asset) : asset;
  const pageNodeId = usesLightAsset ? (lightNodeId ?? nodeId) : nodeId;
  const activeLinks = usesLightAsset && lightLinks ? lightLinks : links;
  const cropTop = useSiteChrome ? (contentCropTop ?? BAKED_HEADER_HEIGHT) : 0;
  const cropBottom = useSiteChrome && pageHeight > 2000 ? BAKED_FOOTER_HEIGHT : 0;
  const hasBreadcrumbLinks = activeLinks.some((link) => link.top >= 240 && link.top <= 340);
  const automaticBreadcrumbLinks =
    pageHeight > 2000 && !hasBreadcrumbLinks
      ? [
          { href: "/", label: "Home breadcrumb", left: 500, top: 270, width: 190, height: 54 },
          {
            href: pathname,
            label: "Current page breadcrumb",
            left: 690,
            top: 270,
            width: 330,
            height: 54,
          },
        ]
      : [];
  const unfilteredPageLinks =
    pageHeight > 2000 && !useSiteChrome
      ? [...activeLinks, ...automaticBreadcrumbLinks, ...footerFrameLinks(pageHeight)]
      : [...activeLinks, ...automaticBreadcrumbLinks];
  const pageLinks = unfilteredPageLinks.filter(
    (link) =>
      !(link.label === "Get Started" && link.left >= 1380 && link.width <= 70 && link.height >= 160) &&
      (!useSiteChrome ||
        (link.top + link.height > cropTop && link.top < pageHeight - cropBottom)),
  );
  const background = wantsLightTheme ? "#eaf0fe" : "#080d19";
  const needsGeneratedLightSurface = wantsLightTheme && !lightAsset;
  const pageImageFilter =
    needsGeneratedLightSurface && !disableGeneratedLightFilter
      ? { filter: "invert(1) hue-rotate(180deg)" }
      : undefined;
  const shouldRenderContactForm =
    !disableAutoContactForm && (pageHeight > 4000 || contactFormTop !== undefined);
  const activeContactFormTop = usesLightAsset
    ? (lightContactFormTop ?? contactFormTop ?? pageHeight - 2128)
    : (contactFormTop ?? pageHeight - 2128);

  const page = (
    <main className="min-h-screen overflow-x-hidden font-sans" style={{ background }}>
      {beforeCanvas}
      <ResponsiveFigmaCanvas
        height={pageHeight}
        background={background}
        nodeId={pageNodeId}
        cropTop={cropTop}
        cropBottom={cropBottom}
      >
        <Image
          src={pageAsset}
          alt={alt}
          fill
          sizes="100vw"
          quality={85}
          priority
          fetchPriority="high"
          className="select-none object-fill"
          style={pageImageFilter}
          draggable={false}
        />
        {pageLinks.map((link) => (
          <Link
            key={`${link.href}-${link.left}-${link.top}`}
            href={link.href}
            prefetch={false}
            aria-label={link.label}
            className="absolute z-20 block cursor-pointer"
            style={{
              left: link.left,
              top: link.top,
              width: link.width,
              height: link.height,
            }}
          />
        ))}
        {!usesLightAsset || renderChildrenInLight ? children : null}
        {shouldRenderContactForm ? (
          <FigmaContactForm
            ariaLabel={`${alt} contact form`}
            left={740}
            subjectContext={alt}
            theme={wantsLightTheme ? "light" : "dark"}
            top={activeContactFormTop}
          />
        ) : null}
        {!useSiteChrome ? (
          <ThemeToggleButton className="absolute left-[1295px] top-[75px] z-[80] h-[31px] w-[31px]" />
        ) : null}
        {!useSiteChrome && showNavigationOverlays ? (
          <>
            <FigmaAboutDropdown theme={wantsLightTheme ? "light" : "dark"} />
            <FigmaServicesDropdown theme={wantsLightTheme ? "light" : "dark"} />
            <FigmaLanguageDropdown />
          </>
        ) : null}
      </ResponsiveFigmaCanvas>
    </main>
  );

  return useSiteChrome ? <SiteChrome>{page}</SiteChrome> : page;
}
