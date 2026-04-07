interface Env {
  RESEND_API_KEY: string;
}

interface LeadFormData {
  name: string;
  company: string;
  industry: string;
  description: string;
  capacity: string;
  phone: string;
  email: string;
  source?: string;
}

const TO_EMAIL = "info@nordischeenergy.com";
const BCC_EMAIL = "srksourabh@gmail.com";
const FROM_EMAIL = "Nordische Energy <noreply@nordischeenergy.com>";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: LeadFormData): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
      <h2 style="color:#111520;border-bottom:3px solid #00d4aa;padding-bottom:8px">
        New Lead — ${escapeHtml(data.company)}
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px">
        <tr><td style="padding:8px 12px;font-weight:bold;width:180px;vertical-align:top">Name</td><td style="padding:8px 12px">${escapeHtml(data.name)}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Company</td><td style="padding:8px 12px">${escapeHtml(data.company)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Industry</td><td style="padding:8px 12px">${escapeHtml(data.industry)}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Capacity</td><td style="padding:8px 12px">${escapeHtml(data.capacity)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Application</td><td style="padding:8px 12px">${escapeHtml(data.description)}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Phone / WhatsApp</td><td style="padding:8px 12px">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Email</td><td style="padding:8px 12px"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        ${data.source ? `<tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Source</td><td style="padding:8px 12px">${escapeHtml(data.source)}</td></tr>` : ""}
      </table>
      <p style="margin-top:24px;font-size:12px;color:#888">Sent from nordischeenergy.com contact form</p>
    </div>
  `;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data = (await context.request.json()) as LeadFormData;

    if (!data.name || !data.email || !data.company || !data.description) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        bcc: [BCC_EMAIL],
        reply_to: data.email,
        subject: `New Lead: ${data.company} — ${data.industry}`,
        html: buildEmailHtml(data),
      }),
    });

    if (!emailResponse.ok) {
      const errBody = await emailResponse.text();
      console.error("Resend API error:", errBody);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
