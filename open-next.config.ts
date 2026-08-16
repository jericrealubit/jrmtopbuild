import { defineCloudflareConfig } from "@opennextjs/cloudflare"
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache"

// This site has no ISR/on-demand revalidation — every route is either fully
// static or renders fresh per request — so the static-assets cache preset is
// enough; no R2 bucket or Durable Objects are needed.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
})
