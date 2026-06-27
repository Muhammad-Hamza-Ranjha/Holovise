import Image from "next/image";
import Link from "next/link";

export const aboutMenuItems = [
  {
    label: "Who we are!",
    href: "/about/who-we-are",
    image: "/assets/about/dark/content-default-img-2.png",
    title: "Your Tech Solution Experts!",
    description: "Delivering smart, custom-fit tech solutions that help businesses thrive.",
  },
  {
    label: "Our Portfolio",
    href: "/portfolio",
    image: "/assets/about/dark/content-default-img-1.png",
    title: "Holovise\u2019 Case Studies.",
    description: "See how we can deliver top results for your business.",
  },
  {
    label: "Our Gallery",
    href: "/about/our-gallery",
    image: "/assets/about/dark/content-default-img.png",
    title: "Inside Holovise - Our Culture.",
    description: "we work and play together to create a dynamic & collaborative environment.",
  },
] as const;

export function AboutMenuPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid h-[386px] w-[1055px] grid-cols-[300px_300px_300px] gap-x-[38px] rounded-b-[30px] bg-[#eaf0fe] px-[39px] py-[41px] text-left text-[#212121] dark:bg-[#080d19] dark:text-white ${className}`}
    >
      {aboutMenuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          prefetch={false}
          className="group/item flex w-[300px] flex-col focus-visible:outline-none"
        >
          <span className="block h-[44px] rounded-[8px] p-[10px] text-[16px] font-bold leading-6">
            {item.label}
          </span>
          <span className="block rounded-[8px] p-[10px]">
            <Image
              src={item.image}
              alt=""
              width={280}
              height={150}
              sizes="280px"
              className="h-[150px] w-[280px] rounded-[8px] object-cover object-top"
            />
            <span className="mt-5 block">
              <span className="block text-[18px] font-semibold leading-6 text-[#3871f2] transition-colors group-hover/item:text-[#8b44ff] group-focus-visible/item:text-[#8b44ff] dark:text-white">
                {item.title}
              </span>
              <span className="mt-[6px] block text-[14px] leading-5 text-[#777] dark:text-white/50">
                {item.description}
              </span>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function FigmaAboutDropdown() {
  return (
    <div className="group absolute left-[521px] top-[70px] z-[60] h-[70px] w-[116px]">
      <Link
        href="/about"
        prefetch={false}
        aria-label="Open About menu"
        aria-haspopup="true"
        className="absolute left-0 top-0 flex h-[40px] w-[116px] cursor-pointer items-center justify-center gap-[10px] bg-transparent text-[16px] font-medium text-transparent"
      >
        About
        <span className="h-0 w-0 border-x-[5px] border-b-[7px] border-x-transparent border-b-current" />
      </Link>
      <div className="pointer-events-none invisible absolute left-[-329px] top-[70px] opacity-0 transition-opacity duration-300 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <AboutMenuPanel />
      </div>
    </div>
  );
}
