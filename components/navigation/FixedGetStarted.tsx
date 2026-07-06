"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket } from "lucide-react";

export function FixedGetStarted() {
  const pathname = usePathname();
  const isServicePage = pathname.startsWith("/services/");
  const needsLightServiceRail =
    pathname === "/services/desktop-app-development";
  const hasBakedDarkButton =
    pathname === "/portfolio" ||
    pathname === "/our-portfolio" ||
    pathname === "/about/who-we-are" ||
    pathname === "/who-we-are" ||
    pathname === "/services/web-app-development";

  return (
    <Link
      href="/contact-us"
      prefetch={false}
      aria-label="Get Started"
      className={`fixed right-0 top-1/2 z-[200] flex h-[180px] w-[46px] -translate-y-1/2 flex-col items-center rounded-l-[8px] bg-[#3871f2] pt-4 text-white shadow-[0_8px_24px_rgba(8,13,25,0.24)] transition-colors hover:bg-[#285fda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-[200px] sm:w-[50px] ${
        isServicePage
          ? needsLightServiceRail
            ? "dark:hidden"
            : "hidden"
          : hasBakedDarkButton
            ? "dark:hidden"
            : ""
      }`}
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
