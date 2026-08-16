import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { IconBadge } from "@/components/icon-badge"
import { PlaceholderImage } from "@/components/placeholder-image"
import { getServiceIcon } from "@/components/service-icon"
import type { Service } from "@/lib/services"

function ServicePageTemplate({ service }: { service: Service }) {
  const Icon = getServiceIcon(service.icon)

  return (
    <>
      <Section tone="dark">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <IconBadge icon={Icon} />
          <div>
            <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
              Services
            </p>
            <h1 className="mt-2 font-heading text-4xl text-white">
              {service.name}
            </h1>
          </div>
        </div>
        <p className="mt-5 max-w-[60ch] text-silver">{service.summary}</p>
        <Button
          variant="gold"
          render={<Link href={`/contact?job=${service.slug}`} />}
          nativeButton={false}
          className="mt-7"
        >
          Get a Free Quote
        </Button>
      </Section>

      <Section tone="light">
        <h2 className="font-heading text-2xl text-navy">What&apos;s included</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {service.included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-[6px] border border-ink/10 bg-white px-4 py-3 text-sm text-ink/90"
            >
              <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-14 font-heading text-2xl text-navy">Recent work</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <PlaceholderImage
              key={n}
              label={`${service.name} — photo coming soon`}
            />
          ))}
        </div>
      </Section>

      <Section tone="navyAlt">
        <h2 className="font-heading text-2xl text-white">Our process</h2>
        <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <li key={step.step} className="rounded-[10px] border border-hairline bg-navy-2 p-5">
              <span className="font-oswald text-xs tracking-[0.06em] text-gold uppercase">
                Step {index + 1}
              </span>
              <h3 className="mt-2 font-heading text-lg text-white">{step.step}</h3>
              <p className="mt-1.5 text-sm text-silver">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="light">
        <h2 className="font-heading text-2xl text-navy">
          Frequently asked questions
        </h2>
        <Accordion className="mt-5 max-w-[70ch]">
          {service.faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="font-heading text-base text-navy">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink/90">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button
          variant="outline-ink"
          render={<Link href={`/contact?job=${service.slug}`} />}
          nativeButton={false}
          className="mt-8"
        >
          Request a Quote for {service.shortName}
        </Button>
      </Section>
    </>
  )
}

export { ServicePageTemplate }
