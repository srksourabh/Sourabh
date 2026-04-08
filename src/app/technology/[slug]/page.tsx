import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { TECHNOLOGY_VERTICALS, ENERGY_STORAGE_HIGHLIGHTS } from "@/lib/constants";
import { TECH_IMAGE_MAP } from "@/lib/imagery";
import { buildMetadata } from "@/lib/metadata";
import { getIcon } from "@/lib/utils";

export function generateStaticParams() {
  // Exclude "active-materials" — it has a dedicated static page at /technology/active-materials/
  return TECHNOLOGY_VERTICALS
    .filter((tech) => tech.slug !== "active-materials")
    .map((tech) => ({ slug: tech.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tech = TECHNOLOGY_VERTICALS.find((item) => item.slug === slug);
  if (!tech) {
    return buildMetadata({ title: "Technology Not Found", description: "", path: "/technology" });
  }

  return buildMetadata({
    title: tech.name,
    description: tech.description,
    path: `/technology/${tech.slug}`,
    keywords: [tech.name.toLowerCase(), "nordische energy", "sustainable technology"],
  });
}

export default async function TechnologyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tech = TECHNOLOGY_VERTICALS.find((item) => item.slug === slug);
  if (!tech) notFound();

  const Icon = getIcon(tech.icon);
  const image = TECH_IMAGE_MAP[tech.slug as keyof typeof TECH_IMAGE_MAP];
  const otherTechs = TECHNOLOGY_VERTICALS.filter((t) => t.slug !== tech.slug);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Technology", href: "/technology" },
            { label: tech.name },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Icon className="h-12 w-12 text-[var(--color-nord-teal)]" />
            <h1 className="mt-5 text-3xl uppercase sm:text-5xl md:text-6xl">{tech.name}</h1>
            <p className="mt-4 text-lg uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">
              {tech.tagline}
            </p>
            <p className="mt-6 max-w-3xl text-lg text-[var(--color-nord-mist)]">
              {tech.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                aria-label="Contact us about this technology"
                className="btn-primary"
                href="/contact"
              >
                Discuss This Technology <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {image ? (
            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)]">
              <Image
                alt={`${tech.name} technology`}
                className="h-auto w-full"
                height={640}
                src={image}
                width={960}
              />
            </div>
          ) : null}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {tech.highlights.map((highlight) => (
            <Card key={highlight.title} className="p-8">
              <h2 className="text-xl uppercase sm:text-3xl">{highlight.title}</h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--color-nord-light)]">
                {highlight.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-nord-teal)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="mt-14 p-8">
          <h2 className="text-4xl uppercase">Applications</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {tech.applications.map((app) => (
              <span
                key={app}
                className="rounded-full border border-[var(--color-nord-slate)] px-4 py-2 text-sm uppercase tracking-[0.14em] text-[var(--color-nord-teal)]"
              >
                {app}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              aria-label="Request a quote for this technology"
              className="btn-primary"
              href="/contact"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              aria-label="Download the Nordische Energy business brochure"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-nord-slate)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-mist)] transition-colors hover:border-[var(--color-nord-teal)] hover:text-[var(--color-nord-teal)]"
              href="/NES-Business-Brochure.pdf"
              download
            >
              Download Brochure
            </a>
          </div>
        </Card>

        {slug === "energy-storage" && (
          <div className="mt-14">
            <h2 className="text-2xl uppercase sm:text-4xl">Technology Deep-Dive</h2>
            <p className="mt-3 text-[var(--color-nord-mist)]">
              Both energy storage platforms are at manufacturing readiness. Below are the validated performance profiles for each chemistry.
            </p>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)]">
              <Image
                alt="Aluminium-Graphene pouch cell manufactured by Nordische Energy"
                className="h-auto w-full"
                height={720}
                src="/images/alg-pouch-cell.png"
                width={1280}
              />
              <div className="p-6 text-sm text-[var(--color-nord-mist)]">
                Al-G commercial-grade pouch cell manufactured and tested at CIPET Bangalore and in Spain.
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {ENERGY_STORAGE_HIGHLIGHTS.map((item) => (
                <Card key={item.title} className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-2xl uppercase">{item.title}</h3>
                    <span className="rounded-full bg-[var(--color-nord-teal)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-nord-dark)]">
                      Commercial Ready
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-nord-mist)]">
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {item.metrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-3 text-sm text-[var(--color-nord-light)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-nord-teal)]" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-[var(--color-nord-slate)] pt-4 text-xs italic text-[var(--color-nord-mist)]">
                    {item.status}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.applications.map((app) => (
                      <span
                        key={app}
                        className="rounded-full border border-[var(--color-nord-slate)] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[var(--color-nord-teal)]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-[var(--color-nord-slate)] bg-[var(--color-nord-dark)] p-8 text-center">
              <h3 className="text-xl uppercase sm:text-3xl">Interested in Licensing This Technology?</h3>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--color-nord-mist)]">
                Both Al-G and LCUB platforms are available for licensing to manufacturers globally. Contact our team to discuss terms, exclusivity options, and technical integration.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  aria-label="Contact Nordische Energy about technology licensing"
                  className="btn-primary"
                  href="/contact"
                >
                  Contact for Licensing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="mt-14">
          <h2 className="text-4xl uppercase">Other Technologies</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {otherTechs.map((other) => {
              const OtherIcon = getIcon(other.icon);
              return (
                <Card key={other.slug} className="p-6">
                  <OtherIcon className="h-8 w-8 text-[var(--color-nord-teal)]" />
                  <h3 className="mt-4 text-2xl uppercase">{other.name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-nord-mist)]">{other.tagline}</p>
                  <Link
                    aria-label={`Learn about ${other.name}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
                    href={`/technology/${other.slug}`}
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
