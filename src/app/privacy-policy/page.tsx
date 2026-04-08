import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read how Nordische Energy collects, uses, stores, and protects personal data in compliance with GDPR.",
  path: "/privacy-policy",
  keywords: ["privacy policy gdpr", "data protection germany", "battery company privacy policy"],
});

const sections = [
  ["Introduction", "Nordische Energy GmbH, Industriestraße 42, 10115 Berlin, Germany, is the controller responsible for processing personal data collected through this website. You may contact our data protection representative at privacy@nordische-energy.com regarding any data protection matter, including the exercise of your legal rights."],
  ["Data We Collect", "We may collect the information you submit through our contact forms, including your name, company name, industry, phone number, email address, project details, and any related correspondence. We also process standard server log data, such as IP address, browser type, referrer, timestamp, and device information necessary to maintain secure website operations. Where enabled, analytics technologies may collect cookie-based usage information in aggregated or pseudonymous form."],
  ["How We Use Your Data", "We use personal data to respond to enquiries, evaluate project requirements, provide quotations, schedule meetings, maintain business records, improve website performance, detect misuse, and comply with legal, contractual, and regulatory obligations. We do not sell your personal data or use it for unrelated advertising profiling."],
  ["Legal Basis for Processing", "Our processing activities rely on Article 6(1)(b) GDPR where the processing is necessary to take steps prior to entering into a contract, Article 6(1)(f) GDPR where processing is necessary for our legitimate interests in operating, securing, and improving the website and handling business enquiries, and Article 6(1)(a) GDPR where you have provided consent, including for optional analytics cookies where required."],
  ["Data Retention", "Enquiry and commercial correspondence records are retained for up to three years from the last meaningful interaction unless a longer retention period is required by law, necessary to establish or defend legal claims, or appropriate to continue an active business relationship. Session cookies expire automatically at the end of the browsing session, while analytics cookies follow the configured retention window and can be withdrawn or deleted by the user."],
  ["Your Rights", "Subject to the conditions under applicable law, you have the right to request access to your personal data, rectification of inaccurate data, erasure, restriction of processing, data portability, and objection to processing based on legitimate interests. Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing carried out before withdrawal. You also have the right to lodge a complaint with the competent supervisory authority."],
  ["Cookies", "This website uses technically necessary session cookies to support secure navigation and form handling. Where Google Analytics or comparable analytics services are enabled, analytics cookies may be used only in accordance with applicable consent requirements. We do not use advertising cookies or third-party behavioral advertising trackers. Users can control cookies through their browser settings and may use Google’s available opt-out tools where Google Analytics is enabled."],
  ["Third-Party Services", "We rely on third-party service providers where necessary to operate the website and business communications. These may include Cloudflare for hosting, content delivery, and website security; Google Analytics, if enabled, for aggregated website analytics; and WhatsApp when you choose to contact us through an external WhatsApp link. Each third-party provider acts under its own privacy framework and may process data in accordance with its own terms."],
  ["International Data Transfers", "Where personal data is transferred outside the European Economic Area, we implement appropriate safeguards as required by Chapter V GDPR, including adequacy decisions where available and Standard Contractual Clauses where necessary. We also assess supplementary measures where relevant to maintain an equivalent level of protection."],
  ["Data Security", "We apply technical and organizational security measures appropriate to the risk, including HTTPS encryption, role-based access controls, credential management, restricted administrative access, and regular review of hosting and operational controls. No online transmission or storage system can be guaranteed as completely secure, but we take commercially reasonable and industry-appropriate measures to protect the data entrusted to us."],
  ["Changes to This Policy", "We may update this Privacy Policy from time to time to reflect legal, technical, or operational changes. Material changes will be published on this page with an updated effective date. Continued use of the website after such updates constitutes acknowledgement of the revised policy."],
  ["Contact Our DPO", "For all privacy, data protection, or GDPR-related enquiries, please contact privacy@nordische-energy.com. You may also write to Nordische Energy GmbH, Industriestraße 42, 10115 Berlin, Germany, Attn: Data Protection."],
] as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl uppercase sm:text-5xl md:text-6xl">Privacy Policy</h1>
      <p className="mt-6 text-lg text-[var(--color-nord-mist)]">Effective date: April 6, 2026</p>
      <div className="mt-10 space-y-10">
        {sections.map(([title, body]) => (
          <section key={title} id={title.toLowerCase().replaceAll(" ", "-")}>
            <h2 className="text-xl uppercase sm:text-3xl">{title}</h2>
            <p className="mt-4 text-[var(--color-nord-light)]">{body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
