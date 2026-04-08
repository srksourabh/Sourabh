"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Eye, Users, TrendingUp } from "lucide-react";
import { ABOUT_CONTENT } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

const valueIcons = [ShieldCheck, Eye, Users, TrendingUp];

export function AboutSnapshot() {
  return (
    <section className="section-divider py-[var(--section-py)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-[var(--font-display)] text-5xl font-extrabold leading-none text-[color:rgb(0_212_170_/_0.16)] sm:text-8xl">
            01
          </p>
          <h2 className="mt-5 text-2xl uppercase sm:text-4xl md:text-5xl">{ABOUT_CONTENT.headline}</h2>
          <p className="mt-6 text-lg text-[var(--color-nord-mist)]">
            {ABOUT_CONTENT.story[0]} {ABOUT_CONTENT.story[1]}
          </p>
          <Link
            aria-label="Learn more about Nordische Energy"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
            href="/about"
          >
            Learn More About Us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {ABOUT_CONTENT.values.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full p-6">
                  <Icon className="h-7 w-7 text-[var(--color-nord-teal)]" />
                  <h3 className="mt-5 text-xl uppercase sm:text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
