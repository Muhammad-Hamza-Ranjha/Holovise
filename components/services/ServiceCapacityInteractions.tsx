"use client";

import { useState, type ComponentType } from "react";
import {
  Bot,
  Boxes,
  ChartNoAxesCombined,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Globe2,
  Palette,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
  Users,
} from "lucide-react";
import type { ServiceDetailSlug } from "@/components/services/ServiceDetailFrame";

type Icon = ComponentType<{ className?: string; strokeWidth?: number }>;

type CapacityConfig = {
  top: number;
  titles: string[];
};

const configs: Partial<Record<ServiceDetailSlug, CapacityConfig>> = {
  devsecops: {
    top: 2870,
    titles: [
      "DevOps Strategy Development", "CI/CD Pipeline Implementation", "Infrastructure as Code (IaC)",
      "Automated Testing & Quality Assurance", "Continuous Integration & Continuous Deployment",
      "Configuration Management", "Cloud Infrastructure Management", "Monitoring and Logging",
      "Performance Optimization", "Release Management", "Containerization & Orchestration",
      "Security Integration", "Disaster Recovery Planning", "Compliance Management System",
      "DevOps Consulting & Advisory", "Toolchain Integration", "Capacity Planning and Scaling",
      "Incident Management and Response", "Custom DevOps Solutions", "Performance Monitoring and Analytics",
    ],
  },
  "ai-ml-development": {
    top: 3639,
    titles: [
      "Machine Learning Consulting", "Data Engineering", "Custom Model Development",
      "Predictive Analytics", "Natural Language Processing", "AI-Powered Chatbots",
      "Computer Vision", "Generative AI Development", "Fraud Detection Systems",
      "MLOps Consulting", "GPT Development",
    ],
  },
  "metaverse-ar-vr": {
    top: 3965,
    titles: [
      "Virtual Reality Development", "Augmented Reality Solutions", "3D Virtual Environments",
      "3D Virtual Reality Development", "Metaverse Applications", "Social Metaverse Platform",
      "Customized Virtual Environments",
    ],
  },
  "ui-ux-design": {
    top: 3276,
    titles: [
      "UI - User Interface Design", "UX - User Experience Design", "Interaction Design",
      "Brand & Identity Design", "Wireframing & Prototype Designs", "Design System Development",
      "Micro Interactions & UI Optimizations", "Mobile-First Optimizations",
    ],
  },
  "software-security": {
    top: 3666,
    titles: [
      "Application Security Testing", "IT Security Services", "Software Security Testing",
      "Open Source Software Security", "Security Audits", "Mobile Device Management",
      "Cloud Security Solutions (SECaaS)", "Software Composition Analysis", "Penetration Testing",
    ],
  },
  "blockchain-development": {
    top: 3864,
    titles: [
      "Cryptocurrency Development", "Centralized & DeFi Exchange Development", "Crypto Wallet Development",
      "NFT Marketplace Development", "Smart Contract Development", "Initial Coin Offering & Initial Exchange",
      "dApps Development", "Metaverse Development", "Blockchain Architecture Design",
      "Private & Permissioned Blockchain Development", "Chain-code Development", "Blockchain Integration",
      "Blockchain Consulting Services", "DeFi Development", "Supply Chain Management Solutions",
    ],
  },
  "game-development": {
    top: 3706,
    titles: [
      "Mobile Game Development", "PC Game Development", "Game Art & Animation",
      "Unity 3D Game Development", "AR/VR/MR Game Development", "Kids Game Development",
      "WebGL Game Development", "Console Game Development",
    ],
  },
  "mvp-development": {
    top: 4101,
    titles: [
      "Code-Based MVP Development", "No-Code MVP Development", "Hybrid MVP Development",
      "Rapid Prototyping", "User Testing & Feedback Integration", "Agile Development",
      "Technical Planning", "Scalability Assessment", "Market Fit Check", "Launch Planning",
    ],
  },
  "product-strategy-consulting": {
    top: 3626,
    titles: [
      "Market Research", "Concept Development & Validation", "Product Innovation",
      "CX - Customer Experience", "Business Model Innovation", "Product Lifecycle Management",
      "Market Strategy", "UX - Experience Design", "Product Portfolio Strategy",
    ],
  },
  "no-code-development": {
    top: 4187,
    titles: [
      "No-Code Platforms", "Visual App Development", "Drag-and-Drop App Builders",
      "Low-Code App Development", "No-Code Business Apps", "Testing Prototyping",
      "Content Management Systems", "Workflow Automation",
    ],
  },
  "digital-transformation": {
    top: 4782,
    titles: [
      "Cloud Migration & Management", "Data Analytics & Business Intelligence",
      "Artificial Intelligence & Machine Learning", "Automation Solutions",
      "Customer Experience & CRM Solutions", "Enterprise Resource Planning",
      "Cybersecurity & Risk Management", "IT Infrastructure Modernization",
      "Custom Software Development", "Web & Mobile Development", "IoT Solutions",
      "Remote Work Solutions", "Digital Product Design",
    ],
  },
  "software-development-outsourcing": {
    top: 4231,
    titles: [
      "Dedicated Team", "Project-Based", "Staff Augmentation", "Hourly Consulting",
      "Fixed-Price", "Time and Materials", "Hybrid Model",
    ],
  },
  investment: {
    top: 3811,
    titles: [
      "Dedicated Development Team", "Prototyping & Design", "Complete Software Development",
      "Tech Selection & Guidance", "Scalable Infrastructure", "Built-In Security",
      "MVP Development for Quick Feedback", "Simple, User-Focused Design",
    ],
  },
};

