import type { Metadata } from "next"
import { Section } from "@/components/section"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: `How ${siteConfig.name} collects and uses information submitted through this website.`,
}

export default function PrivacyPage() {
  return (
    <Section tone="light">
      <h1 className="font-heading text-3xl text-navy">Privacy Notice</h1>
      <div className="mt-6 flex max-w-[70ch] flex-col gap-4 text-ink/90">
        <p>
          When you submit the quote request form on this website, {siteConfig.name}{" "}
          collects the information you provide — your name, phone number,
          email address, suburb, job type, property type and job details — in
          order to respond to your enquiry and provide a quote.
        </p>
        <p>
          This information is used only to respond to your enquiry and is not
          sold or shared with third parties. It is retained only for as long as
          needed to handle your enquiry and any resulting job.
        </p>
        <p>
          If you have questions about how your information is handled, or
          would like it removed, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline hover:text-gold">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </Section>
  )
}
