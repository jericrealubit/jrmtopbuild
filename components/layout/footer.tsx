import Image from "next/image"
import Link from "next/link"
import { Flame } from "lucide-react"
import { Container } from "@/components/container"
import { services } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"

function Footer() {
  return (
    <footer className="bg-footer-black text-silver">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-9 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/jrm-logo-round.png"
                alt="JRM Top Build Ltd logo"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <p className="font-heading text-white">JRM Top Build Ltd</p>
                <p className="font-oswald text-xs tracking-[0.06em] text-gold uppercase">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-[32ch] text-sm text-silver/80">
              Commercial and residential building based in {siteConfig.baseSuburb},
              servicing {siteConfig.region}.
            </p>
          </div>

          <div>
            <h4 className="font-oswald text-[0.78rem] tracking-[0.06em] text-white uppercase">
              Services
            </h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-gold-light"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-[0.78rem] tracking-[0.06em] text-white uppercase">
              Site
            </h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-light">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gold-light">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/service-area" className="hover:text-gold-light">
                  Service Area
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold-light">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-[0.78rem] tracking-[0.06em] text-white uppercase">
              Contact
            </h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-gold-light">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold-light"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.baseSuburb}, {siteConfig.region}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-silver/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · NZBN {siteConfig.nzbn}
          </span>

          {/* Build credit — flame + smoke, aria-hidden. A 16px decorative badge,
              not motion in the reading path, so it animates unconditionally
              rather than deferring to prefers-reduced-motion. */}
          <div className="relative flex items-center gap-2 self-start overflow-visible rounded-full border border-hairline bg-navy-2 px-3.5 py-1.5 font-mono text-xs text-silver/80 sm:self-auto">
            <span
              aria-hidden="true"
              className="relative flex h-4 w-4 shrink-0 items-end justify-center overflow-visible"
            >
              <span className="pointer-events-none absolute bottom-3 h-2 w-2 rounded-full bg-silver/60 blur-[2px] animate-smoke-1" />
              <span className="pointer-events-none absolute bottom-3 left-0 h-2.5 w-2.5 rounded-full bg-gold/45 blur-[3px] animate-smoke-2" />
              <span className="pointer-events-none absolute bottom-3 right-0 h-1.5 w-1.5 rounded-full bg-silver/50 blur-[2px] animate-smoke-3" />
              <Flame className="h-4 w-4 origin-bottom text-gold animate-flame" />
            </span>

            <span className="text-silver">Smoked &amp; Coded by:</span>

            <a
              href="https://www.linkedin.com/in/jericrealubit"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-semibold text-gold transition duration-200 hover:text-gold-light"
            >
              jeric
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-110"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
              </svg>
              <span className="sr-only"> — LinkedIn profile</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
