import type { Metadata } from "next"
import { Section } from "@/components/section"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse completed renovation, pergola, decking, floor plank and bathroom renovation jobs by JRM Top Build across Christchurch.",
}

export default function GalleryPage() {
  return (
    <>
      <Section tone="dark">
        <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
          Recent work
        </p>
        <h1 className="mt-2 font-heading text-4xl text-white">
          Our project gallery
        </h1>
        <p className="mt-4 max-w-[60ch] text-silver">
          A look at completed jobs across Christchurch and Canterbury, filterable
          by trade.
        </p>
      </Section>
      <Section tone="light">
        <GalleryGrid />
      </Section>
    </>
  )
}
