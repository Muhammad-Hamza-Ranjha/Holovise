import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";

const height = 7965;

export function TermsAndConditionsDark() {
  return (
    <StaticFigmaPage
      asset="/assets/terms-and-conditions/dark/terms-and-conditions-frame.png"
      alt="Holovise Terms and Conditions page"
      nodeId="192:7236"
      height={height}
      lightAsset="/assets/terms-and-conditions/light/terms-and-conditions-frame.png"
      lightNodeId="204:8521"
      lightHeight={7965}
      links={[
        ...commonFrameLinks(height),
        { href: "/blog", label: "Explore All News", left: 584, top: 5628, width: 272, height: 60 },
        { href: "/", label: "Home", left: 571, top: 6614, width: 299, height: 229 },
      ]}
    />
  );
}
