import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";
import { LightImageRestore } from "@/components/figma/LightImageRestore";

const height = 5765;
const blogImages = [
  { src: "/assets/blog/shared/wireframes.png", alt: "Wireframing article", left: 130 },
  { src: "/assets/blog/shared/token-tools.png", alt: "Token tools article", left: 533.333 },
  { src: "/assets/blog/shared/solidity.png", alt: "Solidity article", left: 936.667 },
] as const;

export function BlogDark() {
  return (
    <StaticFigmaPage
      asset="/assets/blog/dark/blog-frame.png"
      alt="Holovise Blog page"
      nodeId="414:6105"
      height={height}
      links={[
        ...commonFrameLinks(height),
        ...[
          [130, 1005],
          [533.33, 1005],
          [936.67, 1005],
          [130, 1566],
          [533.33, 1566],
          [936.67, 1566],
          [130, 2090],
          [130, 2657],
          [540, 2657],
          [950, 2657],
          [130, 3312],
          [533.33, 3312],
          [936.67, 3312],
        ].map(([left, top]) => ({
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read More",
          left,
          top,
          width: 209,
          height: 60,
        })),
        { href: "/", label: "Home", left: 571, top: 4414, width: 299, height: 229 },
      ]}
    >
      {[570, 1131, 2877].flatMap((top) =>
        blogImages.map((image) => (
          <LightImageRestore
            key={`${image.src}-${top}`}
            {...image}
            top={top}
            width={373.333}
            height={270}
          />
        )),
      )}
      <LightImageRestore
        src="/assets/blog/shared/product-line.png"
        alt="Product line article"
        left={739}
        top={1762}
        width={571}
        height={388}
      />
    </StaticFigmaPage>
  );
}
