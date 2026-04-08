"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MANUFACTURING_CONTENT } from "@/lib/constants";
import { MANUFACTURING_IMAGE } from "@/lib/imagery";
import { Badge } from "@/components/ui/Badge";
import { ChargingCycleAnimation } from "@/components/visuals/ChargingCycleAnimation";

export function ManufacturingStrip() {
  return (
    <section className="bg-[var(--color-nord-deep)] py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Wide manufacturing image with overlay */}
        <motion.div
          className="relative mb-12 overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            alt="Nordische Energy manufacturing facility"
            className="h-64 w-full object-cover sm:h-80"
            height={480}
            src={MANUFACTURING_IMAGE}
            width={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-nord-black)] via-[color:rgb(10_12_16_/_0.5)] to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-nord-teal)]">
              Manufacturing
            </p>
            <h2 className="mt-2 text-xl uppercase sm:text-3xl md:text-4xl">{MANUFACTURING_CONTENT.headline}</h2>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-lg text-[var(--color-nord-mist)]">
              Our facility spans 4,200 m² and operates under ISO 9001:2015 quality
              management. Dry-room assembly, automated cell grading, and computer-controlled formation cycling
              ensure every unit meets specification before shipment.
            </p>

            <ol className="mt-8 space-y-4">
              {MANUFACTURING_CONTENT.capabilities.slice(0, 3).map((item, index) => (
                <motion.li
                  key={item.title}
                  className="flex gap-4 border-b border-[var(--color-nord-slate)] pb-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="font-[var(--font-display)] text-3xl text-[var(--color-nord-teal)]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl uppercase sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-nord-mist)]">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-3">
              {MANUFACTURING_CONTENT.certifications.map((cert) => (
                <Badge key={cert} className="tracking-[0.08em]">
                  {cert}
                </Badge>
              ))}
            </div>

            <Link
              aria-label="Tour the Nordische Energy manufacturing page"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
              href="/manufacturing"
            >
              Tour Our Manufacturing <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Charging cycle animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ChargingCycleAnimation className="h-full min-h-[320px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
