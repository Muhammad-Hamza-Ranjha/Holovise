"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  AppWindow,
  Bot,
  Box,
  BriefcaseBusiness,
  Code2,
  Crown,
  Cuboid,
  Gamepad2,
  Headphones,
  LayoutDashboard,
  MonitorCog,
  Paintbrush,
  PanelTop,
  Phone,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Users,
} from "lucide-react";
import { ThemeToggleButton } from "@/components/navigation/ThemeToggleButton";

type MobileHomepageProps = {
  theme: "dark" | "light";
};

type ServiceGroup = "development" | "product" | "collaborative";

type MobileService = {
  title: string;
  href: string;
  icon: typeof Smartphone;
};

const serviceGroups: Record<ServiceGroup, MobileService[]> = {
  development: [
    { title: "Mobile App Development", href: "/services/mobile-app-development", icon: Smartphone },
    { title: "Desktop App Development", href: "/services/desktop-app-development", icon: MonitorCog },
    { title: "Web App Development", href: "/services/web-app-development", icon: AppWindow },
    { title: "AI/ML Development", href: "/services/ai-ml-development", icon: Bot },
    { title: "Software Security", href: "/services/software-security", icon: ShieldCheck },
    { title: "DevSecOps Services/Solutions", href: "/services/devsecops", icon: SlidersHorizontal },
    { title: "Blockchain Development", href: "/services/blockchain-development", icon: Cuboid },
    { title: "Web 3.0", href: "/services/web-3-development", icon: PanelTop },
    { title: "Metaverse / AR & VR", href: "/services/metaverse-ar-vr", icon: Gamepad2 },
    { title: "UX/UI - Product Design", href: "/services/ui-ux-design", icon: Paintbrush },
    { title: "Game Development", href: "/services/game-development", icon: Gamepad2 },
  ],
  product: [
    { title: "Digital Transformation", href: "/services/digital-transformation", icon: SlidersHorizontal },
    { title: "MVP Development", href: "/services/mvp-development", icon: LayoutDashboard },
    { title: "No Code", href: "/services/no-code-development", icon: Code2 },
    { title: "Product Strategy Consultation", href: "/services/product-strategy-consulting", icon: Crown },
  ],
  collaborative: [
    { title: "Staff Augmentation", href: "/services/staff-augmentation", icon: Headphones },
    { title: "Investment", href: "/services/investment", icon: BriefcaseBusiness },
    { title: "Dedicated Development Team", href: "/services/software-development-outsourcing", icon: Users },
    { title: "Development Outsourcing", href: "/services/software-development-outsourcing", icon: Crown },
  ],
};

const tabs: Array<{ key: ServiceGroup; label: string }> = [
  { key: "development", label: "Development" },
  { key: "product", label: "Product Consulting" },
  { key: "collaborative", label: "Collaborative Models" },
];

const footerColumns = [
  {
    heading: "Quick Links:",
    items: [
      ["About", "/about"],
      ["Services", "/services/full-stack-development"],
      ["News/Blogs", "/blog"],
      ["Careers", "/career"],
      ["Contact", "/contact-us"],
    ],
  },
  {
    heading: "Solutions:",
    items: [
      ["Web Applications", "/services/web-app-development"],
      ["Mobile Applications", "/services/mobile-app-development"],
      ["Desktop Applications", "/services/desktop-app-development"],
      ["AI/ML Development", "/services/ai-ml-development"],
      ["Software Security", "/services/software-security"],
      ["DevSecOps Solutions", "/services/devsecops"],
      ["Blockchain", "/services/blockchain-development"],
      ["Web 3.0", "/services/web-3-development"],
      ["Metaverse / AR & VR", "/services/metaverse-ar-vr"],
      ["UIUX Design", "/services/ui-ux-design"],
      ["Game Development", "/services/game-development"],
    ],
  },
  {
    heading: "Product Development:",
    items: [
      ["Digital Transformation", "/services/digital-transformation"],
      ["MVP Development", "/services/mvp-development"],
      ["No Code", "/services/no-code-development"],
      ["Product Strategy", "/services/product-strategy-consulting"],
    ],
  },
  {
    heading: "Collaborative Models:",
    items: [
      ["Staff Augmentation", "/services/staff-augmentation"],
      ["Investment", "/services/investment"],
      ["Dedicated Dev Team", "/services/software-development-outsourcing"],
      ["Software Dev Outsourcing", "/services/software-development-outsourcing"],
    ],
  },
] as const;

