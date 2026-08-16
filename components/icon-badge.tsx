import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function IconBadge({
  icon: Icon,
  className,
}: {
  icon: LucideIcon
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex size-24 items-center justify-center rounded-full border border-hairline bg-navy-2 text-gold transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-gold group-hover:shadow-[0_10px_24px_rgba(198,161,91,0.18)]",
        className
      )}
    >
      <Icon className="size-9" strokeWidth={1.5} />
    </div>
  )
}

export { IconBadge }
