import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/section"
import { IconBadge } from "@/components/icon-badge"
import { getServiceIcon } from "@/components/service-icon"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Renovations & alterations, pergolas, decking, floor planks and bathroom renovations — commercial and residential building services from JRM Top Build.",
}

export default function ServicesPage() {
  return (
    <>
      <Section tone="dark">
        <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
          What we do
        </p>
        <h1 className="mt-2 font-heading text-4xl text-white">
          Five trades, one crew you can trust
        </h1>
        <p className="mt-4 max-w-[60ch] text-silver">
          Every job — commercial or residential — is handled end to end by
          JRM Top Build.
        </p>
      </Section>

      <Section tone="light">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col gap-4 rounded-[10px] border border-ink/10 bg-white p-6 no-underline transition-colors hover:border-gold"
            >
              <IconBadge icon={getServiceIcon(service.icon)} />
              <div>
                <h2 className="font-heading text-xl text-navy">{service.name}</h2>
                <p className="mt-2 text-sm text-ink/80">{service.summary}</p>
              </div>
              <span className="font-oswald text-xs tracking-[0.03em] text-gold uppercase group-hover:underline">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
