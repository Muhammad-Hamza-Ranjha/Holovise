import Link from "next/link";

export function FloatingGetStarted({
  top = 403,
  className = "",
}: {
  top?: number;
  className?: string;
}) {
  return (
    <Link
      href="/contact-us"
      prefetch={false}
      aria-label="Get Started"
      className={`absolute left-[1390px] z-[80] flex h-[200px] w-[50px] cursor-pointer flex-col items-center bg-[#3871f2] pt-[13px] text-white shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] transition-colors hover:bg-[#285fda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
      style={{ top }}
    >
      <span aria-hidden="true" className="h-[24px] text-[18px] leading-6">🚀</span>
      <span
        className="mt-[13px] whitespace-nowrap text-[18px] font-bold leading-6"
        style={{ writingMode: "vertical-rl" }}
      >
        Get Started
      </span>
    </Link>
  );
}
