"use client";

import { WorldMap } from "@/components/ui/map";

const PARTNERS = [
  { label: "India", sub: "Bangalore (HQ)" },
  { label: "Germany", sub: "Berlin" },
  { label: "Spain", sub: "Madrid" },
  { label: "Holland", sub: "Amsterdam" },
  { label: "UK", sub: "London" },
  { label: "USA", sub: "Las Vegas" },
];

const CONNECTION_DOTS = [
  {
    start: { lat: 12.97, lng: 77.59, label: "Bangalore" },
    end: { lat: 52.52, lng: 13.40, label: "Berlin" },
  },
  {
    start: { lat: 12.97, lng: 77.59, label: "Bangalore" },
    end: { lat: 40.42, lng: -3.70, label: "Madrid" },
  },
  {
    start: { lat: 12.97, lng: 77.59, label: "Bangalore" },
    end: { lat: 52.37, lng: 4.90, label: "Amsterdam" },
  },
  {
    start: { lat: 12.97, lng: 77.59, label: "Bangalore" },
    end: { lat: 51.51, lng: -0.12, label: "London" },
  },
  {
    start: { lat: 12.97, lng: 77.59, label: "Bangalore" },
    end: { lat: 36.17, lng: -115.14, label: "Las Vegas" },
  },
];

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

      <div className="grid lg:grid-cols-[1fr_260px]">
        {/* Map */}
        <WorldMap
          dots={CONNECTION_DOTS}
          lineColor="#00d4aa"
          theme="dark"
        />

        {/* Country legend */}
        <div className="flex flex-col gap-2 border-t border-[var(--color-nord-slate)] p-4 lg:border-l lg:border-t-0">
          {PARTNERS.map((partner) => (
            <div
              key={partner.label}
              className="flex items-center gap-3 rounded-xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.7)] px-4 py-3"
            >
              <span className="flex h-3 w-3 shrink-0 rounded-full bg-[var(--color-nord-teal)]" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-nord-white)]">
                  {partner.label}
                </p>
                <p className="text-xs text-[var(--color-nord-mist)]">{partner.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
