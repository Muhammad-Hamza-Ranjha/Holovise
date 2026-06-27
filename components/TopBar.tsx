import { Mail, Phone, Send } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterBirdIcon } from "./SocialIcons";

export function TopBar() {
  return (
    <div className="hidden h-10 border-b border-[#2B5FFF] bg-[#2B5FFF] text-white dark:flex">
      <div className="mx-auto flex w-full max-w-[1330px] items-center justify-between px-6 text-[14px]">
        <span>Vision Meets Technology</span>
        <div className="flex items-center gap-7 text-white/80">
          <span className="flex items-center gap-2"><Phone size={18} /> (000) 666 555 444</span>
          <span className="flex items-center gap-2"><Send size={18} /> support@holovise.io</span>
          <span className="flex items-center gap-4 text-white"><FacebookIcon size={18} /><LinkedinIcon size={18} /><TwitterBirdIcon size={18} /><Mail size={18} /><InstagramIcon size={18} /></span>
        </div>
      </div>
    </div>
  );
}
