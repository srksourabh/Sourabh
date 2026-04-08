import { LeadCapture } from "@/components/sections/LeadCapture";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Proven Performance in Real-World Applications",
  description: "Read how Nordische battery systems improved range, uptime, storage efficiency, and maintenance cost across live deployments.",
  path: "/case-studies",
  keywords: ["battery case studies", "energy storage project examples", "telecom battery upgrade"],
});

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHero
        label="Case Studies"
        title="Proven Performance in Real-World Applications"
        description="Read how Nordische battery systems improved range, uptime, storage efficiency, and maintenance cost across live deployments."
        image="/images/hero-case-studies.png"
      />

      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {CASE_STUDIES.map((study) => (
            <Card key={study.slug} className="p-8">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">{study.industry}</p>
                  <h2 className="mt-4 text-2xl uppercase sm:text-4xl">{study.title}</h2>
                  <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{study.client}</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-[var(--font-display)] text-2xl text-[var(--color-nord-teal)] sm:text-4xl">{study.deliveryWeeks} weeks</p>
                      <p className="text-sm text-[var(--color-nord-mist)]">Delivery timeline</p>
                    </div>
                    <div>
                      <p className="font-[var(--font-display)] text-2xl text-[var(--color-nord-teal)] sm:text-4xl">{study.units}</p>
                      <p className="text-sm text-[var(--color-nord-mist)]">Units supplied</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6">
                  <div>
                    <h3 className="text-2xl uppercase">Challenge</h3>
                    <p className="mt-3 text-sm text-[var(--color-nord-light)]">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl uppercase">Solution</h3>
                    <p className="mt-3 text-sm text-[var(--color-nord-light)]">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl uppercase">Results</h3>
                    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                      {study.results.map((result) => (
                        <li key={result} className="rounded-2xl border border-[var(--color-nord-slate)] p-4 text-sm text-[var(--color-nord-light)]">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <LeadCapture compact title="Your Application Could Be Next" description="Share the operating challenge and we will shape the battery architecture, compliance path, and delivery plan around it." />
    </div>
  );
}
