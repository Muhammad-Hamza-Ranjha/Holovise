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
    <div className="w-full overflow-x-clip bg-[#2B5FFF] text-white">
      <div className="mx-auto flex h-9 w-full max-w-[1330px] items-center justify-between px-6 text-[14px]">
        <span>Vision Meets Technology</span>
        <div className="flex items-center gap-7 text-white/80">
          <span className="flex items-center gap-2">
            <Phone size={18} aria-hidden="true" />
            <a href="tel:000666555444">(000) 666 555 444</a>
          </span>
          <span className="flex items-center gap-2">
            <Send size={18} aria-hidden="true" />
            <a href="mailto:support@holovise.io">support@holovise.io</a>
          </span>
          <span className="flex items-center gap-4 text-white">
            {topBarSocialItems.map(({ name, href, label, icon: Icon, external }) => (
              <a
                key={name}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
