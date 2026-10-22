/**
 * Single source of truth for the public site URL.
 *
 * Used by page metadata (Open Graph / Twitter), the JSON-LD block and any
 * absolute link that leaves the site. Changing the domain later is a one-line
 * job: set NEXT_PUBLIC_SITE_URL in Vercel (Project → Settings → Environment
 * Variables) and redeploy — no code edits required.
 *
 * NOTE: the old address "https://urbanstays.co.za" no longer exists in DNS
 * (the domain does not resolve), so it must not be used until that domain is
 * renewed and pointed at the hosting again. See HANDOVER.md → "Domains".
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.urbanstaysandshuttles.co.za"
).replace(/\/$/, "");
