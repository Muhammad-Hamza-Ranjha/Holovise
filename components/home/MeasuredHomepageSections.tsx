"use client";

import type { FormEvent, ReactNode } from "react";

type HomepageTheme = "dark" | "light";

const testimonials = [
  [
    "testimonial-avatar-1.png",
    "Sean Rose",
    "@seanrose",
    "Really, really liking @reflectnotes so far. It's just the\nright amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
  ],
  ["testimonial-avatar-q-f9bd42b4.png", "Ryan Delk", "@delk", "Don’t take it from me: @reflectnotes is magic."],
  [
    "testimonial-avatar-q-5b9ee7a6.png",
    "Demetria Giles",
    "@drosewritings",
    "Playing around with @reflectnotes. I’m back logging key thoughts, details and soundbites from episodes, books, meetings, articles, etc from the past week. So far, it’s a knowledge worker’s dream come true.",
  ],
  [
    "testimonial-avatar-2.png",
    "Jeremy McPeak",
    "@jwmcpeak",
    "@reflectnotes, holy crap! It is well thought out, and I can see this being my note- taking platform going forward. Well done! I'm looking forward to seeing how the app progresses.",
  ],
  [
    "testimonial-avatar-q-63640e93.png",
    "Fabrizio Rinaldi",
    "@linuz90",
    "I’m keeping @reflectnotes open *all* the time, and I’m using both for simple journaling, and long form writing. It’s rare to see a single app work so well for both.",
  ],
  [
    "testimonial-avatar-3.png",
    "Jonathan Simcoe",
    "@jdsimcoe",
    "To @maccaw for pioneering @reflectnotes. It has already matured to a point where it is a daily driver for me. The speed, focus, and attention to detail (especially perfect bits of structured data) is superb.",
  ],
] as const;

const impactItems = [
  {
    icon: "animated-emojies-512px-220.gif",
    lightTitle: "Deep Industry Knowledge",
    darkTitle: "Deep Industry\nKnowledge",
    copy: "We are experts in your sector in addition to technology.\n\nOur team's extensive experience and industry knowledge enable us to provide solutions that are properly matched to your particular requirements and standards.",
  },
  {
    icon: "animated-emojies-512px-508.gif",
    lightTitle: "Tier Talent",
    darkTitle: "Tier Talent",
    copy: "Our experts aren’t just skilled—they’re exceptional.\n\nWe’ve assembled a team of professionals who constantly focus on quality and new ideas, so every project will benefit from their knowledge and enthusiasm.",
  },
  {
    icon: "animated-emojies-512px-26.gif",
    lightTitle: "Flexible Engagement Models",
    darkTitle: "Flexible Engagement \nModels",
    copy: "We provide a range of recruiting alternatives, depending on your needs: hourly rates, fixed-price projects, or a committed team.\n\nWith this versatility, you may get excellent value and select the model that best fits your needs.",
  },
  {
    icon: "animated-emojies-512px-44.gif",
    lightTitle: "Reliable Delivery",
    darkTitle: "Reliable Delivery",
    copy: "Timeliness is a core value.\n\nWe commit to delivering high-quality solutions on schedule, keeping your project moving forward without sacrificing precision or attention to detail.",
  },
] as const;

const partnerLogos = [
  "partner-logo-1.svg",
  "partner-logo-2.svg",
  "partner-logo-3.svg",
  "partner-logo-4.svg",
  "partner-logo-5.svg",
  "partner-logo-6.svg",
] as const;

function asset(theme: HomepageTheme, name: string) {
  return `/assets/homepage/${theme}/${name}`;
}

function AbsoluteBox({
  left,
  top,
  width,
  height,
  className = "",
  children,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`absolute ${className}`} style={{ left, top, width, height }}>
      {children}
    </div>
  );
}

