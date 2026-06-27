import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "light";

export function Button({
  href = "#contact",
  children,
  variant = "primary",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
}) {
  const classes = {
    primary: "bg-[#7C3AED] text-white shadow-glow hover:bg-[#6D28D9]",
    ghost: "border border-white/20 text-white dark:text-white text-holo-text bg-white/10 dark:bg-white/5",
    light: "bg-white text-holo-text shadow-[0_18px_38px_rgba(15,23,42,0.18)] hover:bg-white/90",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex h-[60px] items-center justify-center gap-2 rounded-full px-8 text-[16px] font-semibold transition hover:-translate-y-0.5 ${classes}`}
    >
      {children}
    </Link>
  );
}
