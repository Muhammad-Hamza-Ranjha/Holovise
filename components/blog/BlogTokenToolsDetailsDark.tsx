import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";

const height = 8037;

export function BlogTokenToolsDetailsDark() {
  return (
    <StaticFigmaPage
      asset="/assets/blog/2025-tools-to-create-real-performing-tokens/dark/blog-2025-tools-details-frame.png"
      alt="2025 Tools to Create Real-Performing Tokens"
      nodeId="414:7204"
      height={height}
      links={[
        ...commonFrameLinks(height),
        { href: "/", label: "Home", left: 576, top: 288, width: 81, height: 36 },
        { href: "/blog", label: "Blog", left: 681, top: 288, width: 48, height: 36 },
        { href: "/", label: "Home", left: 571, top: 6686, width: 299, height: 229 },
      ]}
    />
  );
}
