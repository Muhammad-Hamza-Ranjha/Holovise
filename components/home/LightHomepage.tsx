import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { ResponsiveFigmaCanvas } from "@/components/figma/ResponsiveFigmaCanvas";
import { FigmaAboutDropdown } from "@/components/navigation/AboutMenu";
import { LanguageMenu } from "@/components/navigation/LanguageMenu";
import { FigmaServicesDropdown } from "@/components/navigation/ServicesMenu";
import { HomeServicesTabs } from "@/components/home/HomeServicesTabs";
import { ThemeToggleButton } from "@/components/navigation/ThemeToggleButton";

const assetRoot = "/assets/homepage/light";

type BoxProps = {
  left: number;
  top: number;
  width: number;
  height?: number;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

const industries = [
  ["Health Tech", "icon-heart-2.svg", "We build healthcare platforms, patient tools, and secure digital workflows for modern care teams."],
  ["Ed Tech", "icon-pencil.svg", "Learning platforms, assessment tools, and education products that support teachers and students."],
  ["Retail", "icon-shopping-bag.svg", "Commerce tools, order flows, and customer experiences for modern retail operations."],
  ["FinTech", "icon-lightning-bolt.svg", "Secure fintech products, dashboards, payments, and financial workflow systems."],
  ["Green Tech", "icon-share-1.svg", "Technology for sustainability teams, environmental data, and energy-focused products."],
  ["IoT", "icon-filter-2.svg", "Connected device dashboards, monitoring, automation, and real-time data systems."],
  ["E-Commerce", "icon-cart-1.svg", "Online storefronts, marketplaces, logistics flows, and personalized buying experiences."],
  ["On-Demand Services", "icon-flag.svg", "Booking, dispatch, mobile workflows, and service marketplaces built to scale."],
  ["Blockchain", "icon-box.svg", "Practical blockchain products with clear workflows, wallets, and secure transactions."],
  ["Game Development", "icon-gaming-controller.svg", "Game platforms, mechanics, progression systems, and immersive digital experiences."],
];

const tweets = [
  ["testimonial-avatar-1.png", "Sean Rose", "@seanrose", "Really, really liking Holovise so far. It is just the right amount of simple and fast for a product team that needs momentum."],
  ["testimonial-avatar-q-f9bd42b4.png", "Ryan Delk", "@delk", "Do not take it from me: this team is magic."],
  ["testimonial-avatar-q-5b9ee7a6.png", "Demetria Giles", "@drosewritings", "Playing around with the platform. So far, it is a knowledge worker's dream come true."],
  ["testimonial-avatar-2.png", "Jeremy McPeak", "@jwmcpeak", "It is well thought out, and I can see this being our software partner going forward. Well done."],
  ["testimonial-avatar-q-63640e93.png", "Fabrizio Rinaldi", "@linuz90", "Holovise stays open all the time for us now. It is rare to see one team work so well across both strategy and build."],
  ["testimonial-avatar-3.png", "Jonathan Simcoe", "@jdsimcoe", "The speed, focus, and attention to detail have already made this a daily-driver partnership for our team."],
];

const processSteps = [
  ["01", "Market Research", "We analyze your market, users, and competitors to identify where the product should win."],
  ["02", "Audit/Gathering Technologies", "We audit current systems and select the right technical foundation before build begins."],
  ["03", "Interactive Prototyping", "Clickable flows make decisions visible and help teams validate direction early."],
  ["04", "Agile Transparency", "Clear sprints, visible progress, and practical communication keep delivery moving."],
  ["05", "Result-Driven Testing", "We test the product against business outcomes, reliability, and usability goals."],
  ["06", "Continuous Launch Execution", "Launch is planned, measured, and supported with the right deployment discipline."],
  ["07", "Continuous Improvement", "After release, we refine the product around feedback, analytics, and growth needs."],
];

const blogCards = [
  ["blog-image-element-1.jpg", "Understanding MVP: Why startups might matter with the right MVP", "MVP"],
  ["blog-image-element-2.jpg", "Understanding MVP: Why startups might matter with the right MVP", "MVP"],
  ["blog-image-element-3.jpg", "Understanding MVP: Why startups might matter with the right MVP", "AI Systems"],
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

function a(name: string) {
  return `${assetRoot}/${name}`;
}

function Box({ left, top, width, height, id, className = "", style, children }: BoxProps) {
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
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={a(name)} alt={alt} className={className} loading={eager ? "eager" : "lazy"} />;
}

function ArrowRightIcon({ stroke = "#fff", className = "" }: { stroke?: string; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M8 15L13 10L8 5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Button({
  children,
  href = "/contact-us",
  outline = false,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  outline?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={`inline-flex h-[60px] items-center justify-center gap-3 rounded-[10px] px-6 text-[16px] font-extrabold leading-6 ${
        outline ? "border border-[#3871f2] text-[#3871f2]" : "bg-[#3871f2] text-white"
      } ${className}`}
    >
      {children}
      <ArrowRightIcon stroke={outline ? "#3871f2" : "#fff"} className="h-5 w-5" />
    </Link>
  );
}

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-center text-[13px] font-extrabold uppercase leading-5 text-[#3871f2] ${className}`}>{children}</p>;
}

function Header() {
  return (
    <>
      <Box left={0} top={0} width={1440} height={40} className="bg-[#3871f2] text-white">
        <p className="absolute left-[55px] top-[8px] text-[16px] leading-6 text-white">Vision Meets Technology</p>
        <div className="absolute left-[809px] top-[8px] flex h-6 items-center gap-[13px] text-[16px] leading-6 text-white">
          <Img name="tabler-icon-phone-calling.svg" className="h-[22px] w-[22px]" />
          <span>(000) 666 555 444</span>
        </div>
        <div className="absolute left-[999px] top-[8px] flex h-6 items-center gap-[13px] text-[16px] leading-6 text-white">
          <Img name="tabler-icon-send.svg" className="h-[22px] w-[22px]" />
          <span>support@holovise.io</span>
        </div>
        <div className="absolute left-[1208px] top-[9px] flex gap-[16px] opacity-90">
          {["social-fb-path-01.svg", "social-in.svg", "social-tw-1.svg", "social-mail-1.svg"].map((icon) => (
            <span key={icon} className="flex h-[22px] w-[22px] items-center justify-center">
              <Img name={icon} className="max-h-[22px] max-w-[22px]" />
            </span>
          ))}
        </div>
      </Box>
      <Box left={0} top={40} width={1440} height={100} className="bg-[linear-gradient(110deg,#3871f2_0%,#8b44ff_48%,#1a1240_100%)] text-white">
        <Link href="/" className="absolute left-[55px] top-[27px] flex h-[46px] w-[208px] items-center gap-[13px]" aria-label="Holovise home">
          <Img name="holovise-logo-header.svg" className="h-[45.8px] w-[39.7px]" eager />
          <Img name="holovise-logo-mark.svg" className="h-[16.4px] w-[152.6px]" eager />
        </Link>
        <nav className="absolute inset-0 text-[16px] font-medium leading-6">
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
        <Link href="/contact-us" className="absolute left-[1022px] top-[28px] flex h-11 w-[152px] items-center justify-center rounded-[8px] bg-[#8b44ff] text-[16px] font-extrabold leading-6">
          Get in Touch
        </Link>
        <LanguageMenu className="absolute left-[1191px] top-[28px]" />
        <Img name="tabler-icon-sun-filled.svg" className="absolute left-[1295px] top-[35px] h-[31px] w-[31px]" />
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
      <FigmaAboutDropdown />
      <FigmaServicesDropdown />
    </>
  );
}

function Hero() {
  return (
    <>
      <Box
        left={0}
        top={0}
        width={1440}
        height={1319}
        className="overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 46% 27%, rgba(153, 47, 255, 0.98) 0%, rgba(132, 52, 236, 0.94) 27%, rgba(51, 44, 152, 0.9) 52%, rgba(8, 13, 25, 1) 100%), linear-gradient(110deg, #3871f2 0%, #8b44ff 48%, #080d19 100%)",
        }}
      >
        <div className="absolute left-0 top-[460px] h-[914px] w-[1440px] bg-[linear-gradient(180deg,rgba(8,13,25,0)_0%,#080d19_78%)]" />
        <div className="absolute left-0 top-[520px] h-[799px] w-[344px] bg-[#35a7ff]/72 [clip-path:polygon(0_0,0_100%,100%_100%)]" />
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
        <h1 className="text-[74px] font-extrabold leading-[78px] text-white">
          <span className="block">Your Partner for</span>
          <span className="block whitespace-nowrap bg-[linear-gradient(90deg,#ffe96a_0%,#ff8428_100%)] bg-clip-text text-transparent">Comprehensive Software</span>
          <span className="block">Solutions</span>
        </h1>
      </Box>
      <Box left={130} top={570} width={684} height={72}>
        <p className="text-[24px] leading-9 text-white">Developing Apps for Startups, Scaling Solutions for SMEs, and Modernizing Systems for Established Firms</p>
      </Box>
      <Box left={130} top={667} width={297} height={60}>
        <Link
          href="/contact-us"
          prefetch={false}
          className="flex h-[60px] w-[297px] items-center gap-[14px] rounded-[10px] bg-white px-[21px] text-[20px] font-semibold leading-[24px] text-black"
        >
          <span>Schedule an Intro Call</span>
          <Img name="tabler-icon-arrow-down-right.svg" className="h-7 w-7" />
        </Link>
      </Box>
      <Link
        href="/contact-us"
        prefetch={false}
        aria-label="Get Started"
        className="absolute left-[1390px] top-[403px] z-20 flex h-[200px] w-[50px] items-center justify-center rounded-l-[8px] bg-[#3871f2] text-white"
      >
        <span aria-hidden="true" className="absolute left-[13px] top-[16px] h-[18px] w-[24px] text-[18px] leading-[24px]">
          🚀
        </span>
        <span className="absolute left-[37px] top-[75px] origin-top-left rotate-90 whitespace-nowrap text-[18px] font-bold leading-[24px]">
          Get Started
        </span>
      </Link>
    </>
  );
}

function Services() {
  return (
    <>
      <div id="services" className="absolute left-0 top-[814px]" />
      <Box left={230} top={974} width={980} height={20}>
        <p className="text-center text-[20px] font-medium uppercase leading-[19.6px] tracking-[10px] text-[#3871f2]">Our Services</p>
      </Box>
      <Box left={330} top={1026} width={780} height={118}>
        <h2 className="text-center text-[48px] font-bold leading-[58px] text-[#FFFFFF]">
          Worried about project delays, data security, and tech overload? 
        </h2>
      </Box>
      <Box left={230} top={1150} width={980} height={72}>
        <p className="text-center text-[22px] leading-[36px] text-[#FFFFFF]">
          <br/> <br/>We are your trusted partner who takes these burdens off your shoulders, keeps your project on track, protects your data, and handles the tech expertly.
        </p>
      </Box>
      <Box left={129} top={1297} width={1181} height={731}>
        <HomeServicesTabs theme="light" />
      </Box>
    </>
  );
}

function CtaBand() {
  return (
    <Box
      left={129}
      top={2558}
      width={1181}
      height={413}
      className="z-10 overflow-hidden rounded-[24px] text-white"
      style={{
        background: "linear-gradient(100deg, #7c3aed 0%, #5b21d6 40%, #3b82f6 100%)",
        backgroundImage: [
          "linear-gradient(135deg, rgba(1,16,37,0.72) 0%, transparent 42%)",
          "linear-gradient(315deg, rgba(139,68,255,0.55) 0%, transparent 38%)",
          "linear-gradient(100deg, #7a12ea 0%, #6d28d9 38%, #3871f2 100%)",
        ].join(", "),
      }}
    >
      <h2 className="absolute left-1/2 top-[107px] w-[607px] -translate-x-1/2 text-center text-[36px] font-extrabold leading-10">
        Ready to Get Started?
      </h2>
      <p className="absolute left-1/2 top-[161px] w-[607px] -translate-x-1/2 text-center text-[22px] leading-8">
        Let&apos;s talk about how we can handle your challenges &amp; keep everything running smoothly.
      </p>
      <Link
        href="/contact-us"
        prefetch={true}
        className="absolute left-1/2 top-[247px] flex h-[60px] w-[272px] -translate-x-1/2 items-center justify-center gap-[10px] rounded-[10px] bg-white px-6 text-[16px] font-extrabold text-[#141824]"
      >
        <span>Get In Touch!</span>
        <ArrowRightIcon stroke="#141824" className="h-5 w-5" />
      </Link>
    </Box>
  );
}

function Industries() {
  return (
    <>
      <Box left={0} top={2446} width={1440} height={2540} className="pointer-events-none overflow-hidden bg-[linear-gradient(160deg,#eef1fd_0%,#e9ecfc_45%,#dcd6f7_100%)]">
        <div className="absolute left-[830px] top-[670px] h-[900px] w-[900px] rounded-full bg-[#8b44ff]/12 blur-[145px]" />
        <div className="absolute left-[-360px] top-[1110px] h-[900px] w-[900px] rounded-full bg-[#3871f2]/12 blur-[145px]" />
      </Box>
      <Img name="chart-1.png" alt="Market chart" className="absolute left-[910px] top-[3089px] h-[626px] w-[626px] max-w-none object-contain" />
      <Box left={130} top={3175} width={680} height={470} className="text-[#141824]">
        <Eyebrow className="text-left tracking-[7px]">Industries</Eyebrow>
        <h2 className="mt-[22px] w-[680px] text-[56px] font-extrabold leading-[58px]">
          Industries we empower with our software solutions!
        </h2>
        <p className="mt-7 w-[680px] text-[22px] leading-9 text-[#4b5565]">
          Helping businesses in every field solve tough problems and grow with the right tech solutions, made just for them.
        </p>
        <Button href="/about/who-we-are" outline className="mt-[54px] w-[272px]">How it Works?</Button>
        <div className="mt-[36px] grid w-[680px] grid-cols-3 border-t border-[#141824]/12 pt-[30px]">
          {[
            ["300+", "Projects Delivered."],
            ["20+", "Technical Experts."],
            ["50+", "Products Developed."],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-[40px] font-extrabold leading-10">{value}</p>
              <p className="mt-[13px] text-[18px] leading-6 text-[#4b5565]">{label}</p>
            </div>
          ))}
        </div>
      </Box>
      <Box left={129} top={3726} width={1181} height={1244} className="grid grid-cols-3 content-start text-[#141824]">
        {industries.map(([title, icon, copy], index) => {
          const tall = index === 9;
          return (
            <article key={title} className={`relative w-[394px] border-r border-b border-[#141824]/8 px-12 pt-9 ${tall ? "h-[332px]" : "h-[304px]"}`}>
              <div className="flex h-[88px] items-center gap-5">
                <span className="flex h-[88px] w-[88px] items-center justify-center rounded-[8px] bg-[#f1ecff]">
                  <Img name={icon} className="h-10 w-10" />
                </span>
                <h3 className="text-[28px] font-extrabold leading-[30px]">{title}</h3>
              </div>
              <p className="mt-8 text-[16px] leading-7 text-[#4b5565]">{copy}</p>
            </article>
          );
        })}
      </Box>
    </>
  );
}

function Testimonials() {
  return (
    <>
      <Box left={0} top={5275} width={1440} height={460} className="bg-[#e9edfc] text-[#141824]">
        <Eyebrow className="tracking-[8px]">Testimonials</Eyebrow>
        <h2 className="mt-[26px] text-center text-[30px] font-extrabold leading-10">Check out what our clients are saying!</h2>
        <div className="mt-[48px] grid grid-cols-3 gap-x-6 gap-y-6 px-[28px]">
          {tweets.map(([avatar, name, handle, quote]) => (
            <article key={name} className="h-[150px] rounded-[8px] border border-[#141824]/8 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Img name={avatar} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <h3 className="text-[18px] font-bold leading-6">{name}</h3>
                  <p className="text-[14px] leading-5 text-[#8089a0]">{handle}</p>
                </div>
              </div>
              <p className="mt-5 text-[15px] leading-6 text-[#4b5565]">{quote}</p>
            </article>
          ))}
        </div>
      </Box>
      <Box left={0} top={5723} width={1440} height={132} className="flex items-center gap-5 border-b border-[#141824]/8 bg-[#e9edfc] py-[30px]">
        {["partner-logo-1.svg", "partner-logo-2.svg", "partner-logo-3.svg", "partner-logo-4.svg", "partner-logo-5.svg", "partner-logo-6.svg"].map((logo, index) => (
          <div key={logo} className={`flex h-[72px] w-[223.333px] items-center justify-center px-[30px] ${index === 3 ? "opacity-100" : "opacity-35"}`}>
            <Img name={logo} className="max-h-10 max-w-[118px]" />
          </div>
        ))}
      </Box>
    </>
  );
}

function Process() {
  return (
    <Box left={0} top={6015} width={1440} height={1260} className="overflow-hidden bg-[linear-gradient(170deg,#eef1fd_0%,#e7e6fb_50%,#dcd3f6_100%)] text-[#141824]">
      <div className="absolute left-[260px] top-[200px] h-[1140px] w-[1180px] rounded-full bg-[#8b44ff]/10 blur-[150px]" />
      <Eyebrow className="relative tracking-[8px]">How We Do It?</Eyebrow>
      <h2 className="relative mx-auto mt-[24px] w-[680px] text-center text-[36px] font-extrabold leading-10">Our Step-by-Step Approach to Execute Your Vision.</h2>
      <p className="relative mx-auto mt-7 w-[760px] text-center text-[17px] leading-7 text-[#4b5565]">
        Our process is all about getting to the heart of your needs, working closely with you, and turning each idea into a product that grows.
      </p>
      <div className="relative mx-auto mt-[70px] grid w-[1180px] grid-cols-3 gap-6">
        {processSteps.map(([num, title, copy]) => (
          <article key={num} className="min-h-[214px] rounded-[8px] bg-transparent p-7">
            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-[10px] bg-white text-[24px] font-extrabold text-[#141824] shadow-sm">{num}.</span>
            <h3 className="mt-5 text-[21px] font-extrabold leading-7">{title}</h3>
            <p className="mt-4 text-[15px] leading-7 text-[#4b5565]">{copy}</p>
          </article>
        ))}
      </div>
    </Box>
  );
}

function FitCta() {
  return (
    <>
      <Box
        left={129}
        top={7585}
        width={1181}
        height={413}
        className="overflow-hidden rounded-[24px] text-white"
        style={{
          background: "linear-gradient(100deg, #7a12ea 0%, #6d28d9 38%, #3871f2 100%)",
          backgroundImage: [
            "linear-gradient(135deg, rgba(1,16,37,0.72) 0%, transparent 42%)",
            "linear-gradient(315deg, rgba(139,68,255,0.55) 0%, transparent 38%)",
            "linear-gradient(100deg, #7a12ea 0%, #6d28d9 38%, #3871f2 100%)",
          ].join(", "),
        }}
      >
        <div className="absolute left-[101px] top-[86px] w-[480px]">
          <h2 className="text-[36px] font-extrabold leading-10">Find Us a Great Fit?</h2>
          <p className="mt-[14px] text-[22px] leading-8">Let&apos;s talk about how we can handle your challenges &amp; keep everything running smoothly.</p>
          <Link
            href="/contact-us"
            prefetch={false}
            className="absolute left-0 top-[182px] flex h-[60px] w-[272px] items-center justify-center gap-[10px] rounded-[10px] border border-white px-6 text-[16px] font-extrabold text-white"
          >
            <span>Book a Free Session!</span>
            <ArrowRightIcon stroke="#ffffff" className="h-5 w-5" />
          </Link>
        </div>
      </Box>

      <Img
        name="image.svg"
        alt="Coins"
        className="absolute left-[720px] top-[7480px] z-10 h-[641px] w-[650px] rotate-[3deg] object-contain animate-float"
      />
    </>
  );
}

function WhyChoose() {
  const items = [
    {
      title: "Deep Industry Knowledge",
      icon: "animated-emojies-512px-220.gif",
      description: (
        <>
          We are experts in your sector in addition to <br />
          technology. <br /> <br />Our team&apos;s extensive experience and industry
          <br />knowledge enable us to provide solutions that are<br /> properly
          matched to your particular requirements <br /> and standards.
        </>
      ),
    },
    {
      title: "Tier Talent",
      icon: "animated-emojies-512px-508.gif",
      description: (
        <>
          Our experts aren&apos;t just skilled—they&apos;re exceptional. <br /> <br />
          We&apos;ve assembled a team of professionals who<br />constantly focus on quality and new ideas, so every<br /> project will benefit from their knowledge and <br /> enthusiasm.
        </>
      ),
    },
    {
      title: (
        <>
          Flexible Engagement <br /> Models
        </>
      ),
      icon: "animated-emojies-512px-26.gif",
      description: (
        <>
          We provide a range of recruiting alternatives,<br />depending on your needs: hourly rates, fixed-price <br /> projects, or committed team. <br /> <br />With this versatility, you may get excellent value<br />and select the model that fits your needs.
        </>
      ),
    },
    {
      title: "Reliable Delivery",
      icon: "animated-emojies-512px-44.gif",
      description: (
        <>
          Timeliness is core value. <br /> <br />
          We commit to delivering high-quality solutions on <br />schedule, keeping your project moving forward <br /> without sacrificing precision or attention to detail.
        </>
      ),
    },
  ];

  return (
    <Box left={130} top={8280} width={1180} height={760} className="text-[#141824]">
      <Eyebrow className="tracking-[8px]">Our Impact</Eyebrow>
      <h2 className="mt-[22px] text-center text-[36px] font-extrabold leading-10">Why We are The Right Fit for You!</h2>
      <p className="mx-auto mt-7 w-[760px] text-center text-[17px] leading-7 text-[#4b5565]">
        We get your industry, understand your unique needs, and deliver the results that make a real difference.
      </p>
      <p className="mx-auto mt-7 w-[760px] text-center text-[17px] leading-7 text-[#4b5565]">
        Here&apos;s what we bring to the table while working for you.
      </p>
      <div className="mt-[70px] grid grid-cols-2 gap-x-[70px] gap-y-[42px]">
        {items.map(({ title, icon, description }) => (
          <article key={icon} className="min-h-[210px] rounded-[8px] border border-[#141824]/10 bg-white/60 p-8">
            <div className="flex items-center gap-5">
              <Img name={icon} className="h-12 w-12" />
              <h3 className="text-[24px] font-extrabold leading-8">{title}</h3>
            </div>
            <p className="mt-6 text-[16px] leading-7 text-[#4b5565]">{description}</p>
          </article>
        ))}
      </div>
    </Box>
  );
}

function Blog() {
  return (
    <Box left={130} top={9360} width={1180} height={720} className="text-[#141824]">
      <h2 className="text-center text-[36px] font-extrabold leading-10">What&apos;s happening in IT?</h2>
      <div className="mt-[58px] grid grid-cols-3 gap-[30px]">
        {blogCards.map(([image, title, badge]) => (
          <Link
            key={image}
            href="/blog/2025-tools-to-create-real-performing-tokens"
            prefetch={false}
            className="overflow-hidden rounded-[12px] border border-[#141824]/8 bg-white shadow-sm"
          >
            <div className="relative h-[220px]">
              <Img name={image} className="h-full w-full object-cover" />
              <span className="absolute left-5 top-5 rounded-full bg-[#3871f2] px-4 py-1 text-[13px] font-bold text-white">{badge}</span>
            </div>
            <div className="p-6">
              <h3 className="text-[21px] font-extrabold leading-7">{title}</h3>
              <div className="mt-5 flex items-center gap-3 text-[14px] text-[#8089a0]">
                <Img name="blog-author-avatar.svg" className="h-6 w-6 rounded-full" />
                <span>Chloe Williams</span>
                <span>Oct 26, 2124</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/blog"
        prefetch={false}
        className="absolute left-[454px] top-[640px] flex h-[60px] w-[272px] items-center justify-center rounded-[10px] bg-[#3871f2] text-[16px] font-extrabold text-white"
      >
        Explore All News
      </Link>
    </Box>
  );
}

function Contact() {
  return (
    <Box left={130} top={10368} width={1180} height={627} className="text-[#141824]" id="contact">
      <div className="absolute left-0 top-[83px] w-[459px]">
        <h2 className="text-[56px] font-extrabold leading-[56px]">Let&apos;s Make IT* [Things] Happen</h2>
        <p className="mt-[19px] text-[22px] leading-7 text-[#4b5565]">Connect with us to explore how?</p>
      </div>
      <div className="absolute left-0 top-[321px] grid gap-[26px]">
        {[
          ["contact-send-group.svg", "Send us an email", "support@holovise.io"],
          ["contact-phone-group.svg", "Give us a call", "+64 29 045 50469"],
          ["contact-map-pin-group.svg", "Visit us in person", "5 Newland Grove, Henderson, Auckland 0610, New Zealand"],
        ].map(([icon, label, value]) => (
          <div key={label} className="flex min-h-[52px] w-[570px] gap-6">
            <span className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-[#3871f2]">
              <Img name={icon} className="h-6 w-6" />
            </span>
            <div>
              <p className="text-[16px] leading-5 text-[#8089a0]">{label}</p>
              <p className="mt-2 max-w-[501px] text-[20px] font-bold leading-6">{value}</p>
            </div>
          </div>
        ))}
      </div>
      <form className="absolute left-[610px] top-0 h-[627px] w-[570px] rounded-[8px] bg-white p-[30px] shadow-sm">
        <label className="text-[15px] text-[#141824]">*Name:</label>
        <input className="mt-2 h-[56px] w-[510px] rounded-[6px] border border-transparent bg-[#e7e9f4] px-5 text-[#141824] outline-none placeholder:text-[#9aa1b5]" placeholder="" />
        <div className="mt-4 flex gap-[10px]">
          <div className="w-[250px]">
            <label className="text-[15px] text-[#141824]">*Email:</label>
            <input className="mt-2 h-[56px] w-[250px] rounded-[6px] border border-transparent bg-[#e7e9f4] px-5 text-[#141824] outline-none" />
          </div>
          <div className="w-[250px]">
            <label className="text-[15px] text-[#141824]">Phone:</label>
            <input className="mt-2 h-[56px] w-[250px] rounded-[6px] border border-transparent bg-[#e7e9f4] px-5 text-[#141824] outline-none" />
          </div>
        </div>
        <label className="mt-4 block text-[15px] text-[#141824]">*Message:</label>
        <textarea className="mt-2 h-[135px] w-[510px] resize-none rounded-[6px] border border-transparent bg-[#e7e9f4] p-5 text-[#141824] outline-none" />
        <label className="mt-4 flex items-center gap-2 text-[14px] font-bold leading-5 text-[#141824] cursor-pointer">
          <input
            type="radio"
            name="newsletter"
            value="yes"
            className="h-[22px] w-[22px] rounded-full border border-[#141824]/25 bg-transparent accent-[#3871f2]"
          />
          Sign me up for the newsletter
        </label>
        <button type="button" className="mt-[55px] flex h-[60px] w-[510px] items-center justify-center rounded-[8px] bg-[#3871f2] text-[16px] font-extrabold text-white">
          Send Message!
        </button>
        <p className="mt-6 text-[13px] leading-5 text-[#8089a0]">Praesent in mauris eu tortor porttitor accumsan aliquam ornare wisi eu metus. Lorem ipsum dolor tortor porttitor accumsan aliquam.</p>
      </form>
    </Box>
  );
}

function Footer() {
  return (
    <Box left={0} top={10995} width={1440} height={1501} className="overflow-hidden bg-white text-[#141824]">
      <div className="absolute left-[-492px] top-[1256px] h-[900px] w-[2000px] rounded-full bg-[#3871f2]/10 blur-[160px]" />
      <div className="absolute left-[700px] top-[30px] h-[900px] w-[1100px] rounded-full bg-[#8b44ff]/8 blur-[150px]" />
      <div className="absolute left-[571px] top-[150px] flex w-[299px] flex-col items-center gap-9">
        <Img name="footer-logo-group-1.svg" className="h-[156px] w-[135px]" />
        <Img name="footer-logo-group-2.svg" className="h-[32px] w-[299px]" />
      </div>
      <p className="absolute left-[435px] top-[460px] w-[570px] text-center text-[16px] leading-5 tracking-[8px] text-[#4b5565]">Follow us</p>
      <div className="absolute left-[585px] top-[508px] flex h-8 gap-[27px]">
        {["footer-social-in.svg", "footer-social-tw.svg", "footer-social-mail-1.svg", "footer-social-fb-path-1.svg"].map((icon) => (
          <span key={icon} className="flex h-8 w-8 items-center justify-center">
            <Img name={icon} className="max-h-8 max-w-8" />
          </span>
        ))}
      </div>
      <div className="absolute left-[130px] top-[664px] grid w-[1180px] grid-cols-4 gap-[85px]">
        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-[20px] font-extrabold leading-6">{column.heading}</h3>
            <div className="mt-5 h-px w-[50px] bg-[#3871f2]" />
            <div className="mt-4 grid gap-[15px] text-[16px] leading-5 text-[#4b5565]">
              {column.items.map(([label, href]) => (
                <Link href={href} prefetch={false} key={label}>{label}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-[55px] top-[1391px] h-px w-[1330px] bg-[#141824]/12" />
      <p className="absolute left-[55px] top-[1431px] text-[14px] leading-5 text-[#8089a0]">&copy; 2024 all rights reserved by Holovise.</p>
      <div className="absolute left-[1013px] top-[1427px] flex gap-6 text-[14px] leading-5 text-[#8089a0]">
        <span>Sitemap</span>
        <Link href="/privacy-policy" prefetch={false}>Privacy Policy</Link>
        <Link href="/cookie-consent" prefetch={false}>Cookies</Link>
        <Link href="/terms-and-conditions" prefetch={false}>Terms &amp; Conditions</Link>
      </div>
    </Box>
  );
}

export function LightHomepage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#eef1fd] font-sans text-[#141824]">
      <ResponsiveFigmaCanvas height={12496} background="#eef1fd" nodeId="204:6497">
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