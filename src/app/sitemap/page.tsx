import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "HTML Sitemap",
  description: "Browse all major Nordische Energy pages from one structured sitemap.",
  path: "/sitemap",
  keywords: ["html sitemap", "site navigation", "nordische pages"],
});

const sitemapGroups = [
  { title: "Main", links: [{ href: "/", label: "Home", description: "Homepage overview and primary lead capture." }] },
  {
    title: "Products",
    links: [
      { href: "/products", label: "Products Overview", description: "All product lines and comparison table." },
      { href: "/products#lithium-ion-battery-packs", label: "Lithium-Ion Battery Packs", description: "High-density packs for EV and industrial use." },
      { href: "/products#ev-battery-modules", label: "EV Battery Modules", description: "Automotive-focused modular battery systems." },
      { href: "/products#custom-battery-solutions", label: "Custom Battery Solutions", description: "Application-specific battery engineering." },
    ],
  },
  {
    title: "Technology",
    links: [
      { href: "/technology", label: "Technology Overview", description: "All technology verticals and engineering pillars." },
      { href: "/technology/energy-storage", label: "Energy Storage", description: "Aluminium-graphene and lead ultra-carbon batteries." },
      { href: "/technology/hydrogen-seawater", label: "Hydrogen & Seawater Mining", description: "Clean hydrogen and mineral extraction." },
      { href: "/technology/advanced-materials", label: "Advanced Light Materials", description: "Carbon and metal foam technologies." },
      { href: "/technology/active-materials", label: "Active Materials", description: "Graphene and carbon nanotube nanomaterials." },
      { href: "/technology/metal-extraction", label: "Metal & Material Extraction", description: "Sustainable critical mineral recovery." },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries", label: "Industries Overview", description: "Cross-industry solutions and FAQs." },
      { href: "/industries/electric-vehicles", label: "Electric Vehicles", description: "Battery systems for EV platforms and fleets." },
      { href: "/industries/renewable-energy", label: "Renewable Energy", description: "Dispatchable storage for solar and wind." },
      { href: "/industries/telecom-infrastructure", label: "Telecom Infrastructure", description: "High-reliability backup systems." },
      { href: "/industries/industrial-applications", label: "Industrial Applications", description: "Rugged power for demanding equipment." },
    ],
  },
  { title: "Manufacturing", links: [{ href: "/manufacturing", label: "Manufacturing", description: "Facility capability, QA process, and testing." }] },
  { title: "Case Studies", links: [{ href: "/case-studies", label: "Case Studies", description: "Real deployment outcomes across sectors." }] },
  { title: "About", links: [{ href: "/about", label: "About", description: "Company story, values, and leadership team." }] },
  { title: "Contact", links: [{ href: "/contact", label: "Contact", description: "Speak with the Nordische engineering team." }] },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy", description: "GDPR and data processing information." },
      { href: "/terms-of-use", label: "Terms of Use", description: "Website legal terms and liability statement." },
      { href: "/privacy-policy#cookies", label: "Cookie Policy", description: "Cookie use and analytics disclosures." },
    ],
  },
] as const;

export default function SitemapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl uppercase sm:text-5xl md:text-6xl">HTML Sitemap</h1>
      <p className="mt-6 max-w-3xl text-lg text-[var(--color-nord-mist)]">
        Browse all sections of the Nordische Energy website, organized by business area.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {sitemapGroups.map((group) => (
          <Card key={group.title} className="p-6">
            <h2 className="text-xl uppercase sm:text-3xl">{group.title}</h2>
            <ul className="mt-5 space-y-4">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link aria-label={`Open ${link.label}`} className="text-lg text-[var(--color-nord-white)] hover:text-[var(--color-nord-teal)]" href={link.href}>
                    {link.label}
                  </Link>
                  <p className="mt-1 text-sm text-[var(--color-nord-mist)]">{link.description}</p>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
