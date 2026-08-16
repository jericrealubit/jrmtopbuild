"use client"

import { useActionState } from "react"
import { submitQuote, type QuoteFormState } from "@/app/actions/submit-quote"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { services } from "@/lib/services"

const initialState: QuoteFormState = { status: "idle" }

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null
  return <p className="mt-1 text-xs text-destructive">{messages[0]}</p>
}

function QuoteForm({ defaultJobType }: { defaultJobType?: string }) {
  const [state, formAction, isPending] = useActionState(submitQuote, initialState)

  if (state.status === "success") {
    return (
      <div className="rounded-[10px] border border-ink/10 bg-white p-8 text-center">
        <h3 className="font-heading text-xl text-ink">Thanks — enquiry received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ve got your details and will get back to you within a business day.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="Jane Smith" className="mt-1.5" />
          <FieldError messages={state.fieldErrors?.name} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="021 000 0000" className="mt-1.5" />
          <FieldError messages={state.fieldErrors?.phone} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@email.com"
            className="mt-1.5"
          />
          <FieldError messages={state.fieldErrors?.email} />
        </div>
        <div>
          <Label htmlFor="suburb">Suburb</Label>
          <Input id="suburb" name="suburb" placeholder="e.g. Riccarton" className="mt-1.5" />
          <FieldError messages={state.fieldErrors?.suburb} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="jobType">Job type</Label>
          <Select name="jobType" defaultValue={defaultJobType}>
            <SelectTrigger id="jobType" className="mt-1.5 w-full">
              <SelectValue placeholder="Choose a job type" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.slug} value={service.slug}>
                  {service.name}
                </SelectItem>
              ))}
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <FieldError messages={state.fieldErrors?.jobType} />
        </div>
        <div>
          <Label htmlFor="propertyType">Property type</Label>
          <Select name="propertyType" defaultValue="residential">
            <SelectTrigger id="propertyType" className="mt-1.5 w-full">
              <SelectValue placeholder="Choose a property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
          <FieldError messages={state.fieldErrors?.propertyType} />
        </div>
      </div>

      <div>
        <Label htmlFor="details">Job details</Label>
        <Textarea
          id="details"
          name="details"
          placeholder="Tell us a bit about the job..."
          className="mt-1.5 min-h-28"
        />
        <FieldError messages={state.fieldErrors?.details} />
      </div>

      {state.status === "error" && state.formError && (
        <p className="text-sm text-destructive">{state.formError}</p>
      )}

      <Button type="submit" variant="gold" disabled={isPending} className="w-full">
        {isPending ? "Sending..." : "Send Quote Request"}
      </Button>
    </form>
  )
}

export { QuoteForm }
