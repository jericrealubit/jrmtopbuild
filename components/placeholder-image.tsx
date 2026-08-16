import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function PlaceholderImage({
  label,
  className,
  aspectClassName = "aspect-[4/3]",
}: {
  label: string
  className?: string
  aspectClassName?: string
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-[10px] border border-hairline text-center",
        aspectClassName,
        className
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(198,161,91,0.12) 0 2px, transparent 2px 14px), linear-gradient(160deg, #1a2531, #0e151d)",
      }}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-silver/80">
        <ImageIcon className="size-7" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-oswald text-[0.65rem] tracking-[0.08em] uppercase">
          {label}
        </span>
      </div>
    </div>
  )
}

export { PlaceholderImage }
