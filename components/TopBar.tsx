import { Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterBirdIcon } from "./SocialIcons";
import { socialLinks } from "./config/socialLinks";

export function TopBar() {
  return (
    <div className="hidden h-10 border-b border-[#2B5FFF] bg-[#2B5FFF] text-white dark:flex">
      <div className="mx-auto flex w-full max-w-[1330px] items-center justify-between px-6 text-[14px]">
        <span>Vision Meets Technology</span>
        <div className="flex items-center gap-7 text-white/80">
          <span className="flex items-center gap-2"><Phone size={18} /> (000) 666 555 444</span>
          <span className="flex items-center gap-2"><Send size={18} /> support@holovise.io</span>
          <span className="flex items-center gap-4 text-white">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Open Holovise on Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open Holovise on LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Open Holovise on X">
              <TwitterBirdIcon size={18} />
            </a>
            <Link href="/contact-us" aria-label="Contact Holovise by email">
              <Mail size={18} />
            </Link>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Open Holovise on Instagram">
              <InstagramIcon size={18} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
