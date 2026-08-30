import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ContactTrigger } from "@/components/ContactModal";
import { Container } from "@/components/Container";
import { Marquee } from "@/components/Marquee";
import { GooglePlayIcon, PlaySoonBadge } from "@/components/PlaySoonBadge";
import { HeroScene } from "@/components/HeroScene";
import { HeroStage } from "@/components/HeroStage";
import { FamilyRxVisual, SchoolBusVisual } from "@/components/ProductVisuals";
import { Tilt3D } from "@/components/Tilt3D";
import { Reveal } from "@/components/Reveal";
import {
  industries,
  insights,
  principles,
  products,
  services,
  site,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a1630] text-cream">
        <HeroScene />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_55%_at_78%_42%,rgba(255,196,120,0.14),transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(10,22,48,0.72)_0%,rgba(10,22,48,0.22)_46%,rgba(10,22,48,0)_100%)]" />
        <Container className="relative z-[1] grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-6">
            <p className="rise text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Products · Services · India
            </p>
            <h1 className="font-display rise rise-delay-1 mt-5 text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[4rem]">
              Together we ship software that{" "}
              <em className="italic text-teal-2">protects</em> everyday life.
            </h1>
            <p className="rise rise-delay-2 mt-6 max-w-xl text-lg leading-8 text-cream/70">
              {site.name} builds applications for family health and school
              safety — then partners with organizations that want the same
              standard. Two products are in market. Android is next.
            </p>
            <div className="rise rise-delay-3 mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/products" size="lg" variant="invert">
                Explore products
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ContactTrigger variant="ghost" size="lg" className="border border-white/20">
                Talk to us
              </ContactTrigger>
            </div>
          </div>
          <div className="rise rise-delay-4 relative z-[1] lg:col-span-6">
            <HeroStage />
          </div>
        </Container>
        <Marquee />
        <div className="relative border-t border-white/10">
          <Container className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
            {[
              ["02", "Products in market", null],
              ["Health + school", "First two domains", null],
              ["Google Play", "Coming soon", "play"],
              ["India", "Where we build", null],
            ].map(([k, v, icon]) => (
              <div key={v} className="bg-navy px-4 py-6 sm:px-6">
                <p className="flex items-center gap-2 font-display text-xl text-cream sm:text-2xl">
                  {icon === "play" ? (
                    <GooglePlayIcon className="h-6 w-6 shrink-0" />
                  ) : null}
                  {k}
                </p>
                <p className="mt-1 text-sm text-cream/50">{v}</p>
              </div>
            ))}
          </Container>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
                  Client spotlight
                </p>
                <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-5xl">
                  Products already in people’s hands.
                </h2>
                <p className="mt-4 text-ink/75 leading-7">
                  Use them on the web today. Both are soon going to the Google
                  Play Store for Android.
                </p>
              </div>
              <ButtonLink href="/products" variant="secondary">
                All products
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 80}>
                <Tilt3D>
                <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-cream">
                  <div className="border-b border-line bg-navy p-5">
                    {product.slug === "family-rx" ? (
                      <FamilyRxVisual />
                    ) : (
                      <SchoolBusVisual />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
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
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                  </div>
                </article>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
              Who we serve
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-5xl">
              Built for the people closest to the problem.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <Tilt3D max={7}>
                <div className="card-lift h-full rounded-2xl border border-line bg-cream p-6">
                  <p className="font-mono text-xs text-teal">0{i + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                </div>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-cream sm:py-28">
        <Container>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Point of view
            </p>
            <blockquote className="font-display mt-6 max-w-4xl text-3xl leading-snug tracking-tight sm:text-5xl">
              “Human in the lead. Software in the background. The work is to
              make care and safety feel ordinary.”
            </blockquote>
            <p className="mt-8 text-sm text-cream/55">{site.name}</p>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            {principles.map((item, i) => (
              <Reveal key={item.index} delay={i * 60}>
                <div className="border-t border-white/10 pt-6">
                  <p className="font-mono text-xs text-gold">{item.index}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-cream/65">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
                Capabilities
              </p>
              <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-5xl">
                The same craft, available as a service.
              </h2>
              <p className="mt-4 leading-7 text-ink/75">
                Beyond our own apps, we design and deliver custom software for
                organizations that want production — not a prototype that stalls.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group bg-cream p-7 transition-colors duration-300 hover:bg-paper"
              >
                <h3 className="text-[17px] font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.body}</p>
                <p className="mt-5 text-sm font-medium text-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more →
                </p>
              </Link>
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

      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
              What&apos;s moving
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-5xl">
              Insights from the products we ship.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {insights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Link
                  href={item.href}
                  className="card-lift group flex h-full flex-col justify-between rounded-2xl border border-line bg-cream p-7"
                >
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal">
                      {item.kind}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Read
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-cream sm:py-28">
        <div className="mesh pointer-events-none absolute inset-0 opacity-70" />
        <Container className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Let the work begin
            </p>
            <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-5xl">
              Building the next product?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-cream/65">
              Whether you want Family-Rx, School Bus Notifier, or commissioned
              software — write to us.
            </p>
          </Reveal>
          <ContactTrigger size="lg" variant="invert">
            Contact Sairam Technologies
          </ContactTrigger>
        </Container>
      </section>
    </>
  );
}
