export interface GalleryItem {
  id: string
  categorySlug: string
  categoryLabel: string
  suburb: string
  photo?: string
}

// Gallery captions reference real Christchurch suburbs even though the
// photos themselves are placeholders/concept shots pending real project
// photography — see JRM-Top-Build-Website-Plan.md §9.
export const galleryItems: GalleryItem[] = [
  { id: "bathroom-riccarton", categorySlug: "bathroom-renovations", categoryLabel: "Bathroom Renovation", suburb: "Riccarton", photo: "/photos/bathroom-renovation.jpg" },
  { id: "decking-halswell", categorySlug: "decking", categoryLabel: "Decking", suburb: "Halswell", photo: "/photos/decking.jpg" },
  { id: "pergola-hornby", categorySlug: "pergolas", categoryLabel: "Pergolas", suburb: "Hornby", photo: "/photos/pergola-1.jpg" },
  { id: "floor-planks-addington", categorySlug: "floor-planks", categoryLabel: "Floor Planks", suburb: "Addington", photo: "/photos/floor-planks.jpg" },
  { id: "renovation-sydenham", categorySlug: "renovations-and-alterations", categoryLabel: "Renovation", suburb: "Sydenham", photo: "/photos/renovation.jpg" },
  { id: "bathroom-sockburn", categorySlug: "bathroom-renovations", categoryLabel: "Bathroom Renovation", suburb: "Sockburn", photo: "/photos/bathroom-renovation.jpg" },
  { id: "decking-rolleston", categorySlug: "decking", categoryLabel: "Decking", suburb: "Rolleston", photo: "/photos/decking.jpg" },
  { id: "pergola-templeton", categorySlug: "pergolas", categoryLabel: "Pergolas", suburb: "Templeton", photo: "/photos/pergola-2.jpg" },
  { id: "floor-planks-christchurch-central", categorySlug: "floor-planks", categoryLabel: "Floor Planks", suburb: "Christchurch Central", photo: "/photos/floor-planks.jpg" },
  { id: "renovation-hillmorton", categorySlug: "renovations-and-alterations", categoryLabel: "Renovation", suburb: "Hillmorton", photo: "/photos/renovation.jpg" },
]
