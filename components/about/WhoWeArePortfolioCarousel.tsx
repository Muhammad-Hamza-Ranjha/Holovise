"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  "/assets/portfolio/dark/image-element.jpg",
  "/assets/portfolio/dark/image-element-1.jpg",
  "/assets/portfolio/dark/image-element-2.jpg",
] as const;

export function WhoWeArePortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {activeIndex > 0 ? (
        <div className="absolute left-[730px] top-[3571px] z-[35] h-[545px] w-[580px] overflow-hidden rounded-[30px]">
          <Image
            key={slides[activeIndex]}
            src={slides[activeIndex]}
            alt=""
            fill
            unoptimized
            className="object-cover motion-safe:animate-[figma-state-in_300ms_ease-out]"
            sizes="580px"
          />
        </div>
      ) : null}

      <div className="absolute left-[730px] top-[3514px] z-[40] flex h-[8px] gap-[8px]">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`block h-[6px] rounded-full ${
              index === activeIndex ? "w-[44px] bg-[#3871f2]" : "w-[31px] bg-[#27324c]"
            }`}
          />
        ))}
      </div>

      <div className="absolute left-[1166px] top-[3486px] z-[50] flex gap-[12px]">
        <button
          type="button"
          aria-label="Previous portfolio item"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex((current) => Math.max(0, current - 1))}
          className="h-[66px] w-[66px] cursor-pointer rounded-[16px] bg-transparent focus-visible:outline focus-visible:outline-3 focus-visible:outline-white disabled:cursor-not-allowed"
        />
        <button
          type="button"
          aria-label="Next portfolio item"
          disabled={activeIndex === slides.length - 1}
          onClick={() =>
            setActiveIndex((current) => Math.min(slides.length - 1, current + 1))
          }
          className="h-[66px] w-[66px] cursor-pointer rounded-[16px] bg-transparent focus-visible:outline focus-visible:outline-3 focus-visible:outline-white disabled:cursor-not-allowed"
        />
      </div>
    </>
  );
}
