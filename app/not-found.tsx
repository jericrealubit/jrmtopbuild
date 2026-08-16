import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"

export default function NotFound() {
  return (
    <Section
      tone="light"
      className="flex min-h-[70vh] items-center"
      containerClassName="flex flex-col items-center py-10 text-center"
    >
      <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
        404
      </p>
      <h1 className="mt-2 font-heading text-3xl text-navy">Page not found</h1>
      <p className="mt-3 max-w-[48ch] text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved, or
        the link might be out of date.
      </p>
      <Button variant="gold" render={<Link href="/" />} nativeButton={false} className="mt-7">
        Back to homepage
      </Button>
    </Section>
  )
}
