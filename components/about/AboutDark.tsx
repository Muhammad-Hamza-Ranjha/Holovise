import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";

const frameAsset = "/assets/about/dark/about-frame.png";

export function AboutDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise About page"
      nodeId="194:14415"
      height={960}
      lightAsset="/assets/about/light/about-frame.png"
      lightNodeId="204:11309"
      lightHeight={960}
      links={[
        ...commonFrameLinks(960),
        { href: "/about/who-we-are", label: "Who We Are", left: 242, top: 175, width: 280, height: 310 },
        { href: "/portfolio", label: "Our Portfolio", left: 580, top: 175, width: 280, height: 310 },
        { href: "/about/our-gallery", label: "Our Gallery", left: 918, top: 175, width: 280, height: 310 },
      ]}
    />
  );
}
