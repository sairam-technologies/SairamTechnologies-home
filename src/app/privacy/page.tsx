import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy notice for the ${site.name} website.`,
};

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
        Legal
      </p>
      <h1 className="font-display mt-3 text-4xl tracking-tight">Privacy</h1>
      <div className="mt-8 space-y-5 text-[15px] leading-7 text-ink/80">
        <p>
          This notice covers the {site.name} company website. Family-Rx Health
          Box and School Bus Notifier have their own product practices; health
          and location data are handled inside those applications, not on this
          marketing site.
        </p>
        <p>
          If you send a message through the contact form, we receive your name,
          email, organization if provided, and the content of your note so we
          can reply. We do not sell that information. We keep it only as long as
          needed to correspond with you.
        </p>
        <p>
          This site does not require an account. We do not run advertising
          pixels. Hosting may produce standard server logs (IP address, browser,
          pages requested) used to operate and secure the site.
        </p>
        <p>
          Questions:{" "}
          <a className="font-medium text-navy underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
