"use client";

import { motion } from "framer-motion";

/**
 * Animated battery cross-section showing charging with color transitions
 * from red (depleted) to amber (charging) to teal (charged).
 */
export function BatteryChargingAnimation({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] bg-[var(--color-nord-black)] p-8 ${className}`}>
      <svg viewBox="0 0 400 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="charge-level" x1="0" y1="0" x2="1" y2="0">
            <motion.stop
              offset="0%"
              animate={{ stopColor: ["#e05252", "#f5a623", "#00d4aa"] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.stop
              offset="100%"
              animate={{ stopColor: ["#e05252aa", "#f5a62366", "#00d4aa66"] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            />
          </linearGradient>
          <filter id="inner-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Battery outer shell */}
        <rect x="60" y="30" width="240" height="140" rx="12" fill="none" stroke="rgb(42 53 73)" strokeWidth="3" />
        <rect x="300" y="70" width="16" height="60" rx="4" fill="rgb(42 53 73)" />

        {/* Cell separators */}
        {[120, 180, 240].map((x) => (
          <line key={x} x1={x} y1="40" x2={x} y2="160" stroke="rgb(42 53 73)" strokeWidth="1.5" />
        ))}

        {/* Charging fill — left to right */}
        <motion.rect
          x="66" y="36" height="128" rx="8"
          fill="url(#charge-level)"
          animate={{ width: [0, 228] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />

        {/* Electricity sparks during charging */}
        {[80, 120, 160, 200].map((y, i) => (
          <motion.g key={y}>
            <motion.line
              x1={180} y1={y} x2={180} y2={y}
              stroke="rgb(255 255 255 / 0.8)" strokeWidth="2" strokeLinecap="round"
              animate={{
                x1: [80, 280, 80],
                x2: [85, 285, 85],
                opacity: [0, 0.8, 0],
              }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            />
            <motion.circle
              cy={y} r="2" fill="white"
              animate={{ cx: [80, 285, 80], opacity: [0, 1, 0] }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            />
          </motion.g>
        ))}

        {/* Percentage text */}
        <motion.text
          x="180" y="108" textAnchor="middle"
          fill="white" fontSize="28" fontFamily="var(--font-display)" fontWeight="800"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.tspan
            animate={{ children: ["0%", "25%", "50%", "75%", "100%"] } as Record<string, string[]>}
          >
            CHARGING
          </motion.tspan>
        </motion.text>

        {/* SOC / SOH labels */}
        <text x="60" y="192" fill="rgb(0 212 170 / 0.7)" fontSize="9" fontFamily="monospace">SOC ±2% accuracy</text>
        <text x="240" y="192" fill="rgb(0 212 170 / 0.7)" fontSize="9" fontFamily="monospace" textAnchor="end">Kalman-filter estimation</text>
      </svg>

      {/* Status indicators */}
      <div className="mt-4 flex justify-between text-xs font-[var(--font-mono)]">
        <motion.span
          className="rounded-full px-3 py-1"
          animate={{
            color: ["#e05252", "#f5a623", "#00d4aa"],
            borderColor: ["rgb(224 82 82 / 0.3)", "rgb(245 166 35 / 0.3)", "rgb(0 212 170 / 0.3)"],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          style={{ border: "1px solid" }}
        >
          CELL VOLTAGE: 3.2V → 4.2V
        </motion.span>
        <motion.span
          className="text-[var(--color-nord-mist)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          TEMP: 25°C ±2°C
        </motion.span>
      </div>
    </div>
  );
}
