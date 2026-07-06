import { commonFrameLinks, StaticFigmaPage, type StaticFrameLink } from "@/components/figma/StaticFigmaPage";
import { ServicePrototypeInteractions } from "@/components/services/ServicePrototypeInteractions";
import { MobileAppInteractions } from "@/components/services/MobileAppInteractions";
import { ServiceCapacityInteractions } from "@/components/services/ServiceCapacityInteractions";
import { WebAppInteractions } from "@/components/services/WebAppInteractions";
import { DesktopBenefitsCarousel } from "@/components/services/DesktopBenefitsCarousel";
import { DesktopIndustryTabs } from "@/components/services/DesktopIndustryTabs";

export const serviceDetailFrames = {
  "mobile-app-development": {
    asset: "/assets/services/mobile-app-development/dark/mobile-app-development-frame-expanded.png",
    alt: "Holovise Mobile App Development",
    nodeId: "1:546",
    height: 15347,
    lightAsset: "/assets/services/mobile-app-development/light/mobile-app-development-frame-expanded.png",
    lightNodeId: "70:5000",
    lightHeight: 14926,
  },
  "desktop-app-development": {
    asset: "/assets/services/desktop-app-development/dark/desktop-app-development-frame.png",
    alt: "Holovise Desktop App Development",
    nodeId: "1:3594",
    height: 15437,
    lightAsset: "/assets/services/desktop-app-development/light/desktop-app-development-frame.png",
    lightNodeId: "75:4575",
    lightHeight: 15408,
  },
  "web-app-development": {
    asset: "/assets/services/web-app-development/dark/web-app-development-frame.png",
    alt: "Holovise Web App Development",
    nodeId: "1:1581",
    height: 17474,
    lightAsset: "/assets/services/web-app-development/light/web-app-development-frame.png",
    lightNodeId: "61:3803",
    lightHeight: 17512,
  },
  devsecops: {
    asset: "/assets/services/devsecops/dark/devsecops-frame.png",
    alt: "Holovise DevSecOps Services and Solutions",
    nodeId: "1:2596",
    height: 16195,
    lightAsset: "/assets/services/devsecops/light/devsecops-frame.png",
    lightNodeId: "61:4838",
    lightHeight: 16214,
  },
  "ai-ml-development": {
    asset: "/assets/services/ai-ml-development/dark/ai-ml-development-frame.png",
    alt: "Holovise AI and Machine Learning Development",
    nodeId: "1:4639",
    height: 18308,
    lightAsset: "/assets/services/ai-ml-development/light/ai-ml-development-frame.png",
    lightNodeId: "61:7027",
    lightHeight: 18308,
  },
  "web-3-development": {
    asset: "/assets/services/web-3-development/dark/web-3-development-frame.png",
    alt: "Holovise Web 3.0 Development",
    nodeId: "1:6890",
    height: 15337,
    lightAsset: "/assets/services/web-3-development/light/web-3-development-frame.png",
    lightNodeId: "61:9278",
    lightHeight: 15343,
  },
  "metaverse-ar-vr": {
    asset: "/assets/services/metaverse-ar-vr/dark/metaverse-ar-vr-frame.png",
    alt: "Holovise Metaverse AR and VR Development",
    nodeId: "1:7989",
    height: 14994,
    lightAsset: "/assets/services/metaverse-ar-vr/light/metaverse-ar-vr-frame.png",
    lightNodeId: "61:10464",
    lightHeight: 14997,
  },
  "ui-ux-design": {
    asset: "/assets/services/ui-ux-design/dark/ui-ux-design-frame.png",
    alt: "Holovise UI UX Design",
    nodeId: "1:8893",
    height: 16343,
    lightAsset: "/assets/services/ui-ux-design/light/ui-ux-design-frame.png",
    lightNodeId: "61:11354",
    lightHeight: 16354,
  },
  "software-security": {
    asset: "/assets/services/software-security/dark/software-security-frame.png",
    alt: "Holovise Software Security Solutions",
    nodeId: "1:9853",
    height: 15826,
    lightAsset: "/assets/services/software-security/light/software-security-frame.png",
    lightNodeId: "61:12339",
    lightHeight: 15831,
  },
  "blockchain-development": {
    asset: "/assets/services/blockchain-development/dark/blockchain-development-frame.png",
    alt: "Holovise Blockchain Development",
    nodeId: "1:10954",
    height: 16181,
    lightAsset: "/assets/services/blockchain-development/light/blockchain-development-frame.png",
    lightNodeId: "61:13432",
    lightHeight: 16176,
  },
  "game-development": {
    asset: "/assets/services/game-development/dark/game-development-frame.png",
    alt: "Holovise Game Development",
    nodeId: "1:15608",
    height: 14569,
    lightAsset: "/assets/services/game-development/light/game-development-frame.png",
    lightNodeId: "61:18251",
    lightHeight: 14579,
  },
  "mvp-development": {
    asset: "/assets/services/mvp-development/dark/mvp-development-frame.png",
    alt: "Holovise MVP Development",
    nodeId: "1:12223",
    height: 14886,
    lightAsset: "/assets/services/mvp-development/light/mvp-development-frame.png",
    lightNodeId: "61:14780",
    lightHeight: 14895,
  },
  "product-strategy-consulting": {
    asset: "/assets/services/product-strategy-consulting/dark/product-strategy-consulting-frame.png",
    alt: "Holovise Product Strategy Consulting",
    nodeId: "1:12913",
    height: 16317,
    lightAsset: "/assets/services/product-strategy-consulting/light/product-strategy-consulting-frame.png",
    lightNodeId: "61:15458",
    lightHeight: 16318,
  },
  "no-code-development": {
    asset: "/assets/services/no-code-development/dark/no-code-development-frame.png",
    alt: "Holovise No Code Development",
    nodeId: "1:13815",
    height: 15326,
    lightAsset: "/assets/services/no-code-development/light/no-code-development-frame.png",
    lightNodeId: "61:16385",
    lightHeight: 15331,
  },
  "staff-augmentation": {
    asset: "/assets/services/staff-augmentation/dark/staff-augmentation-frame.png",
    alt: "Holovise IT Staff Augmentation",
    nodeId: "1:14913",
    height: 13242,
    lightAsset: "/assets/services/staff-augmentation/light/staff-augmentation-frame.png",
    lightNodeId: "61:17505",
    lightHeight: 13250,
  },
  "digital-transformation": {
    asset: "/assets/services/digital-transformation/dark/digital-transformation-frame.png",
    alt: "Holovise Digital Transformation",
    nodeId: "1:16427",
    height: 17874,
    lightAsset: "/assets/services/digital-transformation/light/digital-transformation-frame.png",
    lightNodeId: "61:19053",
    lightHeight: 17880,
  },
  "software-development-outsourcing": {
    asset: "/assets/services/software-development-outsourcing/dark/software-development-outsourcing-frame.png",
    alt: "Holovise Software Development Outsourcing",
    nodeId: "1:17749",
    height: 16561,
    lightAsset: "/assets/services/software-development-outsourcing/light/software-development-outsourcing-frame.png",
    lightNodeId: "61:20355",
    lightHeight: 19588,
  },
  investment: {
    asset: "/assets/services/investment/dark/investment-frame.png",
    alt: "Holovise Investment",
    nodeId: "458:4760",
    height: 14484,
  },
} as const;

