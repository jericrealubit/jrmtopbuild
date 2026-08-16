"use server"

import * as z from "zod"
import { quoteFormSchema } from "@/lib/validation"

export type QuoteFormState = {
  status: "idle" | "success" | "error"
  fieldErrors?: Record<string, string[]>
  formError?: string
}

export async function submitQuote(
  _prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  const result = quoteFormSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    suburb: formData.get("suburb"),
    jobType: formData.get("jobType"),
    propertyType: formData.get("propertyType"),
    details: formData.get("details"),
  })

  if (!result.success) {
    const flattened = z.flattenError(result.error)
    return { status: "error", fieldErrors: flattened.fieldErrors }
  }

  // No email provider is configured yet. Log the validated enquiry so it isn't
  // lost, and leave a clear insertion point for real delivery (e.g. Resend)
  // once an API key exists — do not claim an email was sent.
  console.log("[quote-form] new enquiry:", result.data)
  // TODO: once an email provider/API key is configured, send result.data to
  // siteConfig.email here (e.g. `await resend.emails.send({...})`).

  return { status: "success" }
}
