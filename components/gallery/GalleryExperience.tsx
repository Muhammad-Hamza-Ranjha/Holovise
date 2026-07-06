"use client";

import { useState } from "react";

const photos = [
  { file: "testimonial-component.jpg", left: 130, top: 856, width: 380 },
  { file: "testimonial-component-1.jpg", left: 530, top: 856, width: 780 },
  { file: "testimonial-component-7.jpg", left: 130, top: 1253, width: 380 },
  { file: "testimonial-component-5.jpg", left: 530, top: 1253, width: 380 },
  { file: "testimonial-component-3.jpg", left: 930, top: 1253, width: 380 },
  { file: "testimonial-component-2.jpg", left: 130, top: 1650, width: 1180 },
  { file: "testimonial-component-8.jpg", left: 130, top: 2047, width: 380 },
  { file: "testimonial-component-6.jpg", left: 530, top: 2047, width: 380 },
  { file: "testimonial-component-4.jpg", left: 930, top: 2047, width: 380 },
  { file: "testimonial-component-14.jpg", left: 130, top: 2859, width: 380 },
  { file: "testimonial-component-12.jpg", left: 530, top: 2859, width: 380 },
  { file: "testimonial-component-10.jpg", left: 930, top: 2859, width: 380 },
  { file: "testimonial-component-9.jpg", left: 130, top: 3256, width: 1180 },
  { file: "testimonial-component-15.jpg", left: 130, top: 3653, width: 380 },
  { file: "testimonial-component-13.jpg", left: 530, top: 3653, width: 380 },
  { file: "testimonial-component-11.jpg", left: 930, top: 3653, width: 380 },
] as const;

const tabs = ["Workplace", "Celebrations", "Milestones", "Team Building"] as const;

export function GalleryPhotos() {
  return (
    <>
      {photos.map(({ file, left, top, width }) => (
        <div
          key={file}
          className="group absolute z-10 h-[375px] overflow-hidden rounded-[30px]"
          style={{ left, top, width }}
        >
          <img
            src={`/assets/gallery/dark/${file}`}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="h-full w-full select-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        </div>
      ))}
    </>
  );
}

export function LightGalleryTabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Workplace");

  return (
    <div className="absolute left-[375px] top-[728px] z-30 grid h-[65px] w-[690px] grid-cols-[195px_147px_134px_194px] items-center rounded-[30px] border-[1.5px] border-[#253050] bg-[#f4f7ff] px-[10px]">
      {tabs.map((tab) => {
        const active = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            aria-pressed={active}
            onClick={() => setActiveTab(tab)}
            className={`h-[47px] cursor-pointer rounded-[50px] text-center text-[16px] leading-[22px] transition-[background-color,color,transform] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3871f2] ${
              active
                ? "bg-[#3871f2] font-bold text-white"
                : "font-medium text-[#222] hover:bg-white"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
