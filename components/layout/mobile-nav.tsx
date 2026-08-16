"use client"

import Link from "next/link"
import { Dialog } from "@base-ui/react/dialog"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

function MobileNav() {
  return (
    <Dialog.Root modal>
      <Dialog.Trigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="text-white hover:bg-white/10 md:hidden"
          />
        }
      >
        <Menu className="size-5" aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col gap-8 bg-navy p-6 text-silver shadow-2xl outline-none data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
              Menu
            </Dialog.Title>
            <Dialog.Close
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close menu"
                  className="text-white hover:bg-white/10"
                />
              }
            >
              <X className="size-5" aria-hidden="true" />
            </Dialog.Close>
          </div>
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Dialog.Close
                key={link.href}
                render={<Link href={link.href} />}
                className="rounded-[3px] px-2 py-3 font-oswald text-sm tracking-[0.03em] text-silver uppercase hover:bg-white/5 hover:text-gold-light"
              >
                {link.label}
              </Dialog.Close>
            ))}
            <div className="mt-2 flex flex-col gap-1 border-t border-hairline pt-4">
              {services.map((service) => (
                <Dialog.Close
                  key={service.slug}
                  render={<Link href={`/services/${service.slug}`} />}
                  className="rounded-[3px] px-2 py-2 text-sm text-silver/80 hover:bg-white/5 hover:text-gold-light"
                >
                  {service.name}
                </Dialog.Close>
              ))}
            </div>
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Button
              variant="outline-gold"
              render={<a href={siteConfig.phoneHref} />}
              nativeButton={false}
            >
              Call {siteConfig.phone}
            </Button>
            <Dialog.Close
              render={<Link href="/contact" />}
              className="inline-flex h-9 items-center justify-center rounded-[3px] bg-gradient-to-b from-gold-light to-gold px-4 font-oswald text-[0.82rem] font-semibold tracking-[0.03em] text-gold-button-text uppercase"
            >
              Get a Quote
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { MobileNav }
