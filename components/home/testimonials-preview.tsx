import { Section } from "@/components/section"
import { TestimonialCard } from "@/components/card"
import { testimonials } from "@/lib/testimonials"

function TestimonialsPreview() {
  return (
    <Section tone="dark">
      <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
        Kind words
      </p>
      <h2 className="mt-2 font-heading text-3xl text-white">What clients say</h2>
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.attribution + testimonial.quote} {...testimonial} />
        ))}
      </div>
    </Section>
  )
}

export { TestimonialsPreview }