const valueCards = [
  ["Health Tech", "Healthcare platforms, patient tools, and secure digital workflows for modern care teams."],
  ["Ed Tech", "Learning platforms, assessment tools, and education products that support teachers and students."],
  ["Retail", "Commerce tools, order flows, and customer experiences for modern retail operations."],
  ["FinTech", "Secure fintech products, dashboards, payments, and financial workflow systems."],
  ["Green Tech", "Technology for sustainability teams, environmental data, and energy-focused products."],
  ["IoT", "Connected device dashboards, monitoring, automation, and real-time data systems."],
];

const rootByTheme = {
  dark: "/assets/homepage/dark",
  light: "/assets/homepage/light",
};

function asset(theme: "dark" | "light", name: string) {
  return `${rootByTheme[theme]}/${name}`;
}

function submitContactMessage(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = [
    `Name: ${data.get("name") ?? ""}`,
    `Email: ${data.get("email") ?? ""}`,
    `Phone: ${data.get("phone") ?? ""}`,
    `Message: ${data.get("message") ?? ""}`,
  ].join("\n");
  window.location.href = `mailto:support@holovise.io?subject=${encodeURIComponent("Holovise website enquiry")}&body=${encodeURIComponent(body)}`;
}

function MobileHeader({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";
  const topBar = isLight ? "bg-[linear-gradient(90deg,#3871f2,#9a2fff)]" : "bg-[#3871f2]";
  const header = isLight
    ? "bg-[linear-gradient(100deg,#28105b_0%,#5d16c8_55%,#25104d_100%)]"
    : "bg-[#171039]";

  return (
    <header className="relative z-30">
      <div className={`flex h-[50px] items-center justify-between px-[23px] text-white ${topBar}`}>
        {["social-fb-path-01.svg", "social-in.svg", "social-tw.svg", "social-mail-1.svg", "social-tw-1.svg"].map((icon) => (
          <span key={icon} className="flex h-[22px] w-[22px] items-center justify-center">
            <Image src={asset(theme, icon)} alt="" width={22} height={22} className="max-h-[22px] max-w-[22px]" />
          </span>
        ))}
      </div>
      <div className={`flex h-[100px] items-center justify-between px-[23px] text-white ${header}`}>
        <Link href="/" className="flex h-[46px] w-[208px] items-center gap-[13px]" aria-label="Holovise home">
          <Image src={asset(theme, "holovise-logo-header.svg")} alt="" width={40} height={46} priority />
          <Image src={asset(theme, "holovise-logo-mark.svg")} alt="Holovise" width={153} height={17} priority />
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggleButton className="relative h-[31px] w-[31px]" />
          <Link href="/side-drawer" prefetch={false} aria-label="Open menu" className="flex h-8 w-10 items-center justify-center">
            <Image src={asset(theme, "tabler-icon-menu.svg")} alt="" width={41} height={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}

function MobileHero({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";

  return (
    <section
      className={`relative min-h-[693px] overflow-hidden px-[23px] pb-[80px] pt-[226px] ${
        isLight ? "text-white" : "text-white"
      }`}
      style={{
        background: isLight
          ? "radial-gradient(circle at 42% 28%, rgba(190,61,255,0.88) 0%, rgba(131,38,247,0.64) 30%, rgba(85,28,215,0.18) 58%, rgba(56,23,164,0) 72%), linear-gradient(104deg,#2c3df6 0%,#4b1ae3 28%,#7011e8 62%,#6410dc 100%)"
          : "radial-gradient(circle at 48% 25%, rgba(153,47,255,0.98) 0%, rgba(132,52,236,0.94) 32%, rgba(51,44,152,0.95) 58%, rgba(8,13,25,1) 100%)",
      }}
    >
      <div className="absolute left-0 top-[372px] h-[500px] w-[208px] bg-[#35a7ff]/75 [clip-path:polygon(0_0,0_100%,100%_100%)]" />
      <Image
        src={asset(theme, "world-vector.svg")}
        alt=""
        width={472}
        height={523}
        priority
        className="pointer-events-none absolute left-[11px] top-[108px] max-w-none opacity-70"
      />
      <div className="relative z-10">
        <p className="text-[18px] leading-[19px]">
          Welcome to the <span className="font-extrabold uppercase">Holovise</span>
        </p>
        <h1 className="mt-[43px] text-[51px] font-extrabold leading-[57px] tracking-[-1px]">
          <span className="block">Your Partner for</span>
          <span className="block bg-[linear-gradient(90deg,#ffe96a_0%,#ff8428_100%)] bg-clip-text text-transparent">
            Comprehensive Software
          </span>
          <span className="block">Solutions</span>
        </h1>
        <p className="mt-[21px] text-[24px] leading-[30px]">
          Developing Apps for Startups, Scaling Solutions for SMEs, and Modernizing Systems for Established Firms
        </p>
        <Link
          href="/contact-us"
          prefetch={false}
          className={`mt-[21px] flex h-[60px] w-full items-center justify-between rounded-[10px] px-[21px] text-[20px] font-semibold leading-6 ${
            isLight ? "bg-[#3871f2] text-white" : "bg-white text-black"
          }`}
        >
          Schedule an Intro Call
          <span aria-hidden="true" className="text-[28px] leading-none">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}

function MobileServices({ theme }: MobileHomepageProps) {
  const [active, setActive] = useState<ServiceGroup>("development");
  const isLight = theme === "light";
  const services = serviceGroups[active];

  return (
    <section className={`px-[23px] py-[72px] ${isLight ? "bg-[#eaf0fe] text-[#20232a]" : "bg-[#080d19] text-white"}`}>
      <p className="text-center text-[13px] font-extrabold uppercase leading-5 tracking-[9px] text-[#3871f2]">Our Services</p>
      <h2 className="mt-[32px] text-center text-[37px] font-extrabold leading-[41px]">
        Worried about project delays, data security, and tech overload?
      </h2>
      <p className={`mt-[32px] text-center text-[17px] leading-[30px] ${isLight ? "text-[#20232a]" : "text-white/85"}`}>
        We are your trusted partner who takes these burdens off your shoulders, keeps your project on track, protects your data, and handles the tech expertly.
      </p>
      <div
        className={`mt-[42px] flex h-[65px] w-[422px] max-w-[calc(100vw-23px)] overflow-x-auto rounded-[30px] p-2 shadow-[inset_0_0_0_1.5px_#253050] ${
          isLight ? "bg-[#f5f8ff]" : "bg-[#111729]"
        }`}
        role="tablist"
        aria-label="Service categories"
      >
        {tabs.map((tab) => {
          const selected = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.key)}
              className={`h-[47px] shrink-0 rounded-full px-[18px] text-[15px] font-medium leading-[23px] transition-colors ${
                selected ? "bg-[#3871f2] font-bold text-white" : isLight ? "text-[#20232a]" : "text-white/65"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-[65px] grid gap-[18px]">
        {services.map(({ title, href, icon: Icon }, index) => (
          <Link
            key={title}
            href={href}
            prefetch={false}
            className={`group relative h-[187px] overflow-hidden rounded-[15px] border-b px-[15px] pt-[27px] transition-colors ${
              isLight
                ? "border-[#9aa4b2] bg-transparent hover:bg-[#3871f2] hover:text-white"
                : "border-[#646464] bg-transparent hover:bg-[#3871f2]"
            }`}
          >
            <Icon className="h-[50px] w-[50px] text-[#3871f2] transition-colors group-hover:text-white" strokeWidth={1.5} />
            <span className="absolute right-[25px] top-[42px] text-[29px] leading-none text-[#6a7284] transition-colors group-hover:text-white">
              ↗
            </span>
            <h3 className="mt-[22px] w-[229px] text-[22px] font-bold leading-[30px]">{title}</h3>
            {index === 0 ? <span className="absolute inset-0 rounded-[15px] ring-1 ring-white/10" aria-hidden="true" /> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

function MobileCta({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";

  return (
    <section className={`relative overflow-hidden px-[31px] py-[46px] text-white ${isLight ? "bg-[#eef1fd]" : "bg-[#080d19]"}`}>
      <div className="absolute inset-0 bg-[linear-gradient(112deg,#2174ff_0%,#752cff_48%,#c400d9_100%)]" />
      <div className="relative z-10">
        <h2 className="text-[38px] font-extrabold leading-10">Ready to Get Started?</h2>
        <p className="mt-[18px] text-[23px] leading-[30px]">
          Let&apos;s talk about how we can handle your challenges & keep everything running smoothly.
        </p>
        <div className="mt-8 grid gap-5">
          <Link href="/contact-us" prefetch={false} className="flex h-[60px] items-center justify-center rounded-[10px] bg-white text-[16px] font-extrabold text-[#141824]">
            Get Started
          </Link>
          <Link href="/contact-us" prefetch={false} className="flex h-[60px] items-center justify-center rounded-[10px] border border-white text-[16px] font-extrabold text-white">
            Book a Meeting
          </Link>
        </div>
      </div>
    </section>
  );
}

function MobileIndustries({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";

  return (
    <section className={`px-[23px] py-[72px] ${isLight ? "bg-[#eaf0fe] text-[#20232a]" : "bg-[#080d19] text-white"}`}>
      <Image src={asset(theme, "chart-1.png")} alt="" width={350} height={350} className="mx-auto h-[350px] w-[350px] rounded-full object-cover" />
      <p className="mt-[41px] text-[13px] font-extrabold uppercase leading-5 tracking-[8px] text-[#3871f2]">Market Share</p>
      <h2 className="mt-[24px] text-[38px] font-extrabold leading-[42px]">Industries we empower with our software solutions!</h2>
      <p className={`mt-[18px] text-[20px] leading-7 ${isLight ? "text-[#4b5565]" : "text-white/75"}`}>
        Helping businesses in every field solve tough problems and grow with the right tech solutions, made just for them.
      </p>
      <Link href="/contact-us" prefetch={false} className="mt-[23px] flex h-[60px] w-full items-center justify-center rounded-[10px] bg-[#3871f2] text-[16px] font-extrabold text-white">
        Get Started
      </Link>
      <div className="mt-[41px] flex w-[595px] max-w-full gap-10 overflow-x-auto pb-2">
        {[
          ["300+", "Projects Delivered."],
          ["20+", "Technical Experts."],
          ["50+", "Products Developed."],
        ].map(([number, label]) => (
          <div key={number} className="min-w-[158px]">
            <p className="text-[37px] font-extrabold leading-10 text-[#3871f2]">{number}</p>
            <p className="mt-[13px] text-[18px] leading-6">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileValues({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";

  return (
    <section className={`px-[23px] py-[40px] ${isLight ? "bg-[#eaf0fe] text-[#20232a]" : "bg-[#080d19] text-white"}`}>
      <div className="grid gap-0">
        {valueCards.map(([title, body]) => (
          <article
            key={title}
            className={`min-h-[268px] border-b px-8 py-8 ${isLight ? "border-[#c4ccdc] bg-white/20" : "border-white/10 bg-white/[0.02]"}`}
          >
            <div className="flex items-center gap-5">
              <span className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#3871f2]/12 text-[#3871f2]">
                <Box className="h-10 w-10" strokeWidth={1.6} />
              </span>
              <h3 className="text-[23px] font-extrabold leading-[30px]">{title}</h3>
            </div>
            <p className={`mt-8 text-[18px] leading-7 ${isLight ? "text-[#4b5565]" : "text-white/72"}`}>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MobileBlog({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";
  const cards = ["blog-image-element-1.jpg", "blog-image-element-2.jpg", "blog-image-element-3.jpg"];

  return (
    <section className={`px-[23px] py-[72px] ${isLight ? "bg-[#eaf0fe] text-[#20232a]" : "bg-[#080d19] text-white"}`}>
      <p className="text-center text-[13px] font-extrabold uppercase leading-5 tracking-[8px] text-[#3871f2]">Latest News</p>
      <h2 className="mt-[32px] text-center text-[39px] font-extrabold leading-[43px]">What&apos;s happening in IT?</h2>
      <div className="mt-[50px] grid gap-11">
        {cards.map((image) => (
          <Link key={image} href="/blog/2025-tools-to-create-real-performing-tokens" prefetch={false} className="block">
            <Image src={asset(theme, image)} alt="" width={366} height={270} className="h-[270px] w-full rounded-[10px] object-cover" />
            <h3 className="mt-5 text-[25px] font-extrabold leading-9">6 ways to improve your wireframes with Master Wire tool for Figma</h3>
            <div className={`mt-5 flex items-center justify-between text-[14px] ${isLight ? "text-[#4b5565]" : "text-white/60"}`}>
              <span>Chloe Williams</span>
              <span>Oct 26, 2024</span>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/blog" prefetch={false} className="mt-10 flex h-[60px] w-full items-center justify-center rounded-[10px] bg-[#3871f2] text-[16px] font-extrabold text-white">
        View All
      </Link>
    </section>
  );
}

function MobileContact({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";

  return (
    <section className={`px-[23px] py-[70px] ${isLight ? "bg-[#eaf0fe] text-[#20232a]" : "bg-[#080d19] text-white"}`}>
      <h2 className="text-[39px] font-extrabold leading-[42px]">Let&apos;s Make IT* [Things] Happen</h2>
      <p className="mt-[19px] text-[23px] leading-[30px]">Connect with us to explore how.</p>
      <div className="mt-[50px] grid gap-[26px]">
        <a href="mailto:support@holovise.io" className="flex gap-6">
          <span className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-[#3871f2] text-white">
            <Send className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-[16px] leading-5 opacity-70">Send us an email</span>
            <span className="mt-2 block text-[20px] font-bold leading-6">support@holovise.io</span>
          </span>
        </a>
        <a href="tel:+642904550469" className="flex gap-6">
          <span className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-[#3871f2] text-white">
            <Phone className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-[16px] leading-5 opacity-70">Give us a call</span>
            <span className="mt-2 block text-[20px] font-bold leading-6">+64 29 045 50469</span>
          </span>
        </a>
      </div>
      <form
        onSubmit={submitContactMessage}
        className={`mt-[50px] rounded-[8px] p-[30px] ${isLight ? "bg-white text-[#141824]" : "bg-[#111729] text-white"}`}
      >
        <input name="name" type="text" autoComplete="name" required placeholder="Name" className={mobileInputClass(isLight)} />
        <input name="email" type="email" autoComplete="email" required placeholder="Email" className={`${mobileInputClass(isLight)} mt-3`} />
        <input name="phone" type="tel" autoComplete="tel" placeholder="Phone" className={`${mobileInputClass(isLight)} mt-3`} />
        <textarea name="message" required placeholder="Message" className={`${mobileInputClass(isLight)} mt-3 h-[135px] resize-none py-4`} />
        <label className="mt-4 flex items-center gap-2 text-[14px] leading-5 opacity-75">
          <input type="checkbox" name="newsletter" value="yes" className="h-[22px] w-[22px] accent-[#3871f2]" />
          Sign me up for the newsletter
        </label>
        <button type="submit" className="mt-8 flex h-[50px] w-full items-center justify-center rounded-[8px] bg-[#3871f2] text-[16px] font-extrabold text-white">
          Send Message
        </button>
      </form>
    </section>
  );
}

function mobileInputClass(isLight: boolean) {
  return `h-[56px] w-full rounded-[6px] border px-5 text-[16px] outline-none ${
    isLight
      ? "border-transparent bg-[#e7e9f4] text-[#141824] placeholder:text-[#8089a0]"
      : "border-white/12 bg-[#080d19] text-white placeholder:text-white/45"
  }`;
}

function MobileFooter({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";

  return (
    <footer className={`px-[23px] pb-[36px] pt-[30px] ${isLight ? "bg-white text-[#20232a]" : "bg-[#080d19] text-white"}`}>
      <div className="flex flex-col items-center gap-9">
        <Image src={asset(theme, "footer-logo-group-1.svg")} alt="" width={135} height={156} />
        <Image src={asset(theme, "footer-logo-group-2.svg")} alt="Holovise" width={299} height={33} />
      </div>
      <p className="mt-12 text-center text-[16px] leading-5 tracking-[8px] opacity-75">Follow us</p>
      <div className="mt-6 flex justify-center gap-[27px]">
        {["footer-social-in.svg", "footer-social-tw.svg", "footer-social-mail-1.svg", "footer-social-fb-path-1.svg"].map((icon) => (
          <Image key={icon} src={asset(theme, icon)} alt="" width={32} height={32} />
        ))}
      </div>
      <div className="mx-auto mt-[63px] grid w-[320px] gap-[50px]">
        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-[20px] font-extrabold leading-6">{column.heading}</h3>
            <div className="mt-5 h-px w-[50px] bg-[#3871f2]" />
            <div className={`mt-5 grid gap-[18px] text-[16px] leading-5 ${isLight ? "text-[#4b5565]" : "text-white/62"}`}>
              {column.items.map(([label, href]) => (
                <Link href={href} prefetch={false} key={label}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-[62px] h-px w-full ${isLight ? "bg-[#141824]/12" : "bg-white/18"}`} />
      <p className={`mt-5 text-[14px] leading-5 ${isLight ? "text-[#8089a0]" : "text-white/55"}`}>
        &copy; 2024 all rights reserved by Holovise.
      </p>
      <div className={`mt-5 flex flex-wrap gap-x-[22px] gap-y-3 text-[14px] leading-5 ${isLight ? "text-[#8089a0]" : "text-white/55"}`}>
        <span>Sitemap</span>
        <Link href="/privacy-policy" prefetch={false}>Privacy Policy</Link>
        <Link href="/cookie-consent" prefetch={false}>Cookies</Link>
        <Link href="/terms-and-conditions" prefetch={false}>Terms & Conditions</Link>
      </div>
    </footer>
  );
}

export function MobileHomepage({ theme }: MobileHomepageProps) {
  return (
    <main className={`min-h-screen overflow-x-hidden font-sans ${theme === "light" ? "bg-[#eaf0fe]" : "bg-[#080d19]"}`}>
      <MobileHeader theme={theme} />
      <MobileHero theme={theme} />
      <MobileServices theme={theme} />
      <MobileCta theme={theme} />
      <MobileIndustries theme={theme} />
      <MobileValues theme={theme} />
      <MobileBlog theme={theme} />
      <MobileContact theme={theme} />
      <MobileFooter theme={theme} />
    </main>
  );
}
