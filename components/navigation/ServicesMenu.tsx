import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const serviceMenuGroups = [
  [
    {
      label: "Full Stack Development",
      href: "/services/full-stack-development",
      description: "Description text for this menu dolor sit amet awesome.",
    },
    {
      label: "Product Development",
      href: "/services/product-development",
      description: "Description text for this menu dolor sit amet awesome.",
    },
    {
      label: "Collaborative Models",
      href: "/services/collaborative-models",
      description: "Description text for this menu dolor sit amet awesome.",
    },
  ],
  [
    { label: "Web App Development", href: "/services/web-app-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "Desktop App Development", href: "/services/desktop-app-development" },
    { label: "AI/ML Development", href: "/services/ai-ml-development" },
    { label: "Software Security", href: "/services/software-security" },
    { label: "DevSecOps Services/Solutions", href: "/services/devsecops" },
  ],
  [
    { label: "Blockchain Development", href: "/services/blockchain-development" },
    { label: "Web 3.0", href: "/services/web-3-development" },
    { label: "Metaverse / AR & VR", href: "/services/metaverse-ar-vr" },
    { label: "UIUX [Product] Design", href: "/services/ui-ux-design" },
    { label: "Game Development", href: "/services/game-development" },
  ],
] as const;

export const serviceMenuItems = serviceMenuGroups.flat();

export const openServicesMenuFrameLinks = [
  { href: "/services/full-stack-development", label: "Full Stack Development", left: 231, top: 175, width: 300, height: 104 },
  { href: "/services/product-development", label: "Product Development", left: 231, top: 297, width: 300, height: 80 },
  { href: "/services/collaborative-models", label: "Collaborative Models", left: 231, top: 404, width: 300, height: 82 },
  { href: "/services/web-app-development", label: "Web App Development", left: 579, top: 175, width: 290, height: 45 },
  { href: "/services/mobile-app-development", label: "Mobile App Development", left: 579, top: 229, width: 290, height: 45 },
  { href: "/services/desktop-app-development", label: "Desktop App Development", left: 579, top: 283, width: 290, height: 45 },
  { href: "/services/ai-ml-development", label: "AI/ML Development", left: 579, top: 337, width: 290, height: 45 },
  { href: "/services/software-security", label: "Software Security", left: 579, top: 391, width: 290, height: 45 },
  { href: "/services/devsecops", label: "DevSecOps Services/Solutions", left: 579, top: 445, width: 290, height: 45 },
  { href: "/services/blockchain-development", label: "Blockchain Development", left: 917, top: 175, width: 290, height: 45 },
  { href: "/services/web-3-development", label: "Web 3.0", left: 917, top: 229, width: 290, height: 45 },
  { href: "/services/metaverse-ar-vr", label: "Metaverse / AR & VR", left: 917, top: 283, width: 290, height: 45 },
  { href: "/services/ui-ux-design", label: "UIUX Product Design", left: 917, top: 337, width: 290, height: 45 },
  { href: "/services/game-development", label: "Game Development", left: 917, top: 391, width: 290, height: 45 },
] as const;

export const openProductServicesMenuFrameLinks = [
  { href: "/services/full-stack-development", label: "Full Stack Development", left: 231, top: 175, width: 300, height: 90 },
  { href: "/services/product-development", label: "Product Development", left: 231, top: 281, width: 300, height: 90 },
  { href: "/services/collaborative-models", label: "Collaborative Models", left: 231, top: 387, width: 300, height: 90 },
  { href: "/services/digital-transformation", label: "Digital Transformation", left: 569, top: 175, width: 300, height: 44 },
  { href: "/services/mvp-development", label: "MVP Development", left: 569, top: 229, width: 300, height: 44 },
  { href: "/services/no-code-development", label: "No Code", left: 569, top: 283, width: 300, height: 44 },
  { href: "/services/product-strategy-consulting", label: "Product Strategy Consultation", left: 569, top: 337, width: 300, height: 44 },
] as const;

export const openCollaborativeServicesMenuFrameLinks = [
  { href: "/services/full-stack-development", label: "Full Stack Development", left: 231, top: 175, width: 300, height: 90 },
  { href: "/services/product-development", label: "Product Development", left: 231, top: 281, width: 300, height: 90 },
  { href: "/services/collaborative-models", label: "Collaborative Models", left: 231, top: 387, width: 300, height: 90 },
  { href: "/services/staff-augmentation", label: "Staff Augmentation", left: 569, top: 175, width: 300, height: 44 },
  { href: "/services/investment", label: "Investment", left: 569, top: 229, width: 300, height: 44 },
  { href: "/services/software-development-outsourcing", label: "Dedicated Development Team", left: 569, top: 283, width: 300, height: 44 },
  { href: "/services/software-development-outsourcing", label: "Software Development Outsourcing", left: 569, top: 337, width: 300, height: 44 },
] as const;

export function ServicesMenuPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid h-[386px] w-[1055px] grid-cols-[300px_300px_300px] gap-x-[38px] rounded-b-[30px] bg-[#eaf0fe] px-[39px] py-[35px] text-left text-[#212121] dark:bg-[#080d19] dark:text-white ${className}`}
    >
      <div className="grid content-start gap-4">
        {serviceMenuGroups[0].map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={false}
            className={`group/item flex w-[300px] rounded-[8px] px-5 py-[10px] transition-colors hover:bg-[#3871f2] hover:text-white focus-visible:bg-[#3871f2] focus-visible:text-white focus-visible:outline-none ${
              index === 0
                ? "h-[104px] items-center justify-between bg-[#9a45ff] text-white dark:bg-[#3871f2]"
                : "h-[90px] text-[#3871f2] dark:text-white"
            }`}
          >
            <span className="block w-[246px]">
              <span className="block text-[18px] font-semibold leading-6">{item.label}</span>
              <span
                className={`mt-[6px] block text-[14px] leading-5 ${
                  index === 0
                    ? "text-white"
                    : "text-[#777] group-hover/item:text-white group-focus-visible/item:text-white dark:text-white/50"
                }`}
              >
                {item.description}
              </span>
            </span>
            {index === 0 ? <ArrowRight aria-hidden="true" className="size-6 shrink-0" strokeWidth={2} /> : null}
          </Link>
        ))}
      </div>

      <div className="grid content-start gap-[10px]">
        {serviceMenuGroups[1].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={false}
            className={`w-[300px] rounded-[8px] p-[10px] text-[16px] leading-6 hover:bg-[#3871f2]/10 focus-visible:bg-[#3871f2]/10 focus-visible:outline-none dark:hover:bg-white/8 dark:focus-visible:bg-white/8 ${
              item.label === "Software Security" ? "font-extrabold" : "font-bold"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="grid content-start gap-[10px]">
        {serviceMenuGroups[2].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={false}
            className="w-[300px] rounded-[8px] p-[10px] text-[16px] font-bold leading-6 hover:bg-[#3871f2]/10 focus-visible:bg-[#3871f2]/10 focus-visible:outline-none dark:hover:bg-white/8 dark:focus-visible:bg-white/8"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function FigmaServicesDropdown() {
  return (
    <div className="group absolute left-[663px] top-[70px] z-50 h-[70px] w-[124px]">
      <Link
        href="/services/full-stack-development"
        prefetch={false}
        aria-label="Open Services menu"
        aria-haspopup="true"
        className="absolute left-0 top-0 h-[40px] w-[124px] cursor-pointer bg-transparent"
      />
      <div className="pointer-events-none invisible absolute left-[-471px] top-[70px] opacity-0 transition-opacity duration-300 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <ServicesMenuPanel />
      </div>
    </div>
  );
}
