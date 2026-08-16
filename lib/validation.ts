import * as z from "zod"
import { services } from "@/lib/services"

const jobTypeValues = [...services.map((service) => service.slug), "other"]

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.email("Enter a valid email address"),
  suburb: z.string().min(2, "Enter your suburb"),
  jobType: z.string().refine((value) => jobTypeValues.includes(value), {
    error: "Choose a job type",
  }),
  propertyType: z.enum(["residential", "commercial"], {
    error: "Choose a property type",
  }),
  details: z.string().min(10, "Tell us a bit more about the job (10+ characters)"),
})

export type QuoteFormValues = z.infer<typeof quoteFormSchema>
