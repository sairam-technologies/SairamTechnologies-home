import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ContactTrigger } from "@/components/ContactModal";
import { Container } from "@/components/Container";
import { PlaySoonBadge } from "@/components/PlaySoonBadge";
import { FamilyRxVisual, SchoolBusVisual } from "@/components/ProductVisuals";
import { principles, products, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-6">
            <p className="rise text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
              Product company · India
            </p>
            <h1 className="font-display rise rise-delay-1 mt-5 text-4xl leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]">
              Software for the people you{" "}
              <em className="italic text-teal">protect</em>.
            </h1>
            <p className="rise rise-delay-2 mt-6 max-w-xl text-lg leading-8 text-ink/80">
              {site.name} designs and ships applications for family health,
              school safety, and the operations around them. Two products are
              already in production. More are on the way.
            </p>
            <div className="rise rise-delay-3 mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/products" size="lg">
                Explore products
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ContactTrigger variant="secondary" size="lg">
                Start a conversation
              </ContactTrigger>
            </div>
          </div>
          <div className="rise rise-delay-4 relative lg:col-span-6 lg:min-h-[28rem] lg:pb-20">
            <div className="relative">
              <FamilyRxVisual />
              <div className="mt-4 lg:absolute lg:-bottom-10 lg:-right-2 lg:mt-0 lg:w-[88%]">
                <SchoolBusVisual />
              </div>
            </div>
          </div>
        </Container>
        <div className="relative mt-8 border-t border-line/80 lg:mt-20">
          <Container className="grid grid-cols-2 gap-px bg-line/80 sm:grid-cols-4">
            {[
              ["02", "Products in market"],
              ["Health + school", "First two domains"],
              ["PWA + cloud", "How we ship"],
              ["India", "Where we build"],
            ].map(([k, v]) => (
              <div key={v} className="bg-paper px-4 py-6 sm:px-6">
                <p className="font-display text-xl text-navy sm:text-2xl">{k}</p>
                <p className="mt-1 text-sm text-muted">{v}</p>
              </div>
            ))}
          </Container>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
                In production
              </p>
              <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
                Products people already use.
              </h2>
              <p className="mt-4 text-ink/75 leading-7">
                Each product is a full application — not a concept. Use them on
                the web today. Both are soon going to be available on the
                Google Play Store for Android.
              </p>
            </div>
            <ButtonLink href="/products" variant="secondary">
              All products
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.slug}
                className="group flex flex-col rounded-3xl border border-line bg-cream p-7 sm:p-9"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    {product.category}
                  </p>
                  <span className="rounded-full bg-paper px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-teal">
                    {product.status}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-tight">
                  {product.fullName}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-7 text-ink/75">
                  {product.summary}
                </p>
                <div className="mt-5">
                  <PlaySoonBadge />
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy"
                  >
                    Product overview
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted hover:text-navy"
                  >
                    Open live app <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-cream sm:py-28">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            How we work
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
            A studio that ships, not a brochure that promises.
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item.index} className="border-t border-white/10 pt-6">
                <p className="font-mono text-xs text-gold">{item.index}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-cream/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
              Services
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
              Software services, when a product needs a partner.
            </h2>
            <p className="mt-4 leading-7 text-ink/75">
              Beyond our own apps, we design and deliver custom software for
              organizations that want the same standard of craft.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-cream p-7">
                <h3 className="text-[17px] font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/services" variant="secondary">
              Services overview
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-20 sm:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Building the next product?
            </h2>
            <p className="mt-3 leading-7 text-ink/75">
              Whether you want to use Family-Rx, roll out School Bus Notifier,
              or commission software — write to us.
            </p>
          </div>
          <ContactTrigger size="lg">Contact Sairam Technologies</ContactTrigger>
        </Container>
      </section>
    </>
  );
}
