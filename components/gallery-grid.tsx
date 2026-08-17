"use client"

import { useState } from "react"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Chip } from "@/components/chip"
import { cn } from "@/lib/utils"
import { galleryItems } from "@/lib/gallery"
import { services } from "@/lib/services"

const filters = [{ slug: "all", label: "All" }, ...services.map((s) => ({ slug: s.slug, label: s.shortName }))]

function GalleryGrid() {
  const [active, setActive] = useState("all")
  const items =
    active === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.categorySlug === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.slug}
            type="button"
            onClick={() => setActive(filter.slug)}
            aria-pressed={active === filter.slug}
            className={cn(
              "rounded-[3px] border px-3.5 py-1.5 font-oswald text-xs tracking-[0.03em] uppercase transition-colors",
              active === filter.slug
                ? "border-gold bg-gold text-gold-button-text"
                : "border-ink/15 bg-transparent text-ink hover:bg-ink/5"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <PlaceholderImage
              label={`${item.categoryLabel} — ${item.suburb} (photo coming soon)`}
              src={item.photo}
              alt={`${item.categoryLabel} — ${item.suburb}`}
              aspectClassName="aspect-square"
            />
            <Chip tone="default" className="absolute top-2 left-2 bg-navy/75">
              {item.categoryLabel}
            </Chip>
          </div>
        ))}
      </div>
    </div>
  )
}

export { GalleryGrid }
