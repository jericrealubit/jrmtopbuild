import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/layout/mobile-nav"
import { services } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-navy/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] w-full max-w-[1140px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/jrm-logo-round.png"
            alt="JRM Top Build Ltd logo"
            width={48}
            height={48}
            className="rounded-full"
            preload
          />
          <span className="hidden font-heading text-lg text-white sm:block">
            JRM Top Build
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="font-oswald text-[0.82rem] tracking-[0.03em] text-silver uppercase hover:text-gold-light"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-oswald text-[0.82rem] tracking-[0.03em] text-silver uppercase hover:text-gold-light"
          >
            About
          </Link>

          <div className="group relative">
            <Link
              href="/services"
              className="flex items-center gap-1 font-oswald text-[0.82rem] tracking-[0.03em] text-silver uppercase hover:text-gold-light"
              aria-haspopup="true"
            >
              Services
              <ChevronDown className="size-3.5" aria-hidden="true" />
            </Link>
            <div
              role="menu"
              className="invisible absolute top-full left-1/2 z-10 w-64 -translate-x-1/2 translate-y-1 rounded-[6px] border border-hairline bg-navy-2 p-2 opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.45)] transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100"
            >
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  role="menuitem"
                  className="block rounded-[3px] px-3 py-2 text-sm text-silver hover:bg-gold/10 hover:text-gold-light"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/gallery"
            className="font-oswald text-[0.82rem] tracking-[0.03em] text-silver uppercase hover:text-gold-light"
          >
            Gallery
          </Link>
          <Link
            href="/testimonials"
            className="font-oswald text-[0.82rem] tracking-[0.03em] text-silver uppercase hover:text-gold-light"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="font-oswald text-[0.82rem] tracking-[0.03em] text-silver uppercase hover:text-gold-light"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-1.5 font-oswald text-[0.8rem] text-silver hover:text-gold-light lg:flex"
          >
            Call now · <strong className="text-white">{siteConfig.phone}</strong>
          </a>
          <Button
            variant="gold"
            size="sm"
            render={<Link href="/contact" />}
            nativeButton={false}
            className="hidden md:inline-flex"
          >
            Get a Quote
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export { Header }
