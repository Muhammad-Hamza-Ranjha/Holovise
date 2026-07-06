"use client";

import type { FormEvent } from "react";

type FigmaContactFormProps = {
  ariaLabel: string;
  left: number;
  subjectContext: string;
  theme: "dark" | "light";
  top: number;
};

export function FigmaContactForm({
  ariaLabel,
  left,
  subjectContext,
  theme,
  top,
}: FigmaContactFormProps) {
  const isDark = theme === "dark";

  function submitContactMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const newsletter = formData.get("newsletter") === "yes" ? "Yes" : "No";
    const subject = `Holovise ${subjectContext} enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Newsletter signup: ${newsletter}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:support@holovise.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const fieldClass = isDark
    ? "bg-[#1c212f] text-white caret-white"
    : "bg-[#dfe2e8] text-[#222] caret-[#222]";
  const focusClass =
    "pointer-events-auto border border-transparent outline-none focus:border-[#3871f2] focus:ring-2 focus:ring-[#3871f2]/25";

  return (
    <form
      onSubmit={submitContactMessage}
      aria-label={ariaLabel}
      className="pointer-events-none absolute z-40 h-[627px] w-[570px]"
      style={{ left, top }}
    >
      <input
        aria-label="Name"
        name="name"
        type="text"
        autoComplete="name"
        required
        className={`absolute left-[30px] top-[59px] h-[60px] w-[510px] rounded-[16px] px-[20px] text-[16px] ${fieldClass} ${focusClass}`}
      />
      <input
        aria-label="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className={`absolute left-[30px] top-[163px] h-[60px] w-[250px] rounded-[16px] px-[20px] text-[16px] ${fieldClass} ${focusClass}`}
      />
      <input
        aria-label="Phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        className={`absolute left-[290px] top-[163px] h-[60px] w-[250px] rounded-[16px] px-[20px] text-[16px] ${fieldClass} ${focusClass}`}
      />
      <textarea
        aria-label="Message"
        name="message"
        required
        className={`absolute left-[30px] top-[270.5px] h-[135px] w-[510px] resize-none rounded-[16px] p-[20px] text-[16px] ${fieldClass} ${focusClass}`}
      />
      <input
        aria-label="Sign me up for the newsletter"
        name="newsletter"
        type="checkbox"
        value="yes"
        className={`pointer-events-auto absolute left-[30px] top-[425px] h-[22px] w-[22px] cursor-pointer appearance-none rounded-full border-[1.5px] checked:border-[#3871f2] checked:bg-[#3871f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3871f2] ${
          isDark ? "border-[#5a5c60] bg-[#111729]" : "border-[#222] bg-transparent"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute left-[145px] top-[532px] h-[42px] w-[280px] ${
          isDark ? "bg-[#080d19]" : "bg-[#eaf0fe]"
        }`}
      />
      <button
        type="submit"
        className="pointer-events-auto absolute left-[30px] top-[471.5px] z-10 flex h-[60px] w-[510px] cursor-pointer items-center justify-center rounded-[8px] bg-[#3871f2] text-[16px] font-extrabold leading-6 text-white transition-colors hover:bg-[#2f63d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3871f2]"
      >
        Send Message!
      </button>
    </form>
  );
}
