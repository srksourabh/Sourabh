import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Review the terms governing access to and use of the Nordische Energy website.",
  path: "/terms-of-use",
  keywords: ["terms of use germany", "website terms", "industrial website legal terms"],
});

const sections = [
  ["Acceptance of Terms", "By accessing or using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree, you must refrain from using the website."],
  ["Use of Website", "You may use this website solely for lawful business and informational purposes. You must not interfere with the operation of the website, attempt unauthorized access, introduce malicious code, misuse forms or contact channels, or use automated tools in a manner that disrupts services or infringes applicable law."],
  ["Intellectual Property", "All content on this website, including text, graphics, product descriptions, branding, designs, source code elements, and underlying materials, is owned by or licensed to Nordische Energy GmbH and is protected by intellectual property laws. No license is granted except the limited right to access the website for legitimate informational use."],
  ["Disclaimer of Warranties", "This website and its contents are provided on an “as is” and “as available” basis. While we aim to keep information accurate and current, we do not warrant that the website will be uninterrupted, error-free, secure, or free from harmful components, nor do we guarantee the completeness or suitability of any information for a particular purpose."],
  ["Limitation of Liability", "To the fullest extent permitted by law, Nordische Energy GmbH shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or related to the use of, or inability to use, the website. Nothing in these Terms excludes liability where exclusion is prohibited under applicable law, including for intent, gross negligence, or mandatory statutory liability."],
  ["Third-Party Links", "This website may contain links to third-party websites or services for convenience, including external communication platforms. Nordische Energy does not control and is not responsible for the content, security, availability, or privacy practices of those third-party services."],
  ["Governing Law", "These Terms of Use are governed by the laws of the Federal Republic of Germany. To the extent legally permissible, the exclusive place of jurisdiction for disputes arising from or in connection with these Terms or the use of this website shall be Berlin, Germany."],
  ["Contact Information", "Questions regarding these Terms of Use may be directed to info@nordische-energy.com or by post to Nordische Energy GmbH, Industriestraße 42, 10115 Berlin, Germany."],
] as const;

export default function TermsOfUsePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl uppercase sm:text-5xl md:text-6xl">Terms of Use</h1>
      <div className="mt-10 space-y-10">
        {sections.map(([title, body]) => (
          <section key={title}>
            <h2 className="text-xl uppercase sm:text-3xl">{title}</h2>
            <p className="mt-4 text-[var(--color-nord-light)]">{body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
