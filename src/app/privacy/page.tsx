import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { products, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Official Privacy Policy for ${site.name} apps Family-Rx Health Box and School Bus Notifier, for listing on Indus Appstore, Google Play, and this website.`,
};

const updated = "7 October 2026";

const familyRx = products[0];
const schoolBus = products[1];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`This is the official privacy policy for ${site.name} and our Android apps. Paste this page URL when you list Family-Rx Health Box or School Bus Notifier on Indus Appstore or Google Play. Last updated ${updated}.`}
      />

      <article className="py-16 sm:py-24">
        <Container className="max-w-3xl space-y-14 text-[15px] leading-7 text-ink/80">
          <section className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal">
              Store listing URL
            </p>
            <p className="mt-3 font-medium text-navy">
              https://www.sairamtechnologies.in/privacy
            </p>
            <p className="mt-3 text-sm text-muted">
              Covers this website, Family-Rx Health Box, and School Bus Notifier
              (web and Android). Written for Indian law and app-store review.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              1. Who we are
            </h2>
            <p>
              {site.legalName} (“we”, “us”, “our”) is a product company based in{" "}
              {site.location}. This policy explains how we collect, use, store,
              share, and protect personal information.
            </p>
            <p>It applies to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>This company website and the contact form</li>
              <li>
                <Link href="/products/family-rx" className="font-medium text-navy underline">
                  {familyRx.fullName}
                </Link>
                , including the live app at {familyRx.liveUrl.replace("https://", "")}{" "}
                and any Android build listed on Indus Appstore or Google Play
              </li>
              <li>
                <Link
                  href="/products/school-bus-notifier"
                  className="font-medium text-navy underline"
                >
                  {schoolBus.fullName}
                </Link>
                , including the live app at {schoolBus.liveUrl.replace("https://", "")}{" "}
                and any Android build listed on Indus Appstore or Google Play
              </li>
            </ul>
            <p>
              This policy is published in line with the Information Technology
              Act, 2000, the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011, and the Digital Personal Data Protection
              Act, 2023, as they apply.
            </p>
            <p>
              Contact:{" "}
              <a
                className="font-medium text-navy underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              2. Information we collect
            </h2>
            <h3 className="text-lg font-semibold text-navy">This website</h3>
            <p>
              You can browse this site without an account. We do not use
              advertising pixels, analytics SDKs, or marketing cookies.
            </p>
            <p>If you use the contact form, we receive your name, email address, and the text of your request, so we can reply. Hosting may produce ordinary server logs (IP address, browser, time, pages requested) to operate and secure the site.</p>

            <h3 className="text-lg font-semibold text-navy">
              {familyRx.fullName}
            </h3>
            <p>
              Family-Rx is a shared family health workspace. Depending on how
              you use it, it may process:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Account and family membership details (name, email, invite codes)</li>
              <li>
                Health records you upload — prescriptions, lab reports, scans,
                invoices, insurance papers, and notes (this is sensitive
                personal data)
              </li>
              <li>
                Information extracted from those files by AI (for example
                medicines, dosage, clinic, and findings), which you can review
              </li>
              <li>Nutrition or meal information you choose to record</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy">
              {schoolBus.fullName}
            </h3>
            <p>
              School Bus Notifier helps a parent or guardian watch a bus
              relative to home. Depending on how you use it, it may process:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>The home location you set on the map or with device GPS</li>
              <li>
                Tracker links or coordinates you paste (GPS locator or Maps URL)
              </li>
              <li>
                Live bus position, road-network distance, and alert settings
              </li>
              <li>Route points you tap for extra alerts</li>
            </ul>
            <p>
              Home, routes, and alarm settings are stored on the device where
              you install the app.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              3. Device permissions (Android)
            </h2>
            <p>
              The Android apps may ask for permissions only to provide the
              feature you chose. You can deny or later revoke them in system
              settings. Typical permissions:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-navy">Internet</strong> — to load the
                app, sync a family workspace, resolve tracker links, and fetch
                maps or routing
              </li>
              <li>
                <strong className="text-navy">Camera / photos / files</strong>{" "}
                (Family-Rx) — so you can photograph or upload a prescription,
                report, or document
              </li>
              <li>
                <strong className="text-navy">Location</strong> (School Bus
                Notifier) — so you can set home with GPS and compare the bus to
                that point
              </li>
              <li>
                <strong className="text-navy">Notifications</strong> — arrival
                and approaching alerts, or optional product notices you allow
              </li>
            </ul>
            <p>
              We do not use these permissions for advertising, resale of data,
              or background tracking unrelated to the product.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              4. How we use information
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To operate the website and reply to contact requests</li>
              <li>To provide Family-Rx and School Bus Notifier as described</li>
              <li>To keep the services secure, reliable, and up to date</li>
              <li>
                To meet legal obligations, or to protect people if we believe
                harm or abuse is involved
              </li>
            </ul>
            <p>
              We do not sell personal information. We do not share it with third
              parties for their own marketing. We do not use health or location
              data to build advertising profiles.
            </p>
            <p>
              AI in Family-Rx is assistive. It can misread a document. A person
              in the family should check extracts against the original file.
              Family-Rx is not a substitute for a doctor.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              5. Consent
            </h2>
            <p>
              By using an app or sending a contact form, you agree to this
              policy. For camera, files, or location, the Android system will
              also ask for permission. You can refuse.
            </p>
            <p>
              Health records in Family-Rx are uploaded only when a family member
              chooses to add them. Location in School Bus Notifier is used only
              after you set home or paste a tracker. You may withdraw consent by
              deleting records, clearing on-device settings, uninstalling the
              app, or emailing {site.email}.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              6. Sharing and processors
            </h2>
            <p>
              We use processors who help us run the products — for example cloud
              hosting, email delivery, and routing or map services inside School
              Bus Notifier. They receive only what they need for that work.
            </p>
            <p>
              Contact-form messages are delivered to our inbox by our email
              provider (Zoho Mail over SMTP, or another transactional mail
              service if configured). This website is hosted on Vercel or a
              similar host.
            </p>
            <p>
              We may disclose information if required by law, a court, or a
              regulator in {site.location}, or if needed to protect the rights,
              safety, or property of {site.name}, our users, or the public.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              7. Retention and security
            </h2>
            <p>
              Contact-form messages are kept only as long as needed to
              correspond with you, unless a longer hold is required by law.
              Family-Rx records stay in the family workspace until a member
              deletes them or the family account is closed. School Bus Notifier
              settings remain on the device until you clear them or uninstall
              the app.
            </p>
            <p>
              We use HTTPS, access controls, and standard cloud security
              practices. No method of transmission or storage is perfectly
              secure. If you believe an account or workspace is compromised,
              write to {site.email} immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              8. Children
            </h2>
            <p>
              This website is not directed at children. Family-Rx may hold a
              child’s health records when a parent or guardian adds that child
              to a family workspace. School Bus Notifier is meant for an adult
              watching a school bus, not for a child to operate as the primary
              user.
            </p>
            <p>
              We do not knowingly collect information from a child for
              marketing. A parent or guardian can delete a child’s Family-Rx
              records in the app or by emailing {site.email}.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              9. Your rights
            </h2>
            <p>
              Subject to applicable Indian law, you may request access to
              personal information we hold about you, correction of inaccurate
              data, deletion, or a copy of what you provided. You may withdraw
              consent where processing is based on consent.
            </p>
            <p>
              Send requests to {site.email}. We may need to verify that we are
              speaking with the right person before we act.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              10. Grievance officer
            </h2>
            <p>
              For complaints about this policy or how we handle personal
              information:
            </p>
            <p>
              Grievance Officer
              <br />
              {site.legalName}
              <br />
              {site.location}
              <br />
              <a
                className="font-medium text-navy underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
            <p>
              We aim to acknowledge and address grievances within one month of
              receipt, as applicable law requires.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
              11. Changes
            </h2>
            <p>
              We may update this policy as the products or the law change. The
              date at the top of this page will change when we do. Continued use
              of the website or the apps after an update means the new policy
              applies.
            </p>
          </section>

          <section className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <h2 className="font-display text-2xl tracking-tight text-navy">
              Contact
            </h2>
            <p className="mt-3">
              {site.legalName}
              <br />
              {site.location}
              <br />
              <a
                className="font-medium text-navy underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
            <p className="mt-4 text-sm text-muted">
              Also see our{" "}
              <Link href="/terms" className="font-medium text-navy underline">
                Terms
              </Link>
              .
            </p>
          </section>
        </Container>
      </article>
    </>
  );
}
