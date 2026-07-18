"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const hiddenRoutes = [
  "/contact",
  "/contact-us",
  "/side-drawer",
  "/privacy",
  "/privacy-policy",
  "/terms",
  "/terms-and-conditions",
  "/cookie-consent",
];

export function FloatingGetStarted() {
  const pathname = usePathname();
  const shouldHide = hiddenRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  if (shouldHide) return null;

  return (
    <Link
      href="/contact-us"
      prefetch={false}
      aria-label="Get started with Holovise"
      className="fixed right-0 top-[53%] z-[60] flex h-[160px] w-[40px] -translate-y-1/2 flex-col items-center overflow-hidden rounded-l-[10px] bg-[#3871F2] text-white shadow-none transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3871F2]"
    >
      <span aria-hidden="true" className="mt-[16px] block text-[16px] leading-none">
        {"\uD83D\uDE80"}
      </span>
      <span className="mt-[14px] whitespace-nowrap text-[14px] font-medium leading-none tracking-[0px] [writing-mode:vertical-rl] rotate-180">
        Get Started
      </span>
    </Link>
  );
}
