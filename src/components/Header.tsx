"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { ContactTrigger } from "./ContactModal";
import { nav, products } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "border-line/80 bg-cream/85 backdrop-blur-xl"
          : "border-transparent bg-cream/70 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <Link
              href="/products"
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-navy"
            >
              Products
            </Link>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-[22rem] rounded-2xl border border-line bg-cream p-2 shadow-[0_24px_60px_-24px_rgba(11,28,51,0.35)]">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={product.href}
                    className="block rounded-xl p-3 transition-colors hover:bg-paper"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-navy">
                        {product.fullName}
                      </p>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-teal">
                        {product.status}
                      </span>
                    </div>
                    <p className="mt-1 text-[13px] leading-5 text-muted">
                      {product.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {nav
            .filter((item) => item.href !== "/products")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ContactTrigger size="md">Talk to us</ContactTrigger>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3"
              >
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="mt-0.5 text-sm text-muted">{product.category}</p>
              </Link>
            ))}
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium"
              >
                {item.label}
              </Link>
            ))}
            <ContactTrigger
              className="mt-2 w-full"
              size="lg"
              onClick={() => setOpen(false)}
            >
              Talk to us
            </ContactTrigger>
            <a
              href="https://family-prescription-box.vercel.app"
              className="mt-1 inline-flex items-center gap-1 px-3 py-2 text-sm text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Family-Rx <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
