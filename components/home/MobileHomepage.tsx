"use client";

import Image from "next/image";
import Link from "next/link";
import { AppWindow, Bot, Gamepad2, Mail, Menu, MonitorCog, Paintbrush, Phone, ShieldCheck, Smartphone } from "lucide-react";
import { ThemeToggleButton } from "@/components/navigation/ThemeToggleButton";

type MobileHomepageProps = {
  theme: "dark" | "light";
};

const services = [
  ["Mobile App Development", "/services/mobile-app-development", Smartphone],
  ["Desktop App Development", "/services/desktop-app-development", MonitorCog],
  ["Web App Development", "/services/web-app-development", AppWindow],
  ["AI/ML Development", "/services/ai-ml-development", Bot],
  ["Software Security", "/services/software-security", ShieldCheck],
  ["UX/UI - Product Design", "/services/ui-ux-design", Paintbrush],
  ["Game Development", "/services/game-development", Gamepad2],
] as const;

const footerLinks = [
  ["About", "/about"],
  ["Services", "/services/full-stack-development"],
  ["News/Blogs", "/blog"],
  ["Careers", "/career"],
  ["Contact", "/contact-us"],
] as const;

function asset(theme: "dark" | "light", name: string) {
  return `/assets/homepage/${theme}/${name}`;
}

export function MobileHomepage({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";
  const pageBg = isLight ? "bg-[#eaf0fe] text-[#20232a]" : "bg-[#080d19] text-white";
  const navBg = isLight
    ? "bg-[linear-gradient(100deg,#28105b_0%,#5d16c8_55%,#25104d_100%)]"
    : "bg-[#171039]";

  return (
    <main className={`min-h-screen overflow-x-hidden font-sans ${pageBg}`}>
      <header className="relative z-30">
        <div className="flex h-[50px] items-center justify-between bg-[#3871f2] px-[23px] text-white">
          {["social-fb-path-01.svg", "social-in.svg", "social-tw.svg", "social-mail-1.svg", "social-tw-1.svg"].map((icon) => (
            <Image key={icon} src={asset(theme, icon)} alt="" width={22} height={22} />
          ))}
        </div>
        <div className={`flex h-[100px] items-center justify-between px-[23px] text-white ${navBg}`}>
          <Link href="/" className="flex items-center gap-[13px]" aria-label="Holovise home">
            <Image src={asset(theme, "holovise-logo-header.svg")} alt="" width={40} height={46} priority />
            <Image src={asset(theme, "holovise-logo-mark.svg")} alt="Holovise" width={153} height={17} priority />
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggleButton className="relative h-[31px] w-[31px]" />
            <Link href="/side-drawer" prefetch={false} aria-label="Open menu">
              <Menu className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </header>

      <section
        className="relative min-h-[693px] overflow-hidden px-[23px] pb-[80px] pt-[226px] text-white"
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

      <section className={`px-[23px] py-[72px] ${pageBg}`}>
        <p className="text-center text-[13px] font-extrabold uppercase leading-5 tracking-[9px] text-[#3871f2]">Our Services</p>
        <h2 className="mt-[32px] text-center text-[37px] font-extrabold leading-[41px]">
          Worried about project delays, data security, and tech overload?
        </h2>
        <p className={`mt-[32px] text-center text-[17px] leading-[30px] ${isLight ? "text-[#20232a]" : "text-white/85"}`}>
          We are your trusted partner who takes these burdens off your shoulders, keeps your project on track, protects your data, and handles the tech expertly.
        </p>
        <div className="mt-[50px] grid gap-[18px]">
          {services.map(([title, href, Icon]) => (
            <Link
              key={title}
              href={href}
              prefetch={false}
              className={`group relative h-[187px] overflow-hidden rounded-[15px] border-b px-[15px] pt-[27px] transition-colors ${
                isLight ? "border-[#9aa4b2] hover:bg-[#3871f2] hover:text-white" : "border-[#646464] hover:bg-[#3871f2]"
              }`}
            >
              <Icon className="h-[50px] w-[50px] text-[#3871f2] transition-colors group-hover:text-white" strokeWidth={1.5} />
              <span className="absolute right-[25px] top-[42px] text-[29px] leading-none text-[#6a7284] transition-colors group-hover:text-white">
                ↗
              </span>
              <h3 className="mt-[22px] w-[229px] text-[22px] font-bold leading-[30px]">{title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-[31px] py-[46px] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(112deg,#2174ff_0%,#752cff_48%,#c400d9_100%)]" />
        <div className="relative z-10">
          <h2 className="text-[38px] font-extrabold leading-10">Ready to Get Started?</h2>
          <p className="mt-[18px] text-[23px] leading-[30px]">
            Let&apos;s talk about how we can handle your challenges & keep everything running smoothly.
          </p>
          <Link href="/contact-us" prefetch={false} className="mt-8 flex h-[60px] items-center justify-center rounded-[10px] bg-white text-[16px] font-extrabold text-[#141824]">
            Get Started
          </Link>
        </div>
      </section>

      <section className={`px-[23px] py-[70px] ${pageBg}`}>
        <h2 className="text-[39px] font-extrabold leading-[42px]">Let&apos;s Make IT* [Things] Happen</h2>
        <p className="mt-[19px] text-[23px] leading-[30px]">Connect with us to explore how.</p>
        <div className="mt-[50px] grid gap-[26px]">
          <a href="mailto:support@holovise.io" className="flex gap-6">
            <span className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-[#3871f2] text-white">
              <Mail className="h-6 w-6" />
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
      </section>

      <footer className={`px-[23px] pb-[36px] pt-[30px] ${isLight ? "bg-white text-[#20232a]" : "bg-[#080d19] text-white"}`}>
        <div className="flex flex-col items-center gap-9">
          <Image src={asset(theme, "footer-logo-group-1.svg")} alt="" width={135} height={156} />
          <Image src={asset(theme, "footer-logo-group-2.svg")} alt="Holovise" width={299} height={33} />
        </div>
        <div className="mx-auto mt-[63px] grid w-[320px] gap-[18px] text-[16px] leading-5">
          {footerLinks.map(([label, href]) => (
            <Link href={href} prefetch={false} key={label}>
              {label}
            </Link>
          ))}
        </div>
        <div className={`mt-[62px] h-px w-full ${isLight ? "bg-[#141824]/12" : "bg-white/18"}`} />
        <p className={`mt-5 text-[14px] leading-5 ${isLight ? "text-[#8089a0]" : "text-white/55"}`}>
          &copy; 2024 all rights reserved by Holovise.
        </p>
      </footer>
    </main>
  );
}
