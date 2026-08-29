import type { Metadata } from "next";
import { ContactTrigger } from "@/components/ContactModal";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product engineering, custom software, AI in production, and cloud delivery from Sairam Technologies.",
};

const stages = [
  {
    title: "Discover",
    body: "We write down who the product is for, what must never fail, and what can wait. No theatre. A brief we can both stand behind.",
  },
  {
    title: "Design",
    body: "Interface, data, and the operating model. Health and school products have constraints. We treat them as design material.",
  },
  {
    title: "Ship",
    body: "Production on Vercel, with environments you can show a stakeholder. Progressive web apps when the App Store is the wrong first step.",
  },
  {
    title: "Operate",
    body: "After launch: reliability, the next module, and the care a living product needs. We do not disappear when the first version is live.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The same craft we use on our products, available to yours."
        description="Sairam Technologies will keep publishing its own apps. We also partner with schools, clinics, and operators who need software built to production standard — not a prototype that stalls."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-cream p-8">
                <h2 className="text-lg font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{service.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-cream">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Engagement
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
            A four-stage path from brief to something people actually open.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, i) => (
              <div key={stage.title}>
                <p className="font-mono text-xs text-gold">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{stage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/65">{stage.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-paper p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
              Tell us the problem, not the stack.
            </h2>
            <p className="mt-2 max-w-lg text-ink/75">
              If it belongs in health, education, or everyday operations, we
              likely have an opinion — and a way to ship.
            </p>
          </div>
          <ContactTrigger size="lg">Request a conversation</ContactTrigger>
        </Container>
      </section>
    </>
  );
}
