import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";

const height = 6944;

export function PrivacyPolicyDark() {
  return (
    <StaticFigmaPage
      asset="/assets/privacy-policy/dark/privacy-policy-frame.png"
      alt="Holovise Privacy Policy page"
      nodeId="192:6986"
      height={height}
      lightAsset="/assets/privacy-policy/light/privacy-policy-frame.png"
      lightNodeId="204:8171"
      lightHeight={6944}
      links={[
        ...commonFrameLinks(height),
        {
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read 2025 Tools to Create Real-Performing Tokens",
          left: 130,
          top: 4101,
          width: 1180,
          height: 442,
        },
        { href: "/blog", label: "Explore All News", left: 584, top: 4607, width: 272, height: 60 },
        { href: "/", label: "Home", left: 571, top: 5593, width: 299, height: 229 },
      ]}
    />
  );
}
