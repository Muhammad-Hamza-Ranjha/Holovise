import { commonFrameLinks, StaticFigmaPage, type StaticFrameLink } from "@/components/figma/StaticFigmaPage";

const height = 5929;

const taskflowLinks: StaticFrameLink[] = [
  { href: "/portfolio", label: "Our Portfolio", left: 640, top: 289, width: 115, height: 34 },
  { href: "/contact-us", label: "Schedule a Free Call", left: 583, top: 2065, width: 272, height: 60 },
  {
    href: "/blog/2025-tools-to-create-real-performing-tokens",
    label: "Read 2025 Tools to Create Real-Performing Tokens",
    left: 143,
    top: 3086,
    width: 1180,
    height: 442,
  },
  { href: "/blog", label: "Explore All News", left: 597, top: 3592, width: 272, height: 60 },
  { href: "/", label: "Home", left: 584, top: 4578, width: 299, height: 229 },
];

export function TaskflowPortfolioDark() {
  return (
    <StaticFigmaPage
      asset="/assets/portfolio-details/taskflow/dark/taskflow-web-application-frame.png"
      alt="Holovise TaskFlow Web Application portfolio detail page"
      nodeId="350:4772"
      height={height}
      links={[...commonFrameLinks(height), ...taskflowLinks]}
    />
  );
}
