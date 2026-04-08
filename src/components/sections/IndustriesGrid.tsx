"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { INDUSTRY_IMAGE_MAP } from "@/lib/imagery";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/utils";

export function IndustriesGrid() {
  return (
    <section className="section-divider py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Powering Multiple Industries" />
        <div className="grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((industry, index) => {
            const Icon = getIcon(industry.icon);
            const image = INDUSTRY_IMAGE_MAP[industry.slug as keyof typeof INDUSTRY_IMAGE_MAP];
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="group relative h-full overflow-hidden p-7 hover:-translate-y-1">
                  {/* Background image — full opacity on right, fades to transparent on left */}
                  {image ? (
                    <div className="absolute inset-0">
                      <Image
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                        sizes="50vw"
                        src={image}
                      />
                      {/* Gradient: solid dark on left → transparent on right */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-nord-deep)] via-[var(--color-nord-deep)] via-40% to-transparent" />
                    </div>
                  ) : null}

                  {/* Content on top */}
                  <div className="relative z-10">
                    <Icon className="h-10 w-10 text-[var(--color-nord-teal)]" />
                    <h3 className="mt-5 text-2xl uppercase sm:text-3xl">{industry.name}</h3>
                    <p className="mt-3 max-w-sm text-lg text-[var(--color-nord-light)]">{industry.headline}</p>
                    <Link
                      aria-label={`Explore the ${industry.name} industry page`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
                      href={`/industries/${industry.slug}`}
                    >
                      Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
