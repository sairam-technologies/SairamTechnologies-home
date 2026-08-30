import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { PlaySoonBadge } from "./PlaySoonBadge";
import { nav, products, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="dark" />
            <p className="mt-6 max-w-sm text-[15px] leading-7 text-cream/65">
              A product company building software for family health, school
              safety, and the services that keep everyday life running. Two apps
              in market. Android on the way.
            </p>
            <div className="mt-6">
              <PlaySoonBadge tone="on-dark" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7 md:grid-cols-3">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream/45">
                Products
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={product.href}
                      className="text-cream/80 transition-colors hover:text-cream"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream/45">
                Company
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-cream/80 transition-colors hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream/45">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-cream/80 transition-colors hover:text-cream"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-cream/55">{site.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream/80">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream/80">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
