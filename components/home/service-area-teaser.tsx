import Link from "next/link"
import { Section } from "@/components/section"
import { Chip } from "@/components/chip"
import { Button } from "@/components/ui/button"
import { suburbs } from "@/lib/suburbs"
import { siteConfig } from "@/lib/site-config"

function ServiceAreaTeaser() {
  return (
    <Section tone="light">
      <div>
        <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
          Where we work
        </p>
        <h2 className="mt-2 font-heading text-3xl text-navy">
          Based in {siteConfig.baseSuburb}, servicing {siteConfig.region}
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {suburbs.map((suburb) => (
            <Chip key={suburb.name} tone={suburb.base ? "gold" : "light"}>
              {suburb.name}
              {suburb.base ? " (base)" : ""}
            </Chip>
          ))}
        </div>
        <p className="mt-5 max-w-[48ch] text-sm text-muted-foreground">
          Job slightly outside the list? Get in touch — we&apos;re still worth
          asking.
        </p>
        <Button
          variant="outline-ink"
          render={<Link href="/service-area" />}
          nativeButton={false}
          className="mt-6"
        >
          View Service Area
        </Button>
      </div>
    </Section>
  )
}

export { ServiceAreaTeaser }
