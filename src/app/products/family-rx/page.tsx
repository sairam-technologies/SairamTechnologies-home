import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ContactTrigger } from "@/components/ContactModal";
import { Container } from "@/components/Container";
import { FamilyRxVisual } from "@/components/ProductVisuals";
import { products } from "@/lib/site";

const product = products[0];

export const metadata: Metadata = {
  title: product.fullName,
  description: product.description,
};

export default function FamilyRxPage() {
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
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={product.liveUrl} size="lg" external>
                Open Family-Rx
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
              <ContactTrigger variant="secondary" size="lg">
                Ask about a family rollout
              </ContactTrigger>
            </div>
          </div>
          <FamilyRxVisual />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
            Capabilities
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
            The household health record, without the filing cabinet.
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
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              How families use it
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight">
              One invite. Shared care.
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                "The first adult creates the family and receives an invite code.",
                "Others join the same workspace. Access is approved, not left open.",
                "Upload a prescription photo, a lab report, or an insurance bill for any member.",
                "AI extracts medicines and findings. Search finds them later — for the whole family.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-sm text-gold">0{i + 1}</span>
                  <p className="text-[15px] leading-7 text-cream/75">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <ul className="space-y-3 self-center">
            {[
              "Installable PWA for phone and desktop",
              "AI scanning with a human still in control",
              "Prescriptions, reports, documents, and nutrition",
              "WhatsApp invite path for family onboarding",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 px-4 py-3"
              >
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
              Ready for your family.
            </h2>
            <p className="mt-2 max-w-lg text-ink/75">
              Family-Rx is live. Create a family account, or write to us if you
              want it introduced across a clinic, school, or community.
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
