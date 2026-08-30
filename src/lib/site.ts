export const site = {
  name: "Sairam Technologies",
  shortName: "Sairam",
  legalName: "Sairam Technologies",
  tagline: "Software for the people you protect.",
  description:
    "Sairam Technologies designs and ships software products for family health, school safety, and the operations around them — starting with Family-Rx Health Box and School Bus Notifier.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sairamtechnologies.com",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    "prabir.padhy@sairamtechnologies.in",
  location: "India",
} as const;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const products = [
  {
    slug: "family-rx",
    name: "Family-Rx",
    fullName: "Family-Rx Health Box",
    category: "Family health",
    status: "In production",
    storeNote: "Soon on Google Play",
    href: "/products/family-rx",
    liveUrl: "https://family-rx.sairamtechnologies.in",
    summary:
      "One private place for your family’s prescriptions, reports, documents, and daily health — with AI that reads what you upload.",
    description:
      "Family-Rx Health Box is a shared family health workspace. Upload prescriptions and medical reports, keep insurance and billing documents together, and search everything across the household. AI extracts medicines, findings, and next steps so care is not trapped in a photo roll.",
    accent: "teal",
    features: [
      {
        title: "Shared family workspace",
        body: "Create a family, invite members with a code, and keep one source of truth for every person in the household.",
      },
      {
        title: "Prescription intelligence",
        body: "Photograph a prescription. AI extracts doctor, clinic, diagnosis, medicines, dosage, and instructions.",
      },
      {
        title: "Reports that speak clearly",
        body: "Lab work, X-rays, MRI, ultrasound, and CT scans are summarized with severity and whether a doctor visit is recommended.",
      },
      {
        title: "Documents and insurance",
        body: "Store invoices, bills, receipts, and insurance papers beside the person they belong to.",
      },
      {
        title: "Nutrition and meals",
        body: "Track meals against a personal plan — calories, protein, and daily suggestions generated for the household.",
      },
      {
        title: "Search across the family",
        body: "Find a medicine, doctor, diagnosis, or member instantly — without opening every file.",
      },
    ],
  },
  {
    slug: "school-bus-notifier",
    name: "School Bus Notifier",
    fullName: "School Bus Notifier",
    category: "School safety",
    status: "In production",
    storeNote: "Soon on Google Play",
    href: "/products/school-bus-notifier",
    liveUrl: "https://school-bus-tracking.sairamtechnologies.in",
    summary:
      "Live bus tracking against your home, with voice alerts as the bus approaches and a distinct chime when it arrives.",
    description:
      "School Bus Notifier is a Progressive Web App for parents. Set home, paste a GPS or Maps tracker link, and watch the bus on a live map. Alerts use real road-network distance, not a straight line, so you step outside at the right moment — not ten minutes too early.",
    accent: "navy",
    features: [
      {
        title: "Home, then track",
        body: "Drop a pin with device GPS or tap the map. Routes and alarm points stay on the phone.",
      },
      {
        title: "Works with real GPS links",
        body: "Paste CPARK GPS360 / Wialon locators, Google Maps URLs, or raw coordinates. A server resolves links browsers cannot read directly.",
      },
      {
        title: "Road-network distance",
        body: "Approaching alerts use OpenStreetMap routing, not as-the-crow-flies, so the last kilometer matches the actual road.",
      },
      {
        title: "Voice, then arrival",
        body: "A repeating voice announcement while the bus is inside your approach distance. A different sound when it has arrived.",
      },
      {
        title: "Route alarm points",
        body: "Tap spots along the saved route for one-shot alerts before the bus reaches home.",
      },
      {
        title: "Installable and private",
        body: "Add it to the home screen. Settings live on-device. Demo mode lets you test alerts without a live bus.",
      },
    ],
  },
] as const;

export const services = [
  {
    title: "Product engineering",
    body: "We take a product from brief to production: architecture, interface, data, and the release path onto the cloud.",
  },
  {
    title: "Custom software",
    body: "Operational systems for schools, clinics, and businesses that need software that fits how they actually work.",
  },
  {
    title: "AI in production",
    body: "Document reading, extraction, and assistive workflows — only where they save time and can be verified by a person.",
  },
  {
    title: "Progressive web apps",
    body: "Installable apps that feel native, work offline where it matters, and ship without an app-store delay.",
  },
  {
    title: "Cloud delivery",
    body: "Vercel-native hosting, environments, and the operational habits required to keep a product in market.",
  },
  {
    title: "Ongoing product care",
    body: "Iteration after launch: reliability, new modules, and the unglamorous work that keeps software trusted.",
  },
] as const;

export const principles = [
  {
    index: "01",
    title: "Care is the requirement",
    body: "Our first products exist because families should not lose a prescription, and parents should not guess when the bus will turn the corner.",
  },
  {
    index: "02",
    title: "Ship, then sharpen",
    body: "We put software in people’s hands. Real routes, real prescriptions, and real mornings teach us faster than a slide deck.",
  },
  {
    index: "03",
    title: "Privacy by default",
    body: "Health records stay in a family workspace. Bus settings stay on the device. We do not treat personal data as a growth tactic.",
  },
  {
    index: "04",
    title: "Craft that holds up",
    body: "Typography, performance, and empty states are part of the product. Software that people depend on should feel considered.",
  },
] as const;

export const ticker = [
  "Family-Rx Health Box is live",
  "School Bus Notifier is live",
  "Soon on Google Play for Android",
  "Product engineering and custom software",
  "Built in India · delivered on the cloud",
] as const;

export const industries = [
  {
    title: "Families",
    body: "Shared health records, prescriptions, and daily care in one private workspace.",
  },
  {
    title: "Schools",
    body: "Arrival alerts and live bus tracking so parents meet the gate at the right minute.",
  },
  {
    title: "Clinics",
    body: "Less paper in the waiting room. Structured medicines and reports families can search.",
  },
  {
    title: "Operators",
    body: "Custom software for the work that does not fit a generic tool — then we stay to operate it.",
  },
] as const;

export const insights = [
  {
    kind: "Product",
    title: "Family-Rx is on its own domain",
    body: "The family health workspace is live at family-rx.sairamtechnologies.in — prescriptions, reports, and nutrition in one place.",
    href: "/products/family-rx",
  },
  {
    kind: "Product",
    title: "School buses, tracked to the gate",
    body: "School Bus Notifier is live at school-bus-tracking.sairamtechnologies.in, with road-network distance and voice alerts.",
    href: "/products/school-bus-notifier",
  },
  {
    kind: "Roadmap",
    title: "Android, next",
    body: "Both apps are soon going to the Google Play Store so families can install them like any other phone app.",
    href: "/products",
  },
] as const;
