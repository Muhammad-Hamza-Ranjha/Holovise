import type { ReactNode } from "react";
import { ThemeAwareStaticFigmaPage } from "@/components/figma/ThemeAwareStaticFigmaPage";
import type { StaticFrameLink } from "@/components/figma/StaticFrameLinks";

export { commonFrameLinks, footerFrameLinks } from "@/components/figma/StaticFrameLinks";
export type { StaticFrameLink } from "@/components/figma/StaticFrameLinks";

export type StaticFigmaPageProps = {
  asset: string;
  alt: string;
  nodeId: string;
  height: number;
  lightAsset?: string;
  lightHeight?: number;
  lightNodeId?: string;
  links?: StaticFrameLink[];
  lightLinks?: StaticFrameLink[];
  children?: ReactNode;
  renderChildrenInLight?: boolean;
  showNavigationOverlays?: boolean;
};

export function StaticFigmaPage(props: StaticFigmaPageProps) {
  return <ThemeAwareStaticFigmaPage {...props} />;
}
