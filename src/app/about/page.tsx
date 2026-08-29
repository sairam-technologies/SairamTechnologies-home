import type { Metadata } from "next";
import { ContactTrigger } from "@/components/ContactModal";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { principles, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — a product company building software for family health and school safety.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A product company, named for trust, built for daily life."
        description={`${site.name} exists to publish software that families and schools can depend on — and to take on the custom work that needs the same care. We are based in India. Our products run on the public cloud.`}
      />

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="max-w-2xl lg:col-span-7">
            <h2 className="font-display text-3xl tracking-tight">Why we build</h2>
            <div className="mt-6 space-y-5 text-[16px] leading-8 text-ink/80">
              <p>
                Prescriptions live in camera rolls. School buses live on
                someone else’s map. The people who need that information —
                parents, grandparents, a nurse at home — are left assembling it
                by hand.
              </p>
              <p>
                Family-Rx Health Box puts the household’s medical paper trail in
                one workspace. School Bus Notifier tells you when to walk to the
                gate. They are different products with the same idea: software
                should show up for the people you protect.
              </p>
              <p>
                We will keep publishing our own applications. We will also
                partner with organizations that want that standard applied to
                their operations. One company. Two modes of work. The same bar.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-line bg-paper p-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal">
                At a glance
              </p>
              <dl className="mt-6 space-y-5">
                {[
                  ["Company", site.name],
                  ["Focus", "Products and software services"],
                  ["Domains", "Family health, school safety"],
                  ["Delivery", "Web, PWA, Vercel cloud"],
                  ["Home", site.location],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-4 border-b border-line/80 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-muted">{k}</dt>
                    <dd className="text-right text-sm font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-y border-line bg-paper py-20">
        <Container>
          <h2 className="font-display text-3xl tracking-tight">What we hold to</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item.index}>
                <p className="font-mono text-xs text-teal">{item.index}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink/75">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-display max-w-xl text-2xl tracking-tight sm:text-3xl">
            If this sounds like how you want software made, write to us.
          </p>
          <ContactTrigger size="lg">Contact the studio</ContactTrigger>
        </Container>
      </section>
    </>
  );
}
