"use client";

import dynamic from "next/dynamic";
import type { ServiceDetailSlug } from "@/components/services/ServiceDetailFrame";

const ServicePrototypeInteractions = dynamic(
  () =>
    import("@/components/services/ServicePrototypeInteractions").then(
      (mod) => mod.ServicePrototypeInteractions,
    ),
  { loading: () => null, ssr: false },
);

const MobileAppInteractions = dynamic(
  () =>
    import("@/components/services/MobileAppInteractions").then(
      (mod) => mod.MobileAppInteractions,
    ),
  { loading: () => null, ssr: false },
);

const WebAppInteractions = dynamic(
  () =>
    import("@/components/services/WebAppInteractions").then(
      (mod) => mod.WebAppInteractions,
    ),
  { loading: () => null, ssr: false },
);

const DesktopBenefitsCarousel = dynamic(
  () =>
    import("@/components/services/DesktopBenefitsCarousel").then(
      (mod) => mod.DesktopBenefitsCarousel,
    ),
  { loading: () => null, ssr: false },
);

const DesktopIndustryTabs = dynamic(
  () =>
    import("@/components/services/DesktopIndustryTabs").then(
      (mod) => mod.DesktopIndustryTabs,
    ),
  { loading: () => null, ssr: false },
);

const ServiceCapacityInteractions = dynamic(
  () =>
    import("@/components/services/ServiceCapacityInteractions").then(
      (mod) => mod.ServiceCapacityInteractions,
    ),
  { loading: () => null, ssr: false },
);

export function ServiceInteractionLayers({ slug }: { slug: ServiceDetailSlug }) {
  return (
    <>
      <div className="hidden dark:block">
        <ServicePrototypeInteractions slug={slug} />
      </div>
      <div className="block dark:hidden [filter:invert(1)_hue-rotate(180deg)]">
        <ServicePrototypeInteractions slug={slug} />
      </div>
      {slug === "mobile-app-development" ? <MobileAppInteractions /> : null}
      {slug === "web-app-development" ? <WebAppInteractions /> : null}
      {slug === "desktop-app-development" ? <DesktopBenefitsCarousel /> : null}
      {slug === "desktop-app-development" ? <DesktopIndustryTabs /> : null}
      <ServiceCapacityInteractions slug={slug} />
    </>
  );
}
