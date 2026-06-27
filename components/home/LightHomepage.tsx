import { commonFrameLinks, StaticFigmaPage, type StaticFrameLink } from "@/components/figma/StaticFigmaPage";

const height = 12496;

const homepageLinks: StaticFrameLink[] = [
  { href: "/contact-us", label: "Schedule Intro Call", left: 130, top: 667, width: 297, height: 60 },
  { href: "/contact-us", label: "Get in Touch", left: 830, top: 2701, width: 220, height: 60 },
  { href: "/about/who-we-are", label: "Know More", left: 1070, top: 2701, width: 220, height: 60 },
  { href: "/about/who-we-are", label: "How It Works", left: 130, top: 3538, width: 272, height: 60 },
  { href: "/contact-us", label: "Book a Free Session", left: 130, top: 7719, width: 272, height: 60 },
  {
    href: "/blog/2025-tools-to-create-real-performing-tokens",
    label: "Read latest news",
    left: 130,
    top: 9478,
    width: 1180,
    height: 442,
  },
  { href: "/blog", label: "Explore All News", left: 584, top: 10018, width: 272, height: 60 },
];

export function LightHomepage() {
  return (
    <StaticFigmaPage
      asset="/assets/homepage/light/homepage-frame.png"
      alt="Holovise light homepage"
      nodeId="204:6497"
      height={height}
      lightAsset="/assets/homepage/light/homepage-frame.png"
      lightNodeId="204:6497"
      lightHeight={height}
      links={[...commonFrameLinks(height), ...homepageLinks]}
    />
  );
}
