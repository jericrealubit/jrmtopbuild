import { QuoteForm } from "@/components/quote-form"

function QuoteFormCard({
  defaultJobType,
  className,
}: {
  defaultJobType?: string
  className?: string
}) {
  return (
    <div className={`rounded-[10px] bg-off-white p-8 text-ink ${className ?? ""}`}>
      <h3 className="font-heading text-lg text-ink">Request a free quote</h3>
      <p className="mt-1 mb-5 text-sm text-muted-foreground">
        Tell us about the job and we&apos;ll be in touch within a business day.
      </p>
      <QuoteForm defaultJobType={defaultJobType} />
    </div>
  )
}

export { QuoteFormCard }
