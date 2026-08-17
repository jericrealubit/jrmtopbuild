export type ServiceIconKey =
  | "renovations"
  | "pergolas"
  | "decking"
  | "floor-planks"
  | "bathroom";

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: ServiceIconKey;
  photo?: string;
  summary: string;
  included: string[];
  process: { step: string; detail: string }[];
  faq: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "renovations-and-alterations",
    name: "Renovations & Alterations",
    shortName: "Renovations",
    icon: "renovations",
    photo: "/photos/renovation.jpg",
    summary:
      "From single-room updates to full alterations, we plan and build changes to your home or commercial space with minimal disruption and a clear timeline.",
    included: [
      "Interior and exterior alterations",
      "Structural changes and reconfigured layouts",
      "Kitchen, living and commercial fit-out renovations",
      "Consent-ready documentation where required",
      "Full project management from start to handover",
    ],
    process: [
      { step: "Enquiry & site visit", detail: "We walk the space with you and talk through what you want to achieve." },
      { step: "Design & quote", detail: "You get a clear scope of work and a fixed quote before anything starts." },
      { step: "Consent & scheduling", detail: "We handle any required council paperwork and lock in a build date." },
      { step: "Build & handover", detail: "Regular updates during the build, then a final walkthrough with you." },
    ],
    faq: [
      { q: "Do I need council consent for an alteration?", a: "It depends on the scope — structural changes usually need a building consent, while cosmetic work often doesn't. We'll tell you exactly where your job sits before we quote." },
      { q: "Can you work around my household or business hours?", a: "Yes — we plan renovations around occupied homes and live commercial premises to keep disruption to a minimum." },
      { q: "Do you handle both residential and commercial jobs?", a: "Yes, renovations and alterations are roughly half our workload on each side." },
    ],
    seoTitle: "Renovations & Alterations Christchurch",
    seoDescription: "Residential and commercial renovations & alterations across Christchurch and Canterbury. Licensed, local, and project-managed start to finish.",
  },
  {
    slug: "pergolas",
    name: "Pergolas",
    shortName: "Pergolas",
    icon: "pergolas",
    photo: "/photos/pergola-1.jpg",
    summary:
      "A well-built pergola adds shade, structure and value to your outdoor space. We design and build pergolas to suit your section and your home.",
    included: [
      "Custom-designed timber pergolas",
      "Attached or freestanding structures",
      "Louvre, lattice or solid-roof options",
      "Council consent guidance where needed",
      "Finished with matching decking or landscaping on request",
    ],
    process: [
      { step: "Enquiry & site visit", detail: "We assess your section, sun/shade orientation and how you'll use the space." },
      { step: "Design & quote", detail: "A pergola design and fixed quote tailored to your property." },
      { step: "Consent & scheduling", detail: "We confirm whether your pergola needs consent and organise it if so." },
      { step: "Build & handover", detail: "Built to spec, cleaned up on site, and handed over ready to use." },
    ],
    faq: [
      { q: "Do I need consent for a pergola in Christchurch?", a: "Many pergolas fall under building consent exemptions depending on size, roofing and attachment to the house — we confirm this for your specific job before quoting." },
      { q: "Can a pergola be attached to my existing house?", a: "Yes, we build both attached and freestanding pergolas depending on your section and preference." },
      { q: "How long does a typical pergola build take?", a: "Most residential pergolas are completed within one to two weeks of the build start date, weather permitting." },
    ],
    seoTitle: "Pergola Builder Christchurch",
    seoDescription: "Custom pergola design and construction in Christchurch. Attached or freestanding, consent guidance included. Get a free quote from JRM Top Build.",
  },
  {
    slug: "decking",
    name: "Decking",
    shortName: "Decking",
    icon: "decking",
    photo: "/photos/decking.jpg",
    summary:
      "Timber decking built to last through Canterbury's weather — from a simple ground-level deck to a multi-level entertaining space.",
    included: [
      "Ground-level and elevated decks",
      "Timber and composite decking options",
      "Balustrades, stairs and built-in seating",
      "Deck repairs and re-decking of existing structures",
      "Integrated with pergolas or outdoor living areas",
    ],
    process: [
      { step: "Enquiry & site visit", detail: "We measure up and talk through size, levels and materials." },
      { step: "Design & quote", detail: "A fixed quote covering materials, framing and finish." },
      { step: "Consent & scheduling", detail: "Consent is confirmed where deck height or size requires it." },
      { step: "Build & handover", detail: "Framed, decked and finished, with a walkthrough at the end." },
    ],
    faq: [
      { q: "Do I need consent for a deck?", a: "Decks under a certain height above ground are often exempt from consent — we check the exact rule against your deck's height and design before starting." },
      { q: "What timber do you recommend for Christchurch's climate?", a: "We generally recommend treated pine or hardwood decking with the right fixings for Canterbury's temperature swings — we'll talk you through the options for your budget." },
      { q: "Can you replace an old, tired deck?", a: "Yes — re-decking and structural repairs to existing decks are a regular part of our work." },
    ],
    seoTitle: "Deck Builder Christchurch | Decking Installation",
    seoDescription: "Timber and composite decking built for Canterbury's weather. Ground-level to multi-level decks, repairs and re-decking. Free quotes from JRM Top Build.",
  },
  {
    slug: "floor-planks",
    name: "Floor Planks",
    shortName: "Floor Planks",
    icon: "floor-planks",
    photo: "/photos/floor-planks.jpg",
    summary:
      "Floor plank installation for a clean, durable finish — laid properly the first time, whether it's a single room or a full property.",
    included: [
      "Timber and engineered floor plank installation",
      "Subfloor preparation and levelling",
      "Room-by-room or whole-property jobs",
      "Residential and commercial floor plank fit-outs",
      "Skirting and finishing detail",
    ],
    process: [
      { step: "Enquiry & site visit", detail: "We check the subfloor and talk through plank options and layout." },
      { step: "Design & quote", detail: "A fixed quote covering materials, prep and installation." },
      { step: "Scheduling", detail: "We lock in a start date that works around your household or business." },
      { step: "Build & handover", detail: "Laid, finished and cleaned up, ready to walk on." },
    ],
    faq: [
      { q: "Can you lay floor planks over an existing floor?", a: "In many cases yes, depending on the condition of the subfloor — we assess this on-site before quoting." },
      { q: "How long does a floor plank installation take?", a: "A single room is often a day or two; whole-property jobs are scoped individually depending on size." },
      { q: "Do you do commercial floor plank fit-outs?", a: "Yes — we handle both residential rooms and commercial fit-out flooring." },
    ],
    seoTitle: "Floor Plank Installation Christchurch",
    seoDescription: "Professional floor plank installation for homes and commercial fit-outs in Christchurch. Subfloor prep to finished floor. Free quotes from JRM Top Build.",
  },
  {
    slug: "bathroom-renovations",
    name: "Bathroom Renovations",
    shortName: "Bathrooms",
    icon: "bathroom",
    photo: "/photos/bathroom-renovation.jpg",
    summary:
      "Full bathroom renovations from layout changes to fixtures and finishing — built to handle Christchurch's older housing stock as well as new builds.",
    included: [
      "Full and partial bathroom renovations",
      "Waterproofing and tiling",
      "Plumbing and fixture coordination",
      "Layout changes and accessibility updates",
      "Ensuite and second-bathroom additions",
    ],
    process: [
      { step: "Enquiry & site visit", detail: "We assess the existing bathroom and talk through your layout and fixture goals." },
      { step: "Design & quote", detail: "A fixed quote covering demolition, waterproofing, tiling and fixtures." },
      { step: "Scheduling", detail: "We coordinate trades (plumbing, electrical) and confirm a build timeline." },
      { step: "Build & handover", detail: "Full renovation through to a finished, ready-to-use bathroom." },
    ],
    faq: [
      { q: "How long does a bathroom renovation take?", a: "A standard full bathroom renovation typically runs two to three weeks, depending on scope and trade coordination." },
      { q: "Do you handle the plumbing and electrical too?", a: "We coordinate licensed plumbers and electricians as part of the project so you only deal with one point of contact." },
      { q: "Can you renovate a bathroom in an older Christchurch home?", a: "Yes — a large share of our bathroom work is in older housing stock, including addressing dated waterproofing and layouts." },
    ],
    seoTitle: "Bathroom Renovations Christchurch",
    seoDescription: "Full and partial bathroom renovations in Christchurch — waterproofing, tiling, fixtures and layout changes. Free quotes from JRM Top Build.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
