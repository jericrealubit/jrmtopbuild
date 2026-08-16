import { Phone, Mail, FileText } from "lucide-react"
import { Section } from "@/components/section"
import { QuoteFormCard } from "@/components/quote-form-card"
import { siteConfig } from "@/lib/site-config"

function QuoteBand() {
  return (
    <Section id="contact" tone="navyAlt">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
            Get in touch
          </p>
          <h2 className="mt-2 font-heading text-3xl text-white">
            Get a free, no-obligation quote
          </h2>
          <p className="mt-2 max-w-[42ch] text-silver">
            Tell us about the job and we&apos;ll get back to you — most enquiries
            are answered within a business day.
          </p>
          <ul className="mt-7 flex flex-col gap-4">
            <li className="flex items-start gap-3.5 text-silver">
              <Phone className="mt-0.5 size-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <b className="block font-oswald text-xs tracking-[0.06em] text-white uppercase">
                  Phone
                </b>
                {siteConfig.phone}
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-silver">
              <Mail className="mt-0.5 size-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <b className="block font-oswald text-xs tracking-[0.06em] text-white uppercase">
                  Email
                </b>
                {siteConfig.email}
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
        <QuoteFormCard />
      </div>
    </Section>
  )
}

export { QuoteBand }
