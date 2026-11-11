import { Hero } from "@/components/home/hero"
import { ServicesStrip } from "@/components/home/services-strip"
import { TrustBar } from "@/components/home/trust-bar"
import { GalleryTeaser } from "@/components/home/gallery-teaser"
// Hidden until real testimonials from the owner — restore by uncommenting
// import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { ServiceAreaTeaser } from "@/components/home/service-area-teaser"
import { QuoteBand } from "@/components/home/quote-band"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <TrustBar />
      <GalleryTeaser />
      {/* Hidden until real testimonials from the owner — restore by uncommenting */}
      {/* <TestimonialsPreview /> */}
      <ServiceAreaTeaser />
      <QuoteBand />
    </>
  )
}
