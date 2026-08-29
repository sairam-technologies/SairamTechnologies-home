import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} about Family-Rx, School Bus Notifier, or custom software.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need. We will take it seriously."
        description="Product questions, school or clinic rollouts, custom software, or a partnership. A short note is enough to start."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-line bg-paper p-8">
              <h2 className="text-lg font-semibold tracking-tight">Direct</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Prefer email without a form? Write to the studio. We read
                everything that arrives.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 inline-block text-sm font-semibold text-navy"
              >
                {site.email}
              </a>
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                  Location
                </p>
                <p className="mt-2 text-sm">{site.location}</p>
              </div>
              <div className="mt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                  Typically
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/80">
                  Replies within two business days. Include a phone number if a
                  call would be easier.
                </p>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
