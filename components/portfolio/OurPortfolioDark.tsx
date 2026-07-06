import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";
import { FigmaVariantOverlay } from "@/components/figma/FigmaVariantOverlay";
import { PortfolioContactForm } from "@/components/portfolio/PortfolioContactForm";
import { PortfolioCtaOverlay } from "@/components/portfolio/PortfolioCtaOverlay";

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
      renderChildrenInLight
      disableAutoContactForm
      links={[
        ...commonFrameLinks(6315),
        { href: "/", label: "Home breadcrumb", left: 579, top: 295, width: 95, height: 22 },
        { href: "/contact-us", label: "Get Started", left: 1390, top: 603, width: 50, height: 200 },
        { href: "/contact-us", label: "Schedule a Free Call", left: 583, top: 3023, width: 272, height: 60 },
        {
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read 2025 Tools to Create Real-Performing Tokens",
          left: 143,
          top: 3472,
          width: 1180,
          height: 442,
        },
        { href: "/blog", label: "Explore All News", left: 597, top: 3978, width: 272, height: 60 },
        { href: "/", label: "Home", left: 584, top: 4964, width: 299, height: 229 },
      ]}
      lightLinks={[
        ...commonFrameLinks(6163),
        { href: "/", label: "Home breadcrumb", left: 612, top: 295, width: 109, height: 22 },
        { href: "/contact-us", label: "Schedule a Free Call", left: 583, top: 2806, width: 272, height: 60 },
        {
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read 2025 Tools to Create Real-Performing Tokens",
          left: 130,
          top: 3320,
          width: 1180,
          height: 442,
        },
        { href: "/blog", label: "Explore All News", left: 584, top: 3826, width: 272, height: 60 },
        { href: "/", label: "Home", left: 571, top: 4812, width: 299, height: 229 },
      ]}
    >
      <div className="hidden dark:block">
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
      </div>
      <PortfolioCtaOverlay />
      <div className="hidden dark:block">
        <PortfolioContactForm theme="dark" />
      </div>
      <div className="block dark:hidden">
        <PortfolioContactForm theme="light" />
      </div>
    </StaticFigmaPage>
  );
}
