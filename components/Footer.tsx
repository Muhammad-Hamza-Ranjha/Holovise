import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const columns = [
  {
    title: "Quick Links:",
    items: [
      ["About", "/about"],
      ["Services", "/services/full-stack-development"],
      ["News/Blogs", "/blog"],
      ["Careers", "/career"],
      ["Contact", "/contact-us"],
    ],
  },
  {
    title: "Solutions:",
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
    ],
  },
  {
    title: "Product Development:",
    items: [
      ["Digital Transformation", "/services/digital-transformation"],
      ["MVP Development", "/services/mvp-development"],
      ["No Code", "/services/no-code-development"],
      ["Product Strategy", "/services/product-strategy-consulting"],
    ],
  },
  {
    title: "Collaborative Models:",
    items: [
      ["Staff Augmentation", "/services/staff-augmentation"],
      ["Investment", "/services/investment"],
      ["Dedicated Dev Team", "/services/software-development-outsourcing"],
      ["Software Dev Outsourcing", "/services/software-development-outsourcing"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-holo-night py-24 text-white">
      <div className="absolute inset-0 bg-holo-radial opacity-80" />
      <div className="relative mx-auto max-w-[1330px] px-6">
        <div className="flex flex-col items-center gap-8 pb-24 text-center">
          <Image src="/assets/holovise-logo.png" alt="Holovise" width={299} height={66} />
          <p className="text-sm uppercase tracking-[0.22em] text-white/55">Follow us</p>
          <div className="flex gap-7"><InstagramIcon /><LinkedinIcon /><TwitterIcon /><Mail /><FacebookIcon /></div>
        </div>
        <div className="grid gap-10 border-y border-white/10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-6 text-lg font-semibold">{col.title}</h3>
              <ul className="grid gap-4 text-sm text-white/68">
                {col.items.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-4 pt-9 text-sm text-white/62 md:flex-row">
          <p>© 2024 all rights reserved by Holovise.</p>
          <div className="flex gap-6">
            <Link href="/">Sitemap</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-consent">Cookies</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
