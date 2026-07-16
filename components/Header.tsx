"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { aboutMenuItems, AboutMenuPanel } from "./navigation/AboutMenu";
import { LanguageMenu } from "./navigation/LanguageMenu";
import { serviceMenuItems, ServicesMenuPanel } from "./navigation/ServicesMenu";
import { useHoloviseThemeToggle } from "./navigation/useHoloviseThemeToggle";

const nav = ["About", "Services", "Blog", "Careers"];

function navHref(item: string) {
  if (item === "About") return "/about";
  if (item === "Blog") return "/blog";
  if (item === "Careers") return "/career";
  return "#";
}

export function Header() {
  const { isDark, isLight, toggleTheme } = useHoloviseThemeToggle();
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setAboutOpen(false);
        setServicesOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-holo-night/88">
      <div className="mx-auto flex h-[100px] w-full max-w-[1330px] items-center justify-between px-6">
        <Link href="/" className="relative h-[46px] w-[208px] shrink-0">
          <Image src="/assets/holovise-logo.png" alt="Holovise" fill sizes="208px" className="object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item === "About" ? (
              <div key={item} className="group relative">
                <Link
                  href="/about"
                  prefetch={false}
                  aria-haspopup="true"
                  className="flex items-center gap-2 text-[16px] font-medium text-holo-text/80 focus-visible:outline-none dark:text-white/82"
                >
                  About <ChevronDown size={15} />
                </Link>
                <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-9 opacity-0 transition-opacity duration-300 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                  <AboutMenuPanel />
                </div>
              </div>
            ) : item === "Services" ? (
              <div key={item} className="group relative">
                <Link
                  href="/services/full-stack-development"
                  prefetch={false}
                  aria-haspopup="true"
                  className="flex items-center gap-2 text-[16px] font-medium text-holo-text/80 hover:text-holo-violet focus-visible:outline-none dark:text-white/82 dark:hover:text-white"
                >
                  Services <ChevronDown size={15} />
                </Link>
                <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-9 opacity-0 transition-opacity duration-300 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                  <ServicesMenuPanel />
                </div>
              </div>
            ) : (
              <Link key={item} href={navHref(item)} className="flex items-center gap-2 text-[16px] font-medium text-holo-text/80 hover:text-holo-violet dark:text-white/82 dark:hover:text-white">
                {item}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button href="/contact-us">Get In Touch</Button>
          <div className="relative h-11 w-[86px]">
            <LanguageMenu className="absolute inset-0" />
          </div>
          <button data-theme-toggle aria-label={`Switch to ${isLight ? "dark" : "light"} theme`} aria-pressed={isLight} onClick={toggleTheme} className="grid size-11 place-items-center rounded-full border border-black/10 dark:border-white/15">
            {isDark ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>

        <button aria-label="Open menu" onClick={() => setOpen(true)} className="grid size-11 place-items-center rounded-full border border-black/10 lg:hidden dark:border-white/15">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-holo-night/95 p-6 text-white lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="flex items-center justify-between">
            <Image src="/assets/holovise-logo.png" alt="Holovise" width={208} height={46} />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid size-11 place-items-center rounded-full border border-white/15"><X /></button>
          </div>
          <nav className="mt-14 grid gap-7 text-3xl font-semibold">
            {nav.map((item) =>
              item === "About" ? (
                <div key={item}>
                  <button
                    type="button"
                    aria-expanded={aboutOpen}
                    aria-controls="mobile-about-menu"
                    onClick={() => {
                      setAboutOpen((value) => !value);
                      setServicesOpen(false);
                    }}
                    className="flex w-full items-center justify-between text-left"
                  >
                    About
                    <ChevronDown className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  {aboutOpen && (
                    <div id="mobile-about-menu" className="mt-5 grid gap-3 border-l border-white/20 pl-5 text-base font-medium">
                      {aboutMenuItems.map((aboutItem) => (
                        <Link
                          key={aboutItem.href}
                          href={aboutItem.href}
                          prefetch={false}
                          onClick={() => {
                            setAboutOpen(false);
                            setOpen(false);
                          }}
                        >
                          {aboutItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item === "Services" ? (
                <div key={item}>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services-menu"
                    onClick={() => {
                      setServicesOpen((value) => !value);
                      setAboutOpen(false);
                    }}
                    className="flex w-full items-center justify-between text-left"
                  >
                    Services
                    <ChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div id="mobile-services-menu" className="mt-5 grid gap-3 border-l border-white/20 pl-5 text-base font-medium">
                      {serviceMenuItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          prefetch={false}
                          onClick={() => {
                            setServicesOpen(false);
                            setOpen(false);
                          }}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link onClick={() => setOpen(false)} key={item} href={navHref(item)}>
                  {item}
                </Link>
              ),
            )}
          </nav>
          <div className="mt-12 flex gap-3">
            <Button href="/contact-us">Get In Touch</Button>
            <button data-theme-toggle aria-label={`Switch to ${isLight ? "dark" : "light"} theme`} aria-pressed={isLight} onClick={toggleTheme} className="grid size-[60px] place-items-center rounded-full border border-white/20">{isDark ? <Moon /> : <Sun />}</button>
          </div>
        </div>
      )}
    </header>
  );
}
