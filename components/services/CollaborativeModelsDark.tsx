import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";
import { openCollaborativeServicesMenuFrameLinks } from "@/components/navigation/ServicesMenu";

const frameAsset =
  "/assets/services/collaborative-models/dark/services-collaborative-models-frame.png";

export function CollaborativeModelsDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise Services Collaborative Models page"
      nodeId="194:14174"
      height={960}
      lightAsset="/assets/services/collaborative-models/light/services-collaborative-models-frame.png"
      lightNodeId="204:11243"
      lightHeight={960}
      links={[...commonFrameLinks(960), ...openCollaborativeServicesMenuFrameLinks]}
    />
  );
}
