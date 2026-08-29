import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ContactTrigger } from "@/components/ContactModal";
import { Container } from "@/components/Container";
import { PlaySoonBadge } from "@/components/PlaySoonBadge";
import { SchoolBusVisual } from "@/components/ProductVisuals";
import { products } from "@/lib/site";

const product = products[1];

export const metadata: Metadata = {
  title: product.fullName,
  description: product.description,
};

export default function SchoolBusNotifierPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
              {product.category} · {product.status}
            </p>
            <h1 className="font-display mt-4 text-4xl tracking-tight sm:text-5xl">
              {product.fullName}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/80">
              {product.description} Soon available on the Google Play Store
              for Android.
            </p>
            <div className="mt-5">
              <PlaySoonBadge />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={product.liveUrl} size="lg" external>
                Open the notifier
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
              <ContactTrigger variant="secondary" size="lg">
                School or fleet inquiry
              </ContactTrigger>
            </div>
          </div>
          <SchoolBusVisual />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
            Capabilities
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
            Know when to step outside — not when to start guessing.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-line bg-cream p-6"
              >
                <h3 className="font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{feature.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Alerts
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight">
              Distance on the road, not as the crow flies.
            </h2>
            <p className="mt-4 text-cream/65 leading-7">
              Tracking uses OpenStreetMap road routing. If routing is
              unavailable, the app falls back to straight-line distance. Alerts
              are distance-based — no guessed ETAs.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm font-medium text-gold">Approaching</p>
              <p className="mt-2 text-[15px] leading-7 text-cream/75">
                Inside your configured road distance (default 700 m): a repeating
                voice announcement at the interval you choose.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm font-medium text-gold">Arrived</p>
              <p className="mt-2 text-[15px] leading-7 text-cream/75">
                Inside the arrival radius (default ~80 m): a different chime and
                “bus has arrived.”
              </p>
            </div>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "Installable PWA with an offline app shell",
              "On-device storage for home, routes, and alarms",
              "Demo mode to test alerts without a live bus",
              "Works with CPARK GPS360, Maps URLs, and coordinates",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-2" />
                <span className="text-sm text-cream/85">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-paper p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
              Track a bus this afternoon.
            </h2>
            <p className="mt-2 max-w-lg text-ink/75">
              The notifier is live. For a school, route, or fleet conversation,
              send us a note.
            </p>
          </div>
          <ButtonLink href={product.liveUrl} external>
            Launch the app
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
