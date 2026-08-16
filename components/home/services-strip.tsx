import Link from "next/link"
import { Section } from "@/components/section"
import { IconBadge } from "@/components/icon-badge"
import { getServiceIcon } from "@/components/service-icon"
import { services } from "@/lib/services"

function ServicesStrip() {
  return (
    <Section id="services" tone="dark">
      <p className="text-center font-oswald text-xs tracking-[0.14em] text-gold uppercase">
        What we do
      </p>
      <h2 className="mt-2 text-center font-heading text-3xl text-white">
        Five trades, one crew you can trust
      </h2>
      <p className="mx-auto mt-2 max-w-[52ch] text-center text-silver">
        Every job — commercial or residential — is handled end to end by{" "}
        {"JRM Top Build"}.
      </p>
      <div className="mt-10 grid grid-cols-3 gap-4.5 sm:grid-cols-5">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col items-center text-center text-silver no-underline"
          >
            <IconBadge icon={getServiceIcon(service.icon)} />
            <span className="mt-3.5 font-oswald text-xs tracking-[0.03em] uppercase">
              {service.shortName}
            </span>
          </Link>
        ))}
      </div>
    </Section>
  )
}

export { ServicesStrip }
