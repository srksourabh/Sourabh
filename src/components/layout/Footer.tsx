import Image from "next/image";
import Link from "next/link";
import { Download, MessageCircle } from "lucide-react";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { getIcon, toWhatsAppHref } from "@/lib/utils";

export function Footer() {
  const LinkedIn = getIcon("linkedin");
  const XIcon = getIcon("x");

  return (
    <footer className="mt-24 border-t border-[var(--color-nord-slate)] bg-[var(--color-nord-black)]">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1.8fr] lg:px-8">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3">
              <Image alt="Nordische Energy" className="h-10 w-auto" height={40} src="/logo.png" width={133} />
              <p className="font-[var(--font-display)] text-xl uppercase tracking-[0.14em] text-[var(--color-nord-white)] sm:text-3xl sm:tracking-[0.18em]">
                Nordische <span className="text-[var(--color-nord-teal)]">Energy</span>
              </p>
            </div>
            <p className="mt-4 max-w-md text-sm text-[var(--color-nord-mist)]">{SITE.description}</p>
            <div className="mt-5 grid gap-3 text-sm text-[var(--color-nord-light)]">
              <div className="rounded-2xl border border-[var(--color-nord-slate)] p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">Headquarters — India</p>
                <p className="mt-2 whitespace-pre-line">{SITE.address}</p>
                <p className="mt-2 text-[var(--color-nord-mist)]">{SITE.phone} / {SITE.phone2}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              aria-label="Visit Nordische Energy on LinkedIn"
              className="rounded-full border border-[var(--color-nord-slate)] p-3 text-[var(--color-nord-light)] transition hover:border-[var(--color-nord-teal)] hover:text-[var(--color-nord-teal)]"
              href={SITE.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedIn className="h-5 w-5" />
            </a>
            <a
              aria-label="Visit Nordische Energy on X"
              className="rounded-full border border-[var(--color-nord-slate)] p-3 text-[var(--color-nord-light)] transition hover:border-[var(--color-nord-teal)] hover:text-[var(--color-nord-teal)]"
              href={SITE.xtwitter}
              rel="noreferrer"
              target="_blank"
            >
              <XIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button aria-label="Download business brochure" href={SITE.brochure} variant="ghost">
              <Download className="h-4 w-4" />
              Download Brochure
            </Button>
            <Button aria-label="Chat on WhatsApp" href={toWhatsAppHref(SITE.whatsapp)} target="_blank" variant="outline">
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-nord-white)]">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      aria-label={`Go to ${link.label}`}
                      className="text-sm text-[var(--color-nord-mist)] transition hover:text-[var(--color-nord-teal)]"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--color-nord-slate)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-[var(--color-nord-mist)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2025 Nordische Energy Systems Pvt Ltd. CIN: {SITE.cin}. All rights reserved.</p>
          <p>Partners in India · Germany · Spain · Holland · UK · USA</p>
        </div>
      </div>
    </footer>
  );
}
