"use client";

import { useState } from "react";

type Industry = {
  key: string;
  label: string;
  title: string;
  description: string;
  spriteX: number;
  spriteY: number;
};

const industries: Industry[] = [
  {
    key: "logistics",
    label: "Logistics & Transportation",
    title: "More than route optimization.",
    description:
      "Our apps track shipments in real time, handle dynamic scheduling, and integrate with GPS for precise delivery estimates.",
    spriteX: 421,
    spriteY: 20,
  },
  {
    key: "media",
    label: "Entertainment & Media",
    title: "Built for every production.",
    description:
      "We create desktop tools for content planning, production, publishing, and audience management, keeping media teams connected from concept to release.",
    spriteX: 421,
    spriteY: 866,
  },
  {
    key: "education",
    label: "Education",
    title: "Smarter learning operations.",
    description:
      "Our education apps support classrooms, course administration, student records, and learning resources in one dependable desktop workspace.",
    spriteX: 421,
    spriteY: 1712,
  },
  {
    key: "healthcare",
    label: "Healthcare",
    title: "Secure care coordination.",
    description:
      "We build secure systems for patient records, scheduling, clinical workflows, and reporting, helping healthcare teams work accurately and efficiently.",
    spriteX: 1739,
    spriteY: 1712,
  },
  {
    key: "estate",
    label: "Real Estate",
    title: "Everything behind every property.",
    description:
      "Our real estate solutions bring listings, client records, documents, and property workflows together so teams can manage every deal with clarity.",
    spriteX: 1739,
    spriteY: 866,
  },
];

const photoScale = 275 / 358;
const scaledPhotoWidth = 783 * photoScale;
const horizontalCrop = (scaledPhotoWidth - 545) / 2;

export function DesktopIndustryTabs() {
  const [activeKey, setActiveKey] = useState(industries[0].key);
  const activeIndustry =
    industries.find((industry) => industry.key === activeKey) ?? industries[0];

  return (
    <section
      aria-label="Desktop application industry expertise"
      className="absolute left-[230px] top-[9395px] z-30 h-[404px] w-[980px] bg-[#eaf0fe] text-[#1d294d] dark:top-[9583px] dark:bg-[#080d19] dark:text-white"
    >
      <div
        className="grid h-[65px] w-full grid-cols-[292px_231px_127px_134px_172px] items-center rounded-full border border-[#8f98aa] bg-[#f4f6fb] px-[12px] dark:border-[#5e626c] dark:bg-[#12192c]"
        role="tablist"
        aria-label="Industries"
      >
        {industries.map((industry) => {
          const isActive = industry.key === activeKey;

          return (
            <button
              key={industry.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="desktop-industry-panel"
              onClick={() => setActiveKey(industry.key)}
              className={`h-[47px] cursor-pointer rounded-full px-[10px] text-[15px] font-semibold leading-none transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#3871f2] ${
                isActive
                  ? "bg-[#3871f2] text-white"
                  : "bg-transparent text-[#323b55] hover:text-[#3871f2] dark:text-[#9699a3] dark:hover:text-white"
              }`}
            >
              {industry.label}
            </button>
          );
        })}
      </div>

      <div
        id="desktop-industry-panel"
        role="tabpanel"
        className="absolute left-0 top-[129px] h-[275px] w-full"
      >
        <div className="absolute left-0 top-0 h-[275px] w-[545px] overflow-hidden rounded-[8px]">
          <div
            key={activeIndustry.key}
            className="absolute top-0 h-[358px] w-[783px] bg-no-repeat motion-safe:animate-[figma-state-in_300ms_ease-out]"
            style={{
              left: -horizontalCrop,
              transform: `scale(${photoScale})`,
              transformOrigin: "left top",
              backgroundImage: "url('/assets/interactions/desktop-features.png')",
              backgroundPosition: `${-activeIndustry.spriteX}px ${-activeIndustry.spriteY}px`,
              backgroundSize: "3860px 2455px",
            }}
          />
        </div>

        <div
          key={`${activeIndustry.key}-copy`}
          className="absolute left-[600px] top-0 w-[380px] motion-safe:animate-[figma-state-in_300ms_ease-out]"
        >
          <h3 className="text-[36px] font-bold leading-[44px]">
            {activeIndustry.title}
          </h3>
          <p className="mt-[35px] text-[22px] leading-[32px]">
            {activeIndustry.description}
          </p>
        </div>
      </div>
    </section>
  );
}