export type ServiceDetailSlug = keyof typeof serviceDetailFrames;

type ServiceCtaSpec = {
  label: string;
  left: number;
  textTop: number;
  width?: number;
  href?: string;
};

const serviceCtas: Partial<Record<ServiceDetailSlug, ServiceCtaSpec[]>> = {
  "desktop-app-development": [
    { label: "Get Started", left: 1065, textTop: 810, width: 245 },
    { label: "Book a Free Session", left: 130, textTop: 1256 },
    { label: "Get Free Consulting", left: 530, textTop: 4047 },
    { label: "Let's Chat", left: 830, textTop: 4516, width: 220 },
    { label: "Know More", left: 1070, textTop: 4516, width: 220, href: "/about/who-we-are" },
    { label: "Let's Chat", left: 584, textTop: 9100 },
    { label: "Get a Quote", left: 130, textTop: 12135 },
  ],
  devsecops: [
    { label: "Get Started", left: 730, textTop: 983 },
    { label: "Book a Free Session", left: 130, textTop: 1491 },
    { label: "Let's Chat", left: 830, textTop: 5169, width: 220 },
    { label: "Know More", left: 1070, textTop: 5169, width: 220, href: "/about/who-we-are" },
    { label: "Let's Chat", left: 584, textTop: 9782 },
    { label: "Schedule Your Call", left: 130, textTop: 12964 },
  ],
  "ai-ml-development": [
    { label: "Get Started", left: 129, textTop: 1079 },
    { label: "Book a Free Session", left: 730, textTop: 1491 },
    { label: "Get Free Consulting", left: 530, textTop: 3052 },
    { label: "Let's Chat", left: 830, textTop: 5121, width: 220 },
    { label: "Know More", left: 1070, textTop: 5121, width: 220, href: "/about/who-we-are" },
  ],
  "web-3-development": [
    { label: "Get Started", left: 730, textTop: 1344 },
    { label: "Get Free Consulting", left: 530, textTop: 4415 },
    { label: "Let's Chat", left: 830, textTop: 4892, width: 220 },
    { label: "Know More", left: 1070, textTop: 4892, width: 220, href: "/about/who-we-are" },
  ],
  "metaverse-ar-vr": [
    { label: "Get in Touch", left: 597, textTop: 836, width: 245 },
    { label: "Get Started", left: 129, textTop: 1310 },
    { label: "Let's Chat", left: 830, textTop: 3331, width: 220 },
    { label: "Know More", left: 1070, textTop: 3331, width: 220, href: "/about/who-we-are" },
    { label: "Contact Us", left: 130, textTop: 11692 },
  ],
  "ui-ux-design": [
    { label: "Get in Touch", left: 129, textTop: 795 },
    { label: "Get Started", left: 730, textTop: 1258 },
    { label: "Get Free Consulting", left: 530, textTop: 2834 },
    { label: "Let's Chat", left: 830, textTop: 4498, width: 220 },
    { label: "Know More", left: 1070, textTop: 4498, width: 220, href: "/about/who-we-are" },
    { label: "Let's Chat", left: 830, textTop: 9479, width: 220 },
    { label: "Know More", left: 1070, textTop: 9479, width: 220, href: "/about/who-we-are" },
    { label: "Contact Us", left: 130, textTop: 13028 },
  ],
  "software-security": [
    { label: "Get in Touch", left: 730, textTop: 973 },
    { label: "Get Started", left: 129, textTop: 1410 },
    { label: "Let's Chat", left: 830, textTop: 5113, width: 220 },
    { label: "Know More", left: 1070, textTop: 5113, width: 220, href: "/about/who-we-are" },
    { label: "Contact Us", left: 130, textTop: 12511 },
  ],
  "blockchain-development": [
    { label: "Get in Touch", left: 730, textTop: 857 },
    { label: "Get Started", left: 129, textTop: 1344 },
    { label: "Get Free Consulting", left: 530, textTop: 3334 },
    { label: "Let's Chat", left: 830, textTop: 5880, width: 220 },
    { label: "Know More", left: 1070, textTop: 5880, width: 220, href: "/about/who-we-are" },
    { label: "Contact Us", left: 130, textTop: 12866 },
  ],
  "game-development": [
    { label: "Get in Touch", left: 129, textTop: 905 },
    { label: "Get Started", left: 730, textTop: 1327 },
    { label: "Get Free Consulting", left: 530, textTop: 3152 },
    { label: "Let's Chat", left: 830, textTop: 4883, width: 220 },
    { label: "Know More", left: 1070, textTop: 4883, width: 220, href: "/about/who-we-are" },
    { label: "Schedule a Meeting", left: 584, textTop: 7828 },
    { label: "Contact Us", left: 130, textTop: 11269 },
  ],
  "mvp-development": [
    { label: "Get in Touch", left: 597, textTop: 780, width: 245 },
    { label: "Get Started", left: 730, textTop: 1272 },
    { label: "Let's Chat", left: 830, textTop: 5527, width: 220 },
    { label: "Know More", left: 1070, textTop: 5527, width: 220, href: "/about/who-we-are" },
    { label: "Schedule a Meeting", left: 584, textTop: 9266 },
    { label: "Contact Us", left: 130, textTop: 11586 },
  ],
  "product-strategy-consulting": [
    { label: "Get in Touch", left: 129, textTop: 839 },
    { label: "Get Started", left: 730, textTop: 1314 },
    { label: "Get Free Consulting", left: 530, textTop: 3080 },
    { label: "Let's Chat", left: 830, textTop: 5150, width: 220 },
    { label: "Know More", left: 1070, textTop: 5150, width: 220, href: "/about/who-we-are" },
    { label: "Schedule a Meeting", left: 584, textTop: 9292 },
    { label: "Contact Us", left: 130, textTop: 13017 },
  ],
  "no-code-development": [
    { label: "Get in Touch", left: 598, textTop: 794, width: 244 },
    { label: "Get Started", left: 129, textTop: 1381 },
    { label: "Let's Chat", left: 830, textTop: 5377, width: 220 },
    { label: "Know More", left: 1070, textTop: 5377, width: 220, href: "/about/who-we-are" },
    { label: "Schedule a Meeting", left: 584, textTop: 8308 },
    { label: "Contact Us", left: 130, textTop: 12026 },
  ],
  "staff-augmentation": [
    { label: "Get in Touch", left: 597, textTop: 804, width: 245 },
    { label: "Get Started", left: 129, textTop: 1263 },
    { label: "Get Free Consulting", left: 530, textTop: 4923 },
    { label: "Schedule a Meeting", left: 584, textTop: 5576 },
    { label: "Contact Us", left: 130, textTop: 9942 },
  ],
  "digital-transformation": [
    { label: "Get in Touch", left: 598, textTop: 782, width: 244 },
    { label: "Get Started", left: 129, textTop: 1221 },
    { label: "Let's Chat", left: 830, textTop: 6528, width: 220 },
    { label: "Know More", left: 1070, textTop: 6528, width: 220, href: "/about/who-we-are" },
    { label: "Schedule a Meeting", left: 584, textTop: 9650 },
    { label: "Contact Us", left: 130, textTop: 14574 },
  ],
  "software-development-outsourcing": [
    { label: "Get in Touch", left: 129, textTop: 731 },
    { label: "Get Started", left: 730, textTop: 1285 },
    { label: "Let's Chat", left: 830, textTop: 5346, width: 220 },
    { label: "Know More", left: 1070, textTop: 5346, width: 220, href: "/about/who-we-are" },
    { label: "Schedule a Meeting", left: 584, textTop: 9422 },
    { label: "Contact Us", left: 130, textTop: 13262 },
  ],
  investment: [
    { label: "Get in Touch", left: 129, textTop: 824 },
    { label: "Get Started", left: 730, textTop: 1367 },
    { label: "Get Free Consulting", left: 546, textTop: 3288 },
    { label: "Let's Chat", left: 830, textTop: 4977, width: 220 },
    { label: "Know More", left: 1070, textTop: 4977, width: 220, href: "/about/who-we-are" },
  ],
};

