import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";
import { FigmaVariantOverlay } from "@/components/figma/FigmaVariantOverlay";

const frameAsset = "/assets/gallery/dark/our-gallery-frame.png";

export function OurGalleryDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise Our Gallery page"
      nodeId="192:7486"
      height={7192}
      lightAsset="/assets/gallery/light/our-gallery-frame.png"
      lightNodeId="204:8871"
      lightHeight={7416}
      links={[
        ...commonFrameLinks(7192),
        {
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read 2025 Tools to Create Real-Performing Tokens",
          left: 130,
          top: 4349,
          width: 1180,
          height: 442,
        },
        { href: "/blog", label: "Explore All News", left: 584, top: 4855, width: 272, height: 60 },
        { href: "/", label: "Home", left: 571, top: 5841, width: 299, height: 229 },
      ]}
    >
      <FigmaVariantOverlay
        left={409}
        top={728}
        width={621}
        height={65}
        sprite="/assets/interactions/gallery-tabs.png"
        spriteWidth={661}
        spriteHeight={396}
        initialKey="workplace"
        variants={[
          { key: "workplace", label: "Workplace", x: 20, y: 20, width: 621, height: 65 },
          { key: "celebrations", label: "Celebrations", x: 20, y: 117, width: 621, height: 65 },
          { key: "milestones", label: "Milestones", x: 20, y: 214, width: 621, height: 65 },
          { key: "team", label: "Team Building", x: 20, y: 311, width: 621, height: 65 },
        ]}
        hotspots={[
          { key: "workplace", label: "Show Workplace gallery", left: 32, top: 21, width: 97, height: 23 },
          { key: "celebrations", label: "Show Celebrations gallery", left: 198, top: 21, width: 97, height: 23 },
          { key: "milestones", label: "Show Milestones gallery", left: 335, top: 21, width: 84, height: 23 },
          { key: "team", label: "Show Team Building gallery", left: 459, top: 21, width: 106, height: 23 },
        ]}
      />
    </StaticFigmaPage>
  );
}
