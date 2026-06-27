import { commonFrameLinks, StaticFigmaPage, type StaticFrameLink } from "@/components/figma/StaticFigmaPage";

const height = 4045;

const jobLinks: StaticFrameLink[] = [
  { href: "/careers/full-stack-developer", label: "Full Stack Developer", left: 130, top: 854, width: 380, height: 375 },
  { href: "/careers/full-stack-developer", label: "Backend Engineer", left: 530, top: 854, width: 380, height: 375 },
  { href: "/careers/full-stack-developer", label: "Azure Data Engineer", left: 930, top: 854, width: 380, height: 375 },
  { href: "/careers/full-stack-developer", label: "SQL Developer", left: 130, top: 1248, width: 380, height: 375 },
  { href: "/careers/full-stack-developer", label: "Lead Fullstack Developer", left: 530, top: 1248, width: 380, height: 375 },
  { href: "/careers/full-stack-developer", label: "Big Data Architect", left: 930, top: 1248, width: 380, height: 375 },
];

export function CareersListingDark() {
  return (
    <StaticFigmaPage
      asset="/assets/careers-listing/dark/careers-listing-frame.png"
      alt="Holovise Careers listing page"
      nodeId="413:4601"
      height={height}
      links={[...commonFrameLinks(height), ...jobLinks]}
    />
  );
}
