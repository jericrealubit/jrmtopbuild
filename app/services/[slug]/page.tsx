import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageTemplate } from "@/components/service-page-template"
import { services, getServiceBySlug } from "@/lib/services"

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  }
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">
) {
  const { slug } = await props.params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return <ServicePageTemplate service={service} />
}
