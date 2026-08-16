import type { Metadata } from "next"
import { Section } from "@/components/section"
import { TestimonialCard } from "@/components/card"
import { testimonials } from "@/lib/testimonials"

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What Christchurch clients say about working with JRM Top Build on renovation, decking, pergola and bathroom projects.",
}

export default function TestimonialsPage() {
  return (
    <>
      <Section tone="dark">
        <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
          Kind words
        </p>
        <h1 className="mt-2 font-heading text-4xl text-white">
          What clients say
        </h1>
        <p className="mt-4 max-w-[60ch] text-silver">
          We&apos;re building our public review list — reach out if you&apos;d like
          to be one of the first to leave a review once your job is done.
        </p>
      </Section>
      <Section tone="navyAlt">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.attribution + testimonial.quote} {...testimonial} />
          ))}
        </div>
      </Section>
    </>
  )
}
