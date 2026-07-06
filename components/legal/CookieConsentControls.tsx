"use client";

import { useRouter } from "next/navigation";

type ConsentChoice = "accepted" | "preferences" | "rejected";

export function CookieConsentControls() {
  const router = useRouter();

  function saveChoice(choice: ConsentChoice) {
    window.localStorage.setItem("holovise-cookie-consent", choice);
    router.push("/");
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close cookie consent"
        onClick={() => saveChoice("preferences")}
        className="absolute left-[1306px] top-[449px] z-40 h-[38px] w-[38px] cursor-pointer bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      />
      <button
        type="button"
        onClick={() => saveChoice("accepted")}
        className="absolute left-[736px] top-[778px] z-40 h-[50px] w-[182px] cursor-pointer rounded-[8px] bg-transparent text-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        Accept cookies
      </button>
      <button
        type="button"
        onClick={() => saveChoice("preferences")}
        className="absolute left-[929px] top-[778px] z-40 h-[50px] w-[182px] cursor-pointer rounded-[8px] bg-transparent text-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        Save cookie preferences
      </button>
      <button
        type="button"
        onClick={() => saveChoice("rejected")}
        className="absolute left-[1118px] top-[778px] z-40 h-[50px] w-[182px] cursor-pointer rounded-[8px] bg-transparent text-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        Reject cookies
      </button>
    </>
  );
}
