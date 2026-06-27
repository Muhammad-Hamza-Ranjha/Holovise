import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";
import { openServicesMenuFrameLinks } from "@/components/navigation/ServicesMenu";

const frameAsset =
  "/assets/services/full-stack-development/dark/services-full-stack-development-frame.png";

export function FullStackDevelopmentDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise Services Full Stack Development page"
      nodeId="192:9947"
      height={960}
      lightAsset="/assets/services/full-stack-development/light/services-full-stack-development-frame.png"
      lightNodeId="204:11111"
      lightHeight={960}
      links={[...commonFrameLinks(960), ...openServicesMenuFrameLinks]}
    />
  );
}
