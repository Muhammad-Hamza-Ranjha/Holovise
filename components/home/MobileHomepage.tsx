"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AppWindow,
  Bot,
  Gamepad2,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Paintbrush,
  Phone,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { ThemeToggleButton } from "@/components/navigation/ThemeToggleButton";
import { LanguageMenu } from "@/components/navigation/LanguageMenu";
import { socialLinks } from "@/components/config/socialLinks";

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
] as const;

const testimonials = [
  ["testimonial-avatar-1.png", "Sean Rose", "@seanrose", "Really, really liking Holovise so far. It is just the right amount of simple and fast for a product team that needs momentum."],
  ["testimonial-avatar-q-f9bd42b4.png", "Ryan Delk", "@delk", "Do not take it from me: this team is magic."],
  ["testimonial-avatar-q-5b9ee7a6.png", "Demetria Giles", "@drosewritings", "Playing around with the platform. So far, it is a knowledge worker's dream come true."],
] as const;

const processSteps = [
  ["01.", "Market Immersion", "We explore your market, industry trends, competitor strategies, and customer behaviors to build a solid foundation."],
  ["02.", "Joint Visioning Workshops", "We work with your team to align strategic plans and technical outlines with your long-term goals."],
  ["03.", "Interactive Prototyping", "We test real-world scenarios early and refine the product with direct feedback before full development."],
  ["04.", "Agile Transparency", "Regular updates, live dashboards, and direct feedback channels keep the project aligned with your needs."],
  ["05.", "Real-World Testing", "We test with actual users to verify performance and identify practical opportunities for improvement."],
  ["06.", "Coordinated Launch Execution", "We coordinate the rollout with your marketing strategy and operational schedule."],
  ["07.", "Continuous Improvement", "After launch, we monitor real usage and keep improving the product as your business evolves."],
] as const;

const reasons = [
  ["Built Around You", "Every recommendation starts with your priorities, constraints, and customers."],
  ["Clear Communication", "You always know what is being built, why it matters, and what comes next."],
  ["Security by Design", "Security and privacy are built into the product from the first technical decision."],
  ["Senior Expertise", "A focused team of product and engineering specialists works directly with you."],
  ["Practical Innovation", "We apply modern technology where it creates measurable value for your business."],
  ["Long-Term Partnership", "Our support continues through launch, learning, optimization, and growth."],
] as const;

const footerColumns = [
  {
    heading: "Quick Links:",
    items: [["About", "/about"], ["Services", "/services/full-stack-development"], ["News/Blogs", "/blog"], ["Careers", "/career"], ["Contact", "/contact-us"]],
  },
  {
    heading: "Solutions:",
    items: [["Web Applications", "/services/web-app-development"], ["Mobile Applications", "/services/mobile-app-development"], ["Desktop Applications", "/services/desktop-app-development"], ["AI/ML Development", "/services/ai-ml-development"], ["Software Security", "/services/software-security"], ["DevSecOps Solutions", "/services/devsecops"], ["Blockchain", "/services/blockchain-development"], ["Web 3.0", "/services/web-3-development"], ["UIUX Design", "/services/ui-ux-design"], ["Game Development", "/services/game-development"]],
  },
  {
    heading: "Product Development:",
    items: [["Digital Transformation", "/services/digital-transformation"], ["MVP Development", "/services/mvp-development"], ["No Code", "/services/no-code-development"], ["Product Strategy", "/services/product-strategy-consulting"]],
  },
  {
    heading: "Collaborative Models:",
    items: [["Staff Augmentation", "/services/staff-augmentation"], ["Investment", "/services/investment"], ["Dedicated Dev Team", "/services/software-development-outsourcing"], ["Software Dev Outsourcing", "/services/software-development-outsourcing"]],
  },
] as const;

const blogImages = ["blog-image-element-1.webp", "blog-image-element-2.webp", "blog-image-element-3.webp"] as const;

function asset(theme: "dark" | "light", name: string) {
  return `/assets/homepage/${theme}/${name}`;
}

