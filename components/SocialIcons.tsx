import type { SVGProps } from "react";

type SocialIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function FacebookIcon({ size = 20, ...props }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M14.2 8.8h2.4V5c-.4-.1-1.8-.2-3.4-.2-3.4 0-5.6 2.1-5.6 5.8v3.2H4v4.2h3.6v6h4.4v-6h3.6l.6-4.2H12v-2.7c0-1.3.4-2.3 2.2-2.3Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, ...props }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, ...props }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M6.2 8.9H2.8V20h3.4V8.9ZM4.5 7.4A2 2 0 1 0 4.5 3a2 2 0 0 0 0 4.4ZM20.8 20h-3.4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-3.4V8.9h3.3v1.5h.1c.5-.9 1.6-1.8 3.2-1.8 3.4 0 4.1 2.3 4.1 5.2V20Z" />
    </svg>
  );
}

export function TwitterIcon({ size = 20, ...props }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M15.2 4h3.4l-7.4 8.5 8.7 7.5h-5.7l-4.5-5.8L4.6 20H1.2l7.9-9.1L.8 4h5.8l4 5.3L15.2 4Zm-1.2 14h1.9L5.7 5.9h-2L14 18Z" />
    </svg>
  );
}

export function TwitterBirdIcon({ size = 20, ...props }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.7 1A4.1 4.1 0 0 0 15.7 4a4.2 4.2 0 0 0-4.1 5.1A11.8 11.8 0 0 1 3.1 4.8a4.2 4.2 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.5 1.7 2.1 2.9 3.9 2.9A8.3 8.3 0 0 1 2 18.5 11.7 11.7 0 0 0 8.4 20c7.6 0 11.8-6.3 11.8-11.8v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
    </svg>
  );
}
