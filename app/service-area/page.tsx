import type { Metadata } from "next"
import { Section } from "@/components/section"
import { Chip } from "@/components/chip"
import { PlaceholderImage } from "@/components/placeholder-image"
import { suburbs } from "@/lib/suburbs"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "JRM Top Build is based in Hornby and services Christchurch and Canterbury suburbs including Riccarton, Halswell, Rolleston and more.",
}

export default function ServiceAreaPage() {
  return (
    <>
      <Section tone="dark">
        <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
          Where we work
        </p>
        <h1 className="mt-2 font-heading text-4xl text-white">
          Based in {siteConfig.baseSuburb}, servicing {siteConfig.region}
        </h1>
      </Section>
      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              {suburbs.map((suburb) => (
                <Chip key={suburb.name} tone={suburb.base ? "gold" : "light"}>
                  {suburb.name}
                  {suburb.base ? " (base)" : ""}
                </Chip>
              ))}
            </div>
            <p className="mt-6 max-w-[52ch] text-ink/90">
              Job slightly outside this list? Get in touch anyway — we regularly
              take on work a little further out across Canterbury and Selwyn.
            </p>
          </div>
          <PlaceholderImage label="Service area map — coming soon" aspectClassName="aspect-square" />
        </div>
      </Section>
    </>
  )
}
