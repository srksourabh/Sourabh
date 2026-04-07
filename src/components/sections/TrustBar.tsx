"use client";

/**
 * Certification & feature trust bar with inline SVG logos.
 * Logos are embedded as SVG components so they scale without distortion.
 */

/* ---------- inline certification logo components ---------- */

function IsoLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.2" />
      <text x="24" y="20" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="700" fontFamily="sans-serif">ISO</text>
      <text x="24" y="30" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="sans-serif">9001</text>
      <text x="24" y="38" textAnchor="middle" fill="currentColor" fontSize="4.5" fontFamily="sans-serif">2015</text>
      <path d="M10 12 L14 8 L18 12" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function CeLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 10 A14 14 0 1 0 16 38" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M26 10 A14 14 0 1 0 26 38" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <line x1="26" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function RohsLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="8" width="42" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="24" y="22" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="700" fontFamily="sans-serif">RoHS</text>
      <line x1="8" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="1" />
      <text x="24" y="36" textAnchor="middle" fill="currentColor" fontSize="5" fontFamily="sans-serif">COMPLIANT</text>
    </svg>
  );
}

function ReachLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="24" y="21" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="700" fontFamily="sans-serif">REACH</text>
      <path d="M12 30 L24 26 L36 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="34" r="2" fill="currentColor" />
    </svg>
  );
}

function Un383Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="24" y="18" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="700" fontFamily="sans-serif">UN</text>
      <text x="24" y="28" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="700" fontFamily="sans-serif">38.3</text>
      <line x1="10" y1="33" x2="38" y2="33" stroke="currentColor" strokeWidth="1" />
      <text x="24" y="40" textAnchor="middle" fill="currentColor" fontSize="5" fontFamily="sans-serif">TESTED</text>
    </svg>
  );
}

function Iec62619Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="24" y="18" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="700" fontFamily="sans-serif">IEC</text>
      <text x="24" y="28" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="600" fontFamily="sans-serif">62619</text>
      <path d="M14 34 Q24 38 34 34" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

/* ---------- data ---------- */

type ItemType = "feature" | "cert";

interface TrustItem {
  label: string;
  type: ItemType;
  Logo?: React.ComponentType<{ className?: string }>;
  iconText?: string;
}

const allItems: TrustItem[] = [
  { label: "India R&D and Global Outreach", type: "feature", iconText: "🌏" },
  { label: "Non-Flammable Storage Chemistry", type: "feature", iconText: "🛡" },
  { label: "Commercialization-Ready Platforms", type: "feature", iconText: "⚙" },
  { label: "Grid to Mobility Applications", type: "feature", iconText: "⚡" },
  { label: "Recyclable Material Focus", type: "feature", iconText: "♻" },
  { label: "ISO 9001:2015", type: "cert", Logo: IsoLogo },
  { label: "CE Marking", type: "cert", Logo: CeLogo },
  { label: "RoHS Compliant", type: "cert", Logo: RohsLogo },
  { label: "REACH Certified", type: "cert", Logo: ReachLogo },
  { label: "UN38.3 Tested", type: "cert", Logo: Un383Logo },
  { label: "IEC 62619 Compliant", type: "cert", Logo: Iec62619Logo },
  { label: "150 Wh/kg Energy Density", type: "feature", iconText: "⚡" },
  { label: "3000+ Cycle Life", type: "feature", iconText: "🔄" },
  { label: "Berlin & Bengaluru", type: "feature", iconText: "📍" },
  { label: "Up to 10C Fast Charging", type: "feature", iconText: "→" },
  { label: ">90% Recyclable", type: "feature", iconText: "✓" },
  { label: "5 Technology Verticals", type: "feature", iconText: "⬡" },
  { label: "Hydrogen & Seawater Mining", type: "feature", iconText: "💧" },
];

/* ---------- components ---------- */

function MarqueeItem({ label, type, Logo, iconText }: TrustItem) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.7)] px-5 py-3 backdrop-blur-sm">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          type === "cert"
            ? "bg-[color:rgb(245_166_35_/_0.12)] text-[var(--color-nord-amber)]"
            : "bg-[color:rgb(0_212_170_/_0.12)] text-[var(--color-nord-teal)]"
        }`}
      >
        {Logo ? (
          <Logo className="h-7 w-7" />
        ) : (
          <span className="text-base">{iconText}</span>
        )}
      </span>
      <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-nord-light)]">
        {label}
      </span>
    </div>
  );
}

export function TrustBar() {
  const doubled = [...allItems, ...allItems];

  return (
    <section className="relative overflow-hidden border-y border-[var(--color-nord-slate)] bg-[var(--color-nord-steel)] py-5">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-nord-steel)] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-nord-steel)] to-transparent" />

      {/* Scrolling marquee */}
      <div className="marquee-track flex gap-4">
        {doubled.map((item, i) => (
          <MarqueeItem key={`${item.label}-${i}`} {...item} />
        ))}
      </div>
    </section>
  );
}
