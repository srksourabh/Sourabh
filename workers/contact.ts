interface Env {}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
} as const;

export default {
  async fetch(request: Request, _env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const body = (await request.json()) as Record<string, unknown>;

      const requiredFields = ["name", "company", "industry", "description", "capacity", "phone", "email"];
      const missing = requiredFields.filter((field) => {
        const value = body[field];
        return typeof value !== "string" || value.trim().length === 0;
      });

      if (missing.length > 0) {
        return new Response(JSON.stringify({ error: "Validation failed", missing }), {
          status: 400,
          headers: corsHeaders,
        });
      }

      console.log("Nordische contact submission", body);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Submission received. We will respond within 24 hours.",
        }),
        {
          status: 200,
          headers: corsHeaders,
        },
      );
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request payload" }), {
        status: 400,
        headers: corsHeaders,
      });
    }
  },
};
