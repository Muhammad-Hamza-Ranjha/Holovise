"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  GraduationCap,
  Grid3X3,
  HeartPulse,
  Landmark,
  Plane,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";

type Icon = ComponentType<{ className?: string; strokeWidth?: number }>;

type Industry = {
  key: string;
  label: string;
  shortLabel?: string;
  tabWidth: number;
  description: string;
  image: string;
  imagePosition?: string;
  icon: Icon;
  colors: [string, string];
};

const industries: Industry[] = [
  {
    key: "commerce",
    label: "E-Commerce",
    tabWidth: 166,
    description:
      "We create responsive web apps for online stores that improve shopping. Features include easy product management, secure payments, and smooth user interfaces to increase sales and satisfaction.",
    image: "/assets/services/web-app-development/shared/e-commerce.png",
    icon: ShoppingCart,
    colors: ["#2477f3", "#7c35f2"],
  },
  {
    key: "healthcare",
    label: "Healthcare",
    tabWidth: 128,
    description:
      "We build secure healthcare platforms for appointments, patient records, telemedicine, and care coordination, with accessible experiences for patients and clinical teams.",
    image: "/assets/gallery/dark/testimonial-component-11.jpg",
    icon: HeartPulse,
    colors: ["#0ea5e9", "#14b8a6"],
  },
  {
    key: "education",
    label: "Education",
    tabWidth: 108,
    description:
      "We develop engaging learning platforms with live classes, course management, progress tracking, assessments, and collaborative tools for students and educators.",
    image: "/assets/gallery/dark/testimonial-component-15.jpg",
    icon: GraduationCap,
    colors: ["#8b5cf6", "#ec4899"],
  },
  {
    key: "finance",
    label: "Finance",
    tabWidth: 88,
    description:
      "We deliver dependable finance applications for payments, reporting, portfolio management, and real-time analytics with security built into every workflow.",
    image: "/assets/gallery/dark/testimonial-component-10.jpg",
    icon: Landmark,
    colors: ["#2563eb", "#06b6d4"],
  },
  {
    key: "estate",
    label: "Real Estate",
    tabWidth: 118,
    description:
      "We create property platforms with rich listings, virtual tours, intelligent search, lead management, and simple tools that connect buyers, agents, and owners.",
    image: "/assets/homepage/dark/blog-image-element-1.jpg",
    imagePosition: "center 35%",
    icon: Building2,
    colors: ["#4f46e5", "#a855f7"],
  },
  {
    key: "travel",
    label: "Travel & Hospitality",
    shortLabel: "Travel & Hospitality",
    tabWidth: 186,
    description:
      "We build booking and guest-experience platforms that simplify reservations, payments, itinerary management, and personalized travel across every device.",
    image: "/assets/gallery/dark/testimonial-component-1.jpg",
    icon: Plane,
    colors: ["#0284c7", "#6366f1"],
  },
  {
    key: "all",
    label: "All Industries",
    tabWidth: 142,
    description:
      "Our flexible web application teams solve complex problems across industries, combining product strategy, scalable engineering, thoughtful design, and long-term support.",
    image: "/assets/gallery/dark/testimonial-component-9.jpg",
    icon: Grid3X3,
    colors: ["#3871f2", "#a72cf2"],
  },
];

const capacityCards: Array<{
  title: string;
  description: string;
  iconName: string;
}> = [
  {
    title: "Front-End Development",
    description:
      "We design sleek, engaging interfaces that look great on any device. Our responsive web apps are easy to use, visually appealing, and built to keep users interested.",
    iconName: "app-window",
  },
  {
    title: "Back-End Development",
    description:
      "Reliable server-side systems, APIs, databases, and business logic engineered for speed, security, and dependable growth.",
    iconName: "code",
  },
  {
    title: "Cloud-Based Web App Development",
    description:
      "Scalable cloud applications designed for high availability, efficient deployment, and seamless access from anywhere.",
    iconName: "cube",
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Consistent, high-performing product experiences across browsers, operating systems, and device sizes from one maintainable foundation.",
    iconName: "transform",
  },
  {
    title: "Mobile App UI/UX (Product) Design",
    description:
      "Clear mobile journeys and polished interfaces shaped around real users, business goals, and accessible interaction patterns.",
    iconName: "device-mobile",
  },
  {
    title: "App Prototyping and Wireframing",
    description:
      "Interactive prototypes and focused wireframes that validate ideas early and give development teams a precise product direction.",
    iconName: "layout-kanban",
  },
  {
    title: "E-Commerce Web App Development",
    description:
      "Conversion-focused storefronts with secure checkout, inventory tools, integrations, and smooth customer experiences.",
    iconName: "briefcase",
  },
  {
    title: "Content Management Systems Development",
    description:
      "Flexible publishing systems that let your team manage content, workflows, permissions, and digital experiences with confidence.",
    iconName: "adjustments-alt",
  },
  {
    title: "Web Portal Development",
    description:
      "Secure, role-based portals that bring data, communication, and essential services together in one clear workspace.",
    iconName: "app-window",
  },
  {
    title: "Product - UI/UX Design",
    description:
      "Research-led product design that turns complex requirements into useful, intuitive, and visually coherent experiences.",
    iconName: "paint",
  },
  {
    title: "Progressive Web Apps",
    description:
      "Fast, installable web experiences with offline support, responsive behavior, and app-like performance on modern devices.",
    iconName: "device-mobile",
  },
  {
    title: "User Testing and QA",
    description:
      "Structured usability testing and quality assurance that catch friction, defects, and edge cases before your users do.",
    iconName: "shield-check",
  },
];

