import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    areaServed: "IN",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Family-Rx Health Box",
          applicationCategory: "HealthApplication",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "School Bus Notifier",
          applicationCategory: "LifestyleApplication",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
