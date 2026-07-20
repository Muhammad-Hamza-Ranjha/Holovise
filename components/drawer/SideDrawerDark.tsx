import { StaticFigmaPage } from "@/components/figma/StaticFigmaPage";
import { SideDrawerControls } from "@/components/drawer/SideDrawerControls";

export function SideDrawerDark() {
  return (
    <StaticFigmaPage
      asset="/assets/side-drawer/dark/side-drawer-frame.png"
      alt="Holovise contact side drawer"
      nodeId="192:5403"
      height={960}
      lightAsset="/assets/side-drawer/light/side-drawer-frame.png"
      lightNodeId="204:9855"
      lightHeight={960}
      renderChildrenInLight
      showNavigationOverlays={false}
      useSiteChrome={false}
      links={[
        { href: "/", label: "Close menu", left: 1352, top: 38, width: 24, height: 24 },
        { href: "/privacy-policy", label: "Privacy Policy", left: 945, top: 823, width: 82, height: 28 },
        { href: "/terms-and-conditions", label: "Terms and Conditions", left: 1125, top: 823, width: 117, height: 28 },
      ]}
    >
      <SideDrawerControls />
    </StaticFigmaPage>
  );
}
