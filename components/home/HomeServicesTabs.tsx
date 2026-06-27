"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const assetRoot = "/assets/homepage/dark";

const serviceGroups = {
  development: [
    ["Mobile Apps Development", "icon-lightning-bolt.svg", "/services/mobile-app-development"],
    ["Desktop App Development", "icon-filter-2.svg", "/services/desktop-app-development"],
    ["Web Apps Development", "icon-share-1.svg", "/services/web-app-development"],
    ["AI/ML Development", "icon-box.svg", "/services/ai-ml-development"],
    ["Software Security", "icon-flag.svg", "/services/software-security"],
    ["DevSecOps Services/Solutions", "icon-pencil.svg", "/services/devsecops"],
    ["Blockchain Development", "icon-cart-1.svg", "/services/blockchain-development"],
    ["Web 3.0", "icon-gaming-controller.svg", "/services/web-3-development"],
    ["Metaverse / AR & VR", "icon-heart-2.svg", "/services/metaverse-ar-vr"],
    ["UX/UI - Product Design", "icon-pencil.svg", "/services/ui-ux-design"],
    ["Game Development", "icon-gaming-controller.svg", "/services/game-development"],
  ],
  product: [
    ["Digital Transformation", "icon-share-1.svg", "/services/digital-transformation"],
    ["MVP Development", "icon-filter-2.svg", "/services/mvp-development"],
    ["No Code", "icon-box.svg", "/services/no-code-development"],
    ["Product Strategy Consultation", "icon-flag.svg", "/services/product-strategy-consulting"],
  ],
  collaborative: [
    ["Staff Augmentation", "icon-heart-2.svg", "/services/staff-augmentation"],
    ["Investment", "icon-shopping-bag.svg", "/services/investment"],
    ["Dedicated Development Team", "icon-share-1.svg", "/services/software-development-outsourcing"],
    ["Development Outsourcing", "icon-flag.svg", "/services/software-development-outsourcing"],
  ],
} as const;

type ServiceGroup = keyof typeof serviceGroups;

const tabs: Array<{ key: ServiceGroup; label: string; width: string }> = [
  { key: "development", label: "Development", width: "w-[195px]" },
  { key: "product", label: "Product Consulting", width: "w-[195px]" },
  { key: "collaborative", label: "Collaborative Models", width: "w-[221px]" },
];

export function HomeServicesTabs() {
  const [active, setActive] = useState<ServiceGroup>("development");
  const services = serviceGroups[active];

  return (
    <>
      <div className="absolute left-[263px] top-[241px] flex h-[65px] w-[655px] items-center justify-center gap-7 rounded-[30px] border-[1.5px] border-[#253050] bg-[#111729] px-5">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={`flex h-[47px] items-center justify-center rounded-full text-[16px] transition-colors duration-300 ease-out ${tab.width} ${
              active === tab.key ? "bg-[#3871f2] font-bold text-white" : "font-medium text-[#949494]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="absolute left-0 top-[342px] grid w-[1181px] grid-cols-4 gap-x-0 gap-y-[42px]">
        {services.map(([title, icon, href], index) => (
          <Link
            key={title}
            href={href}
            prefetch={false}
            className="relative h-[187px] border-b border-[#646464]/70 pr-7 transition-colors duration-300 ease-out hover:bg-[#3871f2] focus-visible:bg-[#3871f2] focus-visible:outline-none"
          >
            <Image
              src={`${assetRoot}/${icon}`}
              alt=""
              width={42}
              height={42}
              className="absolute left-[31px] top-[28px] h-[42px] w-[42px]"
            />
            <Image
              src={`${assetRoot}/services-arrow-down-right.svg`}
              alt=""
              width={28}
              height={28}
              className="absolute right-[22px] top-[17px] h-7 w-7 rotate-180 opacity-40"
            />
            <h3 className="absolute left-[31px] top-[91px] w-[220px] text-[22px] font-extrabold leading-[30px] text-white">
              {title}
            </h3>
            {index === services.length - 1 ? null : (
              <span className="absolute bottom-[-1px] right-0 h-[187px] w-px bg-[#646464]/40" />
            )}
          </Link>
        ))}
      </div>
    </>
  );
}