const lightServiceCtas: Partial<Record<ServiceDetailSlug, ServiceCtaSpec[]>> = {
  "desktop-app-development": [
    { label: "Get Started", left: 730, textTop: 810, width: 245 },
    { label: "Book a Free Session", left: 130, textTop: 1256 },
    { label: "Get Free Consulting", left: 529, textTop: 4047 },
    { label: "Let's Chat", left: 830, textTop: 4428, width: 220 },
    { label: "Know More", left: 1070, textTop: 4428, width: 220, href: "/about/who-we-are" },
    { label: "Let's Chat", left: 584, textTop: 8878 },
    { label: "Get a Quote", left: 130, textTop: 12050 },
  ],
  "software-development-outsourcing": [
    { label: "Get in Touch", left: 129, textTop: 812, width: 245 },
    { label: "Get Started", left: 732, textTop: 1266 },
    { label: "Get Free Consulting", left: 529, textTop: 3155 },
    { label: "Let's Chat", left: 830, textTop: 5224, width: 220 },
    { label: "Know More", left: 1070, textTop: 5224, width: 220, href: "/about/who-we-are" },
    { label: "Schedule a Meeting", left: 584, textTop: 10116 },
    { label: "Contact Us", left: 130, textTop: 16274 },
  ],
};

function mappedServiceCtas(
  slug: ServiceDetailSlug,
  theme: "dark" | "light",
): StaticFrameLink[] {
  const ctas =
    theme === "light" && lightServiceCtas[slug]
      ? lightServiceCtas[slug]
      : serviceCtas[slug];

  return (ctas ?? []).map((cta) => ({
    href: cta.href ?? "/contact-us",
    label: cta.label,
    left: cta.left,
    top: cta.textTop - 18,
    width: cta.width ?? 272,
    height: 60,
  }));
}

