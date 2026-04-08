import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MANUFACTURING_CONTENT } from "@/lib/constants";
import { MANUFACTURING_IMAGE } from "@/lib/imagery";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Precision Manufacturing & Rigorous Testing",
  description: MANUFACTURING_CONTENT.intro,
  path: "/manufacturing",
  keywords: ["battery manufacturing", "battery testing facility", "battery quality assurance"],
});

export default function ManufacturingPage() {
  return (
    <div>
      <PageHero
        label="Manufacturing"
        title="Precision Manufacturing & Rigorous Testing"
        description={MANUFACTURING_CONTENT.subheadline}
        image={MANUFACTURING_IMAGE}
      />

      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["4,200 m²", "Facility footprint"],
              ["45", "Engineers & technicians"],
              ["127", "Quality checkpoints"],
              ["ISO 9001", "Certified quality system"],
            ].map(([value, label]) => (
              <Card key={label} className="p-6 text-center">
                <p className="stat-number">{value}</p>
                <p className="mt-2 text-sm text-[var(--color-nord-mist)]">{label}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)]">
            <Image
              alt="Nordische Energy manufacturing facility"
              className="h-80 w-full object-cover"
              height={480}
              src={MANUFACTURING_IMAGE}
              width={1280}
            />
          </div>
          <p className="mt-8 max-w-4xl text-lg text-[var(--color-nord-light)]">{MANUFACTURING_CONTENT.intro}</p>

          <SectionHeader className="mt-18" title="Capabilities" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {MANUFACTURING_CONTENT.capabilities.map((capability) => (
              <Card key={capability.title} className="p-7">
                <h2 className="text-xl uppercase sm:text-3xl">{capability.title}</h2>
                <p className="mt-4 text-sm text-[var(--color-nord-mist)]">{capability.description}</p>
              </Card>
            ))}
          </div>

          <SectionHeader className="mt-18" title="Quality Process Timeline" />
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              "Incoming cell receipt",
              "Cell grading and binning",
              "Dry-room pack assembly",
              "Firmware and BMS integration",
              "Formation cycling",
              "72-hour aging",
              "Electrical and environmental testing",
              "Shipment release and traceability pack",
            ].map((step, index) => (
              <Card key={step} className="p-5">
                <p className="font-[var(--font-display)] text-2xl text-[var(--color-nord-teal)] sm:text-4xl">0{index + 1}</p>
                <p className="mt-3 text-sm text-[var(--color-nord-light)]">{step}</p>
              </Card>
            ))}
          </div>

          <SectionHeader className="mt-18" title="Certifications & Test Capability" />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="grid gap-4 p-6 sm:grid-cols-2">
              {MANUFACTURING_CONTENT.certifications.map((cert) => (
                <div key={cert} className="rounded-2xl border border-[var(--color-nord-slate)] p-4 text-center text-sm text-[var(--color-nord-light)]">
                  {cert}
                </div>
              ))}
            </Card>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-nord-slate)]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--color-nord-deep)]">
                  <tr>
                    <th className="px-4 py-4 text-[var(--color-nord-mist)]">Test Type</th>
                    <th className="px-4 py-4 text-[var(--color-nord-mist)]">Standard</th>
                    <th className="px-4 py-4 text-[var(--color-nord-mist)]">Equipment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Thermal cycling", "IEC 60068", "-40°C to +85°C chamber"],
                    ["Vibration", "IEC 60068 / MIL-STD", "Multi-axis shaker table"],
                    ["Insulation and hipot", "IEC 62619", "Automated hipot bench"],
                    ["Short-circuit validation", "UN38.3", "High-current discharge rig"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-[var(--color-nord-slate)]">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-4 text-[var(--color-nord-light)]">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <a
            aria-label="Request a manufacturing audit or facility visit"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
            href="/contact"
          >
            Request a Manufacturing Audit / Facility Visit
          </a>
        </div>
      </section>
    </div>
  );
}
