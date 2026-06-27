import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";

const frameAsset = "/assets/careers/dark/careers-frame.png";

export function CareerPageDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise Careers page"
      nodeId="192:7765"
      height={7851}
      lightAsset="/assets/careers/light/careers-frame.png"
      lightNodeId="204:9253"
      lightHeight={7851}
      links={[
        ...commonFrameLinks(7851),
        { href: "/careers/full-stack-developer", label: "Senior UX UI Designer", left: 130, top: 1604, width: 380, height: 375 },
        { href: "/careers/full-stack-developer", label: "Senior Backend Engineer", left: 530, top: 1604, width: 380, height: 375 },
        { href: "/careers/full-stack-developer", label: "Azure Data Engineer", left: 930, top: 1604, width: 380, height: 375 },
        { href: "/careers/full-stack-developer", label: "Senior UI Developer", left: 130, top: 1998, width: 380, height: 375 },
        { href: "/careers/full-stack-developer", label: "Lead Fullstack Developer", left: 530, top: 1998, width: 380, height: 375 },
        { href: "/careers/full-stack-developer", label: "Senior Product Architect", left: 930, top: 1998, width: 380, height: 375 },
        { href: "/careers", label: "Explore All Jobs", left: 439, top: 2409, width: 272, height: 60 },
        { href: "/careers/full-stack-developer", label: "Apply in Talent Pool", left: 583, top: 3234, width: 272, height: 60 },
        {
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read 2025 Tools to Create Real-Performing Tokens",
          left: 130,
          top: 5008,
          width: 1180,
          height: 442,
        },
        { href: "/blog", label: "Explore All News", left: 584, top: 5514, width: 272, height: 60 },
        { href: "/", label: "Home", left: 571, top: 6500, width: 299, height: 229 },
      ]}
    />
  );
}
