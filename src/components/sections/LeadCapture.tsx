"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CAPACITY_OPTIONS, INDUSTRIES_OPTIONS, SITE } from "@/lib/constants";
import { submitLeadCapture } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { toWhatsAppHref } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Enter your full name."),
  company: z.string().min(1, "Enter your company name."),
  industry: z.string().min(1, "Select an industry."),
  description: z.string().min(20, "Describe your application in at least 20 characters."),
  capacity: z.string().min(1, "Select a capacity range."),
  phone: z.string().min(7, "Enter a valid phone or WhatsApp number."),
  email: z.string().email("Enter a valid email address."),
  source: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof schema>;

type LeadCaptureProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export function LeadCapture({
  title = "Get a Custom Battery Solution",
  description = "Tell us about your application. Our engineering team responds within 24 hours.",
  compact = false,
}: LeadCaptureProps) {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      industry: "",
      capacity: "",
      source: "",
    },
  });

  const onSubmit = (values: LeadFormValues) => {
    startTransition(async () => {
      setSubmitError(null);
      if (!endpoint) {
        setSubmitError("Contact endpoint is not configured yet. Please use WhatsApp or email us directly.");
        return;
      }

      const response = await submitLeadCapture(endpoint, values);

      if (response.ok) {
        setSubmitted(true);
        reset();
        return;
      }

      setSubmitError("We could not submit your request right now. Please try WhatsApp or email.");
    });
  };

  return (
    <section className={`${compact ? "py-12" : "py-[var(--section-py)]"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-[2rem] border border-[var(--color-nord-slate)] border-l-4 border-l-[var(--color-nord-teal)] bg-[linear-gradient(135deg,rgb(17_21_32)_0%,rgb(10_12_16)_100%)] p-6 sm:p-8 lg:p-10"
        >
          <SectionHeader className="mb-8" title={title} description={description} />
          {submitted ? (
            <div className="rounded-2xl border border-[color:rgb(0_212_170_/_0.25)] bg-[color:rgb(0_212_170_/_0.08)] p-6">
              <h3 className="text-2xl uppercase text-[var(--color-nord-white)]">Submission Received</h3>
              <p className="mt-3 text-[var(--color-nord-light)]">
                Thank you. A Nordische application engineer will respond within 24 hours with the next
                technical steps.
              </p>
            </div>
          ) : (
            <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name")} className={inputClasses} />
              </Field>
              <Field label="Company Name" error={errors.company?.message}>
                <input {...register("company")} className={inputClasses} />
              </Field>
              <Field label="Industry" error={errors.industry?.message}>
                <select {...register("industry")} className={inputClasses}>
                  <option value="">Select your industry</option>
                  {INDUSTRIES_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Battery Capacity Needed" error={errors.capacity?.message}>
                <select {...register("capacity")} className={inputClasses}>
                  <option value="">Choose a range</option>
                  {CAPACITY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field className="md:col-span-2" label="Application Description" error={errors.description?.message}>
                <textarea {...register("description")} className={`${inputClasses} min-h-36 resize-y`} />
              </Field>
              <Field label="Phone / WhatsApp" error={errors.phone?.message}>
                <input {...register("phone")} className={inputClasses} />
              </Field>
              <Field label="Email Address" error={errors.email?.message}>
                <input {...register("email")} className={inputClasses} type="email" />
              </Field>
              <Field label="How did you hear about us?" error={errors.source?.message}>
                <select {...register("source")} className={inputClasses}>
                  <option value="">Optional</option>
                  <option value="search">Search</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Referral</option>
                  <option value="event">Industry Event</option>
                </select>
              </Field>
              <div className="md:col-span-2">
                <Button aria-label="Submit your requirement" className="w-full" type="submit">
                  {isPending ? "Submitting..." : "Submit Requirement"} <ArrowRight className="h-4 w-4" />
                </Button>
                {submitError ? (
                  <p className="mt-3 text-sm text-[var(--color-nord-red)]">{submitError}</p>
                ) : null}
              </div>
            </form>
          )}
          <div className="mt-6 flex flex-col gap-3 text-sm text-[var(--color-nord-mist)] sm:flex-row sm:items-center sm:justify-between">
            <a
              aria-label="Chat directly on WhatsApp"
              className="inline-flex items-center gap-2 text-[var(--color-nord-teal)]"
              href={toWhatsAppHref(SITE.whatsapp)}
              rel="noreferrer"
              target="_blank"
            >
              Prefer WhatsApp? Chat directly <MessageCircle className="h-4 w-4" />
            </a>
            <p>
              Your information is never shared.{" "}
              <Link aria-label="Read our privacy policy" className="text-[var(--color-nord-teal)]" href="/privacy-policy">
                Read our Privacy Policy.
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const inputClasses =
  "w-full rounded-xl border border-[var(--color-nord-slate)] bg-[var(--color-nord-black)] px-4 py-3 text-sm text-[var(--color-nord-light)] outline-none transition focus:border-[var(--color-nord-teal)]";

function Field({
  children,
  label,
  error,
  className,
}: {
  children: React.ReactNode;
  label: string;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-light)]">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-sm text-[var(--color-nord-red)]">{error}</span> : null}
    </label>
  );
}
