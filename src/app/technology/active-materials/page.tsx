import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Active Materials Catalogue",
  description:
    "Over 30 variants of carbon nanomaterials, metal oxide nanoparticles, and conductive inks — manufactured in-house with 99%+ purity for energy storage, coatings, composites, and industrial applications.",
  path: "/technology/active-materials",
  keywords: [
    "graphene manufacturer",
    "carbon nanotube supplier",
    "MWCNT",
    "graphene oxide",
    "reduced graphene oxide",
    "metal oxide nanoparticles",
    "conductive ink",
    "active materials catalogue",
    "nanomaterials India",
    "battery active materials",
  ],
});

// ─── Type definitions ────────────────────────────────────────────────────────

type SpecRow = { label: string; value: string };

type Product = {
  name: string;
  code: string;
  specs: SpecRow[];
  applications: string[];
};

type Category = {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
};

// ─── Catalogue data ───────────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  {
    eyebrow: "Carbon Nanomaterials",
    title: "Carbonous Products",
    description:
      "Single-layer and multi-layer graphene, graphene oxide, and multi-walled carbon nanotubes in battery-grade, industrial, and functional variants.",
    products: [
      {
        name: "Graphene A+",
        code: "NG-A+",
        specs: [
          { label: "Grade", value: "Battery Grade" },
          { label: "Purity", value: "99.9%" },
          { label: "Thickness", value: "<1 μm" },
          { label: "Surface Area", value: "~400 m²/g" },
        ],
        applications: [
          "Li-ion Batteries",
          "Na-ion Batteries",
          "Al-ion Batteries",
          "Zn-ion Batteries",
          "Supercapacitors",
        ],
      },
      {
        name: "Graphene D",
        code: "NG-D",
        specs: [
          { label: "Grade", value: "Industrial" },
          { label: "Purity", value: "99.9%" },
          { label: "Thickness", value: "5–10 nm" },
          { label: "Surface Area", value: "~110 m²/g" },
        ],
        applications: ["Polymers", "Composites", "Tyres", "Concrete"],
      },
      {
        name: "Graphene P",
        code: "NG-P",
        specs: [
          { label: "Grade", value: "Paints / Coatings" },
          { label: "Purity", value: "99.9%" },
          { label: "Thickness", value: "1–5 nm" },
          { label: "Surface Area", value: "~200 m²/g" },
        ],
        applications: ["Marine Coatings", "Aerospace", "Automotive Corrosion"],
      },
      {
        name: "Graphene Oxide",
        code: "NGO",
        specs: [
          { label: "Purity", value: "~99%" },
          { label: "Thickness", value: "0.8–2 nm" },
          { label: "Surface Area", value: "110–250 m²/g" },
        ],
        applications: ["Concrete", "Solar Cells", "Flexible Electronics"],
      },
      {
        name: "Reduced Graphene Oxide",
        code: "NRGO",
        specs: [
          { label: "Purity", value: "99%" },
          { label: "Carbon Content", value: "85–92%" },
          { label: "Surface Area", value: "80–200 m²/g" },
        ],
        applications: ["Anti-Corrosion", "Batteries", "RFID"],
      },
      {
        name: "MWCNT",
        code: "NAM-5",
        specs: [
          { label: "Purity", value: "99%" },
          { label: "Diameter", value: "10–20 nm" },
        ],
        applications: ["Polymers", "EMI Shielding", "Fuel Cells"],
      },
      {
        name: "Acid-Functionalized MWCNT",
        code: "NAM-9-1",
        specs: [
          { label: "Purity", value: "99%" },
          { label: "Functional Group", value: "–OH" },
        ],
        applications: ["Solar Cells", "Batteries", "Nano-electronics"],
      },
      {
        name: "Carboxylic-Functionalized MWCNT",
        code: "NAM-9-3-A",
        specs: [
          { label: "Purity", value: "99%" },
          { label: "Functional Group", value: "–COOH" },
        ],
        applications: ["Fuel Cells", "Conductive Ink"],
      },
    ],
  },
  {
    eyebrow: "Inorganic Nanomaterials",
    title: "Oxide Nanoparticles",
    description:
      "High-purity metal oxide nanoparticles below 100 nm, manufactured for precise surface chemistry and consistent batch quality.",
    products: [
      {
        name: "Aluminium Oxide",
        code: "NAl₂O₃",
        specs: [
          { label: "Purity", value: "99.9%" },
          { label: "Particle Size", value: "<100 nm" },
          { label: "Property", value: "Fire Retardant" },
        ],
        applications: ["Paints", "Ceramics", "Automotive"],
      },
      {
        name: "Copper Oxide",
        code: "NADCuO",
        specs: [
          { label: "Purity", value: "99.9%" },
          { label: "Particle Size", value: "<100 nm" },
          { label: "Property", value: "Antimicrobial / Photovoltaic" },
        ],
        applications: ["Solar Cells", "Sensors", "Batteries"],
      },
      {
        name: "Magnesium Oxide",
        code: "NADMgO",
        specs: [
          { label: "Purity", value: "99.9%" },
          { label: "Particle Size", value: "<100 nm" },
          { label: "Property", value: "Antibacterial" },
        ],
        applications: ["Cosmetics", "Oil & Gas"],
      },
      {
        name: "Silicon Dioxide",
        code: "NADSiO₂",
        specs: [
          { label: "Purity", value: "99.9%" },
          { label: "Particle Size", value: "<100 nm" },
          { label: "Surface Area", value: "~220 m²/g" },
        ],
        applications: ["Cement", "Biomedical", "Textiles"],
      },
      {
        name: "Titanium Dioxide",
        code: "NADTiO₂",
        specs: [
          { label: "Purity", value: "99.9%" },
          { label: "Particle Size", value: "<100 nm" },
          { label: "Property", value: "Photocatalytic / UV Blocking" },
        ],
        applications: ["Coatings", "Concrete"],
      },
      {
        name: "Zinc Oxide",
        code: "NADZnO",
        specs: [
          { label: "Purity", value: "99.9%" },
          { label: "Particle Size", value: "<100 nm" },
          { label: "Property", value: "Antibacterial / Antifungal" },
        ],
        applications: ["Cosmetics", "Solar Cells", "Biomedical"],
      },
    ],
  },
  {
    eyebrow: "Functional Inks",
    title: "Conductive Inks",
    description:
      "Water-based and solvent-based graphene inks engineered for printed electronics, flexible circuits, and industrial sensor applications.",
    products: [
      {
        name: "Water-Based Graphene Ink",
        code: "NADWGP-30",
        specs: [
          { label: "Conductivity", value: "138.8 S/m" },
          { label: "Solid Content", value: "30%" },
          { label: "Cure", value: "80°C / 1 min" },
        ],
        applications: ["Printed Electronics", "Flexible Circuits", "Sensors"],
      },
      {
        name: "Solvent-Based Graphene Platelet Ink",
        code: "NADSNG-30",
        specs: [
          { label: "Conductivity", value: "217.19 S/m" },
          { label: "Solid Content", value: "20%" },
          { label: "Cure", value: "180°C / 1 min" },
        ],
        applications: ["Industrial Sensors", "EMI Shielding", "Wearables"],
      },
      {
        name: "Solvent-Based Graphene Flakes Ink",
        code: "NAD-SGR-20",
        specs: [
          { label: "Conductivity", value: "261.8 S/m" },
          { label: "Solid Content", value: "2%" },
          { label: "Cure", value: "200°C / 1 min" },
        ],
        applications: ["High-Conductivity Printing", "RFID", "Electrodes"],
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col p-6">
      {/* Header */}
      <div className="border-b border-[var(--color-nord-slate)] pb-4">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-nord-teal)]">
          {product.code}
        </p>
        <h3 className="mt-1 text-xl uppercase">{product.name}</h3>
      </div>

      {/* Spec table */}
      <table className="mt-4 w-full text-left text-sm">
        <tbody>
          {product.specs.map((row) => (
            <tr key={row.label} className="border-b border-[var(--color-nord-slate)] last:border-0">
              <td className="py-2 pr-4 text-[var(--color-nord-mist)]">{row.label}</td>
              <td className="py-2 font-semibold text-[var(--color-nord-white)]">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Applications */}
      <div className="mt-4 flex flex-wrap gap-2">
        {product.applications.map((app) => (
          <span
            key={app}
            className="rounded-full border border-[var(--color-nord-teal)] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[var(--color-nord-teal)]"
          >
            {app}
          </span>
        ))}
      </div>

      {/* CTA — pushed to bottom */}
      <div className="mt-auto pt-5">
        <Link
          aria-label={`Request a sample of ${product.name}`}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-nord-teal)] transition-opacity hover:opacity-70"
          href="/contact"
        >
          Request Sample <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </Card>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ActiveMaterialsPage() {
  return (
    <div>
      <PageHero
        label="Active Materials"
        title="Advanced Active Materials Catalogue"
        description="Over 30 variants of carbon nanomaterials, metal oxide nanoparticles, and conductive inks — manufactured in-house with 99%+ purity for energy storage, coatings, composites, and industrial applications."
        image="/images/active-materials-catalogue.png"
      />

      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Download brochure — top of page */}
          <div className="mb-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--color-nord-slate)] bg-[var(--color-nord-dark)] p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">
                Full Catalogue Available
              </p>
              <p className="mt-1 text-[var(--color-nord-mist)]">
                Download the NES Active Material Catalogue for complete data sheets, pricing tiers, and MOQ information.
              </p>
            </div>
            <Button href="/NES-Business-Brochure.pdf" variant="ghost" download>
              <Download className="h-4 w-4" />
              Download Brochure
            </Button>
          </div>

          {/* Category sections */}
          {CATEGORIES.map((category) => (
            <div key={category.title} className="mb-20 last:mb-0">
              <SectionHeader
                eyebrow={category.eyebrow}
                title={category.title}
                description={category.description}
              />
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {category.products.map((product) => (
                  <ProductCard key={product.code} product={product} />
                ))}
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="mt-10 rounded-2xl border border-[var(--color-nord-slate)] bg-[var(--color-nord-dark)] p-8 text-center">
            <h2 className="text-3xl uppercase">Need a Custom Specification?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-nord-mist)]">
              All active materials are available in custom particle sizes, functional groups, and packaging formats. Contact our materials team to discuss your exact requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary">
                Contact Materials Team <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/NES-Business-Brochure.pdf" variant="outline" download>
                <Download className="h-4 w-4" />
                Download Brochure
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
