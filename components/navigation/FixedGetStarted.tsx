"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket } from "lucide-react";

export function FixedGetStarted() {
  const pathname = usePathname();
  const isServicePage = pathname.startsWith("/services/");
  const hasLowerLegacyRail =
    pathname === "/portfolio" ||
    pathname === "/our-portfolio" ||
    pathname === "/about/who-we-are" ||
    pathname === "/who-we-are";
  const coversLegacyRail = isServicePage || hasLowerLegacyRail;

  if (pathname === "/contact-us" || pathname === "/contact") {
    return null;
  }

  return (
    <Link
      href="/contact-us"
      prefetch={false}
      aria-label="Get Started"
      className={`fixed right-0 z-[200] flex flex-col items-center rounded-l-[8px] bg-[#3871f2] pt-4 text-white shadow-[0_8px_24px_rgba(8,13,25,0.24)] transition-colors hover:bg-[#285fda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        coversLegacyRail
          ? ""
          : "top-1/2 h-[180px] w-[46px] -translate-y-1/2 sm:h-[200px] sm:w-[50px]"
      }`}
      style={
        coversLegacyRail
          ? {
              top: hasLowerLegacyRail
                ? "clamp(180px, 41.875vw, 804px)"
                : "clamp(180px, 27.986vw, 537px)",
              width: "clamp(46px, 3.472vw, 67px)",
              height: "clamp(180px, 13.889vw, 267px)",
            }
          : undefined
      }
    >
      <Rocket aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2} />
      <span
        className="mt-4 whitespace-nowrap text-[14px] font-bold leading-5 sm:text-[16px]"
        style={{ writingMode: "vertical-rl" }}
      >
        Get Started
      </span>
    </Link>
  );
}
