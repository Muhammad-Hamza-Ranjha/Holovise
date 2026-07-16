"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "en-GB", label: "EN", name: "English (United Kingdom)", asset: "/assets/navigation/language-en-gb.svg" },
  { code: "vi", label: "VI", name: "Tiếng Việt", asset: "/assets/navigation/language-vi.svg" },
  { code: "ja", label: "JA", name: "日本語", asset: "/assets/navigation/language-ze.svg" },
  { code: "de", label: "DE", name: "Deutsch", asset: "/assets/navigation/language-de.svg" },
  { code: "th", label: "TH", name: "ไทย", asset: "/assets/navigation/language-ja.svg" },
  { code: "zh-CN", label: "ZH", name: "简体中文", asset: "/assets/navigation/language-zh.svg" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

declare global {
  interface WindowEventMap {
    "holovise-language-change": CustomEvent<LanguageCode>;
  }
}

type LanguageMenuProps = {
  className?: string;
  transparentWhenClosed?: boolean;
  darkText?: boolean;
};

const storageKey = "holovise-language";

function isLanguageCode(value: string | null): value is LanguageCode {
  return languages.some((language) => language.code === value);
}

export function LanguageMenu({ className = "", transparentWhenClosed = false, darkText = false }: LanguageMenuProps) {
  const [open, setOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState<LanguageCode>("en-GB");
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedLanguage = languages.find((language) => language.code === selectedCode) ?? languages[0];
  const availableLanguages = languages.filter((language) => language.code !== selectedCode);
  const showArtwork = open || !transparentWhenClosed;

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const savedLanguage = localStorage.getItem(storageKey);
      if (isLanguageCode(savedLanguage)) {
        setSelectedCode(savedLanguage);
        document.documentElement.setAttribute("lang", savedLanguage);
      }
    });

    function closeOnOutsideClick(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function syncLanguage(event: WindowEventMap["holovise-language-change"]) {
      setSelectedCode(event.detail);
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("holovise-language-change", syncLanguage);

    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("holovise-language-change", syncLanguage);
    };
  }, []);

  function selectLanguage(code: LanguageCode) {
    setSelectedCode(code);
    setOpen(false);
    document.documentElement.setAttribute("lang", code);
    localStorage.setItem(storageKey, code);
    window.dispatchEvent(new CustomEvent("holovise-language-change", { detail: code }));
  }

  return (
    <div
      ref={rootRef}
      data-language-menu
      data-language-code={selectedCode}
      className={`relative z-[70] w-[86px] overflow-hidden rounded-[8px] transition-[height,background-color,border-color] duration-300 ease-out ${
        open
          ? "h-[245px] border border-white bg-[#171039] text-white"
          : transparentWhenClosed
            ? `h-11 border border-transparent bg-transparent ${darkText ? "text-[#222]" : "text-white"}`
            : `h-11 border bg-transparent ${darkText ? "border-[#222]/40 text-[#222]" : "border-white text-white"}`
      } ${className}`}
    >
      <button
        type="button"
        data-language-toggle
        aria-label={`Select language. Current language: ${selectedLanguage.name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="absolute inset-x-0 top-0 h-11 cursor-pointer"
      >
        <span className={showArtwork ? "opacity-100" : "opacity-0"}>
          <span className="absolute left-[11px] top-[9px] h-6 w-8 overflow-hidden rounded-[4px]">
            <Image src={selectedLanguage.asset} alt={selectedLanguage.name} fill sizes="32px" />
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`absolute left-[53px] top-[12px] size-5 transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
            strokeWidth={1.7}
          />
        </span>
      </button>

      {open ? (
        <div role="menu" aria-label="Available languages">
          {availableLanguages.map((language, index) => (
            <button
              key={language.code}
              type="button"
              role="menuitemradio"
              aria-checked={false}
              aria-label={language.name}
              onClick={() => selectLanguage(language.code)}
              className="absolute left-[7px] flex h-8 w-[72px] cursor-pointer items-center rounded-[4px] px-1 text-left hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none"
              style={{ top: 45 + index * 40 }}
            >
              <Image src={language.asset} alt="" width={32} height={24} className="h-6 w-8 rounded-[4px]" />
              <span className="ml-3 text-[12px] leading-6">{language.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function FigmaLanguageDropdown() {
  return <LanguageMenu transparentWhenClosed className="absolute left-[1191px] top-[68px]" />;
}
