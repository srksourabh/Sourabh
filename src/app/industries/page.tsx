import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IndustriesFaq } from "@/components/sections/IndustriesFaq";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { INDUSTRIES } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { getIcon } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Powering Multiple Industries",
  description: "See how Nordische battery systems solve range, uptime, safety, and lifecycle challenges across EV, renewable, telecom, and industrial deployments.",
  path: "/industries",
  keywords: ["battery industries", "ev battery application", "telecom battery backup"],
});

export default function IndustriesPage() {
  return (
    <div>
      <PageHero
        label="Industries"
        title="Powering Multiple Industries"
        description="From road vehicles to solar farms to telecom towers, we engineer battery systems around the actual failure modes, operating constraints, and performance economics of each industry."
        image="/images/hero-industries.png"
      />

      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((industry) => {
              const Icon = getIcon(industry.icon);
              return (
                <Card key={industry.slug} className="p-7">
                  <Icon className="h-10 w-10 text-[var(--color-nord-teal)]" />
                  <h2 className="mt-5 text-2xl uppercase sm:text-3xl">{industry.name}</h2>
                  <p className="mt-3 text-lg text-[var(--color-nord-light)]">{industry.headline}</p>
                  <p className="mt-4 text-sm text-[var(--color-nord-mist)]">{industry.description}</p>
                  <Link
                    aria-label={`View ${industry.name} details`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
                    href={`/industries/${industry.slug}`}
                  >
                    Explore Industry <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--color-nord-slate)] bg-[var(--color-nord-deep)] p-8 text-center">
            <p className="font-[var(--font-display)] text-4xl font-extrabold text-[var(--color-nord-teal)] sm:text-6xl">15 MWh</p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--color-nord-mist)]">
              Total installed capacity across all applications
            </p>
          </div>

          <SectionHeader className="mt-18" title="Frequently Asked Questions" />
          <IndustriesFaq />

          <div className="mt-10">
            <Link
              aria-label="Discuss your industry requirements"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
              href="/contact"
            >
              Discuss Your Industry Requirements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