function MentionedQuote({ children }: { children: string }) {
  return children.split(/(@reflectnotes|@maccaw)/g).map((part, index) =>
    part === "@reflectnotes" || part === "@maccaw" ? (
      <span key={`${part}-${index}`} className="text-[#9c50ff]">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function MeasuredTestimonials({ theme }: { theme: HomepageTheme }) {
  const isLight = theme === "light";

  return (
    <>
      <AbsoluteBox left={530} top={5130} width={380} height={20}>
        <p className={`text-center text-[20px] font-medium uppercase leading-[19.6px] tracking-[10px] ${isLight ? "text-[#3871f2]" : "text-[#9c50ff]"}`}>
          Testimonials
        </p>
      </AbsoluteBox>
      <AbsoluteBox left={330} top={5172} width={780} height={57}>
        <h2 className={`text-center text-[36px] font-bold leading-[58px] tracking-[-1.5px] ${isLight ? "text-[#222222]" : "text-white"}`}>
          Check out what our clients are saying!
        </h2>
      </AbsoluteBox>

      <AbsoluteBox left={-24} top={5275} width={1488} height={448} className="overflow-hidden">
        {testimonials.map(([avatar, name, handle, quote], index) => {
          const column = index % 3;
          const row = Math.floor(index / 3);
          const cardLeft = column * 504;
          const cardTop = row * 236;
          const contentLeft = column === 0 ? 20 : 28;
          const quoteTop = column === 0 ? 89 : 92;

          return (
            <article
              key={name}
              className={`absolute h-[212px] w-[480px] overflow-hidden rounded-[15px] ${isLight ? "border border-[#262626]/50 bg-white text-[#222222]" : "bg-white/[0.04] text-white"}`}
              style={{ left: cardLeft, top: cardTop }}
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)]" />
              <div className="absolute top-6 h-11 w-[424px]" style={{ left: contentLeft }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(theme, avatar)} alt="" className="absolute left-0 top-0 h-11 w-11 rounded-full object-cover" />
                <div className="absolute left-[60px] top-0">
                  <h3 className="h-6 text-[18px] font-semibold leading-6">{name}</h3>
                  <p className={`h-5 text-[14px] leading-5 ${isLight ? "text-[#222222]/50" : "text-[#efedfd]/60"}`}>{handle}</p>
                </div>
              </div>
              <p
                className={`absolute w-[424px] whitespace-pre-line text-[16px] leading-6 ${isLight ? "text-[#222222]" : "text-white"}`}
                style={{ left: contentLeft, top: quoteTop }}
              >
                <MentionedQuote>{quote}</MentionedQuote>
              </p>
            </article>
          );
        })}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-6 top-0 z-10 h-[448px] w-[1440px]"
          style={{
            background: `linear-gradient(90deg, ${isLight ? "rgba(234,240,254,1)" : "rgba(8,13,25,1)"} 0%, ${isLight ? "rgba(234,240,254,.5)" : "rgba(8,13,25,.5)"} 16.67%, transparent 33.33%, transparent 66.67%, ${isLight ? "rgba(234,240,254,.5)" : "rgba(8,13,25,.5)"} 83.33%, ${isLight ? "rgba(234,240,254,1)" : "rgba(8,13,25,1)"} 100%)`,
          }}
        />
      </AbsoluteBox>

      <AbsoluteBox
        left={0}
        top={5723}
        width={1440}
        height={132}
        className={`border-b ${isLight ? "border-[#131723]/50" : "border-[#131723]"}`}
      >
        <div className="absolute left-0 top-[30px] flex h-[72px] gap-5">
          {partnerLogos.map((logo, index) => (
            <div key={logo} className={`flex h-[72px] w-[223.333px] items-center justify-center ${index === 3 ? "opacity-100" : "opacity-25"}`}>
              {index === 3 ? (
                <span
                  aria-hidden="true"
                  className="block h-10 w-[101px]"
                  style={{
                    backgroundColor: isLight ? "#222222" : "#e6e6e6",
                    maskImage: `url(${asset(theme, logo)})`,
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                    maskSize: "contain",
                  }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={asset(theme, logo)} alt="" className="max-h-10 max-w-[118px]" />
              )}
            </div>
          ))}
        </div>
      </AbsoluteBox>
    </>
  );
}

export function MeasuredWhyChoose({ theme }: { theme: HomepageTheme }) {
  const isLight = theme === "light";
  const cardShadow = isLight
    ? "inset 0 0 0 0.5px rgba(34,34,34,.5)"
    : "inset 0 0 0 0.5px rgba(255,255,255,.2)";

  return (
    <>
      <AbsoluteBox left={530} top={8215} width={380} height={20}>
        <p className={`text-center text-[20px] font-medium uppercase leading-[19.6px] tracking-[10px] ${isLight ? "text-[#3871f2]" : "text-[#9c50ff]"}`}>
          Our Impact
        </p>
      </AbsoluteBox>
      <AbsoluteBox left={410} top={8257} width={620} height={57}>
        <h2 className={`text-center text-[36px] font-bold leading-[58px] tracking-[-1.5px] ${isLight ? "text-[#222222]" : "text-white"}`}>
          Why We’re the Right Fit for You!
        </h2>
      </AbsoluteBox>
      <AbsoluteBox left={330} top={8339} width={780} height={144}>
        <p className={`whitespace-pre-line text-center text-[22px] leading-9 ${isLight ? "text-[#222222]" : "text-white"}`}>
          {"We get your industry, understand your unique needs, and deliver results that make a real difference.\n\nHere’s what we bring to the table while working for you."}
        </p>
      </AbsoluteBox>
      <AbsoluteBox left={130} top={8556} width={1180} height={824} className="grid grid-cols-2 grid-rows-2">
        {impactItems.map((item, index) => {
          const title = isLight ? item.lightTitle : item.darkTitle;
          const compactLightHeading = isLight && index === 0;
          const twoLineHeading = title.includes("\n") || (!isLight && index === 0);

          return (
            <article
              key={item.icon}
              className={`relative h-[412px] w-[590px] ${isLight ? "bg-[#eaf0fe] text-[#222222]" : "bg-[#080d19] text-white"}`}
              style={{ boxShadow: cardShadow }}
            >
              <div className="absolute left-[62px] top-[62px] h-20 w-[466px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(theme, item.icon)} alt="" className="absolute left-0 top-0 h-20 w-20 object-contain" />
                <h3
                  className={`absolute left-[100px] w-[366px] whitespace-pre-line text-[24px] font-bold ${compactLightHeading ? "top-7 leading-6" : twoLineHeading ? "top-2 leading-8" : "top-6 leading-8"}`}
                >
                  {title}
                </h3>
              </div>
              <p className="absolute left-[62px] top-[174px] w-[466px] whitespace-pre-line text-[18px] leading-[30.8px]">
                {item.copy}
              </p>
            </article>
          );
        })}
      </AbsoluteBox>
    </>
  );
}

function submitContactMessage(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const newsletter = formData.get("newsletter") === "yes" ? "Yes" : "No";
  const subject = `Holovise website enquiry from ${name}`;
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

export function MeasuredContact({ theme }: { theme: HomepageTheme }) {
  const isLight = theme === "light";
  const values = isLight
    ? ["support@holovise.io", "(000) 666 555 444", "OurStreet 1257/18, OurCity"]
    : ["support@holovise.io", "+64 29 045 50469", "5 Newland Grove, Henderson,\nAuckland 0610, New Zealand"];
  const inputClass = isLight ? "bg-[#222222]/10 text-[#222222]" : "bg-[#3d3f43]/25 text-white";
  const labelClass = isLight ? "text-[#222222]" : "text-[#bdbdbd]";

  return (
    <AbsoluteBox left={130} top={10368} width={1180} height={627} className={isLight ? "text-[#222222]" : "text-white"}>
      <div id="contact" className="absolute left-0 top-[83px] h-[159px] w-[459px]">
        <h2 className="font-bricolage w-[400px] text-[48px] font-extrabold leading-[56px] tracking-[-0.96px]">
          Let&apos;s Make IT* [Things] Happen
        </h2>
        <p className="absolute left-0 top-[131px] w-[459px] text-[20px] leading-7">Connect with us to explore how?</p>
      </div>

      <div className="absolute left-0 top-[321px] h-[232px] w-[570px]">
        {["Send us an email", "Give us a call", "Visit us in person"].map((label, index) => (
          <div key={label} className="absolute left-0 flex w-[570px]" style={{ top: index * 78, height: index === 2 && !isLight ? 76 : 52 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(theme, ["contact-send-group.svg", "contact-phone-group.svg", "contact-map-pin-group.svg"][index])} alt="" className="absolute left-0 top-1 h-[45px] w-[45px]" />
            <div className="absolute left-[69px] top-0 w-[501px]">
              <p className="text-[14px] leading-5">{label}</p>
              <p className="mt-2 whitespace-pre-line text-[20px] font-semibold leading-6 tracking-[-0.2px]">{values[index]}</p>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={submitContactMessage}
        className={`absolute left-[610px] top-0 h-[627px] w-[570px] rounded-[30px] ${isLight ? "bg-white/50" : "border-[1.5px] border-[#31333a] bg-[#111729]"}`}
        style={isLight ? { boxShadow: "30px 30px 150px rgba(0,0,0,.25)" } : undefined}
      >
        <div className="absolute left-[30px] top-[31.35px] h-[416.3px] w-[510px]">
          <label htmlFor={`${theme}-contact-name`} className={`absolute left-0 top-0 text-[16px] leading-6 tracking-[-0.16px] ${labelClass}`}>*Name:</label>
          <input id={`${theme}-contact-name`} name="name" type="text" autoComplete="name" required className={`absolute left-0 top-7 h-[60px] w-[510px] rounded-[16px] border-0 px-5 outline-none ${inputClass}`} />

          <label htmlFor={`${theme}-contact-email`} className={`absolute left-0 top-[104px] text-[16px] leading-6 tracking-[-0.16px] ${labelClass}`}>*Email:</label>
          <input id={`${theme}-contact-email`} name="email" type="email" autoComplete="email" required className={`absolute left-0 top-[132px] h-[60px] w-[250px] rounded-[16px] border-0 px-5 outline-none ${inputClass}`} />
          <label htmlFor={`${theme}-contact-phone`} className={`absolute left-[260px] top-[104px] text-[16px] leading-6 tracking-[-0.16px] ${labelClass}`}>Phone:</label>
          <input id={`${theme}-contact-phone`} name="phone" type="tel" autoComplete="tel" className={`absolute left-[260px] top-[132px] h-[60px] w-[250px] rounded-[16px] border-0 px-5 outline-none ${inputClass}`} />

          <label htmlFor={`${theme}-contact-message`} className={`absolute left-0 top-[211.5px] text-[16px] leading-6 tracking-[-0.16px] ${labelClass}`}>*Message:</label>
          <textarea id={`${theme}-contact-message`} name="message" required className={`absolute left-0 top-[239.5px] h-[135px] w-[510px] resize-none rounded-[16px] border-0 p-5 outline-none ${inputClass}`} />

          <label className={`absolute left-0 top-[394px] flex h-[22px] cursor-pointer items-center gap-[11px] text-[16px] font-semibold leading-5 ${isLight ? "text-[#222222]" : "text-[#a2a2a2]"}`}>
            <input type="checkbox" name="newsletter" value="yes" className={`h-[22px] w-[22px] shrink-0 appearance-none rounded-full border checked:border-[#3871f2] checked:bg-[#3871f2] ${isLight ? "border-[#222222]" : "border-[#5a5c60]"}`} />
            Sign me up for the newsletter
          </label>
        </div>

        <button type="submit" className="font-inter absolute left-[30px] top-[471.65px] flex h-[60px] w-[510px] items-center justify-center rounded-[8px] bg-[#3871f2] text-[16px] font-extrabold leading-6 text-white">
          Send Message!
        </button>
        <p className={`absolute left-[30px] top-[555.65px] w-[510px] text-center text-[12px] leading-5 tracking-[-0.12px] ${isLight ? "text-[#222222]" : "text-[#a2a2a2]"}`}>
          Praesent in mauris eu tortor porttitor accumsan aliquam ornare wisi eu metus.<br />Lorem ipsum dolor tortor porttitor accumsan aliquam.
        </p>
      </form>
    </AbsoluteBox>
  );
}
