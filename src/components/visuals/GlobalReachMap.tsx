"use client";

import { motion } from "framer-motion";

/**
 * SVG world map showing NES partner locations with animated
 * connection arcs from Bangalore (HQ) to each partner country.
 *
 * Continent paths are derived from Natural Earth simplified data,
 * projected onto a 1000×500 equirectangular (plate carrée) viewBox.
 * Coordinate mapping: x = (lon + 180) / 360 * 1000, y = (90 - lat) / 180 * 500
 */

const HQ = { x: 715, y: 215, label: "Bangalore", sub: "HQ" };

const PARTNERS = [
  { x: 715, y: 215, label: "India", sub: "Bangalore" },
  { x: 537, y: 104, label: "Germany", sub: "Berlin" },
  { x: 491, y: 138, label: "Spain", sub: "Madrid" },
  { x: 514, y: 104, label: "Holland", sub: "Amsterdam" },
  { x: 500, y: 107, label: "UK", sub: "London" },
  { x: 183, y: 149, label: "USA", sub: "Las Vegas" },
];

function ArcPath({ from, to, delay }: { from: { x: number; y: number }; to: { x: number; y: number }; delay: number }) {
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - Math.abs(from.x - to.x) * 0.15 - 30;
  const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  return (
    <g>
      <path d={d} fill="none" stroke="rgb(0 212 170 / 0.15)" strokeWidth="1.5" />
      <motion.circle
        r="3"
        fill="rgb(0 212 170)"
        filter="url(#map-glow)"
        animate={{
          cx: [from.x, midX, to.x],
          cy: [from.y, midY, to.y],
        }}
        transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

export function GlobalReachMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] bg-[var(--color-nord-black)]">
      {/* Title bar */}
      <div className="border-b border-[var(--color-nord-slate)] px-6 py-4">
        <h3 className="font-[var(--font-display)] text-2xl font-bold uppercase text-[var(--color-nord-white)]">
          Global Business Network
        </h3>
        <p className="text-sm text-[var(--color-nord-teal)]">Bangalore to the World</p>
      </div>

      <svg viewBox="0 0 1000 500" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="map-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="dot-gradient">
            <stop offset="0%" stopColor="rgb(0 212 170)" />
            <stop offset="100%" stopColor="rgb(0 212 170 / 0)" />
          </radialGradient>
        </defs>

        {/* Dark ocean background */}
        <rect width="1000" height="500" fill="#0a0c10" />

        {/* ── CONTINENTS (Natural Earth simplified, equirectangular projection) ── */}

        {/* North America */}
        <path
          d="M 72 52 L 83 48 L 100 50 L 114 46 L 128 44 L 145 50 L 152 58
             L 160 62 L 172 60 L 185 62 L 195 58 L 205 60 L 210 68 L 220 72
             L 232 76 L 238 85 L 235 95 L 240 105 L 250 110 L 252 120 L 248 130
             L 258 138 L 262 148 L 258 158 L 252 165 L 245 170 L 235 178 L 228 188
             L 218 196 L 210 202 L 205 210 L 195 215 L 185 220 L 178 230 L 170 238
             L 162 242 L 155 248 L 148 256 L 140 262 L 132 268 L 125 265 L 120 258
             L 115 248 L 108 240 L 100 232 L 95 222 L 88 215 L 82 205 L 76 195
             L 70 185 L 65 175 L 60 165 L 58 155 L 60 145 L 65 135 L 70 125
             L 68 115 L 65 105 L 62 95 L 60 85 L 62 75 L 68 65 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Greenland */}
        <path
          d="M 280 18 L 295 14 L 312 16 L 325 22 L 330 32 L 325 42 L 315 48
             L 302 50 L 290 46 L 282 38 L 278 28 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Alaska peninsula */}
        <path
          d="M 60 85 L 50 90 L 38 96 L 30 104 L 25 112 L 28 120 L 38 122
             L 48 118 L 58 112 L 65 105 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Central America & Caribbean isthmus */}
        <path
          d="M 210 202 L 215 208 L 218 215 L 222 222 L 225 230 L 222 238
             L 218 242 L 212 240 L 208 232 L 205 222 L 205 210 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Cuba */}
        <path
          d="M 218 198 L 228 195 L 238 196 L 245 200 L 242 205 L 232 207
             L 220 205 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* South America */}
        <path
          d="M 222 242 L 232 238 L 242 235 L 255 232 L 268 232 L 280 235
             L 290 242 L 298 250 L 302 260 L 305 272 L 308 285 L 310 300
             L 308 315 L 305 330 L 300 345 L 292 358 L 282 370 L 272 380
             L 262 388 L 252 392 L 244 388 L 238 378 L 234 365 L 230 350
             L 226 335 L 222 320 L 218 305 L 215 290 L 215 275 L 218 260
             L 220 250 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Iceland */}
        <path
          d="M 418 72 L 428 68 L 438 70 L 445 76 L 440 84 L 430 86
             L 420 82 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Great Britain */}
        <path
          d="M 490 98 L 496 94 L 503 96 L 507 102 L 505 110 L 500 115
             L 494 112 L 490 105 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Ireland */}
        <path
          d="M 482 102 L 488 99 L 492 104 L 490 110 L 484 112 L 480 108 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Europe (mainland) */}
        <path
          d="M 490 98 L 500 94 L 510 92 L 522 90 L 535 90 L 548 93
             L 558 98 L 565 106 L 568 115 L 565 124 L 558 130 L 552 138
             L 545 145 L 538 150 L 530 155 L 522 158 L 515 162 L 508 165
             L 500 168 L 494 172 L 490 178 L 486 185 L 482 192 L 478 198
             L 480 188 L 478 178 L 474 168 L 470 158 L 468 148 L 470 138
             L 472 128 L 475 118 L 478 108 L 482 100 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Scandinavia */}
        <path
          d="M 510 72 L 518 65 L 528 62 L 538 65 L 545 72 L 548 82
             L 545 92 L 538 98 L 528 100 L 520 98 L 514 92 L 510 82 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Iberian Peninsula */}
        <path
          d="M 468 138 L 478 132 L 488 128 L 498 130 L 505 138 L 505 148
             L 500 158 L 490 165 L 480 165 L 472 158 L 468 148 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Italy */}
        <path
          d="M 520 138 L 528 132 L 535 135 L 538 145 L 535 155 L 530 165
             L 525 172 L 520 168 L 518 158 L 518 148 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Africa */}
        <path
          d="M 478 198 L 488 192 L 498 188 L 510 185 L 522 185 L 535 188
             L 548 194 L 558 202 L 565 212 L 568 224 L 570 238 L 570 252
             L 568 268 L 564 284 L 558 300 L 550 315 L 540 330 L 530 344
             L 518 355 L 506 362 L 495 362 L 485 355 L 476 344 L 469 330
             L 464 315 L 460 300 L 458 285 L 458 270 L 460 255 L 462 240
             L 462 225 L 465 212 L 470 202 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Madagascar */}
        <path
          d="M 572 318 L 578 312 L 584 316 L 586 326 L 582 336 L 575 338
             L 571 330 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Russia / Northern Asia */}
        <path
          d="M 548 50 L 565 45 L 585 42 L 610 40 L 640 38 L 670 38
             L 700 40 L 730 42 L 758 45 L 782 50 L 802 55 L 818 62
             L 828 70 L 830 80 L 825 90 L 815 98 L 800 104 L 782 108
             L 762 110 L 742 108 L 722 105 L 702 102 L 682 100 L 662 98
             L 642 98 L 622 100 L 602 104 L 582 108 L 565 112 L 552 116
             L 542 120 L 535 112 L 530 102 L 532 92 L 538 82 L 544 72
             L 548 62 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Middle East & Arabian Peninsula */}
        <path
          d="M 565 162 L 578 158 L 592 155 L 608 155 L 622 158 L 635 165
             L 642 175 L 645 188 L 642 202 L 635 215 L 625 228 L 612 238
             L 598 245 L 585 245 L 575 238 L 568 225 L 565 210 L 565 195
             L 565 180 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* India subcontinent */}
        <path
          d="M 648 165 L 662 160 L 678 158 L 694 162 L 706 170 L 714 182
             L 718 196 L 718 210 L 715 225 L 710 240 L 702 252 L 692 262
             L 682 268 L 672 265 L 664 255 L 658 242 L 654 228 L 651 214
             L 649 200 L 648 185 L 648 172 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Sri Lanka */}
        <path
          d="M 698 272 L 703 268 L 707 272 L 706 280 L 700 282 L 696 277 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* China & East Asia */}
        <path
          d="M 702 102 L 720 100 L 740 98 L 758 98 L 775 100 L 788 106
             L 798 115 L 804 126 L 804 138 L 800 150 L 792 160 L 780 168
             L 768 174 L 755 178 L 742 180 L 728 178 L 715 172 L 704 163
             L 696 153 L 690 142 L 688 130 L 690 118 L 696 109 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Southeast Asia peninsula */}
        <path
          d="M 740 178 L 750 174 L 762 175 L 772 180 L 778 190 L 778 202
             L 774 214 L 768 224 L 760 232 L 750 238 L 740 238 L 732 232
             L 728 220 L 728 208 L 732 196 L 736 185 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Malay Peninsula */}
        <path
          d="M 762 230 L 768 238 L 770 248 L 768 258 L 762 262 L 756 258
             L 754 248 L 756 238 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Borneo */}
        <path
          d="M 775 238 L 790 230 L 805 232 L 815 242 L 815 258 L 808 268
             L 795 272 L 782 268 L 774 258 L 772 246 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Sumatra */}
        <path
          d="M 726 265 L 742 255 L 758 255 L 770 262 L 772 272 L 762 280
             L 746 282 L 732 278 L 724 270 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Java */}
        <path
          d="M 740 290 L 755 285 L 772 286 L 782 292 L 780 300 L 765 304
             L 748 302 L 738 296 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Philippines */}
        <path
          d="M 810 198 L 818 192 L 825 195 L 828 205 L 824 215 L 815 218
             L 808 212 L 808 202 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Japan */}
        <path
          d="M 835 120 L 842 112 L 850 112 L 855 120 L 852 130 L 844 134
             L 836 130 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Korean Peninsula */}
        <path
          d="M 818 128 L 824 122 L 830 124 L 832 132 L 828 140 L 820 142
             L 815 136 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* Australia */}
        <path
          d="M 800 342 L 820 332 L 845 325 L 870 322 L 895 325 L 916 334
             L 930 346 L 938 360 L 936 375 L 928 388 L 914 398 L 895 405
             L 872 408 L 848 405 L 826 396 L 808 382 L 796 366 L 794 350 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* New Zealand (North Island) */}
        <path
          d="M 956 388 L 962 380 L 968 382 L 970 392 L 965 400 L 958 398 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* New Zealand (South Island) */}
        <path
          d="M 958 405 L 965 400 L 972 404 L 974 415 L 968 422 L 960 420
             L 956 412 Z"
          fill="#1c2333" stroke="#2a3549" strokeWidth="0.8"
        />

        {/* ── GRID LINES ── */}
        {[100, 200, 300, 400].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="rgb(0 212 170 / 0.04)" strokeWidth="0.5" />
        ))}
        {[200, 400, 600, 800].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="500" stroke="rgb(0 212 170 / 0.04)" strokeWidth="0.5" />
        ))}

        {/* ── CONNECTION ARCS from Bangalore to each partner ── */}
        {PARTNERS.filter((p) => p.label !== "India").map((partner, i) => (
          <ArcPath key={partner.label} from={HQ} to={partner} delay={i * 0.6} />
        ))}

        {/* ── PARTNER LOCATION DOTS ── */}
        {PARTNERS.map((partner, i) => (
          <g key={partner.label}>
            {/* Pulse ring */}
            <motion.circle
              cx={partner.x} cy={partner.y}
              fill="none" stroke="rgb(0 212 170 / 0.3)"
              animate={{ r: [6, 16, 6], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
            />
            {/* Core dot */}
            <circle cx={partner.x} cy={partner.y} r="5" fill="rgb(0 212 170)" filter="url(#map-glow)" />
            {/* Glow halo */}
            <circle cx={partner.x} cy={partner.y} r="12" fill="url(#dot-gradient)" opacity="0.4" />
            {/* City label */}
            <text
              x={partner.x}
              y={partner.y - 14}
              textAnchor="middle"
              fill="rgb(0 212 170)"
              fontSize="12"
              fontFamily="var(--font-display)"
              fontWeight="700"
            >
              {partner.label}
            </text>
            <text
              x={partner.x}
              y={partner.y + 22}
              textAnchor="middle"
              fill="rgb(132 148 176)"
              fontSize="9"
              fontFamily="sans-serif"
            >
              {partner.sub}
            </text>
          </g>
        ))}

        {/* ── HQ SPECIAL MARKER ── */}
        <motion.circle
          cx={HQ.x} cy={HQ.y} r="8"
          fill="none" stroke="rgb(0 212 170)" strokeWidth="2"
          animate={{ r: [8, 20, 8], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}
