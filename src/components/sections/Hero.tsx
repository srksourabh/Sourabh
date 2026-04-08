"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useRef } from "react";
import { STATS } from "@/lib/constants";
import { HERO_IMAGES } from "@/lib/imagery";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/** SVG electricity overlay rendered on top of the hero graphic */
function ElectricityOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 480 360"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="hero-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Electricity path 1 — top arc */}
      <path d="M 40 120 Q 160 20 320 100 Q 400 140 460 80" fill="none" stroke="rgb(0 212 170 / 0.15)" strokeWidth="1.5" />
      {[0, 1.2, 2.4].map((delay, i) => (
        <motion.circle
          key={`p1-${i}`}
          r="4" fill="rgb(0 212 170)" filter="url(#hero-glow)"
          animate={{ cx: [40, 160, 320, 460], cy: [120, 40, 100, 80] }}
          transition={{ duration: 3, delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Electricity path 2 — mid horizontal */}
      <path d="M 0 200 Q 120 160 240 200 Q 360 240 480 180" fill="none" stroke="rgb(0 212 170 / 0.12)" strokeWidth="1" />
      {[0.5, 1.8, 3.0].map((delay, i) => (
        <motion.circle
          key={`p2-${i}`}
          r="3" fill="rgb(0 212 170 / 0.8)" filter="url(#hero-glow)"
          animate={{ cx: [0, 120, 240, 360, 480], cy: [200, 160, 200, 240, 180] }}
          transition={{ duration: 3.5, delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Electricity path 3 — bottom wave */}
      <path d="M 20 300 Q 100 250 200 280 Q 300 310 400 260 Q 450 240 480 260" fill="none" stroke="rgb(245 166 35 / 0.1)" strokeWidth="1" />
      {[0.3, 1.5, 2.7].map((delay, i) => (
        <motion.circle
          key={`p3-${i}`}
          r="3" fill="rgb(245 166 35 / 0.7)" filter="url(#hero-glow)"
          animate={{ cx: [20, 100, 200, 400, 480], cy: [300, 250, 280, 260, 260] }}
          transition={{ duration: 4, delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Spark bursts at intersections */}
      {[
        { cx: 240, cy: 200, d: 0 },
        { cx: 320, cy: 100, d: 1.5 },
        { cx: 160, cy: 160, d: 3 },
      ].map((spark) => (
        <motion.circle
          key={`spark-${spark.cx}`}
          cx={spark.cx} cy={spark.cy} r="2"
          fill="white"
          animate={{
            r: [0, 8, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 2, delay: spark.d, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Animated background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          alt=""
          className="h-full w-full object-cover"
          fill
          priority
          src={HERO_IMAGES.main}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-nord-black)] via-[color:rgb(10_12_16_/_0.85)] to-[color:rgb(10_12_16_/_0.6)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-nord-black)] via-transparent to-[color:rgb(10_12_16_/_0.4)]" />
      </motion.div>

      {/* Animated grid texture */}
      <div className="grid-texture absolute inset-0 opacity-40" />

      {/* Floating orbs */}
      <FloatingOrb className="absolute right-[15%] top-[20%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgb(0_212_170_/_0.15),transparent_70%)] blur-2xl" delay={0} />
      <FloatingOrb className="absolute bottom-[25%] left-[10%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgb(0_212_170_/_0.1),transparent_70%)] blur-3xl" delay={2} />
      <FloatingOrb className="absolute right-[30%] top-[60%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgb(245_166_35_/_0.08),transparent_70%)] blur-2xl" delay={4} />

      {/* ─── MAIN CONTENT ─── */}
      <motion.div className="relative mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8" style={{ y: textY, opacity }}>

        {/* TOP ROW: Text left + Graphic right (pushed up) */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left — headline, description, CTA */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>Pioneering Non-Flammable Energy Storage</Badge>
            </motion.div>

            <motion.h1
              className="mt-6 text-balance text-3xl font-extrabold uppercase leading-[0.92] text-[var(--color-nord-white)] sm:text-5xl md:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Next-Generation Energy Storage for a Sustainable World
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg text-[var(--color-nord-mist)] sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From aluminium-graphene batteries to advanced material sciences — we engineer safer,
              longer-lasting, and fully recyclable energy storage platforms for grid, mobility,
              telecom, and industrial applications worldwide.
            </motion.p>

            <motion.div
              className="mt-6 grid gap-3 sm:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <div className="group rounded-2xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.75)] p-4 backdrop-blur-sm transition hover:border-[color:rgb(0_212_170_/_0.4)]">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">India &amp; Global Operations</p>
                <p className="mt-2 text-sm text-[var(--color-nord-light)]">Nordische Energy Systems Pvt Ltd</p>
                <p className="text-sm text-[var(--color-nord-mist)]">Bengaluru &bull; Berlin</p>
              </div>
              <div className="group rounded-2xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.75)] p-4 backdrop-blur-sm transition hover:border-[color:rgb(0_212_170_/_0.4)]">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">Core Platforms</p>
                <p className="mt-2 text-sm text-[var(--color-nord-light)]">Aluminium-Graphene &bull; Lead Ultra-Carbon</p>
                <p className="text-sm text-[var(--color-nord-mist)]">Non-flammable &bull; &gt;90% recyclable</p>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <Button aria-label="Request a custom solution" href="/contact">
                Request a Custom Solution <ArrowRight className="h-4 w-4" />
              </Button>
              <Button aria-label="Download the product catalogue" href="/catalogue.pdf" variant="ghost">
                Download Catalogue <Download className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right — Graphic pushed up with electricity inside */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative -mt-4">
              {/* Glow behind */}
              <div className="absolute -inset-4 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgb(0_212_170_/_0.12),transparent_70%)] blur-xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.9)] p-1">
                <Image
                  alt="Advanced energy storage systems"
                  className="h-auto w-full rounded-[1.75rem]"
                  height={720}
                  priority
                  src={HERO_IMAGES.abstract}
                  width={960}
                />

                {/* ⚡ Electricity flowing inside the graphic */}
                <ElectricityOverlay />

                {/* Floating labels */}
                <motion.div
                  className="absolute left-6 top-6 rounded-full border border-[color:rgb(0_212_170_/_0.3)] bg-[color:rgb(10_12_16_/_0.9)] px-4 py-2 text-sm font-[var(--font-mono)] text-[var(--color-nord-teal)] backdrop-blur-sm"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  150 Wh/kg density
                </motion.div>

                <motion.div
                  className="absolute bottom-6 right-6 rounded-full border border-[color:rgb(0_212_170_/_0.3)] bg-[color:rgb(10_12_16_/_0.9)] px-4 py-2 text-sm font-[var(--font-mono)] text-[var(--color-nord-teal)] backdrop-blur-sm"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  3,000+ cycle life
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 rounded-full border border-[color:rgb(245_166_35_/_0.3)] bg-[color:rgb(10_12_16_/_0.9)] px-4 py-2 text-sm font-[var(--font-mono)] text-[var(--color-nord-amber)] backdrop-blur-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  Non-flammable
                </motion.div>
              </div>

              {/* Mini tech cards below graphic */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "5 Technology Verticals", color: "teal" },
                  { label: "India + Europe Operations", color: "teal" },
                  { label: "Up to 10C Fast Charging", color: "amber" },
                  { label: ">90% Recyclable Materials", color: "teal" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className={`rounded-xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.85)] px-4 py-3 text-sm backdrop-blur-sm ${item.color === "amber" ? "text-[var(--color-nord-amber)]" : "text-[var(--color-nord-light)]"}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  >
                    {item.label}
                  </motion.div>
                ))}
              </div>

              {/* ─── STATS — compact, tucked under graphic on the right ─── */}
              <motion.div
                className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.7)] p-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
              >
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-[var(--font-display)] text-2xl font-extrabold leading-none text-[var(--color-nord-teal)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--color-nord-mist)]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── MOBILE STATS — visible only on small screens ─── */}
      <motion.div
        className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:hidden"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.7)] p-4 backdrop-blur-sm">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-[var(--font-display)] text-xl font-extrabold leading-none text-[var(--color-nord-teal)]">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-[var(--color-nord-mist)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-[var(--color-nord-slate)]">
          <motion.div
            className="mx-auto mt-2 h-2 w-1 rounded-full bg-[var(--color-nord-teal)]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
