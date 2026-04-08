import { ArrowRight, Download } from "lucide-react";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlobalReachMap } from "@/components/visuals/GlobalReachMap";
import { ABOUT_CONTENT, HEADQUARTERS, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Nordische Energy Systems",
  description: ABOUT_CONTENT.story[0],
  path: "/about",
  keywords: ["about nordische energy", "energy storage R&D india", "sustainable energy company bangalore"],
});

export default function AboutPage() {
  return (
    <div>
      <PageHero
        label="About"
        title="About Nordische Energy Systems"
        description={ABOUT_CONTENT.mission}
        image="/images/hero-about.png"
      />

      {/* Company Story */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Story" />
          <div className="grid gap-6 lg:grid-cols-2">
            {ABOUT_CONTENT.story.map((paragraph) => (
              <Card key={paragraph} className="p-6 text-[var(--color-nord-light)]">
                {paragraph}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[var(--color-nord-deep)] py-[var(--section-py)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Card className="p-8">
            <p className="text-4xl leading-none sm:text-7xl text-[color:rgb(0_212_170_/_0.22)]">&ldquo;</p>
            <h2 className="mt-4 text-2xl uppercase sm:text-4xl">Vision</h2>
            <p className="mt-4 text-[var(--color-nord-light)]">{ABOUT_CONTENT.vision}</p>
          </Card>
          <Card className="p-8">
            <p className="text-4xl leading-none sm:text-7xl text-[color:rgb(0_212_170_/_0.22)]">&ldquo;</p>
            <h2 className="mt-4 text-2xl uppercase sm:text-4xl">Mission</h2>
            <p className="mt-4 text-[var(--color-nord-light)]">{ABOUT_CONTENT.mission}</p>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Core Values" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_CONTENT.values.map((value) => (
              <Card key={value.title} className="p-6">
                <h3 className="text-2xl uppercase">{value.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-[var(--color-nord-deep)] py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Credentials & Milestones" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {ABOUT_CONTENT.milestones.map((milestone, i) => (
              <Card key={milestone.title} className="p-6">
                <p className="font-[var(--font-display)] text-2xl text-[var(--color-nord-teal)] sm:text-4xl">0{i + 1}</p>
                <h3 className="mt-4 text-xl uppercase">{milestone.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{milestone.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Partners */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Key Partners" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_CONTENT.partners.map((partner) => (
              <Card key={partner.name} className="p-5">
                <div className="mb-4 flex h-14 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`${partner.name} logo`}
                    className="h-10 max-w-[140px] object-contain brightness-0 invert"
                    src={partner.logo}
                    loading="eager"
                  />
                </div>
                <h3 className="text-xl font-bold uppercase text-[var(--color-nord-white)]">{partner.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--color-nord-teal)]">{partner.location}</p>
                <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{partner.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="bg-[var(--color-nord-deep)] py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Business Model" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_CONTENT.businessModel.map((item, i) => (
              <Card key={item.title} className="p-6">
                <p className="font-[var(--font-display)] text-2xl text-[var(--color-nord-teal)] sm:text-4xl">0{i + 1}</p>
                <h3 className="mt-4 text-xl uppercase">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Global Reach" description="NES ecosystem currently has key partners in the following countries." />
          <GlobalReachMap />

          {/* Target Markets */}
          <SectionHeader className="mt-16" title="Target Markets" />
          <div className="flex flex-wrap gap-2">
            {ABOUT_CONTENT.targetMarkets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-[var(--color-nord-slate)] px-4 py-2 text-sm uppercase tracking-[0.1em] text-[var(--color-nord-light)]"
              >
                {market}
              </span>
            ))}
          </div>

          {/* HQ + Downloads */}
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Card className="p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">Headquarters</p>
              <h3 className="mt-3 text-xl uppercase sm:text-3xl">{HEADQUARTERS.company}</h3>
              <p className="mt-3 text-[var(--color-nord-light)]">{HEADQUARTERS.summary}</p>
              <p className="mt-2 text-sm text-[var(--color-nord-mist)]">{HEADQUARTERS.city}</p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--color-nord-slate)]">
                <iframe
                  aria-label="Map showing NES headquarters in Bangalore"
                  className="h-48 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${HEADQUARTERS.mapQuery}&z=14&output=embed`}
                />
              </div>
            </Card>
            <Card className="flex flex-col justify-between p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">Resources</p>
                <h3 className="mt-3 text-xl uppercase sm:text-3xl">Downloads & Contact</h3>
                <p className="mt-3 text-sm text-[var(--color-nord-mist)]">
                  Download our business brochure or get in touch with our team.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button aria-label="Download business brochure" href={SITE.brochure} variant="ghost">
                  <Download className="h-4 w-4" /> Download Brochure
                </Button>
                <Button aria-label="Contact NES" href="/contact">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <LeadCapture title="Partner With Us" description="Whether you need technology licensing, active materials, or custom battery solutions — let's talk." />
    </div>
  );
}
