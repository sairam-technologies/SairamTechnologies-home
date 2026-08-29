import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${site.name} website.`,
};

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
        Legal
      </p>
      <h1 className="font-display mt-3 text-4xl tracking-tight">Terms</h1>
      <div className="mt-8 space-y-5 text-[15px] leading-7 text-ink/80">
        <p>
          This website describes {site.name} and our products. It is provided
          for information. Product features may change as we ship updates.
        </p>
        <p>
          Family-Rx Health Box and School Bus Notifier are separate
          applications. Using them is subject to the terms presented in those
          apps. Nothing on this site is medical or safety advice.
        </p>
        <p>
          All trademarks, product names, and marks on this site belong to{" "}
          {site.name} unless noted otherwise. You may not copy the site design
          or content for a competing commercial use without written permission.
        </p>
        <p>
          Contact:{" "}
          <a className="font-medium text-navy underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
