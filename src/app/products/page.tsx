import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ContactTrigger } from "@/components/ContactModal";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PlaySoonBadge } from "@/components/PlaySoonBadge";
import { FamilyRxVisual, SchoolBusVisual } from "@/components/ProductVisuals";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Sairam Technologies products in production: Family-Rx Health Box and School Bus Notifier. Soon on Google Play.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Applications in market, and a studio ready for the next one."
        description="We publish software people can open today. Family-Rx Health Box and School Bus Notifier are live on the web, and both are soon going to be available on the Google Play Store for Android."
      />
      <section className="py-16 sm:py-24">
        <Container className="space-y-8">
          {products.map((product, index) => (
            <article
              key={product.slug}
              className="grid items-center gap-10 overflow-hidden rounded-3xl border border-line bg-cream p-6 sm:p-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                {product.slug === "family-rx" ? (
                  <FamilyRxVisual />
                ) : (
                  <SchoolBusVisual />
                )}
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal">
                  {product.category} · {product.status}
                </p>
                <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
                  {product.fullName}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink/75">
                  {product.description}
                </p>
                <div className="mt-5">
                  <PlaySoonBadge />
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={product.href}>
                    View product
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href={product.liveUrl} variant="secondary" external>
                    Open live app
                    <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <section className="border-t border-line bg-paper py-16">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
              A third product will live here.
            </h2>
            <p className="mt-2 max-w-xl text-ink/75">
              Sairam Technologies is a home for apps we invent, and for software
              we build with partners. If you have the next brief, we should talk.
            </p>
          </div>
          <ContactTrigger size="lg">
            Propose a product
            <ArrowRight className="h-4 w-4" />
          </ContactTrigger>
        </Container>
      </section>
    </>
  );
}
