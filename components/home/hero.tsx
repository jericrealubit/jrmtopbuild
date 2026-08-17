import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { PlaceholderImage } from "@/components/placeholder-image"
import { siteConfig } from "@/lib/site-config"

function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-navy to-navy-2 py-20 text-white sm:py-24"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 15% -10%, rgba(198,161,91,0.16), transparent 60%), linear-gradient(180deg, var(--color-navy), var(--color-navy-2))",
      }}
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-oswald text-xs tracking-[0.14em] text-gold uppercase">
            Christchurch &amp; Canterbury · Commercial &amp; Residential
          </p>
          <h1 className="mt-3 font-heading text-4xl leading-[1.12] text-white sm:text-5xl">
            Built right,
            <br />
            <em className="text-gold-light not-italic">the first time.</em>
          </h1>
          <p className="mt-5 max-w-[46ch] text-silver">
            {siteConfig.name} delivers renovations &amp; alterations, pergolas,
            decking, floor planks and bathroom renovations across Christchurch —
            premium, crafted, reliable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button variant="gold" render={<Link href="/contact" />} nativeButton={false}>
              Get a Free Quote
            </Button>
            <Button
              variant="outline-gold"
              render={<a href={siteConfig.phoneHref} />}
              nativeButton={false}
            >
              Call {siteConfig.phone}
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-5 font-oswald text-xs tracking-[0.03em] text-silver uppercase">
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
              Licensed &amp; insured
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
              Commercial &amp; residential
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
              Christchurch-owned
            </li>
          </ul>
        </div>
        <PlaceholderImage
          label="Hero photo — finished job coming soon"
          src="/photos/hero.jpg"
          alt="Completed deck and pergola renovation by JRM Top Build"
          aspectClassName="aspect-[4/3]"
        />
      </Container>
    </section>
  )
}

export { Hero }
