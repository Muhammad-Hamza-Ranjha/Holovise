import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";

const frameAsset = "/assets/contact-us/dark/contact-us-frame.png";

export function ContactUsDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise Contact Us page"
      nodeId="192:8087"
      height={3142}
      lightAsset="/assets/contact-us/light/contact-us-frame.png"
      lightNodeId="204:9680"
      lightHeight={3142}
      links={[
        ...commonFrameLinks(3142),
        { href: "/", label: "Home", left: 571, top: 1791, width: 299, height: 229 },
      ]}
    />
  );
}
