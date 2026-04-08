import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { HEADQUARTERS, SITE } from "@/lib/constants";
// HEADQUARTERS used for map query
import { buildMetadata } from "@/lib/metadata";
import { toWhatsAppHref } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Let's Build Your Battery Solution",
  description: "Contact Nordische Energy to discuss EV, storage, telecom, and custom battery requirements.",
  path: "/contact",
  keywords: ["contact battery manufacturer", "request battery quote", "battery engineering consultation"],
});

export default function ContactPage() {
  return (
    <div>
      <PageHero
        label="Contact"
        title="Let's Build Your Battery Solution"
        description="Fill in your requirement below. Our application engineers respond within 24 business hours."
        image="/images/hero-contact.png"
      />

      <section className="py-[var(--section-py)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <LeadCapture compact />
          <div className="space-y-5">
            <Card className="p-6">
              <h2 className="text-xl uppercase sm:text-3xl">Direct Contact</h2>
              <div className="mt-5 space-y-4 text-sm text-[var(--color-nord-light)]">
                <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--color-nord-teal)]" /> {SITE.email}</p>
                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--color-nord-teal)]" /> {SITE.phone}</p>
                <a
                  aria-label="Contact Nordische on WhatsApp"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-4 py-3 font-semibold text-[var(--color-nord-black)]"
                  href={toWhatsAppHref(SITE.whatsapp)}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl uppercase sm:text-3xl">Office Details</h2>
              <div className="mt-5 space-y-4 text-sm text-[var(--color-nord-light)]">
                <p className="flex items-start gap-3 whitespace-pre-line">
                  <MapPin className="mt-0.5 h-4 w-4 text-[var(--color-nord-teal)]" />
                  {SITE.address}
                </p>
                <p className="flex items-start gap-3 whitespace-pre-line">
                  <MapPin className="mt-0.5 h-4 w-4 text-[var(--color-nord-teal)]" />
                  {SITE.address}
                </p>
                <p className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 text-[var(--color-nord-teal)]" />
                  Mon–Fri 09:00–18:00 IST
                </p>
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--color-nord-slate)]">
                <iframe
                  aria-label="Map showing Nordische Energy office in Bangalore"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${HEADQUARTERS.mapQuery}&z=14&output=embed`}
                />
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl uppercase sm:text-3xl">Before You Write, Tell Us</h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--color-nord-mist)]">
                <li>1. What operating environment and duty cycle will the battery see?</li>
                <li>2. What energy, voltage, footprint, and charging targets must be met?</li>
                <li>3. Which standards, certifications, or customer approvals are mandatory?</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
