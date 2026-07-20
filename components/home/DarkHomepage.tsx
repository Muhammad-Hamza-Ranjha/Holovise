import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { ResponsiveFigmaCanvas } from "@/components/figma/ResponsiveFigmaCanvas";
import { FigmaAboutDropdown } from "@/components/navigation/AboutMenu";
import { LanguageMenu } from "@/components/navigation/LanguageMenu";
import { FigmaServicesDropdown } from "@/components/navigation/ServicesMenu";
import { HomeServicesTabs } from "@/components/home/HomeServicesTabs";
import { MeasuredContact, MeasuredTestimonials, MeasuredWhyChoose } from "@/components/home/MeasuredHomepageSections";
import { ThemeToggleButton } from "@/components/navigation/ThemeToggleButton";
import { socialLinks } from "@/components/config/socialLinks";

const assetRoot = "/assets/homepage/dark";

type BoxProps = {
  left: number;
  top: number;
  width: number;
  height?: number;
  fullBleed?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

const industries = [
  ["Health Tech", "icon-heart-2.svg", "We build intuitive tools that make your job easier and enhance patient care with precision."],
  ["Ed Tech", "icon-pencil.svg", "Our solutions make learning interactive and impactful and help educators truly connect with their students."],
  ["Retail", "icon-shopping-bag.svg", "We transform shopping into a smooth, enjoyable experience that keeps customers returning."],
  ["FinTech", "icon-filter-2.svg", "We simplify your financial processes and secure transactions, easing the stress of managing money."],
  ["Green Tech", "icon-lightning-bolt.svg", "Our tech makes sustainable practices easy and impactful, reducing your environmental footprint while saving costs."],
  ["IoT", "icon-share-1.svg", "We connect your devices seamlessly, offering real-time insights that streamline your operations."],
  ["E-Commerce", "icon-cart-1.svg", "We design user-friendly e-commerce systems that make online shopping effortless and enjoyable for your customers."],
  ["On-Demand Services", "icon-flag.svg", "Our solutions guarantee timely and efficient service delivery, meeting customer needs with ease."],
  ["Blockchain", "icon-box.svg", "We provide secure, transparent blockchain solutions that protect your data and build user trust."],
  ["Game Development", "icon-gaming-controller.svg", "We build games that connect with players on a personal level, creating memorable experiences that keep them coming back for more."],
];

const processSteps = [
  ["01.", "Market\nImmersion", "We start by thoroughly exploring your market.\n\nOur research covers industry trends, competitor strategies, and customer behaviors to build a solid foundation that directs our approach."],
  ["02.", "Joint Visioning Workshops", "We organize workshops with your team to develop strategic plans and technical outlines collaboratively.\n\nThese sessions align our development work with your long-term business goals and market positioning."],
  ["03.", "Interactive\nPrototyping", "We create interactive prototypes to test real-world scenarios.\n\nFeedback from these prototypes allows us to refine features and make necessary improvements before proceeding to full development."],
  ["04.", "Agile\nTransparency", "We keep our development process transparent.\n\nWith regular updates, live project dashboards, and direct feedback channels, we keep the project aligned with your needs and make adjustments as needed."],
  ["05.", "Real-World\nTesting", "Before the final release, we conduct thorough testing with actual users.\n\nThis helps us verify that the product performs well under real conditions and identifies areas for enhancement based on user feedback."],
  ["06.", "Coordinated\nLaunch Execution", "We plan and execute the launch in alignment with your marketing strategies and operational schedules.\n\nOur team collaborates closely with yours to ensure a smooth rollout and manage any challenges that may arise."],
  ["07.", "Continuous Improvement", "Post-launch, we continuously monitor the product’s performance and make enhancements.\n\nMeasure user data and feedback, we optimize the product to meet your evolving business needs and market demands."],
];

const blogCards = [
  ["blog-image-element-1.webp", "6 ways to improve your wirefrimes with Master Wire tool for Figma"],
  ["blog-image-element-2.webp", "6 ways to improve your wirefrimes with Master Wire tool for Figma"],
  ["blog-image-element-3.webp", "6 ways to improve your wirefrimes with Master Wire tool for Figma"],
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

const topSocialLinks = [
  { icon: "social-tw-1.svg", href: socialLinks.facebook, label: "Open Holovise on Facebook" },
  { icon: "social-in.svg", href: socialLinks.linkedin, label: "Open Holovise on LinkedIn" },
  { icon: "social-tw.svg", href: socialLinks.twitter, label: "Open Holovise on X" },
  { icon: "social-mail-1.svg", href: "mailto:support@holovise.io", label: "Contact Holovise by email" },
  { icon: "social-fb-path-01.svg", href: socialLinks.instagram, label: "Open Holovise on Instagram" },
] as const;

const footerSocialLinks = [
  { icon: "footer-social-fb-path-1.svg", href: socialLinks.instagram, label: "Open Holovise on Instagram" },
  { icon: "footer-social-in.svg", href: socialLinks.linkedin, label: "Open Holovise on LinkedIn" },
  { icon: "__x__", href: socialLinks.twitter, label: "Open Holovise on X" },
  { icon: "footer-social-mail-1.svg", href: "/contact-us", label: "Contact Holovise by email" },
  { icon: "footer-social-tw.svg", href: socialLinks.facebook, label: "Open Holovise on Facebook" },
] as const;

function a(name: string) {
  return `${assetRoot}/${name}`;
}

function Box({ left, top, width, height, fullBleed = false, id, className = "", style, children }: BoxProps) {
  if (fullBleed) {
    return (
      <div
        id={id}
        className={`absolute ${className}`}
        style={{ left: "calc((1440px - 100vw) / 2)", top, width: "100vw", ...(height === undefined ? {} : { height }), ...style }}
        data-home-full-bleed
      >
        <div className="relative mx-auto h-full w-[1440px]">{children}</div>
      </div>
    );
  }

  return (
    <div
      id={id}
      className={`absolute ${className}`}
      style={{ left, top, width, ...(height === undefined ? {} : { height }), ...style }}
    >
      {children}
    </div>
  );
}

function Img({ name, alt = "", className = "", eager = false }: { name: string; alt?: string; className?: string; eager?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={a(name)}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
      fetchPriority={eager ? "high" : "low"}
    />
  );
}

function Header() {
  return (
    <>
      <Box left={0} top={0} width={1440} height={40} fullBleed className="bg-[#3871f2] text-white">
        <p className="absolute left-[55px] top-[8px] text-[14px] font-semibold leading-6 tracking-[-0.14px] text-white">Vision Meets Technology</p>
        <div className="absolute left-[809px] top-[8px] flex h-6 items-center gap-[13px] text-[14px] font-semibold leading-6 tracking-[-0.14px] text-white">
          <Img name="tabler-icon-phone-calling.svg" className="h-[22px] w-[22px]" />
          <span>(000) 666 555 444</span>
        </div>
        <div className="absolute left-[999px] top-[8px] flex h-6 items-center gap-[13px] text-[14px] font-semibold leading-6 tracking-[-0.14px] text-white">
          <Img name="tabler-icon-send.svg" className="h-[22px] w-[22px]" />
          <span>support@holovise.io</span>
        </div>
        <div className="absolute left-[1208px] top-[9px] flex gap-[16px] opacity-90">
          {topSocialLinks.map(({ icon, href, label }) => (
            <Link
              key={icon}
              href={href}
              prefetch={false}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-[22px] w-[22px] items-center justify-center"
            >
              <Img name={icon} className="max-h-[22px] max-w-[22px]" />
            </Link>
          ))}
        </div>
      </Box>
      <Box left={0} top={40} width={1440} height={100} fullBleed className="bg-[rgba(8,13,26,0.75)] text-white backdrop-blur-[12px]">
        <Link href="/" className="absolute left-[55px] top-[27px] flex h-[46px] w-[208px] items-center gap-[13px]" aria-label="Holovise home">
          <Img name="holovise-logo-header.svg" className="h-[45.8px] w-[39.7px]" eager />
          <Img name="holovise-logo-mark.svg" className="h-[16.4px] w-[152.6px]" eager />
        </Link>
        <nav className="absolute inset-0 text-[18px] font-normal leading-6">
          <Link href="/about" className="absolute left-[533px] top-[36px] flex h-7 w-[103px] items-center gap-[10px] px-[10px] text-white">
            About
            <Img name="nav-polygon-5.svg" className="h-[7px] w-[10px]" />
          </Link>
          <span className="absolute left-[663px] top-[30px] flex h-10 w-[124px] items-center gap-[10px] px-[10px] text-white">
            Services
            <Img name="nav-polygon-5.svg" className="h-[7px] w-[10px]" />
          </span>
          <Link href="/blog" className="absolute left-[814px] top-[36px] flex h-7 w-[62px] items-center px-[10px] text-white">
            Blog
          </Link>
          <Link href="/career" className="absolute left-[903px] top-[36px] flex h-7 w-[92px] items-center px-[10px] text-white">
            Careers
          </Link>
        </nav>
        <Link href="/contact-us" className="absolute left-[1022px] top-[28px] flex h-11 w-[152px] items-center justify-center rounded-[8px] bg-[#9C50FF] text-[16px] font-semibold leading-6">
          Get in Touch
        </Link>
        <LanguageMenu className="absolute left-[1191px] top-[28px]" />
        <Img name="tabler-icon-moon-filled.svg" className="absolute left-[1295px] top-[35px] h-[31px] w-[31px]" />
        <ThemeToggleButton className="absolute left-[1295px] top-[35px] z-10 h-[31px] w-[31px]" />
        <Link
          href="/side-drawer"
          prefetch={false}
          aria-label="Open menu"
          className="absolute left-[1344px] top-[38px] h-6 w-[41px]"
        >
          <Img name="tabler-icon-menu.svg" className="h-full w-full" />
        </Link>
      </Box>
      <FigmaAboutDropdown theme="dark" />
      <FigmaServicesDropdown theme="dark" />
    </>
  );
}

function Hero() {
  return (
    <>
      <Box left={0} top={0} width={1440} height={1374} fullBleed className="overflow-hidden bg-[#080d19]">
        {/* Decorative artwork exported from Figma's hero background group. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/homepage/shared/hero-artwork.png"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[1319px] w-screen max-w-none -translate-x-1/2"
          fetchPriority="high"
        />
        <div className="absolute left-1/2 top-[460px] h-[914px] w-screen -translate-x-1/2 bg-[linear-gradient(180deg,rgba(8,13,25,0)_0%,#080d19_57%)]" />
        <Img name="world-vector.svg" alt="World map illustration" className="absolute left-[865px] top-[107px] h-[809px] w-[730px] max-w-none object-contain" eager />
      </Box>
      <Header />
      <Box left={130} top={279} width={340} height={22} className="text-[18px] leading-[20px] text-white">
        <span>Welcome to the </span>
        <span className="font-extrabold uppercase">
          Holovise
        </span>
      </Box>
      <Box left={130} top={323} width={1180} height={235}>
        <h1 className="text-[72px] font-extrabold leading-[78px] tracking-[-3.5px] text-white">
          <span className="block">Your Partner for</span>
          <span className="block whitespace-nowrap bg-[linear-gradient(90deg,#ffe96a_0%,#ff8428_100%)] bg-clip-text text-transparent">Comprehensive Software</span>
          <span className="block">Solutions</span>
        </h1>
      </Box>
      <Box left={130} top={570} width={684} height={72}>
        <p className="text-[22px] leading-9 text-white">Developing Apps for Startups, Scaling Solutions for SMEs, and Modernizing Systems for Established Firms</p>
      </Box>
      <Box left={130} top={667} width={297} height={60}>
        <Link
          href="/contact-us"
          prefetch={false}
          className="flex h-[60px] w-[297px] items-center gap-[14px] rounded-[10px] bg-white px-[21px] text-[20px] font-semibold leading-[24px] text-black"
        >
          <span>Schedule an Intro Call</span>
          <Img name="tabler-icon-arrow-down-right.svg" className="h-7 w-7 scale-x-[-1]" />
        </Link>
      </Box>
    </>
  );
}

function Services() {
  return (
    <>
      <div id="services" className="absolute left-0 top-[814px]" />
      <Box left={230} top={974} width={980} height={20}>
        <p className="text-center text-[20px] font-medium uppercase leading-[19.6px] tracking-[10px] text-[#00a7ff]">Our Services</p>
      </Box>
      <Box left={330} top={1026} width={780} height={118}>
        <h2 className="text-center text-[48px] font-bold leading-[58px] tracking-[-1.5px] text-white">
          Worried about project delays,<br /> data security, and tech overload?
        </h2>
      </Box>
      <Box left={230} top={1176} width={980} height={72}>
        <p className="text-center text-[22px] leading-[36px] text-white">
          We are your trusted partner who takes these burdens off your shoulders, keeps your project on track, protects your data, and handles the tech expertly.
        </p>
      </Box>
      <Box left={129} top={1297} width={1181} height={731}>
        <HomeServicesTabs />
      </Box>
    </>
  );
}

function CtaBand() {
  return (
    <Box left={0} top={2571} width={1440} height={320} fullBleed className="z-10 bg-[#3871f2] text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/homepage/dark/primary-cta-overlay.png" alt="" aria-hidden="true" className="absolute left-[382px] top-0 h-[318px] w-[1058px] max-w-none" />
      <h2 className="absolute left-[129px] top-[99px] w-[581px] text-[36px] font-extrabold leading-10">Ready to Get Started?</h2>
      <p className="absolute left-[129px] top-[157px] w-[581px] text-[22px] leading-8">Let&apos;s talk about how we can handle your challenges & keep everything running smoothly.</p>
      <Link href="/contact-us" prefetch={false} className="absolute left-[830px] top-[130px] flex h-[60px] w-[220px] items-center justify-center rounded-[8px] bg-white text-[20px] font-semibold leading-6 text-black">Get In Touch</Link>
      <Link href="/about/who-we-are" prefetch={false} className="absolute left-[1070px] top-[130px] flex h-[60px] w-[220px] items-center justify-center rounded-[8px] border border-white text-[20px] font-semibold leading-6 text-white">Know More!</Link>
    </Box>
  );
}

function Industries() {
  return (
    <>
      <Box left={0} top={2446} width={1440} height={2540} fullBleed className="pointer-events-none overflow-hidden bg-[#080d19]">
        <Img name="industries-glow.png" className="absolute left-1/2 top-[-250px] h-[2243px] w-screen max-w-none -translate-x-1/2" eager />
      </Box>
      <Img name="chart-1.webp" alt="Market chart" eager className="absolute left-[910px] top-[3089px] h-[626px] w-[626px] max-w-none object-contain" />
      <Box left={130} top={3131} width={380} height={20}>
        <p className="text-[20px] font-medium uppercase leading-[19.6px] tracking-[10px] text-white">Market Share</p>
      </Box>
      <Box left={130} top={3175} width={680} height={470} className="text-white">
        <h2 className="absolute inset-x-0 top-0 bg-[linear-gradient(90deg,#fff759_0%,#e151ff_100%)] bg-clip-text text-[48px] font-bold leading-[58px] tracking-[-1.5px] text-transparent">
          Industries we empower with our software solutions!
        </h2>
        <p className="absolute inset-x-0 top-[144px] text-[22px] leading-9 text-white">
          Helping businesses in every field solve tough problems and grow with the right tech solutions, made just for them.
        </p>
        <Link href="/about/who-we-are" prefetch={false} className="absolute left-0 top-[251px] flex h-[60px] w-[272px] items-center justify-center rounded-[8px] border-[1.5px] border-white text-[20px] font-semibold leading-6 text-white">How it Works?</Link>
        <div className="absolute inset-x-0 top-[358px] grid grid-cols-3 border-t border-white/50 pt-[35px]">
          {[
            ["300+", "Projects Delivered."],
            ["20+", "Technical Experts."],
            ["50+", "Products Developed."],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="font-inter text-[36px] font-extrabold leading-10 tracking-[-0.72px]">{value}</p>
              <p className="mt-[13px] text-[16px] leading-6 tracking-[-0.24px]">{label}</p>
            </div>
          ))}
        </div>
      </Box>
      <Box left={129} top={3726} width={1181} height={1244} className="grid grid-cols-3 content-start text-white">
        {industries.map(([title, icon, copy], index) => {
          const tall = index === 9;
          return (
            <article key={title} className={`relative w-[394px] border-r border-b border-white/20 px-12 pt-8 ${tall ? "h-[332px]" : "h-[304px]"}`}>
              <div className="flex h-[88px] items-center gap-5">
                <span className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-[15px] bg-[#111729]">
                  <Img name={icon} className="h-12 w-12" />
                </span>
                <h3 className="text-[22px] font-bold leading-[30px] tracking-[-0.1px]">{title}</h3>
              </div>
              <p className="mt-9 text-[18px] leading-7 text-white">{copy}</p>
            </article>
          );
        })}
      </Box>
    </>
  );
}

function Testimonials() {
  return <MeasuredTestimonials theme="dark" />;
}

function Process() {
  return (
    <>
      <Img name="process-glow.png" className="pointer-events-none absolute left-1/2 top-[5703px] h-[2890px] w-screen max-w-none -translate-x-1/2" eager />
      <Box left={530} top={5965} width={380} height={20}>
        <p className="text-center text-[20px] font-medium uppercase leading-[19.6px] tracking-[10px] text-[#9c50ff]">How We Do It?</p>
      </Box>
      <Box left={410} top={6007} width={620} height={118}>
        <h2 className="text-center text-[36px] font-bold leading-[58px] tracking-[-1.5px] text-white">Our Step-by-Step Approach to Execute Your Vision.</h2>
      </Box>
      <Box left={330} top={6136} width={780} height={72}>
        <p className="text-center text-[22px] leading-9 text-white">Our process is all about getting to the heart of your needs, working closely with you, and creating solutions that fit perfectly.</p>
      </Box>
      {processSteps.map(([num, title, copy], index) => {
        const column = index % 3;
        const row = Math.floor(index / 3);
        const left = 130 + column * 400;
        const top = [6278, 6647, 7058][row];
        return (
          <Box key={num} left={left} top={top} width={380} height={row === 2 ? 340 : 330} className="text-white">
            <span className="absolute left-0 top-0 flex h-[88px] w-[88px] items-center justify-center rounded-[15px] bg-[#111729] text-[32px] font-light leading-[30px] tracking-[-0.1px]">{num}</span>
            <h3 className="absolute left-[108px] top-[14px] w-[272px] whitespace-pre-line text-[22px] font-bold leading-[30px] tracking-[-0.1px]">{title}</h3>
            <p className="absolute left-0 top-[116px] w-[380px] whitespace-pre-line text-[18px] leading-7">{copy}</p>
          </Box>
        );
      })}
    </>
  );
}

function FitCta() {
  return (
    <Box left={0} top={7585} width={1440} height={413} fullBleed className="overflow-visible text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/homepage/dark/fit-cta-background.png" alt="" aria-hidden="true" className="absolute left-1/2 top-0 h-[413px] w-screen max-w-none -translate-x-1/2" />
      <div className="absolute left-[130px] top-[103px] w-[580px]">
        <h2 className="text-[36px] font-extrabold leading-10 tracking-[-0.72px]">Find Us a Great Fit?</h2>
        <p className="mt-[14px] text-[22px] leading-8">Let&apos;s talk about how we can handle your challenges & keep everything running smoothly.</p>
        <Link href="/contact-us" prefetch={false} className="mt-[31px] flex h-[60px] w-[272px] items-center justify-center rounded-[10px] border border-white text-[20px] font-semibold leading-6 text-white">Book a Free Session!</Link>
      </div>
      <Img name="dollar-rocket-3d.webp" alt="Rocket illustration" eager className="absolute left-[845px] top-[-113px] h-[448px] w-[448px] rotate-[30deg] object-contain" />
    </Box>
  );
} 

function WhyChoose() {
  return <MeasuredWhyChoose theme="dark" />;
}

function Blog() {
  return (
    <Box left={0} top={9490} width={1440} height={729} className="text-white">
      <p className="absolute left-[410px] top-0 w-[620px] text-center text-[20px] font-medium uppercase leading-[20px] tracking-[10px] text-[#9c50ff]">
        Latest News
      </p>
      <h2 className="absolute left-[410px] top-[42px] w-[620px] text-center text-[36px] font-bold leading-[58px] tracking-[-1.5px]">
        What&apos;s happening in IT?
      </h2>
      <div className="absolute left-[130px] top-[163px] grid grid-cols-[360px_360px_360px] gap-[50px]">
        {blogCards.map(([image, title]) => (
          <Link
            key={image}
            href="/blog/2025-tools-to-create-real-performing-tokens"
            prefetch={false}
            className="relative h-[442px] w-[360px]"
          >
            <div className="relative h-[270px] overflow-hidden rounded-[30px]">
              <Img name={image} eager className="h-full w-full object-cover" />
              <span className="absolute left-5 top-5 flex h-6 min-w-[51px] items-center justify-center rounded-2xl bg-[#3871f2] px-[9px] font-sans text-[12px] font-semibold leading-5 tracking-[1.2px] text-white">
                NEW
              </span>
            </div>
            <h3 className="mt-5 h-[108px] font-inter text-[24px] font-bold leading-9 tracking-[-0.48px]">{title}</h3>
            <div className="mt-2 flex h-6 items-center text-white/50">
              <Img name="blog-author-avatar.svg" eager className="h-6 w-6 rounded-lg" />
              <span className="ml-[10px] text-[16px] font-medium leading-6">Chloe Williams</span>
              <span className="ml-auto text-[12px] font-semibold leading-5">Oct 26, 2124</span>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/blog"
        prefetch={false}
        className="absolute left-[584px] top-[669px] flex h-[60px] w-[272px] items-center justify-center rounded-[10px] bg-[#3871f2] text-[20px] font-semibold leading-6 text-white"
      >
        Explore All News
      </Link>
    </Box>
  );
}

function Contact() {
  return <MeasuredContact theme="dark" />;
}

function Footer() {
  return (
    <Box left={0} top={10995} width={1440} height={1501} fullBleed className="overflow-hidden bg-[#080d19] text-white">
      <Img name="footer-purple.png" eager className="pointer-events-none absolute left-1/2 top-[-25px] h-[1552px] w-screen max-w-none -translate-x-1/2" />
      <Img name="footer-blue.png" eager className="pointer-events-none absolute left-1/2 top-[50px] h-[1438px] w-screen max-w-none -translate-x-1/2" />
      <div className="absolute left-[571px] top-[150px] flex w-[299px] flex-col items-center gap-10">
        <Img name="footer-logo-group-1.svg" className="h-[156px] w-[135px]" />
        <Img name="footer-logo-group-2.svg" className="h-[32px] w-[299px]" />
      </div>
      <p className="absolute left-[435px] top-[460px] w-[570px] text-center text-[16px] leading-5 tracking-[8px] text-white/80">Follow us</p>
      <div className="absolute left-[563px] top-[505px] flex h-[39px] gap-[30px]">
        {footerSocialLinks.map(({ icon, href, label }) => (
          <Link
            key={icon}
            href={href}
            prefetch={false}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex h-[39px] w-[39px] items-center justify-center"
          >
            {icon === "__x__" ? <span className="text-[34px] font-light leading-[39px] text-[#3871f2]">𝕏</span> : <Img name={icon} className="max-h-[39px] max-w-[39px]" />}
          </Link>
        ))}
      </div>
      <div className="absolute left-[130px] top-[664px] grid grid-cols-[215px_215px_215px_215px] gap-[85px]">
        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-[16px] font-semibold leading-6 tracking-[-0.16px]">{column.heading}</h3>
            <div className="mt-5 h-px w-[50px] bg-[#3871f2]" />
            <div className="mt-4 grid gap-[18px] text-[16px] leading-5 text-white/75">
              {column.items.map(([label, href]) => (
                <Link href={href} prefetch={false} key={label}>{label}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-[55px] top-[1391px] h-px w-[1330px] bg-white/18" />
      <div className="absolute left-[55px] top-[1427px] flex h-[28px] items-center gap-2 text-[12px] leading-5 text-white">
        <span>&copy; 2024 all rights reserved by</span>
        <Img name="footer-logo-group-3.svg" className="h-[21px] w-[18px]" />
        <Img name="footer-logo-group-2.svg" className="h-[12px] w-[112px]" />
      </div>
      <div className="absolute left-[1013px] top-[1427px] flex gap-6 text-[12px] leading-5 text-white/55">
        <Link href="/sitemap.xml" prefetch={false}>Sitemap</Link>
        <Link href="/privacy-policy" prefetch={false}>Privacy Policy</Link>
        <Link href="/cookie-consent" prefetch={false}>Cookies</Link>
        <Link href="/terms-and-conditions" prefetch={false}>Terms & Conditions</Link>
      </div>
    </Box>
  );
}

export function DarkHomepage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#080d19] font-sans text-white">
      <ResponsiveFigmaCanvas height={12496} background="#080d19" nodeId="192:5523" mode="responsive">
          <Hero />
          <Services />
          <CtaBand />
          <Industries />
          <Testimonials />
          <Process />
          <FitCta />
          <WhyChoose />
          <Blog />
          <Contact />
          <Footer />
      </ResponsiveFigmaCanvas>
    </main>
  );
}
