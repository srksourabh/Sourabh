"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CASE_STUDY_IMAGES: Record<string, string> = {
  "ev-fleet-urban-logistics": "/images/industry-ev.png",
  "renewable-storage-solar-farm": "/images/industry-renewable.png",
  "telecom-backup-upgrade": "/images/industry-telecom.png",
};

export function CaseStudiesPreview() {
  return (
    <section className="section-divider py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Proven Performance in Real-World Applications" />
        <div className="grid gap-6">
          {CASE_STUDIES.slice(0, 2).map((study, index) => {
            const image = CASE_STUDY_IMAGES[study.slug];
            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="grid gap-6 p-7 lg:grid-cols-[0.45fr_1fr]">
                  <div>
                    <Badge>{study.industry}</Badge>
                    <p className="mt-5 text-sm uppercase tracking-[0.16em] text-[var(--color-nord-mist)]">
                      {study.client}
                    </p>
                    <h3 className="mt-3 text-2xl uppercase sm:text-3xl">{study.title}</h3>
                  </div>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {study.results.map((result) => (
                      <li key={result} className="group relative overflow-hidden rounded-2xl border border-[var(--color-nord-slate)]">
                        {/* Background image */}
                        {image ? (
                          <div className="absolute inset-0">
                            <Image
                              alt=""
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              fill
                              sizes="25vw"
                              src={image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[color:rgb(10_12_16_/_0.88)] via-[color:rgb(10_12_16_/_0.7)] to-[color:rgb(10_12_16_/_0.5)]" />
                          </div>
                        ) : null}
                        {/* Text */}
                        <p className="relative z-10 p-5 font-[var(--font-display)] text-xl font-bold uppercase leading-snug tracking-wide text-[var(--color-nord-white)]">
                          {result}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <Link
          aria-label="View all Nordische Energy case studies"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
          href="/case-studies"
        >
          View All Case Studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
