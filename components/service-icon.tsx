import { Hammer, LayoutPanelTop, Rows3, ShowerHead, SquareStack } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ServiceIconKey } from "@/lib/services"

// Placeholder icon set (lucide-react) standing in for a custom-drawn gold-line
// icon set. Swapping to real icons only requires editing this lookup.
const serviceIcons: Record<ServiceIconKey, LucideIcon> = {
  renovations: Hammer,
  pergolas: LayoutPanelTop,
  decking: Rows3,
  "floor-planks": SquareStack,
  bathroom: ShowerHead,
}

function getServiceIcon(key: ServiceIconKey): LucideIcon {
  return serviceIcons[key]
}

export { serviceIcons, getServiceIcon }
