import { Section } from "@/components/section"
import { siteConfig } from "@/lib/site-config"

const stats = [
  { num: "Owner-led", label: "Hands-on from quote to handover" },
  { num: "100%", label: "Commercial & residential" },
  { num: siteConfig.baseSuburb, label: "Based & operating from" },
  { num: "NZBN", label: siteConfig.nzbn },
]

function TrustBar() {
  return (
    <Section tone="light">
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-heading text-2xl text-navy">{stat.num}</div>
            <div className="mt-1.5 font-oswald text-xs tracking-[0.03em] text-muted-foreground uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { TrustBar }
