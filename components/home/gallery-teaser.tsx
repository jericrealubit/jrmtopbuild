import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Chip } from "@/components/chip"

const preview = [
  {
    label: "Bathroom renovation — photo coming soon",
    tag: "Bathroom",
    span: "sm:col-span-2 sm:row-span-2",
    photo: "/photos/bathroom-renovation.jpg",
  },
  { label: "Decking — photo coming soon", tag: "Decking", photo: "/photos/decking.jpg" },
  { label: "Pergolas — photo coming soon", tag: "Pergolas", photo: "/photos/pergola-1.jpg" },
  { label: "Floor planks — photo coming soon", tag: "Floor Planks", photo: "/photos/floor-planks.jpg" },
  { label: "Renovation — photo coming soon", tag: "Renovation", photo: "/photos/renovation.jpg" },
]

function GalleryTeaser() {
  return (
    <Section tone="light">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
            Recent work
          </p>
          <h2 className="mt-2 font-heading text-3xl text-navy">Our project gallery</h2>
        </div>
        <Button variant="outline-ink" render={<Link href="/gallery" />} nativeButton={false}>
          View Full Gallery
        </Button>
      </div>
      <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-auto-rows:150px]">
        {preview.map((item) => (
          <div key={item.tag} className={`relative ${item.span ?? ""}`}>
            <PlaceholderImage
              label={item.label}
              src={item.photo}
              alt={item.tag}
              aspectClassName="aspect-square h-full"
              className="h-full"
            />
            <Chip tone="default" className="absolute top-2 left-2 bg-navy/75">
              {item.tag}
            </Chip>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { GalleryTeaser }
