"use client";

import Link from "next/link";
import { useState, type ComponentType } from "react";
import {
  Apple,
  BadgeCheck,
  Bot,
  ChevronDown,
  Glasses,
  Layers3,
  MessagesSquare,
  Palette,
  PanelsTopLeft,
  Smartphone,
  Wifi,
} from "lucide-react";

type Icon = ComponentType<{ className?: string; strokeWidth?: number }>;

const mobileCapacityCards: Array<{
  title: string;
  description: string;
  icon: Icon;
}> = [
  {
    title: "Custom Mobile App Development",
    description:
      "Custom mobile app development means we build apps designed specifically for your business goals. Our team creates unique features and functionality that align with your needs, integrate smoothly with your operations, and increase efficiency.",
    icon: Smartphone,
  },
  {
    title: "iOS (Apple) App Development",
    description:
      "We create polished iPhone and iPad applications with native performance, intuitive interfaces, secure integrations, and dependable App Store delivery.",
    icon: Apple,
  },
  {
    title: "Android App Development",
    description:
      "We build reliable Android apps that perform smoothly across screen sizes, devices, and operating-system versions.",
    icon: Bot,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "One maintainable product foundation delivers consistent, high-quality experiences across both iOS and Android.",
    icon: Layers3,
  },
  {
    title: "Mobile App UI/UX (Product) Design",
    description:
      "Research-led mobile journeys and polished interfaces make complex workflows feel clear, useful, and easy to navigate.",
    icon: Palette,
  },
  {
    title: "App Prototyping & Wireframing",
    description:
      "Clickable prototypes and focused wireframes validate navigation, features, and product direction before development begins.",
    icon: PanelsTopLeft,
  },
  {
    title: "AR/VR Mobile App Development",
    description:
      "Immersive mobile experiences combine spatial interaction, responsive visuals, and practical augmented or virtual reality features.",
    icon: Glasses,
  },
  {
    title: "IoT Mobile App Development",
    description:
      "Secure mobile controls, real-time monitoring, and dependable device connectivity bring connected products into one clear interface.",
    icon: Wifi,
  },
  {
    title: "App Testing & Quality Assurance",
    description:
      "Structured testing across devices catches usability, performance, security, and reliability issues before release.",
    icon: BadgeCheck,
  },
  {
    title: "Mobile App Consulting",
    description:
      "Our specialists help shape product strategy, choose the right technology, reduce risk, and plan a practical path to launch.",
    icon: MessagesSquare,
  },
];

const mobileWorkflowSteps = [
  {
    number: "01",
    title: "Vision Discovery",
    description:
      "We examine your app concept, goals, audience, and essential features through focused discussion and investigation.",
  },
  {
    number: "02",
    title: "Blueprint Creation",
    description:
      "Technical specifications, user journeys, and critical features become a clear guide for design and development.",
  },
  {
    number: "03",
    title: "Design Phase",
    description:
      "Wireframes and high-fidelity mockups turn the blueprint into an intuitive, consistent, and engaging product experience.",
  },
  {
    number: "04",
    title: "Development Sprint",
    description:
      "The approved product is built in transparent sprints with regular reviews, practical milestones, and visible progress.",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description:
      "We test usability, performance, security, and compatibility across the devices your customers actually use.",
  },
  {
    number: "06",
    title: "Launch Preparation",
    description:
      "Store assets, deployment settings, analytics, and release checks are completed for a confident product launch.",
  },
  {
    number: "07",
    title: "Post-Launch Support",
    description:
      "After release, we monitor stability, resolve issues, and support the product as real users begin working with it.",
  },
  {
    number: "08",
    title: "User Feedback & Refinement",
    description:
      "Product data and user feedback guide focused improvements that keep the app relevant, useful, and effective.",
  },
] as const;

function DarkCapacityHeaderRepair() {
  return (
    <section className="absolute left-0 top-[3048px] z-30 hidden h-[382px] w-[1440px] bg-[#080d19] text-white dark:block">
      <p className="absolute left-[230px] top-[8px] w-[980px] text-center text-[16px] font-medium uppercase tracking-[8px] text-[#9b46ff]">
        Our Capacity
      </p>
      <h2 className="absolute left-[330px] top-[50px] w-[780px] text-center text-[36px] font-extrabold leading-[57px]">
        Our Mobile App Development Services
      </h2>
      <div className="absolute left-[330px] top-[129px] w-[780px] text-center text-[22px] leading-[36px]">
        <p>
          We can bring it to life! Since 2014, we&apos;ve been crafting apps that
          help your business grow and reach more customers.
        </p>
        <p className="mt-[28px]">
          From the initial design to the final launch, we take care of everything
          and ensure your app meets your exact needs. Ready to get started?
        </p>
      </div>
    </section>
  );
}

function MobileCapacityGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      aria-label="Mobile app development capacity"
      className="absolute left-[129px] top-[3430px] z-30 grid h-[1078px] w-[1181px] grid-cols-3 auto-rows-[250px] gap-x-[20px] gap-y-[26px] bg-[#eaf0fe] dark:bg-[#080d19]"
      style={{ gridAutoFlow: "dense" }}
    >
      {mobileCapacityCards.map((card, index) => {
        const expanded = expandedIndex === index;
        const Icon = card.icon;

        return (
          <button
            key={card.title}
            type="button"
            aria-expanded={expanded}
            onClick={() =>
              setExpandedIndex((currentIndex) =>
                currentIndex === index ? null : index,
              )
            }
            className={[
              "group relative cursor-pointer overflow-hidden rounded-[8px] border p-[36px_48px] text-left transition-[border-color,box-shadow,transform,background-color] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3871f2]",
              "border-[#bcc7dc] bg-white text-[#1d2028] dark:border-[#263149] dark:bg-[#101728] dark:text-white",
              "hover:-translate-y-[3px] hover:border-[#3871f2] hover:shadow-[0_0_0_1px_rgba(56,113,242,0.65),0_0_32px_rgba(56,113,242,0.42)]",
              expanded
                ? "border-[#7c4dff] bg-[linear-gradient(145deg,#ffffff_0%,#edf3ff_100%)] shadow-[0_0_0_1px_rgba(124,77,255,0.62),0_18px_46px_rgba(56,113,242,0.24)] dark:bg-[linear-gradient(145deg,#151e34_0%,#0d1425_100%)]"
                : "",
            ].join(" ")}
            style={{ gridRow: expanded ? "span 2" : "span 1" }}
          >
            <span
              className={[
                "mb-[24px] grid h-[85px] w-[88px] place-items-center rounded-[8px] transition-[background-color,box-shadow,color] duration-300",
                expanded
                  ? "bg-[#3871f2] text-white shadow-[0_10px_24px_rgba(56,113,242,0.28)]"
                  : "bg-[#f1f5ff] text-[#3871f2] group-hover:bg-[#3871f2] group-hover:text-white dark:bg-[#111729]",
              ].join(" ")}
            >
              <Icon className="h-[46px] w-[46px]" strokeWidth={1.6} />
            </span>
            <span className="block max-w-[285px] text-[23px] font-bold leading-[1.32]">
              {card.title}
            </span>
            <span
              className={[
                "mt-[24px] block text-[17px] font-normal leading-[1.65] text-[#4f5665] transition-opacity duration-300 dark:text-[#c9cfda]",
                expanded ? "opacity-100" : "pointer-events-none opacity-0",
              ].join(" ")}
            >
              {card.description}
            </span>
            <ChevronDown
              aria-hidden="true"
              className={[
                "absolute right-[40px] top-[39px] h-[25px] w-[25px] text-[#aab0ba] transition-[color,transform] duration-300 group-hover:text-[#3871f2]",
                expanded ? "rotate-180" : "",
              ].join(" ")}
              strokeWidth={1.7}
            />
          </button>
        );
      })}
    </section>
  );
}

function MobileWorkflow() {
  return (
    <section className="absolute left-0 top-[5008px] z-30 h-[2592px] w-[1440px] overflow-hidden bg-[#eaf0fe] text-[#20242d] dark:bg-[#080d19] dark:text-white">
      <p className="absolute left-[480px] top-[236px] w-[480px] text-center text-[16px] font-medium uppercase tracking-[8px] text-[#3871f2] dark:text-[#9b46ff]">
        Step by Step Process
      </p>
      <h2 className="absolute left-[410px] top-[278px] w-[620px] text-center text-[36px] font-extrabold leading-[1.3]">
        Our Mobile App Development Workflow
      </h2>
      <p className="absolute left-[330px] top-[380px] w-[780px] text-center text-[18px] leading-[30px] text-[#4d5668] dark:text-white/75">
        Our customized workflow turns your app concept into a successful product
        while making sure every step supports your goals and user needs.
      </p>

      <span
        aria-hidden="true"
        className="absolute left-[719px] top-[536px] h-[1975px] w-[2px] bg-[linear-gradient(180deg,#3871f2_0%,#8b44ff_100%)] opacity-45"
      />

      <ol className="absolute inset-0">
        {mobileWorkflowSteps.map((step, index) => {
          const leftAligned = index % 2 === 0;
          const top = 620 + index * 244;

          return (
          <li
            key={step.number}
            className="group absolute left-0 h-[220px] w-[1440px]"
            style={{ top }}
          >
            <span className="absolute left-[668px] top-[20px] grid h-[81px] w-[150px] place-items-center rounded-[14px] bg-[#202b50] text-[30px] font-normal text-white transition-[transform,background-color,box-shadow] duration-300 group-hover:scale-[1.035] group-hover:bg-[#2d3a68] group-hover:shadow-[0_0_28px_rgba(56,113,242,0.42)]">
              {step.number}.
            </span>
            <div
              className={[
                "absolute top-0 w-[465px] transition-transform duration-300 group-hover:-translate-y-[3px]",
                leftAligned
                  ? "left-[129px] text-right"
                  : "left-[845px] text-left",
              ].join(" ")}
            >
              <h3 className="text-[24px] font-extrabold leading-[30px] text-[#3871f2] dark:text-white">
                {step.title}
              </h3>
              <p className="mt-[16px] text-[16px] leading-[26px] text-[#344056] dark:text-white/78">
                {step.description}
              </p>
            </div>
          </li>
          );
        })}
      </ol>
    </section>
  );
}

export function MobileAppInteractions() {
  return (
    <>
      <Link
        href="/contact-us"
        prefetch={false}
        aria-label="Get Free Consulting"
        className="absolute left-[530px] top-[2837px] z-50 h-[60px] w-[272px] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3871f2]"
      />
      <DarkCapacityHeaderRepair />
      <MobileCapacityGrid />
      <MobileWorkflow />
    </>
  );
}
