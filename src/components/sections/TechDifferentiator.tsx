"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TECH_PILLARS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ParticleNetwork } from "@/components/visuals/ParticleNetwork";
import { getIcon } from "@/lib/utils";

export function TechDifferentiator() {
  return (
    <section className="bg-[var(--color-nord-deep)] py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          description="Six engineering pillars that define Nordische battery performance."
          title="Built on Advanced Battery Technology"
        />

        {/* Animated particle network visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <ParticleNetwork className="h-52" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TECH_PILLARS.map((pillar, index) => {
            const Icon = getIcon(pillar.icon);
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:rgb(0_212_170_/_0.1)] text-[var(--color-nord-teal)] transition-colors duration-300 group-hover:bg-[color:rgb(0_212_170_/_0.2)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <motion.p
                    className="mt-6 font-[var(--font-mono)] text-2xl text-[var(--color-nord-teal)] sm:text-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  >
                    {pillar.stat}
                  </motion.p>
                  <h3 className="mt-4 text-xl uppercase sm:text-2xl">{pillar.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm text-[var(--color-nord-mist)]">{pillar.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            aria-label="Explore all technology verticals"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
            href="/technology"
          >
            Explore All 5 Technology Verticals <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
