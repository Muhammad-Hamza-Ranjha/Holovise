import Link from "next/link";

const ctaBackground = "/assets/portfolio/dark/mask-group-2.svg";

function CtaContent({
  buttonLeft,
  buttonTop,
  descriptionTop,
  headingTop,
  textLeft,
}: {
  buttonLeft: number;
  buttonTop: number;
  descriptionTop: number;
  headingTop: number;
  textLeft: number;
}) {
  return (
    <>
      <h2
        className="absolute z-20 w-[480px] text-[36px] font-extrabold leading-[40px] text-white"
        style={{ left: textLeft, top: headingTop }}
      >
        Discover Our Best Work
      </h2>
      <p
        className="absolute z-20 w-[480px] text-[22px] leading-[32px] text-white"
        style={{ left: textLeft, top: descriptionTop }}
      >
        See how we deliver top solutions for clients like you!
      </p>
      <Link
        href="/contact-us"
        prefetch={false}
        className="pointer-events-auto absolute z-30 flex h-[60px] w-[272px] cursor-pointer items-center justify-center rounded-[10px] border-[1.5px] border-white text-[20px] font-semibold leading-6 text-white transition-colors hover:bg-white hover:text-[#25104d] focus-visible:bg-white focus-visible:text-[#25104d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        style={{ left: buttonLeft, top: buttonTop }}
      >
        Get Started!
      </Link>
    </>
  );
}

function CtaBand({ left, top }: { left: number; top: number }) {
  return (
    <div
      aria-hidden="true"
      className="absolute z-10 h-[413px] w-[1181px] overflow-hidden rounded-[30px]"
      style={{ left, top }}
    >
      <img
        src={ctaBackground}
        alt=""
        draggable={false}
        className="pointer-events-none absolute left-0 top-[-168px] h-[715px] w-[1181px] max-w-none select-none"
      />
    </div>
  );
}

export function PortfolioCtaOverlay() {
  return (
    <>
      <section
        aria-label="Discover our best work"
        className="group/portfolio-cta pointer-events-none absolute inset-0 z-30 hidden dark:block"
      >
        <div aria-hidden="true" className="absolute left-[757px] top-[1345px] h-[88px] w-[448px] bg-[#080d19]" />
        <CtaBand left={109} top={1433} />
        <CtaContent
          textLeft={210}
          headingTop={1535}
          descriptionTop={1589}
          buttonLeft={210}
          buttonTop={1684}
        />
        <div className="pointer-events-auto absolute left-[757px] top-[1351px] z-20 h-[448px] w-[448px] animate-[portfolio-art-float_4s_ease-in-out_infinite]">
          <img
            src="/assets/portfolio/dark/idea-3d.png"
            alt=""
            draggable={false}
            className="h-full w-full select-none object-contain transition-transform duration-300 ease-out group-hover/portfolio-cta:scale-[1.04]"
          />
        </div>
      </section>

      <section
        aria-label="Discover our best work"
        className="group/portfolio-cta pointer-events-none absolute inset-0 z-30 block dark:hidden"
      >
        <div aria-hidden="true" className="absolute left-[710px] top-[1345px] h-[130px] w-[641px] bg-[#eaf0fe]" />
        <CtaBand left={129} top={1475} />
        <CtaContent
          textLeft={230}
          headingTop={1577}
          descriptionTop={1631}
          buttonLeft={230}
          buttonTop={1726}
        />
        <div className="pointer-events-auto absolute left-[710px] top-[1345px] z-20 h-[650px] w-[641px] animate-[portfolio-art-float_4s_ease-in-out_infinite]">
          <div className="h-full w-full scale-x-[-1] overflow-hidden transition-transform duration-300 ease-out group-hover/portfolio-cta:scale-x-[-1.04] group-hover/portfolio-cta:scale-y-[1.04]">
            <img
              src="/assets/portfolio/shared/portfolio-cta-coins.png"
              alt=""
              draggable={false}
              className="h-[650px] w-[1216px] max-w-none select-none"
            />
          </div>
        </div>
      </section>
    </>
  );
}
