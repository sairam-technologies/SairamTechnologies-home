import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "invert";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-cream hover:bg-navy-2 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]",
  secondary:
    "bg-transparent text-navy border border-navy/15 hover:border-navy/35 hover:bg-white/60 hover:-translate-y-0.5",
  ghost: "bg-transparent text-cream/90 hover:text-cream hover:bg-white/8",
  invert:
    "bg-cream text-navy hover:bg-white hover:-translate-y-0.5 shadow-[0_1px_0_rgba(11,28,51,0.06)_inset]",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: keyof typeof sizes;
};

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
  size = "md",
  external,
}: Common & { href: string; external?: boolean }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-[color,background-color,border-color,transform,box-shadow] duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  onClick,
}: Common & {
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-[color,background-color,border-color,transform,box-shadow] duration-300 disabled:cursor-not-allowed disabled:opacity-55 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