function IndustryVisual({ industry }: { industry: Industry }) {
  const Icon = industry.icon;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[8px] bg-[#111827] text-white">
      <Image
        src={industry.image}
        alt=""
        width={545}
        height={275}
        unoptimized
        draggable={false}
        className="absolute inset-0 h-full w-full select-none object-cover"
        style={{ objectPosition: industry.imagePosition ?? "center" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${industry.colors[0]}e6 0%, ${industry.colors[1]}99 58%, rgba(8,13,25,.2) 100%)`,
        }}
      />
      <div className="absolute right-[28px] top-[24px] grid h-[74px] w-[74px] place-items-center rounded-[8px] border border-white/35 bg-[#080d19]/45 backdrop-blur-[5px]">
        <Icon className="h-[39px] w-[39px]" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[34px] left-[38px]">
        <span className="mb-[12px] block text-[16px] font-semibold uppercase tracking-[3px] text-white/75">
          Web Applications
        </span>
        <strong className="block max-w-[360px] text-[34px] font-bold leading-[1.16]">
          {industry.label}
        </strong>
      </div>
      <div className="absolute bottom-[37px] right-[38px] flex gap-[8px]">
        {[CheckCircle2, Code2, ShieldCheck].map((StatusIcon, index) => (
          <span
            key={index}
            className="grid h-[38px] w-[38px] place-items-center rounded-full border border-white/35 bg-[#080d19]/25"
          >
            <StatusIcon className="h-[19px] w-[19px]" strokeWidth={1.8} />
          </span>
        ))}
      </div>
    </div>
  );
}

function CapacityIcon({ name, expanded }: { name: string; expanded: boolean }) {
  return (
    <span
      className={[
        "mb-[24px] grid h-[85px] w-[88px] place-items-center rounded-[8px] transition-[background-color,box-shadow] duration-300",
        expanded
          ? "bg-[#3871f2] shadow-[0_10px_24px_rgba(56,113,242,0.28)]"
          : "bg-[#f1f5ff] group-hover:bg-[#3871f2] dark:bg-[#111729] dark:group-hover:bg-[#3871f2]",
      ].join(" ")}
    >
      <svg
        aria-hidden="true"
        className={[
          "h-[50px] w-[50px] [--service-icon-accent:#3871f2] [--service-icon-detail:#222] transition-colors duration-300 dark:[--service-icon-detail:#fff]",
          expanded
            ? "[--service-icon-accent:#fff] [--service-icon-detail:#fff]"
            : "group-hover:[--service-icon-accent:#fff] group-hover:[--service-icon-detail:#fff]",
        ].join(" ")}
        viewBox="0 0 50 50"
      >
        <use href={`/assets/homepage/home-services-icons.svg#${name}`} />
      </svg>
    </span>
  );
}

function IndustrySelector() {
  const [activeKey, setActiveKey] = useState(industries[0].key);
  const activeIndustry =
    industries.find((industry) => industry.key === activeKey) ?? industries[0];

  return (
    <>
      <div className="absolute left-[230px] top-[11695px] z-30 flex h-[65px] w-[980px] items-center justify-between rounded-full border border-[#25324a] bg-[#edf2ff] p-[8px] shadow-[0_6px_20px_rgba(0,0,0,0.12)] dark:border-[#4a5367] dark:bg-[#111827]">
        {industries.map((industry) => {
          const selected = industry.key === activeKey;

          return (
            <button
              key={industry.key}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveKey(industry.key)}
              className={[
                "relative h-[49px] shrink-0 cursor-pointer whitespace-nowrap rounded-full px-[8px] text-[15px] font-semibold leading-none transition-[color,background-color,box-shadow,transform] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3871f2]",
                selected
                  ? "bg-[#3871f2] text-white shadow-[0_8px_24px_rgba(56,113,242,0.35)]"
                  : "text-[#252934] hover:text-[#3871f2] dark:text-[#a8afbd] dark:hover:text-white",
              ].join(" ")}
              style={{ width: industry.tabWidth }}
            >
              {industry.shortLabel ?? industry.label}
            </button>
          );
        })}
      </div>

      <section
        key={activeIndustry.key}
        aria-live="polite"
        className="absolute left-[230px] top-[11824px] z-30 h-[275px] w-[980px] animate-[figma-state-in_300ms_ease-out]"
      >
        <div className="absolute left-0 top-0 h-[275px] w-[545px]">
          <IndustryVisual industry={activeIndustry} />
        </div>
        <div className="absolute left-[600px] top-0 flex h-[275px] w-[380px] items-center bg-[#eaf0fe] py-[8px] text-[#1d2028] dark:bg-[#080d19] dark:text-white">
          <p className="text-[24px] font-normal leading-[1.58]">
            {activeIndustry.description}
          </p>
        </div>
      </section>
    </>
  );
}

function CapacityGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      aria-label="Our capacity"
      className="absolute left-[129px] top-[4349px] z-30 grid h-[1354px] w-[1181px] grid-cols-3 auto-rows-[250px] gap-x-[20px] gap-y-[26px] bg-[#eaf0fe] dark:bg-[#080d19]"
      style={{ gridAutoFlow: "dense" }}
    >
      {capacityCards.map((card, index) => {
        const expanded = expandedIndex === index;

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
            <CapacityIcon name={card.iconName} expanded={expanded} />
            <span className="block max-w-[285px] whitespace-pre-line text-[23px] font-bold leading-[1.32]">
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
            <span
              aria-hidden="true"
              className={[
                "absolute right-[40px] top-[39px] text-[#aab0ba] transition-[color,transform] duration-300 group-hover:text-[#3871f2]",
                expanded ? "rotate-180" : "",
              ].join(" ")}
            >
              <ChevronDown className="h-[25px] w-[25px]" strokeWidth={1.7} />
            </span>
          </button>
        );
      })}
    </section>
  );
}

const workflowStepTops = [124, 352, 607, 862, 1117, 1372, 1627, 1884];

function WorkflowAnimation() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const timeline = timelineRef.current;
      if (!timeline) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setProgress(1);
        return;
      }

      const bounds = timeline.getBoundingClientRect();
      const start = window.innerHeight * 0.72;
      const travel = bounds.height + window.innerHeight * 0.18;
      const nextProgress = Math.min(
        1,
        Math.max(0, (start - bounds.top) / travel),
      );

      setProgress(nextProgress);
    };

    const scheduleUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const stepProgress = progress * workflowStepTops.length;
  const activeIndex =
    progress > 0 && progress < 1
      ? Math.min(workflowStepTops.length - 1, Math.floor(stepProgress))
      : -1;

  return (
    <div
      ref={timelineRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-[6825px] z-30 h-[2115px] w-[1440px]"
    >
      <span
        className="absolute left-[742px] top-0 w-[3px] rounded-full bg-[linear-gradient(180deg,#3871f2_0%,#8b44ff_100%)] shadow-[0_0_16px_rgba(56,113,242,0.55)] transition-[height] duration-150 ease-linear motion-reduce:transition-none"
        style={{ height: `${progress * 100}%` }}
      />
      {progress > 0 && progress < 1 ? (
        <span
          className="absolute left-[743.5px] z-20 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#3871f2] shadow-[0_0_20px_rgba(56,113,242,0.9)] transition-[top] duration-150 ease-linear motion-reduce:hidden"
          style={{ top: `${progress * 100}%` }}
        />
      ) : null}
      {workflowStepTops.map((top, index) => {
        const completed = stepProgress >= index + 0.65;
        const active = activeIndex === index;

        return (
          <span
            key={top}
            className={[
              "absolute left-[668px] h-[81px] w-[150px] rounded-[14px] border-2 transition-[transform,border-color,box-shadow,background-color] duration-500 motion-reduce:transition-none",
              active
                ? "scale-[1.045] border-[#58a0ff] bg-[#3871f2]/12 shadow-[0_0_0_5px_rgba(56,113,242,0.12),0_0_34px_rgba(56,113,242,0.52)]"
                : completed
                  ? "border-[#7d5cff]/65 shadow-[0_0_18px_rgba(124,92,255,0.2)]"
                  : "border-transparent",
            ].join(" ")}
            style={{ top }}
          />
        );
      })}
    </div>
  );
}

export function WebAppInteractions() {
  return (
    <>
      <CapacityGrid />
      <WorkflowAnimation />
      <IndustrySelector />
    </>
  );
}
