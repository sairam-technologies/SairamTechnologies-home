import Link from "next/link";

type LogoProps = {
  tone?: "light" | "dark";
  href?: string;
};

export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect width="32" height="32" rx="8" className="fill-navy" />
      <path
        d="M10 12.2c0-2.4 2.1-4.2 6.1-4.2 3.4 0 5.5 1.4 5.5 3.5 0 1.7-1.2 2.8-4.2 3.5l-3.2.7c-3.6.8-5.4 2.4-5.4 5.1 0 3.2 2.9 5.2 7.2 5.2 4.6 0 7.3-2.1 7.6-5.4"
        stroke="currentColor"
        className="text-teal-2"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M7.5 16.5h17"
        stroke="currentColor"
        className="text-gold"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function Logo({ tone = "light", href = "/" }: LogoProps) {
  const word =
    tone === "dark" ? "text-cream" : "text-navy";
  const sub =
    tone === "dark" ? "text-cream/55" : "text-muted";

  const inner = (
    <span className="inline-flex items-center gap-2.5">
      <Mark />
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-semibold tracking-tight ${word}`}>
          Sairam
        </span>
        <span
          className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] ${sub}`}
        >
          Technologies
        </span>
      </span>
    </span>
  );

  if (!href) return inner;

  return (
    <Link href={href} className="inline-flex shrink-0 rounded-lg">
      {inner}
      <span className="sr-only">Sairam Technologies home</span>
    </Link>
  );
}
