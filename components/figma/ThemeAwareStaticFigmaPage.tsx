"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { footerFrameLinks } from "@/components/figma/StaticFrameLinks";
import { ResponsiveFigmaCanvas } from "@/components/figma/ResponsiveFigmaCanvas";
import type { StaticFigmaPageProps } from "@/components/figma/StaticFigmaPage";
import { useMounted } from "@/components/hooks/useMounted";
import { FigmaAboutDropdown } from "@/components/navigation/AboutMenu";
import { FigmaLanguageDropdown } from "@/components/navigation/LanguageMenu";
import { FigmaServicesDropdown } from "@/components/navigation/ServicesMenu";
import { ThemeToggleButton } from "@/components/navigation/ThemeToggleButton";
import { FigmaContactForm } from "@/components/forms/FigmaContactForm";

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
  const pageLinks =
    pageHeight > 2000
      ? [...activeLinks, ...automaticBreadcrumbLinks, ...footerFrameLinks(pageHeight)]
      : activeLinks;
  const background = wantsLightTheme ? "#eaf0fe" : "#080d19";
  const needsGeneratedLightSurface = wantsLightTheme && !lightAsset;
  const pageImageFilter =
    needsGeneratedLightSurface && !disableGeneratedLightFilter
      ? { filter: "invert(1) hue-rotate(180deg)" }
      : undefined;
  const lightFrameIncludesGetStarted =
    pageAsset.includes("/blockchain-development/") ||
    pageAsset.includes("/no-code-development/") ||
    pageAsset.includes("/product-strategy-consulting/") ||
    pageAsset.includes("/software-development-outsourcing/");
  const hasCustomWhoWeAreRail =
    pathname === "/about/who-we-are" || pathname === "/who-we-are";
  const shouldGenerateLightRail =
    wantsLightTheme &&
    usesLightAsset &&
    pageHeight > 2000 &&
    pathname !== "/contact-us" &&
    pathname !== "/contact" &&
    !lightFrameIncludesGetStarted &&
    !hasCustomWhoWeAreRail;
  const generatedRailTop =
    pathname === "/portfolio" ||
    pathname === "/our-portfolio" ||
    pathname === "/about"
      ? 403
      : 203;
  const shouldRenderContactForm =
    !disableAutoContactForm && (pageHeight > 4000 || contactFormTop !== undefined);
  const activeContactFormTop = usesLightAsset
    ? (lightContactFormTop ?? contactFormTop ?? pageHeight - 2128)
    : (contactFormTop ?? pageHeight - 2128);

  return (
    <main className="min-h-screen overflow-x-hidden font-sans" style={{ background }}>
      <ResponsiveFigmaCanvas height={pageHeight} background={background} nodeId={pageNodeId}>
        <img
          src={pageAsset}
          alt={alt}
          className="absolute inset-0 h-full w-full select-none object-fill"
          style={pageImageFilter}
          draggable={false}
        />
        {shouldGenerateLightRail ? (
          <Link
            href="/contact-us"
            prefetch={false}
            aria-label="Get Started"
            className="absolute left-[1390px] z-[70] flex h-[200px] w-[50px] flex-col items-center rounded-l-[8px] bg-[#3871f2] pt-[17px] text-white shadow-[0_8px_24px_rgba(8,13,25,0.24)] hover:bg-[#285fda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            style={{ top: generatedRailTop }}
          >
            <span aria-hidden="true" className="h-[24px] text-[18px] leading-[24px]">
              🚀
            </span>
            <span
              className="mt-[16px] whitespace-nowrap text-[16px] font-bold leading-[20px]"
              style={{ writingMode: "vertical-rl" }}
            >
              Get Started
            </span>
          </Link>
        ) : null}
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
        <ThemeToggleButton className="absolute left-[1295px] top-[75px] z-[80] h-[31px] w-[31px]" />
        {showNavigationOverlays ? (
          <>
            <FigmaAboutDropdown theme={wantsLightTheme ? "light" : "dark"} />
            <FigmaServicesDropdown theme={wantsLightTheme ? "light" : "dark"} />
            <FigmaLanguageDropdown />
          </>
        ) : null}
      </ResponsiveFigmaCanvas>
    </main>
  );
}
