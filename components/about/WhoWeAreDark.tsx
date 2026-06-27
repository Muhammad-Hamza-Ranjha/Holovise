import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";

const frameAsset = "/assets/who-we-are/dark/who-we-are-frame.png";

export function WhoWeAreDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise Who We Are page"
      nodeId="192:6326"
      height={9807}
      lightAsset="/assets/who-we-are/light/who-we-are-frame.png"
      lightNodeId="204:7271"
      lightHeight={9317}
      links={[
        ...commonFrameLinks(9807),
        { href: "/contact-us", label: "Book a Free Session", left: 130, top: 3049, width: 272, height: 60 },
        {
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read 2025 Tools to Create Real-Performing Tokens",
          left: 130,
          top: 6964,
          width: 1180,
          height: 442,
        },
        { href: "/blog", label: "Explore All News", left: 584, top: 7470, width: 272, height: 60 },
        { href: "/", label: "Home", left: 571, top: 8456, width: 299, height: 229 },
      ]}
    />
  );
}
