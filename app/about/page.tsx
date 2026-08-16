import type { Metadata } from "next"
import { Section } from "@/components/section"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "JRM Top Build Ltd is an owner-led, Christchurch-based building company handling commercial and residential jobs across Canterbury.",
}

export default function AboutPage() {
  return (
    <>
      <Section tone="dark">
        <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
          About us
        </p>
        <h1 className="mt-2 font-heading text-4xl text-white">
          Owner-led, Christchurch-built
        </h1>
        <p className="mt-4 max-w-[60ch] text-silver">
          {siteConfig.name} is run by {siteConfig.owner} out of{" "}
          {siteConfig.baseSuburb}, delivering commercial and residential
          building work across {siteConfig.region}.
        </p>
      </Section>

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl text-navy">
              Hands-on, from quote to handover
            </h2>
            <p className="mt-4 text-ink/90">
              Every job that comes through {siteConfig.shortName} — whether it&apos;s
              a full commercial fit-out or a single residential bathroom
              renovation — is run by {siteConfig.owner} directly. That means
              one point of contact, a fixed quote before work starts, and a
              crew that shows up when they say they will.
            </p>
            <p className="mt-4 text-ink/90">
              &quot;Commercial and residential jobs&quot; means exactly that: half our
              work is renovations, alterations and fit-outs for local
              businesses and property managers, and half is deck, pergola,
              flooring and bathroom work for homeowners across Christchurch
              and Canterbury.
            </p>
            <h2 className="mt-8 font-heading text-2xl text-navy">
              {siteConfig.tagline}
            </h2>
            <ul className="mt-4 flex flex-col gap-2 text-ink/90">
              <li>
                <strong>Premium</strong> — quality materials and finishing,
                not the cheapest corner cut.
              </li>
              <li>
                <strong>Crafted</strong> — built properly, with attention to
                detail on every job.
              </li>
              <li>
                <strong>Reliable</strong> — clear communication, fixed quotes,
                and jobs finished on the timeline agreed.
              </li>
            </ul>
            <Button variant="gold" render={<Link href="/contact" />} nativeButton={false} className="mt-8">
              Get a Free Quote
            </Button>
          </div>
          <PlaceholderImage label="Owner on-site — photo coming soon" aspectClassName="aspect-[4/5]" />
        </div>
      </Section>
    </>
  )
}
