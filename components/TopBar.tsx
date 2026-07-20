import { Mail, Phone, Send } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterBirdIcon } from "./SocialIcons";
import { socialLinks } from "./config/socialLinks";

const topBarSocialItems = [
  {
    name: "Facebook",
    href: socialLinks.facebook,
    label: "Open Holovise on Facebook",
    icon: FacebookIcon,
    external: true,
  },
  {
    name: "LinkedIn",
    href: socialLinks.linkedin,
    label: "Open Holovise on LinkedIn",
    icon: LinkedinIcon,
    external: true,
  },
  {
    name: "Twitter/X",
    href: socialLinks.twitter,
    label: "Open Holovise on X",
    icon: TwitterBirdIcon,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:support@holovise.io",
    label: "Contact Holovise by email",
    icon: Mail,
    external: false,
  },
  {
    name: "Instagram",
    href: socialLinks.instagram,
    label: "Open Holovise on Instagram",
    icon: InstagramIcon,
    external: true,
  },
] as const;

export function TopBar() {
  return (
    <div className="w-full overflow-x-clip bg-[#3871F2] text-white">
      <div className="mx-auto flex h-[40px] w-full max-w-[1330px] items-center justify-center px-4 text-[14px] leading-[24px] font-semibold tracking-[-0.14px] sm:justify-between xl:px-0">
        <span className="hidden sm:inline whitespace-nowrap">Vision Meets Technology</span>
        <div className="flex items-center gap-4 text-white lg:gap-[22px]">
          <span className="hidden items-center gap-[13px] lg:flex">
            <Phone size={22} aria-hidden="true" />
            <a href="tel:000666555444">(000) 666 555 444</a>
          </span>
          <span className="hidden items-center gap-[13px] lg:flex">
            <Send size={22} aria-hidden="true" />
            <a href="mailto:support@holovise.io">support@holovise.io</a>
          </span>
          <span className="flex items-center gap-[16.923px] text-white">
            {topBarSocialItems.map(({ name, href, label, icon: Icon, external }) => (
              <a
                key={name}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
