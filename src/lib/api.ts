import type { LeadFormValues } from "@/components/sections/LeadCapture";

export async function submitLeadCapture(endpoint: string, payload: LeadFormValues) {
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
