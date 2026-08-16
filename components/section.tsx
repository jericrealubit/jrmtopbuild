import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Container } from "@/components/container"

const sectionVariants = cva("py-14 sm:py-20", {
  variants: {
    tone: {
      dark: "border-y border-hairline bg-navy text-silver",
      light: "bg-off-white text-ink",
      navyAlt: "border-y border-hairline bg-navy-2 text-silver",
    },
  },
  defaultVariants: {
    tone: "light",
  },
})

function Section({
  id,
  className,
  tone,
  containerClassName,
  children,
}: {
  id?: string
  className?: string
  containerClassName?: string
  children: React.ReactNode
} & VariantProps<typeof sectionVariants>) {
  return (
    <section id={id} className={cn(sectionVariants({ tone }), className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export { Section }
