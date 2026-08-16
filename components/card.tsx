import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva("rounded-[10px] border p-6", {
  variants: {
    tone: {
      dark: "border-hairline bg-navy-2 text-silver",
      light: "border-ink/10 bg-white text-ink",
    },
  },
  defaultVariants: {
    tone: "light",
  },
})

function Card({
  className,
  tone,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return <div className={cn(cardVariants({ tone }), className)} {...props} />
}

function TestimonialCard({
  quote,
  attribution,
  rating,
  className,
}: {
  quote: string
  attribution: string
  rating: number
  className?: string
}) {
  return (
    <Card tone="dark" className={className}>
      <div aria-label={`${rating} out of 5 stars`} className="mb-3 tracking-[2px] text-gold">
        {"★".repeat(rating)}
      </div>
      <p className="text-[0.95rem] text-[#dfe3e6]">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 font-oswald text-xs tracking-[0.06em] text-muted-foreground uppercase">
        {attribution}
      </p>
    </Card>
  )
}

export { Card, TestimonialCard, cardVariants }