function serviceContentLinks(
  slug: ServiceDetailSlug,
  height: number,
  theme: "dark" | "light",
): StaticFrameLink[] {
  const links: StaticFrameLink[] = [
    {
      href: "/blog/2025-tools-to-create-real-performing-tokens",
      label: "Read 2025 Tools to Create Real-Performing Tokens",
      left: 130,
      top: height - 2843,
      width: 1180,
      height: 442,
    },
    {
      href: "/blog",
      label: "Explore All News",
      left: 584,
      top: height - 2337,
      width: 272,
      height: 60,
    },
  ];

  links.push(...mappedServiceCtas(slug, theme));

  if (slug === "mobile-app-development") {
    links.push(
      {
        href: "/contact-us",
        label: "Get in Touch",
        left: 129,
        top: 765,
        width: 272,
        height: 60,
      },
      {
        href: "/contact-us",
        label: "Book a Free Session",
        left: 730,
        top: 1283,
        width: 272,
        height: 60,
      },
      {
        href: "/contact-us",
        label: "Get Free Consulting",
        left: 530,
        top: 2837,
        width: 272,
        height: 60,
      },
      {
        href: "/contact-us",
        label: "Let's Chat",
        left: 830,
        top: 4818,
        width: 220,
        height: 60,
      },
      {
        href: "/about/who-we-are",
        label: "Know More",
        left: 1070,
        top: 4818,
        width: 220,
        height: 60,
      },
      {
        href: "/contact-us",
        label: "Let's Build Your Custom App",
        left: 584,
        top: 9123,
        width: 272,
        height: 60,
      },
      {
        href: "/contact-us",
        label: "Book a Free Session",
        left: 130,
        top: theme === "light" ? 11567 : 11988,
        width: 272,
        height: 60,
      },
    );
  }

  if (slug === "web-app-development") {
    links.push(
      {
        href: "/contact-us",
        label: "Get Started",
        left: 597,
        top: theme === "dark" ? 772 : 908,
        width: 245,
        height: 60,
      },
      {
        href: "/contact-us",
        label: "Book a Free Session",
        left: 584,
        top: 1689,
        width: 272,
        height: 60,
      },
      {
        href: "/contact-us",
        label: "Let's Chat",
        left: 830,
        top: 6050,
        width: 220,
        height: 60,
      },
      {
        href: "/about/who-we-are",
        label: "Know More",
        left: 1070,
        top: 6050,
        width: 220,
        height: 60,
      },
      {
        href: "/contact-us",
        label: "Let's Chat about an industry solution",
        left: 584,
        top: 11089,
        width: 272,
        height: 60,
      },
      {
        href: "/contact-us",
        label: "Schedule Your Call",
        left: 130,
        top: 14207,
        width: 272,
        height: 60,
      },
    );

    if (theme === "dark") {
      links.push({
        href: "/contact-us",
        label: "Get Started side rail",
        left: 1390,
        top: 205,
        width: 50,
        height: 200,
      });
    }
  }

  return links;
}

