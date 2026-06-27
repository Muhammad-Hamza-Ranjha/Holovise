import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";
import { FigmaVariantOverlay } from "@/components/figma/FigmaVariantOverlay";

const frameAsset = "/assets/portfolio/dark/our-portfolio-frame.png";

export function OurPortfolioDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise Our Portfolio page"
      nodeId="192:6728"
      height={6315}
      lightAsset="/assets/portfolio/light/our-portfolio-frame.png"
      lightNodeId="204:7811"
      lightHeight={6163}
      links={[
        ...commonFrameLinks(6315),
        {
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read 2025 Tools to Create Real-Performing Tokens",
          left: 143,
          top: 3472,
          width: 1180,
          height: 442,
        },
        { href: "/", label: "Home", left: 584, top: 4964, width: 299, height: 229 },
      ]}
    >
      <FigmaVariantOverlay
        left={129}
        top={728}
        width={1181}
        height={525}
        sprite="/assets/interactions/portfolio-tabs.png"
        spriteWidth={1221}
        spriteHeight={1881}
        initialKey="development"
        variants={[
          { key: "development", label: "Development", x: 20, y: 20, width: 1181, height: 525 },
          { key: "product", label: "Product Consulting", x: 20, y: 678, width: 1181, height: 525 },
          { key: "collaborative", label: "Collaborative Models", x: 20, y: 1336, width: 1181, height: 525 },
        ]}
        hotspots={[
          { key: "development", label: "Show Development portfolio", left: 339, top: 21, width: 110, height: 23 },
          { key: "product", label: "Show Product Consulting portfolio", left: 505, top: 21, width: 146, height: 23 },
          { key: "collaborative", label: "Show Collaborative Models portfolio", left: 687, top: 21, width: 220, height: 23 },
        ]}
      />
    </StaticFigmaPage>
  );
}
