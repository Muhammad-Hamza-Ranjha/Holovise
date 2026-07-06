import Link from "next/link";
import { commonFrameLinks, StaticFigmaPage } from "@/components/figma/StaticFigmaPage";
import { FigmaContactForm } from "@/components/forms/FigmaContactForm";

const frameAsset = "/assets/who-we-are/dark/who-we-are-frame.png";

function WhoWeAreMotion() {
  const coreValueGifs = [
    { src: "animated-emojies-512px-310.gif", left: 130, top: 4531 },
    { src: "animated-emojies-512px-508.gif", left: 530, top: 4531 },
    { src: "animated-emojies-512px-600.gif", left: 930, top: 4531 },
    { src: "animated-emojies-512px-247.gif", left: 130, top: 4823 },
    { src: "animated-emojies-512px-193.gif", left: 530, top: 4823 },
  ];

  return (
    <>
      <img
        src="/assets/who-we-are/dark/chart-1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[910px] top-[406px] z-30 h-[626px] w-[626px] origin-center animate-[figma-object-breathe_5.5s_ease-in-out_infinite] object-contain motion-reduce:animate-none"
      />
      <div className="pointer-events-none absolute inset-0 z-30 hidden dark:block">
        <img
          src="/assets/who-we-are/dark/message-3d.png"
          alt=""
          aria-hidden="true"
          className="absolute left-[844px] top-[2696px] h-[448px] w-[448px] origin-center animate-[figma-object-breathe_4.5s_ease-in-out_infinite] object-contain motion-reduce:animate-none"
        />
        {coreValueGifs.map(({ src, left, top }) => (
          <div
            key={src}
            className="absolute h-[75px] w-[75px] bg-[#080d19]"
            style={{ left, top }}
          >
            <img
              src={`/assets/who-we-are/dark/${src}`}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 z-30 block dark:hidden">
        <div className="absolute left-[710px] top-[2663px] h-[650px] w-[641px] origin-center animate-[figma-object-breathe_4.5s_ease-in-out_infinite] motion-reduce:animate-none">
          <div className="h-full w-full scale-x-[-1] overflow-hidden">
            <img
              src="/assets/portfolio/shared/portfolio-cta-coins.png"
              alt=""
              aria-hidden="true"
              className="h-[650px] w-[1216px] max-w-none select-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function WhoWeAreDark() {
  return (
    <StaticFigmaPage
      asset={frameAsset}
      alt="Holovise Who We Are page"
      nodeId="192:6326"
      height={9807}
      lightAsset="/assets/who-we-are/light/who-we-are-frame.png"
      lightNodeId="204:7271"
      lightHeight={9317}
      renderChildrenInLight
      disableAutoContactForm
      links={[
        ...commonFrameLinks(9807).filter((link) => link.label !== "Get Started"),
        { href: "/", label: "Home breadcrumb", left: 579, top: 295, width: 95, height: 22 },
        {
          href: "/about/who-we-are",
          label: "Who We Are breadcrumb",
          left: 760,
          top: 297,
          width: 100,
          height: 20,
        },
        { href: "/contact-us", label: "Contact Us", left: 130, top: 847, width: 272, height: 60 },
        { href: "/contact-us", label: "Book a Free Session", left: 130, top: 3049, width: 272, height: 60 },
        { href: "/contact-us", label: "Let's Chat", left: 583, top: 5890, width: 272, height: 60 },
        {
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read 2025 Tools to Create Real-Performing Tokens",
          left: 130,
          top: 6964,
          width: 1180,
          height: 442,
        },
        { href: "/blog", label: "Explore All News", left: 584, top: 7470, width: 272, height: 60 },
        { href: "/", label: "Home", left: 571, top: 8456, width: 299, height: 229 },
      ]}
      lightLinks={[
        ...commonFrameLinks(9317).filter((link) => link.label !== "Get Started"),
        { href: "/", label: "Home breadcrumb", left: 614, top: 295, width: 105, height: 22 },
        {
          href: "/about/who-we-are",
          label: "Who We Are breadcrumb",
          left: 719,
          top: 297,
          width: 106,
          height: 20,
        },
        { href: "/portfolio", label: "How It Works", left: 130, top: 847, width: 272, height: 60 },
        { href: "/contact-us", label: "Book a Free Session", left: 230, top: 3061, width: 272, height: 60 },
        { href: "/contact-us", label: "Let's Chat", left: 583, top: 5266, width: 272, height: 60 },
        {
          href: "/blog/2025-tools-to-create-real-performing-tokens",
          label: "Read 2025 Tools to Create Real-Performing Tokens",
          left: 130,
          top: 6474,
          width: 1180,
          height: 442,
        },
        { href: "/blog", label: "Explore All News", left: 584, top: 6980, width: 272, height: 60 },
        { href: "/", label: "Home", left: 571, top: 7966, width: 299, height: 229 },
      ]}
    >
      <WhoWeAreMotion />
      <Link
        href="/contact-us"
        prefetch={false}
        aria-label="Get Started"
        className="absolute left-[1390px] top-[403px] z-[80] flex h-[200px] w-[50px] cursor-pointer flex-col items-center rounded-l-[8px] bg-[#3871f2] pt-[17px] text-white shadow-[0_8px_24px_rgba(8,13,25,0.24)] hover:bg-[#285fda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <span aria-hidden="true" className="h-[24px] text-[18px] leading-[24px]">
          🚀
        </span>
        <span
          className="mt-[16px] whitespace-nowrap text-[16px] font-bold leading-[20px]"
          style={{ writingMode: "vertical-rl" }}
        >
          Get Started
        </span>
      </Link>
      <div className="hidden dark:block">
        <FigmaContactForm
          ariaLabel="Who We Are contact form"
          left={740}
          subjectContext="Who We Are"
          theme="dark"
          top={7679}
        />
      </div>
      <div className="block dark:hidden">
        <FigmaContactForm
          ariaLabel="Who We Are contact form"
          left={740}
          subjectContext="Who We Are"
          theme="light"
          top={7189}
        />
      </div>
    </StaticFigmaPage>
  );
}
