"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={cn("mb-12 flex flex-col gap-5", centered && "items-center text-center", className)}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className={cn("max-w-3xl", centered && "mx-auto")}>
        <h2 className="accent-line text-balance text-2xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base text-[var(--color-nord-mist)] sm:text-lg">{description}</p>
        ) : null}
      </div>
      {action}
    </motion.div>
  );
}