function iconForTitle(title: string): Icon {
  const value = title.toLowerCase();
  if (/security|fraud|penetration|audit/.test(value)) return ShieldCheck;
  if (/cloud|infrastructure/.test(value)) return Cloud;
  if (/data|database|analytics|monitoring/.test(value)) return Database;
  if (/design|ux|ui|wirefram|prototype/.test(value)) return Palette;
  if (/test|quality/.test(value)) return TestTube2;
  if (/mobile/.test(value)) return Smartphone;
  if (/ai|machine|gpt|chatbot|vision/.test(value)) return Bot;
  if (/strategy|research|consult|market/.test(value)) return Search;
  if (/team|staff|customer|social/.test(value)) return Users;
  if (/launch|release|deployment/.test(value)) return Rocket;
  if (/integration|automation|configuration|tool/.test(value)) return Settings2;
  if (/blockchain|crypto|contract|defi|nft/.test(value)) return Boxes;
  if (/web|platform|portal|cross/.test(value)) return Globe2;
  if (/performance|scal|optimization/.test(value)) return ChartNoAxesCombined;
  if (/develop|code|program/.test(value)) return Code2;
  return Sparkles;
}

export function ServiceCapacityInteractions({
  slug,
}: {
  slug: ServiceDetailSlug;
}) {
  const config = configs[slug];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  if (!config) return null;

  const rows = Math.ceil((config.titles.length + 1) / 3);
  const height = rows * 250 + (rows - 1) * 26;

  return (
    <section
      aria-label={`${slug.replaceAll("-", " ")} capacity`}
      className="absolute left-[129px] z-30 grid w-[1181px] grid-cols-3 auto-rows-[250px] gap-x-[20px] gap-y-[26px] bg-[#eaf0fe] dark:bg-[#080d19]"
      style={{ top: config.top, height, gridAutoFlow: "dense" }}
    >
      {config.titles.map((title, index) => {
        const expanded = expandedIndex === index;
        const Icon = iconForTitle(title);

        return (
          <button
            key={`${title}-${index}`}
            type="button"
            aria-expanded={expanded}
            onClick={() =>
              setExpandedIndex((current) => (current === index ? null : index))
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
              {title}
            </span>
            <span
              className={[
                "mt-[24px] block text-[17px] font-normal leading-[1.65] text-[#4f5665] transition-opacity duration-300 dark:text-[#c9cfda]",
                expanded ? "opacity-100" : "pointer-events-none opacity-0",
              ].join(" ")}
            >
              Our {title.toLowerCase()} service is shaped around your goals,
              with practical planning, transparent delivery, and focused
              support from discovery through launch.
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
