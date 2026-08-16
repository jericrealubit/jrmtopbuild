export interface GalleryItem {
  id: string
  categorySlug: string
  categoryLabel: string
  suburb: string
}

// Placeholder gallery — swap in real project photos once collected.
// See JRM-Top-Build-Website-Plan.md §9: "Gather real project photos."
export const galleryItems: GalleryItem[] = [
  { id: "bathroom-riccarton", categorySlug: "bathroom-renovations", categoryLabel: "Bathroom Renovation", suburb: "Riccarton" },
  { id: "decking-halswell", categorySlug: "decking", categoryLabel: "Decking", suburb: "Halswell" },
  { id: "pergola-hornby", categorySlug: "pergolas", categoryLabel: "Pergolas", suburb: "Hornby" },
  { id: "floor-planks-addington", categorySlug: "floor-planks", categoryLabel: "Floor Planks", suburb: "Addington" },
  { id: "renovation-sydenham", categorySlug: "renovations-and-alterations", categoryLabel: "Renovation", suburb: "Sydenham" },
  { id: "bathroom-sockburn", categorySlug: "bathroom-renovations", categoryLabel: "Bathroom Renovation", suburb: "Sockburn" },
  { id: "decking-rolleston", categorySlug: "decking", categoryLabel: "Decking", suburb: "Rolleston" },
  { id: "pergola-templeton", categorySlug: "pergolas", categoryLabel: "Pergolas", suburb: "Templeton" },
  { id: "floor-planks-christchurch-central", categorySlug: "floor-planks", categoryLabel: "Floor Planks", suburb: "Christchurch Central" },
  { id: "renovation-hillmorton", categorySlug: "renovations-and-alterations", categoryLabel: "Renovation", suburb: "Hillmorton" },
]