export function ServiceDetailFrame({ slug }: { slug: ServiceDetailSlug }) {
  const frame = serviceDetailFrames[slug];
  const lightHeight = "lightHeight" in frame ? frame.lightHeight : undefined;
  const sharedPageLinks = (
    activeHeight: number,
    theme: "dark" | "light",
  ): StaticFrameLink[] => [
    ...commonFrameLinks(activeHeight).map((link) =>
      slug === "desktop-app-development" && link.label === "Get Started"
        ? { ...link, top: 405 }
        : link,
    ),
    ...serviceContentLinks(slug, activeHeight, theme),
    { href: "/", label: "Home", left: 490, top: 286, width: 115, height: 38 },
    { href: "/services/full-stack-development", label: "Services", left: 595, top: 286, width: 125, height: 38 },
  ];

  return (
    <StaticFigmaPage
      asset={frame.asset}
      alt={frame.alt}
      nodeId={frame.nodeId}
      height={frame.height}
      lightAsset={"lightAsset" in frame ? frame.lightAsset : undefined}
      lightNodeId={"lightNodeId" in frame ? frame.lightNodeId : undefined}
      lightHeight={lightHeight}
      links={sharedPageLinks(frame.height, "dark")}
      lightLinks={lightHeight ? sharedPageLinks(lightHeight, "light") : undefined}
      renderChildrenInLight
    >
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
    </StaticFigmaPage>
  );
}
