import Image from "next/image";
import Link from "next/link";

const assetRoot = "/assets/services/web-app-development/shared";

export function WebAppPageHero() {
  return (
    <section
      aria-labelledby="web-app-page-title"
      className="relative h-[720px] overflow-hidden bg-[#EAF0FE] text-[#222222] dark:bg-[#080D19] dark:text-white lg:h-[860px]"
      data-figma-node-dark="1:1595"
      data-figma-node-light="79:6795"
    >
      <div className="pointer-events-none absolute inset-0 dark:hidden" aria-hidden="true">
        <Image
          src={`${assetRoot}/hero-light-mask-base.svg`}
          alt=""
          width={1440}
          height={872}
          priority
          className="absolute left-1/2 top-[-407px] h-[872px] w-[1440px] max-w-none -translate-x-1/2"
        />
        <Image
          src={`${assetRoot}/hero-light-mask-overlay.svg`}
          alt=""
          width={1440}
          height={872}
          priority
          className="absolute left-1/2 top-[-407px] h-[872px] w-[1440px] max-w-none -translate-x-1/2"
        />
        <div className="absolute left-1/2 top-[-140px] h-[605px] w-[1440px] max-w-none -translate-x-1/2 bg-[linear-gradient(to_top,#EAF0FE_41.318%,rgba(235,240,255,0.35)_70.659%,rgba(8,13,25,0)_100%)]" />
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-[-140px] hidden h-[605px] w-[1440px] max-w-none -translate-x-1/2 bg-[linear-gradient(to_top,#080D19_41.318%,rgba(8,13,25,0)_100%)] dark:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col items-center px-6 pt-[58px] lg:pt-[59px]">
        <h1
          id="web-app-page-title"
          className="m-0 w-full max-w-[871px] text-center text-[32px] font-extrabold leading-[48px] tracking-[-1px] lg:h-[89px] lg:text-[40px] lg:leading-[102px]"
        >
          Web App Development
        </h1>

        <nav
          aria-label="Breadcrumb"
          className="mt-[18px] flex min-h-[22px] max-w-full items-center justify-center gap-[10px] overflow-x-auto text-[14px] leading-[20px] whitespace-nowrap lg:mt-[7px] lg:text-[16px]"
        >
          <Image
            src={`${assetRoot}/breadcrumb-home-light.svg`}
            alt=""
            width={22}
            height={22}
            className="size-[22px] dark:hidden"
          />
          <Image
            src={`${assetRoot}/breadcrumb-home-dark.svg`}
            alt=""
            width={22}
            height={22}
            className="hidden size-[22px] dark:block"
          />
          <Link href="/" className="font-normal underline">
            Home
          </Link>
          <BreadcrumbArrow />
          <Link href="/services/full-stack-development" className="font-normal underline">
            Services
          </Link>
          <BreadcrumbArrow />
          <span className="font-bold">Web App Development</span>
        </nav>
      </div>

      <div className="absolute inset-x-6 top-[214px] text-center lg:inset-x-auto lg:left-[279px] lg:top-[319px] lg:w-[881px]">
        <h2 className="m-0 text-[30px] font-bold leading-[40px] tracking-[-1px] lg:h-[58px] lg:text-[48px] lg:leading-[58px] lg:tracking-[-1.5px]">
          Custom Web App Development for
        </h2>
        <p
          className="m-0 mt-2 hidden bg-clip-text text-[30px] font-bold leading-[40px] tracking-[-1px] text-transparent dark:block lg:mt-[14px] lg:text-[48px] lg:leading-[58px] lg:tracking-[-1.5px]"
          data-figma-node="1:2508"
          style={{
            backgroundImage:
              "linear-gradient(48.27621680122133deg, rgb(113, 77, 255) 2.744%, rgb(156, 131, 255) 34.43%, rgb(225, 81, 255) 64.628%, rgb(255, 247, 89) 90.663%)",
          }}
        >
          Growing Businesses
        </p>
        <p
          className="m-0 mt-2 bg-clip-text text-[30px] font-bold leading-[40px] tracking-[-1px] text-transparent dark:hidden lg:mt-[14px] lg:text-[48px] lg:leading-[58px] lg:tracking-[-1.5px]"
          data-figma-node="61:4645"
          style={{
            backgroundImage:
              "linear-gradient(-25.83128904474583deg, rgb(225, 81, 255) 26.605%, rgb(56, 113, 242) 84.601%)",
          }}
        >
          <span className="block">For Growing Businesses</span>
          <span className="block"> - Scalable Solutions</span>
        </p>
      </div>

      <p className="absolute inset-x-6 top-[360px] m-0 text-center text-[17px] leading-[28px] dark:top-[322px] lg:left-[230px] lg:right-auto lg:top-[543px] lg:w-[980px] lg:text-[22px] lg:leading-[36px] lg:dark:top-[482px]">
        <span className="dark:hidden">
          We create custom web apps that make your business operations easier and help you grow
          quickly. Our full-stack web development approach is perfect for both new and established
          companies.
          <span className="mt-4 block">
            Get custom web app development based on your business needs.
          </span>
        </span>
        <span className="hidden dark:inline">
          We create custom web apps that make your business operations easier and help you grow
          quickly. Our full-stack web development approach is perfect for both new and established
          companies.
        </span>
      </p>

      <Link
        href="/contact-us"
        className="absolute left-1/2 top-[600px] inline-flex h-[60px] w-[245px] -translate-x-1/2 items-center justify-center rounded-[10px] bg-[#9C50FF] text-[18px] font-normal leading-[24px] text-white shadow-[inset_0_24px_48px_rgba(199,211,234,0.05),inset_0_1px_1px_rgba(199,211,234,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3871F2] dark:top-[520px] dark:bg-white/[0.01] lg:top-[768px] lg:dark:top-[632px]"
      >
        Get Started
      </Link>
    </section>
  );
}

function BreadcrumbArrow() {
  return (
    <>
      <Image
        src={`${assetRoot}/breadcrumb-arrow-light.svg`}
        alt=""
        width={8}
        height={8}
        className="size-2 dark:hidden"
      />
      <Image
        src={`${assetRoot}/breadcrumb-arrow-dark.svg`}
        alt=""
        width={8}
        height={8}
        className="hidden size-2 dark:block"
      />
    </>
  );
}
