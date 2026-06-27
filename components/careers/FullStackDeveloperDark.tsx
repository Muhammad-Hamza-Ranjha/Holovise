import { commonFrameLinks, StaticFigmaPage, type StaticFrameLink } from "@/components/figma/StaticFigmaPage";

const height = 4671;

const careerDetailLinks: StaticFrameLink[] = [
  { href: "/careers", label: "Careers", left: 645, top: 289, width: 80, height: 34 },
  { href: "/contact-us", label: "Apply Now", left: 986, top: 640, width: 324, height: 50 },
  { href: "/contact-us", label: "Apply Now", left: 130, top: 2139, width: 510, height: 60 },
];

export function FullStackDeveloperDark() {
  return (
    <StaticFigmaPage
      asset="/assets/careers/full-stack-developer/dark/full-stack-developer-frame.png"
      alt="Holovise Full Stack Developer career detail page"
      nodeId="413:5541"
      height={height}
      links={[...commonFrameLinks(height), ...careerDetailLinks]}
    />
  );
}
