"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function SideDrawerControls() {
  const router = useRouter();

  function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const subject = "Holovise project enquiry";
    const body = `Please contact me about my project.\n\nEmail: ${email}`;

    window.location.href = `mailto:support@holovise.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => router.back()}
        className="absolute left-[1346px] top-[32px] z-40 h-[36px] w-[36px] cursor-pointer bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      />
      <form
        onSubmit={sendEmail}
        aria-label="Quick contact"
        className="absolute left-[870px] top-[370px] z-40 flex h-[60px] w-[420px]"
      >
        <input
          aria-label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email here..."
          className="h-[60px] w-[300px] rounded-l-[10px] border-0 bg-[#e7e9f4] px-[30px] text-[18px] text-[#222] outline-none placeholder:text-[#777] focus:ring-2 focus:ring-inset focus:ring-[#3871f2] dark:bg-[#171d29] dark:text-white dark:placeholder:text-[#bdbdbd]"
        />
        <button
          type="submit"
          className="h-[60px] w-[120px] cursor-pointer rounded-r-[10px] bg-[#3871f2] text-[18px] font-bold text-white hover:bg-[#2f63d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          Send
        </button>
      </form>
      <a
        href="mailto:support@holovise.io"
        aria-label="Email support at support@holovise.io"
        className="absolute left-[930px] top-[473px] z-30 h-[55px] w-[275px]"
      />
      <a
        href="tel:+642904550469"
        aria-label="Call Holovise"
        className="absolute left-[930px] top-[551px] z-30 h-[55px] w-[240px]"
      />
    </>
  );
}