function submitContactMessage(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const newsletter = formData.get("newsletter") === "yes" ? "Yes" : "No";
  const subject = `Holovise website enquiry from ${name}`;
  const body = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, `Newsletter signup: ${newsletter}`, "", message].join("\n");
  window.location.href = `mailto:support@holovise.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function MobileHomepage({ theme }: MobileHomepageProps) {
  const isLight = theme === "light";
  const page = isLight ? "bg-[#eaf0fe] text-[#222]" : "bg-[#080d19] text-white";
  const muted = isLight ? "text-[#4b5565]" : "text-white/70";
  const card = isLight ? "border-[#222]/15 bg-white/45" : "border-white/15 bg-[#111729]/75";
  const input = isLight ? "border-[#222]/10 bg-[#e7e9f4] text-[#141824]" : "border-white/15 bg-[#080d19] text-white";

  return (
    <main className={`min-h-screen overflow-x-hidden font-sans ${page}`} data-home-layout="responsive">
      <header className="relative z-30">
        <div className="bg-[#3871f2] text-white">
          <div className="mx-auto flex min-h-10 max-w-[1180px] items-center justify-between gap-4 px-5 py-2 sm:px-8">
            <span className="hidden text-[14px] sm:block">Vision Meets Technology</span>
            <div className="flex w-full items-center justify-center gap-5 sm:w-auto sm:justify-end">
              {[
                ["social-tw-1.svg", socialLinks.instagram, "Instagram"],
                ["social-in.svg", socialLinks.linkedin, "LinkedIn"],
                ["social-tw.svg", socialLinks.twitter, "X"],
                ["social-mail-1.svg", "/contact-us", "Email"],
                ["social-fb-path-01.svg", socialLinks.facebook, "Facebook"],
              ].map(([icon, href, label]) => (
                <Link key={label} href={href} aria-label={label} prefetch={false}>
                  <Image src={asset(theme, icon)} alt="" width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={isLight ? "bg-white/90" : "bg-[#080d19]/95"}>
          <div className="mx-auto flex h-[88px] max-w-[1180px] items-center justify-between px-5 sm:px-8">
            <Link href="/" className="flex items-center gap-3" aria-label="Holovise home">
              <Image src={asset(theme, "holovise-logo-header.svg")} alt="" width={38} height={44} priority />
              <Image src={asset(theme, "holovise-logo-mark.svg")} alt="Holovise" width={145} height={18} priority className="hidden sm:block" />
            </Link>
            <nav className="hidden items-center gap-7 text-[15px] font-semibold lg:flex" aria-label="Primary navigation">
              <Link href="/about">About</Link>
              <Link href="/services/full-stack-development">Services</Link>
              <Link href="/our-portfolio">Portfolio</Link>
              <Link href="/blog">News</Link>
              <Link href="/contact-us">Contact</Link>
            </nav>
            <div className="flex items-center gap-3">
              <LanguageMenu darkText={isLight} />
              <ThemeToggleButton className="relative h-8 w-8" />
              <Link href="/side-drawer" prefetch={false} aria-label="Open menu" className="lg:hidden">
                <Menu className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#080d19] text-white">
        <Image src="/assets/homepage/shared/hero-artwork.png" alt="" width={1440} height={1319} priority className="pointer-events-none absolute left-1/2 top-[-170px] -z-10 h-auto w-[1440px] max-w-none -translate-x-1/2 opacity-90" />
        <div className="mx-auto flex min-h-[720px] max-w-[1180px] items-center px-5 py-24 sm:px-8 lg:min-h-[790px]">
          <div className="max-w-[760px]">
            <p className="text-[18px] leading-6">Welcome to the <span className="font-extrabold uppercase">Holovise</span></p>
            <h1 className="mt-8 text-[clamp(46px,7vw,72px)] font-extrabold leading-[1.08] tracking-[-2px]">
              Your Partner for <span className="bg-[linear-gradient(90deg,#ffe96a,#ff8428)] bg-clip-text text-transparent">Comprehensive Software</span> Solutions
            </h1>
            <p className="mt-7 max-w-[690px] text-[clamp(19px,2.2vw,22px)] leading-9">Developing Apps for Startups, Scaling Solutions for SMEs, and Modernizing Systems for Established Firms</p>
            <Link href="/contact-us" prefetch={false} className="mt-8 flex h-[60px] w-full max-w-[297px] items-center justify-center rounded-[10px] bg-white text-[18px] font-semibold text-[#141824]">Schedule an Intro Call</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8">
        <p className="text-center text-[14px] font-bold uppercase tracking-[8px] text-[#3871f2]">Our Services</p>
        <h2 className="mx-auto mt-7 max-w-[820px] text-center text-[clamp(36px,4.5vw,52px)] font-bold leading-[1.15]">Worried about project delays, data security, and tech overload?</h2>
        <p className={`mx-auto mt-7 max-w-[900px] text-center text-[19px] leading-8 ${muted}`}>We take these burdens off your shoulders, keep your project on track, protect your data, and handle the technology expertly.</p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(([title, href, Icon]) => (
            <Link key={title} href={href} prefetch={false} className={`group min-h-[205px] rounded-[18px] border p-7 transition-colors hover:border-[#3871f2] hover:bg-[#3871f2] hover:text-white ${card}`}>
              <Icon className="h-12 w-12 text-[#3871f2] group-hover:text-white" strokeWidth={1.5} />
              <h3 className="mt-8 text-[22px] font-bold leading-[30px]">{title}</h3>
              <span className="mt-5 block text-[24px]" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(112deg,#2174ff_0%,#752cff_52%,#c400d9_100%)] text-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-[clamp(36px,4vw,48px)] font-bold leading-tight">Ready to Get Started?</h2>
            <p className="mt-4 max-w-[680px] text-[21px] leading-8">Let&apos;s talk about how we can handle your challenges & keep everything running smoothly.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact-us" className="flex h-[60px] min-w-[220px] items-center justify-center rounded-[9px] bg-white px-8 text-[19px] font-semibold text-[#141824]">Get In Touch</Link>
            <Link href="/about/who-we-are" className="flex h-[60px] min-w-[220px] items-center justify-center rounded-[9px] border border-white px-8 text-[19px] font-semibold">Know More!</Link>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24">
        <Image src={asset(theme, "industries-glow.png")} alt="" width={1440} height={2243} className="pointer-events-none absolute left-1/2 top-[-260px] -z-10 h-auto w-[1440px] max-w-none -translate-x-1/2" />
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-[16px] font-semibold uppercase tracking-[8px] text-[#3871f2]">Market Share</p>
              <h2 className={`mt-6 text-[clamp(40px,5vw,58px)] font-bold leading-[1.12] ${isLight ? "" : "bg-[linear-gradient(90deg,#fff759,#e151ff)] bg-clip-text text-transparent"}`}>Industries we empower with our software solutions!</h2>
              <p className={`mt-7 text-[21px] leading-8 ${muted}`}>Helping businesses in every field solve tough problems and grow with the right tech solutions, made just for them.</p>
              <Link href="/about/who-we-are" className="mt-8 flex h-[60px] w-[250px] items-center justify-center rounded-[9px] border border-[#3871f2] text-[19px] font-semibold text-[#3871f2]">How it Works?</Link>
            </div>
            <Image src={asset(theme, "chart-1.webp")} alt="Market chart" width={626} height={626} className="mx-auto h-auto w-full max-w-[560px]" />
          </div>
          <div className="mt-10 grid grid-cols-3 border-y border-current/20 py-8 text-center">
            {[["300+", "Projects Delivered."], ["20+", "Technical Experts."], ["50+", "Products Developed."]].map(([value, label]) => (
              <div key={label}><p className="font-inter text-[clamp(28px,4vw,38px)] font-extrabold">{value}</p><p className={`mt-2 text-[13px] sm:text-[16px] ${muted}`}>{label}</p></div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(([title, icon, copy]) => (
              <article key={title} className="min-h-[300px] border-b border-r border-current/20 p-7 sm:p-9">
                <div className="flex items-center gap-5">
                  <span className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[15px] ${isLight ? "bg-white/65" : "bg-[#111729]"}`}><Image src={asset(theme, icon)} alt="" width={44} height={44} /></span>
                  <h3 className="text-[22px] font-bold leading-7">{title}</h3>
                </div>
                <p className={`mt-7 text-[17px] leading-7 ${muted}`}>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={isLight ? "bg-[#e1e8fa]" : "bg-[#0c1221]"}>
        <div className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8">
          <p className="text-center text-[14px] font-bold uppercase tracking-[8px] text-[#9c50ff]">Testimonials</p>
          <h2 className="mt-7 text-center text-[clamp(34px,4vw,46px)] font-bold">Check out what our clients are saying!</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map(([avatar, name, handle, quote]) => (
              <article key={name} className={`rounded-[16px] border p-7 ${card}`}>
                <div className="flex items-center gap-4"><Image src={asset(theme, avatar)} alt="" width={48} height={48} className="rounded-full" /><div><h3 className="text-[18px] font-bold">{name}</h3><p className={muted}>{handle}</p></div></div>
                <p className={`mt-6 text-[16px] leading-7 ${muted}`}>{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24">
        <Image src={asset(theme, "process-glow.png")} alt="" width={1440} height={2890} className="pointer-events-none absolute left-1/2 top-[-180px] -z-10 h-auto w-[1440px] max-w-none -translate-x-1/2" />
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-center text-[14px] font-bold uppercase tracking-[8px] text-[#9c50ff]">How We Do It?</p>
          <h2 className="mx-auto mt-7 max-w-[760px] text-center text-[clamp(36px,4vw,48px)] font-bold leading-tight">Our Step-by-Step Approach to Execute Your Vision.</h2>
          <p className={`mx-auto mt-6 max-w-[780px] text-center text-[20px] leading-8 ${muted}`}>Our process is all about getting to the heart of your needs, working closely with you, and creating solutions that fit perfectly.</p>
          <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([num, title, copy]) => (
              <article key={num} className={`rounded-[18px] border p-7 ${card}`}><div className="flex items-center gap-5"><span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[15px] bg-[#3871f2] text-[24px] font-bold text-white">{num}</span><h3 className="text-[23px] font-bold leading-7">{title}</h3></div><p className={`mt-7 text-[16px] leading-7 ${muted}`}>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(105deg,#7135f6,#a419ec_54%,#087fff)] text-white">
        <div className="mx-auto grid min-h-[390px] max-w-[1180px] items-center gap-6 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_430px]">
          <div><h2 className="text-[clamp(38px,4vw,52px)] font-bold">Find Us a Great Fit?</h2><p className="mt-5 max-w-[650px] text-[21px] leading-8">Let&apos;s talk about how we can handle your challenges & keep everything running smoothly.</p><Link href="/contact-us" className="mt-8 flex h-[60px] w-[272px] items-center justify-center rounded-[10px] border border-white text-[19px] font-semibold">Book a Free Session!</Link></div>
          <Image src={asset("dark", "dollar-rocket-3d.webp")} alt="Rocket illustration" width={448} height={448} className="mx-auto hidden h-auto w-full max-w-[420px] lg:block" />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8">
        <p className="text-center text-[14px] font-bold uppercase tracking-[8px] text-[#3871f2]">Why Holovise?</p>
        <h2 className="mx-auto mt-7 max-w-[780px] text-center text-[clamp(36px,4vw,48px)] font-bold">A technology partner focused on outcomes that last.</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, copy], index) => <article key={title} className={`rounded-[18px] border p-8 ${card}`}><span className="text-[36px] font-extrabold text-[#3871f2]">0{index + 1}</span><h3 className="mt-6 text-[23px] font-bold">{title}</h3><p className={`mt-4 text-[17px] leading-7 ${muted}`}>{copy}</p></article>)}
        </div>
      </section>

      <section className={isLight ? "bg-[#e4eafa]" : "bg-[#0c1221]"}>
        <div className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8">
          <p className="text-center text-[14px] font-bold uppercase tracking-[8px] text-[#9c50ff]">Latest News</p>
          <h2 className="mt-7 text-center text-[clamp(36px,4vw,48px)] font-bold">What&apos;s happening in IT?</h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {blogImages.map((image) => <Link key={image} href="/blog/2025-tools-to-create-real-performing-tokens" className="group"><div className="relative h-[270px] overflow-hidden rounded-[30px]"><Image src={asset(theme, image)} alt="" fill sizes="(max-width: 1024px) 100vw, 360px" className="object-cover" /><span className="absolute left-5 top-5 rounded-2xl bg-[#3871f2] px-3 py-1 text-[12px] font-semibold tracking-[1px] text-white">NEW</span></div><h3 className="mt-5 text-[24px] font-bold leading-9 tracking-[-0.5px]">6 ways to improve your wirefrimes with Master Wire tool for Figma</h3><div className={`mt-4 flex items-center gap-3 text-[14px] ${muted}`}><Image src={asset(theme, "blog-author-avatar.svg")} alt="" width={24} height={24} /><span>Chloe Williams</span><span className="ml-auto">Oct 26, 2124</span></div></Link>)}
          </div>
          <Link href="/blog" className="mx-auto mt-14 flex h-[60px] w-[272px] items-center justify-center rounded-[10px] bg-[#3871f2] text-[19px] font-semibold text-white">Explore All News</Link>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-[1180px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-[clamp(42px,5vw,58px)] font-bold leading-[1.05]">Let&apos;s Make IT* [Things] Happen</h2>
          <p className={`mt-5 text-[22px] ${muted}`}>Connect with us to explore how?</p>
          <div className="mt-12 grid gap-8">
            {[[Mail, "Send us an email", "support@holovise.io"], [Phone, "Give us a call", "+64 29 045 50469"], [MapPin, "Visit us in person", "5 Newland Grove, Henderson, Auckland 0610, New Zealand"]].map(([Icon, label, value]) => {
              const ContactIcon = Icon as typeof Mail;
              return <div key={String(label)} className="flex gap-5"><span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#3871f2] text-white"><ContactIcon className="h-6 w-6" /></span><div><p className={`text-[15px] ${muted}`}>{String(label)}</p><p className="mt-2 text-[18px] font-bold leading-6">{String(value)}</p></div></div>;
            })}
          </div>
        </div>
        <form onSubmit={submitContactMessage} className={`rounded-[16px] border p-6 sm:p-8 ${card}`}>
          <label htmlFor="responsive-contact-name" className="text-[15px]">*Name:</label><input id="responsive-contact-name" name="name" required autoComplete="name" className={`mt-2 h-14 w-full rounded-[7px] border px-5 outline-none ${input}`} />
          <div className="mt-5 grid gap-5 sm:grid-cols-2"><div><label htmlFor="responsive-contact-email" className="text-[15px]">*Email:</label><input id="responsive-contact-email" name="email" type="email" required autoComplete="email" className={`mt-2 h-14 w-full rounded-[7px] border px-5 outline-none ${input}`} /></div><div><label htmlFor="responsive-contact-phone" className="text-[15px]">Phone:</label><input id="responsive-contact-phone" name="phone" type="tel" autoComplete="tel" className={`mt-2 h-14 w-full rounded-[7px] border px-5 outline-none ${input}`} /></div></div>
          <label htmlFor="responsive-contact-message" className="mt-5 block text-[15px]">*Message:</label><textarea id="responsive-contact-message" name="message" required className={`mt-2 h-[150px] w-full resize-none rounded-[7px] border p-5 outline-none ${input}`} />
          <label className={`mt-5 flex cursor-pointer items-center gap-3 text-[14px] ${muted}`}><input type="checkbox" name="newsletter" value="yes" className="h-4 w-4" />Sign me up for product news and insights.</label>
          <button type="submit" className="mt-8 flex h-[60px] w-full items-center justify-center rounded-[8px] bg-[#3871f2] text-[18px] font-semibold text-white">Send Message!</button>
        </form>
      </section>

      <footer className="relative isolate overflow-hidden border-t border-current/10">
        <Image src={asset(theme, "footer-purple.png")} alt="" width={1417} height={1552} className="pointer-events-none absolute left-1/2 top-[-120px] -z-10 h-auto w-[1417px] max-w-none -translate-x-1/2 opacity-70" />
        <div className="mx-auto max-w-[1180px] px-5 pb-10 pt-24 sm:px-8">
          <div className="flex flex-col items-center gap-9"><Image src={asset(theme, "footer-logo-group-1.svg")} alt="" width={110} height={128} /><Image src={asset(theme, "footer-logo-group-2.svg")} alt="Holovise" width={250} height={28} /></div>
          <p className={`mt-12 text-center text-[15px] uppercase tracking-[8px] ${muted}`}>Follow us</p>
          <div className="mt-7 flex justify-center gap-7 text-[#3871f2]"><Link href={socialLinks.instagram}>Instagram</Link><Link href={socialLinks.linkedin}>LinkedIn</Link><Link href={socialLinks.twitter}>X</Link></div>
          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">{footerColumns.map((column) => <div key={column.heading}><h3 className="font-semibold">{column.heading}</h3><div className="mt-5 h-px w-12 bg-[#3871f2]" /><div className={`mt-5 grid gap-4 text-[15px] ${muted}`}>{column.items.map(([label, href]) => <Link key={label} href={href} prefetch={false}>{label}</Link>)}</div></div>)}</div>
          <div className="mt-20 h-px bg-current/20" />
          <div className={`mt-7 flex flex-col justify-between gap-5 text-[12px] sm:flex-row ${muted}`}><p>&copy; 2024 all rights reserved by Holovise.</p><div className="flex flex-wrap gap-5"><Link href="/sitemap.xml" prefetch={false}>Sitemap</Link><Link href="/privacy-policy" prefetch={false}>Privacy Policy</Link><Link href="/cookie-consent" prefetch={false}>Cookies</Link><Link href="/terms-and-conditions" prefetch={false}>Terms &amp; Conditions</Link></div></div>
        </div>
      </footer>
    </main>
  );
}
