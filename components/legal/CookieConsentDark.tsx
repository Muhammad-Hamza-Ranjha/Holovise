import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";

export function CookieConsentDark() {
  return (
    <StaticFigmaPage
      asset="/assets/cookie-consent/dark/cookie-consent-frame.png"
      alt="Holovise Cookie Consent"
      nodeId="192:5463"
      height={960}
      lightAsset="/assets/cookie-consent/light/cookie-consent-frame.png"
      lightNodeId="204:9919"
      lightHeight={960}
      links={commonFrameLinks(960)}
    />
  );
}
