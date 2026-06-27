"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const languageOptions = [
  { label: "VI", asset: "/assets/navigation/language-vi.svg" },
  { label: "ZE", asset: "/assets/navigation/language-ze.svg" },
  { label: "DE", asset: "/assets/navigation/language-de.svg" },
  { label: "JA", asset: "/assets/navigation/language-ja.svg" },
  { label: "ZH", asset: "/assets/navigation/language-zh.svg" },
] as const;

type LanguageMenuProps = {
  className?: string;
  transparentWhenClosed?: boolean;
};

export function LanguageMenu({ className = "", transparentWhenClosed = false }: LanguageMenuProps) {
  const [open, setOpen] = useState(false);
  const showArtwork = open || !transparentWhenClosed;

  return (
    <button
      type="button"
      aria-label="Select language"
      aria-expanded={open}
      onClick={() => setOpen((value) => !value)}
      className={`relative z-[70] w-[86px] overflow-hidden rounded-[8px] text-white transition-[height,background-color,border-color] duration-300 ease-out ${
        open
          ? "h-[245px] border border-white bg-[#171039]"
          : transparentWhenClosed
            ? "h-11 border border-transparent bg-transparent"
            : "h-11 border border-white bg-transparent"
      } ${className}`}
    >
      <span className={showArtwork ? "opacity-100" : "opacity-0"}>
        <span className="absolute left-[11px] top-[9px] h-6 w-8 overflow-hidden rounded-[4px] bg-white">
          <Image src="/assets/homepage/dark/gb-flag-background.svg" alt="English" fill sizes="32px" />
          <Image src="/assets/homepage/dark/gb-flag-cross.svg" alt="" fill sizes="32px" />
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`absolute left-[53px] top-[12px] size-5 transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
          strokeWidth={1.7}
        />
      </span>

      {open
        ? languageOptions.map((option, index) => (
            <span
              key={option.label}
              className="absolute left-[11px] flex h-6 w-[60px] items-center"
              style={{ top: 49 + index * 40 }}
            >
              <Image src={option.asset} alt="" width={32} height={24} className="h-6 w-8 rounded-[4px]" />
              <span className="ml-3 text-[12px] leading-6">{option.label}</span>
            </span>
          ))
        : null}
    </button>
  );
}

export function FigmaLanguageDropdown() {
  return <LanguageMenu transparentWhenClosed className="absolute left-[1191px] top-[68px]" />;
}
