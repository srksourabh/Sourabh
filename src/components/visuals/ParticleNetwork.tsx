"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PILLAR_IMAGES = [
  { src: "/images/pillar-energy-density.png", alt: "High Energy Density" },
  { src: "/images/pillar-safety.png", alt: "Enhanced Safety" },
  { src: "/images/pillar-lifecycle.png", alt: "Extended Lifecycle" },
  { src: "/images/pillar-bms.png", alt: "Intelligent BMS" },
  { src: "/images/pillar-thermal.png", alt: "Thermal Management" },
  { src: "/images/pillar-sustainability.png", alt: "Sustainability" },
];

/* Nodes positioned as percentages so they span the full container */
const NODES = [
  { xPct: 5,  yPct: 25, label: "R&D", size: 8 },
  { xPct: 18, yPct: 18, label: "Al-G", size: 10 },
  { xPct: 35, yPct: 30, label: "BMS", size: 9 },
  { xPct: 50, yPct: 15, label: "Grid", size: 9 },
  { xPct: 65, yPct: 28, label: "H₂", size: 8 },
  { xPct: 80, yPct: 20, label: "IoT", size: 8 },
  { xPct: 95, yPct: 30, label: "AI", size: 7 },
  { xPct: 10, yPct: 72, label: "EV", size: 9 },
  { xPct: 28, yPct: 80, label: "LUC", size: 8 },
  { xPct: 45, yPct: 70, label: "ESS", size: 9 },
  { xPct: 60, yPct: 82, label: "LFP", size: 8 },
  { xPct: 75, yPct: 68, label: "NMC", size: 8 },
  { xPct: 92, yPct: 75, label: "SiC", size: 7 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
  [0, 7], [1, 8], [2, 9], [3, 10], [4, 11], [5, 12],
  [1, 3], [2, 4], [4, 6], [7, 9], [9, 11], [8, 10], [10, 12],
];

/**
 * Animated particle network with connecting lines overlaid on
 * a 3x2 collage of the six engineering pillar images.
 * Uses percentage-based positioning so nodes span the full container.
 */
export function ParticleNetwork({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] ${className}`}>
      {/* 3x2 image collage background */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
        {PILLAR_IMAGES.map((img) => (
          <div key={img.alt} className="relative overflow-hidden">
            <Image
              alt={img.alt}
              className="h-full w-full object-cover"
              fill
              sizes="33vw"
              src={img.src}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay so the animation remains visible */}
      <div className="absolute inset-0 bg-[color:rgb(10_12_16_/_0.65)]" />

      {/* Full-coverage SVG network using percentage-based viewBox */}
      <svg
        className="relative z-10 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges with flowing particles */}
        {EDGES.map(([a, b], i) => (
          <g key={`edge-${i}`}>
            <line
              x1={NODES[a].xPct} y1={NODES[a].yPct}
              x2={NODES[b].xPct} y2={NODES[b].yPct}
              stroke="rgb(0 212 170 / 0.2)" strokeWidth="0.2"
              vectorEffect="non-scaling-stroke"
            />
            <motion.circle
              r="0.6"
              fill="rgb(0 212 170)"
              filter="url(#node-glow)"
              animate={{
                cx: [NODES[a].xPct, NODES[b].xPct],
                cy: [NODES[a].yPct, NODES[b].yPct],
              }}
              transition={{
                duration: 2.5 + i * 0.2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        ))}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Pulsing outer ring */}
            <motion.circle
              cx={node.xPct} cy={node.yPct}
              fill="none" stroke="rgb(0 212 170 / 0.25)"
              strokeWidth="0.15"
              vectorEffect="non-scaling-stroke"
              animate={{
                r: [2.5, 4, 2.5],
                opacity: [0.3, 0.08, 0.3],
              }}
              transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
            />
            {/* Solid node */}
            <circle
              cx={node.xPct} cy={node.yPct} r="2"
              fill="rgb(0 212 170 / 0.15)"
              stroke="rgb(0 212 170 / 0.7)"
              strokeWidth="0.15"
              vectorEffect="non-scaling-stroke"
            />
            <motion.circle
              cx={node.xPct} cy={node.yPct} r="2"
              fill="rgb(0 212 170 / 0.08)"
              stroke="rgb(0 212 170 / 0.9)"
              strokeWidth="0.2"
              vectorEffect="non-scaling-stroke"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: i * 0.25, repeat: Infinity }}
            />
            {/* Label */}
            <text
              x={node.xPct} y={node.yPct}
              textAnchor="middle"
              dominantBaseline="central"
              fill="rgb(0 212 170)"
              fontSize="1.6"
              fontFamily="monospace"
              fontWeight="600"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
