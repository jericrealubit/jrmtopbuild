import Image from "next/image"
import Link from "next/link"
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

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-silver/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · NZBN {siteConfig.nzbn}
          </span>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
