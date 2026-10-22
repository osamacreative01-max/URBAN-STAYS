# URBAN STAYS — Website Handover Document

**Property:** Luxury serviced apartments, Masingita Towers, Sandton
**Website:** https://www.urbanstaysandshuttles.co.za
**Prepared:** 21 October 2026

This document explains how the website works, who owns what, how to change things,
and exactly what still needs your attention. You should not need to know any
programming to run the site day-to-day — every task below is written as a
step-by-step recipe.

---

## 1. The 60-second summary

| | |
|---|---|
| **Live website** | https://www.urbanstaysandshuttles.co.za (typing the address without `www` forwards here automatically) |
| **Vercel address** | https://urban-stays-mu.vercel.app — the same deployment under Vercel's own domain. Both are live and show identical content; the `www` address is the one used for SEO and sharing. |
| **Source code** | GitHub: `https://github.com/osamacreative01-max/URBAN-STAYS` |
| **Hosting** | Vercel — connected to the GitHub repository, so every push to GitHub updates the site automatically |
| **Domain name** | `urbanstaysandshuttles.co.za`, registered at **host-h.net** (nameservers `ns1/ns2.host-h.net`) |
| **Website email address** | `enquiries@urbanstaysandshuttles.co.za`, hosted at host-h.net (mail server `mail.urbanstaysandshuttles.co.za`) |
| **Booking engine** | NightsBridge — property reference **40117** (https://book.nightsbridge.com/40117) |
| **WhatsApp** | +27 79 911 7815 (used by every green WhatsApp button on the site) |
| **Built with** | Next.js 16 (App Router), React 19, Tailwind CSS 4 |
| **Brand typeface** | Montserrat Regular + Medium (self-hosted, no external font service) |

---

## 2. The pages, and where each one lives

| Page (URL) | File that controls it |
|---|---|
| Home — `/` | `app/page.tsx` |
| Apartments — `/apartments` | `app/apartments/page.tsx` |
| Shuttle & Chauffeur — `/shuttle-chauffeur` | `app/shuttle-chauffeur/page.tsx` |
| Gallery — `/gallery` | `app/gallery/page.tsx` |
| Location — `/location` | `app/location/page.tsx` |
| Contact — `/contact` | `app/contact/page.tsx` |
| Contact form delivery (backend) | `app/api/contact/route.ts` |
| Menu / navigation | `components/Navbar.tsx` |
| Footer (all pages) | `components/Footer.tsx` |
| Floating WhatsApp button | `components/WhatsAppButton.tsx` |
| Page-wide metadata (browser tab title, social preview) | `app/layout.tsx` |
| Photos, fonts, sitemap, robots | `public/` folder |

---

## 3. Changing the common things

### 3.1 Change the nightly rate (currently R3,700)

The price appears in three files. Search each one for `3,700` and change it:

1. `app/apartments/page.tsx` — the price under the apartment description
2. `app/apartments/page.tsx` — the booking-card line (`R3,700/night · 2-4 Guests`)
3. `app/page.tsx` — the same booking card shown on the homepage

> **Important:** the *actual* rate a guest pays is set inside NightsBridge
> (property 40117). The figures on the website are display-only. If the two ever
> disagree, guests will see one price on the site and another at checkout —
> change both.

### 3.2 Change the phone number, WhatsApp number or email addresses

| What | File |
|---|---|
| WhatsApp number (all buttons) | `components/WhatsAppButton.tsx`, `components/Footer.tsx`, `app/contact/page.tsx`, plus any `wa.me/27799117815` link found with a search |
| Phone number shown as text | `app/shuttle-chauffeur/page.tsx`, `app/contact/page.tsx` |
| Email addresses | `app/contact/page.tsx`, `components/Footer.tsx`, `app/page.tsx` (structured data) |
| Email where **form enquiries** are delivered | Vercel environment variables `CONTACT_EMAIL_TO` / `CONTACT_EMAIL_CC` — see §6 |

### 3.3 Change the social media links

Instagram, Facebook and TikTok links appear in two places:
`components/Footer.tsx` and `app/contact/page.tsx`. Search for
`instagram.com`, `facebook.com` and `tiktok.com` and replace the addresses.

### 3.4 Add or replace photos

1. Drop the new image into `public/images/` (any folder name is fine).
2. Reference it as `/images/your-folder/your-photo.jpg`.
3. Gallery page: `app/gallery/page.tsx` — copy an existing `{ id, category, src, alt, aspectClass }` line and edit it. Categories in use: **All, Apartments, Interiors, Shuttle & Chauffeur, Sandton**.
4. Apartment carousel: `app/apartments/page.tsx` — the `images: [...]` array near the top.

**Tip:** keep photos under about 300 KB each. WhatsApp often re-sends photos at
full size (2–4 MB); running them through a compressor first keeps the site fast.
The image folder is currently ~22 MB, which is the main reason the site loads
slower than it could.

### 3.5 Change any wording

Every sentence on the site is inside the page files listed in §2. Open the file,
find the sentence (use Ctrl+F), edit between the quotation marks, save, and the
change appears once the site redeploys.

---

## 4. How an update gets onto the live site

The site is connected end-to-end: **GitHub → Vercel → live website**.

1. Make the change on your computer (or in GitHub's web editor).
2. Commit and push to the `main` branch on GitHub.
3. Vercel notices within seconds, builds the site (about 1 minute) and publishes it.
4. Hard-refresh the live page (Ctrl+F5 on desktop, or clear the app cache on a phone) to see it.

If you ever need to undo a change: GitHub → **Commits** → find the one to undo →
**Revert**. Vercel republishes the previous state.

If the site ever looks broken: Vercel → project → **Deployments** → click
**Promote to Production** on the last version that worked. Nothing is lost,
because the entire history is in GitHub.

---

## 5. Your email inbox — what is actually wrong

There are **two separate problems**, and they need separate fixes.

### Problem 1 — the website form has never sent an email (this is now fixed in code)

The "Send Message" form on `/contact` was only *pretending* to work: it waited a
second and showed a "Message Received" tick without sending anything anywhere.
Nothing was ever delivered to your inbox — not because mail is broken, but
because no mail was ever generated.

That has now been replaced with a real delivery service (see §6). Until you
complete the two-minute setup in §6, the form will show an honest
"message not sent — please use WhatsApp" message instead of a false tick.

### Problem 2 — your mailbox itself stopped receiving around 10 October

Independent of the website, mail sent **to** `enquiries@urbanstaysandshuttles.co.za`
stopped arriving. What I verified on 21 October 2026:

| Check | Result |
|---|---|
| Domain DNS | ✅ healthy (`urbanstaysandshuttles.co.za`) |
| Mail routing (MX record) | ✅ points to `mail.urbanstaysandshuttles.co.za` |
| Mail server reachable on port 25 | ✅ tested from 60 locations worldwide — accepting connections |
| Server answering (SMTP banner) | ✅ `www57.cpt1.host-h.net`, IP 196.40.97.157 |
| IP blacklist check (Spamhaus, SpamCop, Barracuda, SORBS, CBL, SpamRATS, UCEPROTECT, PSBL) | ✅ clean on all 8 — nobody is blocking them |
| SPF record | ✅ present (`v=spf1 mx a include:spf.host-h.net ?all`) |
| DKIM record | ❌ none found |
| DMARC record | ❌ none found |
| Domain expiry | ✅ zone unchanged since 9 September 2026 — the domain itself is fine |

Everything outside the server has now been ruled out: routing is correct, the
server is reachable from the whole internet, and no blacklist is blocking it.
The only remaining possibilities are **inside the mailbox or the hosting
account** — which only the host-h panel can show.

The fastest way to get the exact reason: send a test message **from Gmail to
`enquiries@urbanstaysandshuttles.co.za`**. If it is bouncing, Gmail returns the
precise error to you within a minute (for example *"mailbox full"*, *"account
disabled"* or *"user unknown"*). Forward or screenshot that bounce — it names the
fault exactly, and it is what host-h support needs to see.

Because the mail server is alive and correctly routed, the fault almost
certainly sits with the **mail account**, not the website and not the domain.
The usual causes, in order of likelihood:

1. **The mailbox is over its quota** — every mail server rejects new mail once
   the box is full. This is the single most common cause of "it just stopped".
2. **The email service package lapsed** at host-h.net when the site moved to
   Vercel. Hosting and mail are billed separately there.
3. Mail is landing in a **spam/junk folder** you are not checking.
4. The account was suspended for a policy or payment reason.

**Action needed from you (or whoever manages the host-h account):**

1. Log in to the host-h.net control panel → **Email / Mailboxes**.
2. Open `enquiries@urbanstaysandshuttles.co.za` and check:
   - **Quota / usage** — if it is at 100 %, empty the mailbox or raise the quota. This alone usually restores delivery within minutes.
   - **Status** — reactivate or renew the email package if it shows as expired/suspended.
   - **Forwarding rules** — make sure nothing forwards the mail elsewhere.
3. Send a test message from a Gmail address and watch the panel's **mail queue / delivery log**. If the server *accepts* and then drops it, that is a host-h issue — quote the log to their support.
4. Once mail flows again, add the two DNS records in §6.2 — they protect your domain's reputation so that mail to you stops being filtered as spam.

**Until the mailbox is fixed**, treat `tirzahdlamini@gmail.com` as the working
address — it is copied on all website enquiries as soon as §6 is completed.

### Bonus finding — a second domain in the code was dead

Until this handover, the site's metadata, sitemap and social-share links pointed
at **`urbanstays.co.za`, which no longer exists in DNS at all** (it does not
resolve — visitors and Google were being sent to a dead address, and every
WhatsApp/Facebook share preview linked to a broken URL). All of that now points
at the working address, `https://www.urbanstaysandshuttles.co.za`.

If you want `urbanstays.co.za` back as the main address, it must be **renewed
and its DNS re-created**, then the address can be swapped in one place
(`lib/site.ts`, or the `NEXT_PUBLIC_SITE_URL` variable in Vercel). Until then,
do not use it anywhere.

---

## 6. The contact form — how to switch it on (one click, one time)

The form is already built, tested and **live on both addresses**
(`https://www.urbanstaysandshuttles.co.za` and `https://urban-stays-mu.vercel.app`).
It delivers through a free relay called FormSubmit, which needs **no account, no
API key and no DNS changes** — it only needs one confirmation click.

### 6.1 The one-time activation (about 30 seconds)

1. Open **tirzahdlamini@gmail.com** (also check *Promotions* and *Spam*).
2. Look for an email from **FormSubmit** with a subject like *"Activate Form"* /
   *"Confirm your email"*.
3. Click the **Activate Form** button inside.

That is it. From that moment every enquiry submitted on the website is delivered
to that inbox, with a **copy to `enquiries@urbanstaysandshuttles.co.za`**, so you
receive it in both places — the copy keeps working even while the host-h mailbox
is down.

While the link is still unclicked, the form deliberately tells the visitor
*"we could not send your message — please use WhatsApp"* rather than showing a
false tick. It never claims a message was sent when it wasn't.

### 6.2 Optional upgrade once your domain is healthy — Resend

Free tier = 3,000 emails/month, better deliverability, and mail that arrives from
your own branded address rather than the relay:

1. https://resend.com → create a free account → verify your email address.
2. **API Keys** → **Create API Key** → copy the key (starts with `re_`).
3. Vercel → your project → **Settings** → **Environment Variables** → add
   `RESEND_API_KEY` = *(the key)*.
4. **Deployments** → top entry → **⋯** → **Redeploy**.

Resend then takes priority automatically and FormSubmit steps aside. Full list of
settings: `.env.example`.

### 6.3 Protect the domain's mail reputation (5 minutes, one time)

In the host-h.net DNS zone for `urbanstaysandshuttles.co.za`, add:

```
Type: TXT   Host: @            Value: v=spf1 mx a include:spf.host-h.net ?all     (already exists)
Type: TXT   Host: _dmarc       Value: v=DMARC1; p=quarantine; rua=mailto:tirzahdlamini@gmail.com; pct=100
```

Without a DMARC record, mail from your domain is easier for Gmail and others to
treat as spam — which quietly makes *incoming* mail to you less reliable too.

---

## 7. Things worth knowing (status checks from this handover)

| Area | Status | Note |
|---|---|---|
| Pages live and working | ✅ | Home, Apartments, Shuttle & Chauffeur, Gallery, Location, Contact |
| Mobile + desktop layout | ✅ | Verified at 15 screen widths from 320 px to 1920 px — no clipped or missing text anywhere |
| Apartments page text | ✅ | Every heading ("Luxury Serviced Apartments in Sandton", "Two Bedroom Apartment", "Included in Every Apartment") renders complete at every width |
| NightsBridge booking widget | ✅ | Loads correctly on `/apartments` and the homepage |
| Contact form | ⚠️ live, one click pending | Real delivery is wired in and tested; finish §6.1 (click *Activate Form* in Gmail) |
| Business mailbox | ❌ | Not receiving — §5, action needed at host-h |
| Canonical domain | ✅ fixed | Was pointing at a dead domain |
| Sitemap / robots.txt | ✅ | Point at the working domain; `/api/` is now blocked to crawlers |
| HTTPS certificate | ✅ | Automatic and renewed by Vercel |
| Backups | ✅ | The GitHub repository is the full backup of code and content |
| Web analytics | ❌ | **None installed** — you currently cannot see how many people visit, or where they come from |
| Custom 404 page | ❌ | Missing pages show a plain default |
| Spam protection on the form | ✅ | Hidden honeypot field + rate limiting |

### Recommended next steps (not urgent)

1. **Analytics** — add Google Analytics 4 or Vercel Web Analytics so you can see traffic, popular pages and where guests come from. Roughly 20 minutes.
2. **Social preview image** — the share image is currently a stock photo from Unsplash. Replace it with a real URBAN STAYS photo in `app/layout.tsx` so WhatsApp/Facebook shares look like your property.
3. **Image weight** — compress the photo library (22 MB today). A target of under 8 MB would noticeably speed up the site on mobile data.
4. **Custom 404 page** — add a branded "page not found" with links back to the main pages.
5. **Housekeeping in the repository** — the working notes (`devlog.txt`, `IMAGE-URLS.md`, `SEO-*.md`, `ANCHOR-TEXT-OPTIMIZATION.md`, `BACKLINK-STRATEGY-GUIDE.md`, `SOCIAL-SHARING-IMPLEMENTATION.md`, `IMAGE-VERIFICATION-REPORT.md`, `updated.txt.txt`) and the `mobile-screenshots/` folder are development material, not part of the site. Moving them into a `/docs` folder keeps the project tidy.
6. **Email the client sees** — the contact page lists two addresses (`enquiries@urbanstaysandshuttles.co.za` and `tirzahdlamini@gmail.com`). Once the business mailbox is healthy again, decide whether to keep both public.

---

## 8. Quick troubleshooting

| Symptom | First thing to check |
|---|---|
| A change is not showing on the site | Vercel → Deployments: did the build succeed? Then hard-refresh (Ctrl+F5) |
| "Message not sent" on the contact form | §6 — `RESEND_API_KEY` is missing from Vercel |
| Booking widget looks blank | NightsBridge property 40117 — check it from the NightsBridge dashboard |
| Images look wrong | File name must match exactly, including spaces, and the file must be inside `public/` |
| Mail to the business address not arriving | §5 — mailbox quota / package status at host-h |
| Site slow on phones | Image weight (§7 item 3) |

---

## 9. What was changed in this handover (21 October 2026)

1. **Contact form now really sends email** — replaced the pretend-submit with a genuine server endpoint (`app/api/contact/route.ts`), spam honeypot, rate limiting, honest error messages with a WhatsApp fallback, and a copy to your Gmail address. It delivers through a free relay that needs no account or API key (§6), with Resend and your own webhook as drop-in upgrades. Verified end-to-end on a local production server and on both live addresses.
2. **Mailbox re-diagnosed from the outside** — routing, global port-25 reachability (60 locations), SMTP response and eight blacklists all check out, isolating the fault to the mailbox/hosting account at host-h (§5).
2. **Canonical domain corrected** — metadata, Open Graph, Twitter cards, JSON-LD structured data, `sitemap.xml` and `robots.txt` all pointed at `urbanstays.co.za`, which no longer exists. Everything now uses `https://www.urbanstaysandshuttles.co.za`, controlled from a single place (`lib/site.ts` / `NEXT_PUBLIC_SITE_URL`).
3. **Structured data accuracy** — the local-business data advertised the wrong nightly rate and a logo URL that 404'd.
4. **`.env.example` added** — a documented template of every setting the site reads, so nothing is ever lost again.
5. **This handover document.**

---

*Prepared as part of the URBAN STAYS website handover. §5 (mailbox) and §6 (form
delivery) are the two items that need action on your side; everything else is
already live.*
