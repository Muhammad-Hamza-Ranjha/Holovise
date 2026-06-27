import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";
import { openProductServicesMenuFrameLinks } from "@/components/navigation/ServicesMenu";

const frameAsset =
  "/assets/services/product-development/dark/services-product-development-frame.png";

export function ProductDevelopmentDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise Services Product Development page"
      nodeId="192:13652"
      height={960}
      lightAsset="/assets/services/product-development/light/services-product-development-frame.png"
      lightNodeId="204:11177"
      lightHeight={960}
      links={[...commonFrameLinks(960), ...openProductServicesMenuFrameLinks]}
    />
  );
}
