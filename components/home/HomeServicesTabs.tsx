"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const iconSprite = "/assets/homepage/home-services-icons.svg";
const arrowAsset = "/assets/homepage/dark/services-arrow-down-right.svg";

const serviceGroups = {
  development: [
    ["Mobile App Development", "device-mobile", "/services/mobile-app-development", true],
    ["Desktop App Development", "device-desktop-analytics", "/services/desktop-app-development"],
    ["Web App Development", "app-window", "/services/web-app-development"],
    ["AI/ML Development", "robot", "/services/ai-ml-development"],
    ["Software Security", "shield-check", "/services/software-security", true],
    ["DevSecOps Services/Solutions", "settings-2", "/services/devsecops"],
    ["Blockchain Development", "cube", "/services/blockchain-development"],
    ["Web 3.0", "adjustments-alt", "/services/web-3-development"],
    ["Metaverse / AR & VR", "cardboards", "/services/metaverse-ar-vr"],
    ["UX/UI - Product Design", "paint", "/services/ui-ux-design"],
    ["Game Development", "device-gamepad-2", "/services/game-development"],
  ],
  product: [
    ["Digital Transformation", "transform", "/services/digital-transformation"],
    ["MVP Development", "layout-kanban", "/services/mvp-development"],
    ["No Code", "code", "/services/no-code-development"],
    ["Product Strategy Consultation", "crown", "/services/product-strategy-consulting"],
  ],
  collaborative: [
    ["Staff Augmentation", "headphones", "/services/staff-augmentation"],
    ["Investment", "briefcase", "/services/investment"],
    ["Dedicated Development Team", "users", "/services/software-development-outsourcing"],
    ["Development Outsourcing", "crown", "/services/software-development-outsourcing"],
  ],
} as const;

type ServiceGroup = keyof typeof serviceGroups;

const tabs: Array<{ key: ServiceGroup; label: string }> = [
  { key: "development", label: "Development" },
  { key: "product", label: "Product Consulting" },
  { key: "collaborative", label: "Collaborative Models" },
];

type TabMotion = Record<
  ServiceGroup,
  {
    pill: { left: number; width: number };
    labels: Record<ServiceGroup, { left: number; width: number }>;
  }
>;

const darkTabMotion: TabMotion = {
  development: {
    pill: { left: 18.5, width: 195 },
    labels: {
      development: { left: 64, width: 104 },
      product: { left: 241.5, width: 147 },
      collaborative: { left: 416.5, width: 220 },
    },
  },
  product: {
    pill: { left: 192.5, width: 195 },
    labels: {
      development: { left: 19.5, width: 145 },
      product: { left: 214.5, width: 151 },
      collaborative: { left: 415.5, width: 220 },
    },
  },
  collaborative: {
    pill: { left: 414, width: 221 },
    labels: {
      development: { left: 20, width: 145 },
      product: { left: 196, width: 187 },
      collaborative: { left: 441.5, width: 166 },
    },
  },
};

const lightTabMotion: TabMotion = {
  development: {
    pill: { left: 10.5, width: 195 },
    labels: {
      development: { left: 56, width: 104 },
      product: { left: 241.5, width: 147 },
      collaborative: { left: 424.5, width: 220 },
    },
  },
  product: {
    pill: { left: 192.5, width: 195 },
    labels: {
      development: { left: 11.5, width: 145 },
      product: { left: 214.5, width: 151 },
      collaborative: { left: 423.5, width: 220 },
    },
  },
  collaborative: {
    pill: { left: 419, width: 221 },
    labels: {
      development: { left: 15, width: 145 },
      product: { left: 196, width: 187 },
      collaborative: { left: 446.5, width: 166 },
    },
  },
};

function ServiceIcon({ name, light }: { name: string; light: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-[50px] w-[50px] [--service-icon-accent:#3871f2] transition-colors duration-300 ${
        light
          ? "[--service-icon-detail:#222] group-hover:[--service-icon-accent:#fff] group-hover:[--service-icon-detail:#fff] group-focus-visible:[--service-icon-accent:#fff] group-focus-visible:[--service-icon-detail:#fff]"
          : "[--service-icon-detail:#fff]"
      }`}
      viewBox="0 0 50 50"
    >
      <use href={`${iconSprite}#${name}`} />
    </svg>
  );
}

export function HomeServicesTabs({
  coverBackground = false,
  theme = "dark",
}: {
  coverBackground?: boolean;
  theme?: "dark" | "light";
}) {
  const [active, setActive] = useState<ServiceGroup>("development");
  const services = serviceGroups[active];
  const light = theme === "light";
  const tabMotion = light ? lightTabMotion : darkTabMotion;

  return (
    <div className={`relative h-[731px] w-[1181px] ${coverBackground ? (light ? "bg-[#eaf0fe]" : "bg-[#080d19]") : ""}`}>
      <div
        className={`absolute left-[263px] top-0 z-10 h-[65px] w-[655px] overflow-hidden rounded-[30px] shadow-[inset_0_0_0_1.5px_#253050] ${
          light ? "bg-[#f5f8ff]" : "bg-[#111729]"
        }`}
        role="tablist"
        aria-label="Service categories"
      >
        <span
          aria-hidden="true"
          className="absolute top-[9px] h-[47px] rounded-full bg-[#3871f2] transition-[left,width] duration-300 ease-out motion-reduce:transition-none"
          style={tabMotion[active].pill}
        />
        {tabs.map((tab) => {
          const selected = active === tab.key;
          const position = tabMotion[active].labels[tab.key];
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`home-services-panel-${theme}`}
              onClick={() => setActive(tab.key)}
              className={`absolute top-0 z-10 flex h-[65px] items-center justify-center whitespace-nowrap text-[16px] leading-[22px] transition-[left,width,color] duration-300 ease-out motion-reduce:transition-none ${
                selected ? "font-bold text-white" : `font-medium ${light ? "text-[#222]" : "text-[#949494]"}`
              }`}
              style={position}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        key={active}
        id={`home-services-panel-${theme}`}
        role="tabpanel"
        className="pointer-events-none absolute inset-0 animate-[figma-state-in_300ms_ease-out]"
      >
        {services.map(([title, icon, href, compact], index) => {
          const column = index % 4;
          const row = Math.floor(index / 4);

          return (
            <Link
              key={title}
              href={href}
              prefetch={false}
              className={`group pointer-events-auto absolute h-[187px] w-[275px] overflow-hidden rounded-[15px] border-b transition-colors duration-300 ease-out hover:bg-[#3871f2] hover:text-white focus-visible:bg-[#3871f2] focus-visible:text-white focus-visible:outline-none ${
                light ? "border-[#9aa4b2] text-[#222]" : "border-[#646464] text-white"
              }`}
              style={{ left: column * 302, top: 132 + row * 206 }}
            >
              <span className="absolute left-[31px] top-[28px]">
                <ServiceIcon name={icon} light={light} />
              </span>
              <Image
                src={arrowAsset}
                alt=""
                width={29}
                height={29}
                className={`absolute left-[234px] top-[13px] h-[29px] w-[29px] rotate-180 scale-x-[-1] opacity-50 transition-[filter,opacity] duration-300 group-hover:opacity-100 ${
                  light ? "group-hover:brightness-0 group-hover:invert" : ""
                }`}
              />
              <h3
                className={`absolute left-[31px] top-[100px] w-[229px] tracking-[-0.1px] ${
                  compact ? "text-[20px] font-semibold leading-[27px]" : "text-[22px] font-bold leading-[30px]"
                }`}
              >
                {title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
