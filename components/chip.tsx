import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-flex items-center rounded-[3px] border px-3 py-1.5 font-oswald text-xs font-medium tracking-[0.03em] uppercase",
  {
    variants: {
      tone: {
        default: "border-hairline bg-navy-2 text-silver",
        gold: "border-gold bg-gold/10 text-gold-light",
        light: "border-ink/10 bg-white text-ink",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
)

function Chip({
  className,
  tone,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof chipVariants>) {
  return <span className={cn(chipVariants({ tone }), className)} {...props} />
}

export { Chip }
