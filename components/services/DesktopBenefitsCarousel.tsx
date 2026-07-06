"use client";

import { useState, type ComponentType } from "react";
import {
  Heart,
  Pencil,
  ShoppingBag,
} from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

const benefits: Benefit[] = [
  {
    title: "Scalability",
    description:
      "Get an app that can easily add features or handle more users as your business grows. You won't need to overhaul it. Just expand and adjust as needed to keep up with your growth.",
    icon: Heart,
  },
  {
    title: "Improved User Experience",
    description:
      "Enjoy an app that's simple and easy to use. It makes tasks straightforward for your team and customers, reducing the time needed to learn it and helping everyone work more efficiently.",
    icon: Pencil,
  },
  {
    title: "Custom Features & Functionality",
    description:
      "Get tools built for your exact needs, like automated reports or specific data views. Address your unique business problems directly with solutions designed just for you. Improve daily tasks and workflows with features that fit your processes perfectly.",
    icon: ShoppingBag,
  },
  {
    title: "Reliable Performance",
    description:
      "Expect your app to handle daily tasks without freezing or crashing. It will run smoothly during peak usage times and have a quick recovery from any issues. Your team won't face unexpected delays or disruptions.",
    icon: Heart,
  },
  {
    title: "Rapid Deployment and Integration",
    description:
      "Install the app in under an hour with an easy setup process. It will automatically sync with your existing CRM and ERP systems, letting your team use the app immediately without manual adjustments.",
    icon: Pencil,
  },
];

const offsets = [0, 394, 657] as const;

export function DesktopBenefitsCarousel() {
  const [position, setPosition] = useState(0);

  return (
    <>
      <section
        aria-label="Desktop application benefits"
        className="absolute left-[129px] top-[2442px] z-30 h-[416px] w-[1311px] overflow-hidden bg-[linear-gradient(110deg,#eef3ff_0%,#e6eaff_58%,#ead7ff_100%)] text-[#1f2634] dark:bg-[linear-gradient(110deg,#0b1428_0%,#27205f_48%,#a80ee5_100%)] dark:text-white"
      >
        <div
          className="flex h-[416px] w-[1968px] transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${offsets[position]}px)` }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="h-[416px] shrink-0 border-r border-[#aeb7ca] px-[48px] py-[36px] dark:border-white/20"
                style={{ width: index % 2 === 0 ? 394 : 393 }}
              >
                <div className="flex min-h-[88px] items-center gap-[20px]">
                  <span className="grid h-[88px] w-[88px] shrink-0 place-items-center rounded-[8px] bg-[#11182d] text-[#9b46ff]">
                    <Icon className="h-[42px] w-[42px]" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-[22px] font-bold leading-[30px]">
                    {benefit.title}
                  </h3>
                </div>
                <p className="mt-[32px] text-[18px] leading-[28px]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <div className="absolute left-[1166px] top-[2381px] z-40 flex gap-[12px]">
        <button
          type="button"
          aria-label="Show previous desktop benefit cards"
          disabled={position === 0}
          onClick={() => setPosition((current) => Math.max(0, current - 1))}
          className="h-[66px] w-[66px] cursor-pointer rounded-[16px] bg-transparent focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed"
        />
        <button
          type="button"
          aria-label="Show next desktop benefit cards"
          disabled={position === offsets.length - 1}
          onClick={() =>
            setPosition((current) => Math.min(offsets.length - 1, current + 1))
          }
          className="h-[66px] w-[66px] cursor-pointer rounded-[16px] bg-transparent focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed"
        />
      </div>
    </>
  );
}
