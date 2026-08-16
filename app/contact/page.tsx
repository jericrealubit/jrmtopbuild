import type { Metadata } from "next"
import { Phone, Mail, FileText, MapPin } from "lucide-react"
import { Section } from "@/components/section"
import { QuoteFormCard } from "@/components/quote-form-card"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact / Get a Quote",
  description:
    "Get a free, no-obligation quote from JRM Top Build. Call, email, or send through the job details and we'll respond within a business day.",
}

export default async function ContactPage(props: PageProps<"/contact">) {
  const searchParams = await props.searchParams
  const jobParam = searchParams.job
  const defaultJobType = Array.isArray(jobParam) ? jobParam[0] : jobParam

  return (
    <Section tone="navyAlt" className="flex min-h-[70vh] items-center">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
            Get in touch
          </p>
          <h1 className="mt-2 font-heading text-4xl text-white">
            Get a free, no-obligation quote
          </h1>
          <p className="mt-3 max-w-[42ch] text-silver">
            Tell us about the job and we&apos;ll get back to you — most enquiries
            are answered within a business day.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            <li className="flex items-start gap-3.5 text-silver">
              <Phone className="mt-0.5 size-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <b className="block font-oswald text-xs tracking-[0.06em] text-white uppercase">
                  Phone
                </b>
                <a href={siteConfig.phoneHref} className="hover:text-gold-light">
                  {siteConfig.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-silver">
              <Mail className="mt-0.5 size-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <b className="block font-oswald text-xs tracking-[0.06em] text-white uppercase">
                  Email
                </b>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-light">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-silver">
              <MapPin className="mt-0.5 size-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <b className="block font-oswald text-xs tracking-[0.06em] text-white uppercase">
                  Based in
                </b>
                {siteConfig.baseSuburb}, servicing {siteConfig.region}
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-silver">
              <FileText className="mt-0.5 size-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <b className="block font-oswald text-xs tracking-[0.06em] text-white uppercase">
                  NZBN
                </b>
                {siteConfig.nzbn}
              </div>
            </li>
          </ul>
        </div>
        <QuoteFormCard defaultJobType={defaultJobType} />
      </div>
    </Section>
  )
}
