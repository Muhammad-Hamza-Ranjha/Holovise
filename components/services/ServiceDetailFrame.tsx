import { commonFrameLinks, StaticFigmaPage, type StaticFrameLink } from "@/components/figma/StaticFigmaPage";
import { ServicePrototypeInteractions } from "@/components/services/ServicePrototypeInteractions";

export const serviceDetailFrames = {
  "mobile-app-development": {
    asset: "/assets/services/mobile-app-development/dark/mobile-app-development-frame.png",
    alt: "Holovise Mobile App Development",
    nodeId: "1:546",
    height: 14284,
    lightAsset: "/assets/services/mobile-app-development/light/mobile-app-development-frame.png",
    lightNodeId: "70:5000",
    lightHeight: 13863,
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

function serviceContentLinks(
  slug: ServiceDetailSlug,
  height: number,
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

  if (slug === "mobile-app-development") {
    links.push({
      href: "/contact-us",
      label: "Let's Chat",
      left: 830,
      top: 4818,
      width: 220,
      height: 60,
    });
  }

  return links;
}

export function ServiceDetailFrame({ slug }: { slug: ServiceDetailSlug }) {
  const frame = serviceDetailFrames[slug];
  const lightHeight = "lightHeight" in frame ? frame.lightHeight : undefined;
  const sharedPageLinks = (activeHeight: number): StaticFrameLink[] => [
    ...commonFrameLinks(activeHeight),
    ...serviceContentLinks(slug, activeHeight),
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
      links={sharedPageLinks(frame.height)}
      lightLinks={lightHeight ? sharedPageLinks(lightHeight) : undefined}
    >
      <ServicePrototypeInteractions slug={slug} />
    </StaticFigmaPage>
  );
}
