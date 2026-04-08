"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { PRODUCT_IMAGE_MAP } from "@/lib/imagery";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/utils";

export function ProductCards() {
  return (
    <section className="section-divider py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          description="Three product lines covering the full spectrum of lithium battery applications."
          title="Our Battery Solutions"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => {
            const Icon = getIcon(product.icon);
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="group h-full border-t-4 p-6" style={{ borderTopColor: product.color }}>
                  <div className="relative mb-6 overflow-hidden rounded-[1.5rem] border border-[var(--color-nord-slate)] bg-[var(--color-nord-black)]">
                    <Image
                      alt={`${product.name} product render`}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      height={560}
                      loading="lazy"
                      src={PRODUCT_IMAGE_MAP[product.slug]}
                      width={720}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[color:rgb(10_12_16_/_0.85)] to-transparent" />
                    <div className="absolute bottom-4 left-4 rounded-full border border-[color:rgb(0_212_170_/_0.24)] bg-[color:rgb(10_12_16_/_0.82)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-nord-teal)]">
                      Product line visual
                    </div>
                  </div>
                  <Icon className="h-10 w-10" style={{ color: product.color }} />
                  <h3 className="mt-5 text-2xl uppercase sm:text-3xl">{product.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--color-nord-mist)]">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-sm text-[var(--color-nord-light)]">{product.shortDescription}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} className="tracking-[0.08em]">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    aria-label={`View specifications for ${product.name}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
                    href={`/products#${product.slug}`}
                  >
                    View Specifications <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8">
          <Link
            aria-label="Request a custom battery solution"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
            href="/contact"
          >
            Have a unique requirement? Request Custom Solution <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
