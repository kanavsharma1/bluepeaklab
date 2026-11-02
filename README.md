# Bluepeak Lab — bluepeaklab.in

Marketing site for Bluepeak Lab, built with Next.js (App Router), TypeScript and Tailwind CSS v4. Fully static, so it is fast and cheap to host.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in your values
npm run dev                  # http://localhost:3000
```

## Edit content

| What | Where |
|---|---|
| Business name, email, social links, keywords | `src/lib/site.ts` |
| Prices, package features, process steps, FAQ | `src/lib/content.ts` |
| Colours and fonts (Misty peak palette) | `src/app/globals.css` (`@theme`) |
| Page sections | `src/components/*` |

The FAQ, prices and business details also feed the Google structured data automatically, so keep them in those files.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, e.g. `919876543210`. Powers the "Chat on WhatsApp" button. Until set, the button falls back to email. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID (`G-…`). Optional. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag code. Optional. |

## SEO included

- Title, description, keywords, canonical URL and `en-IN` language
- Open Graph and Twitter cards with an auto-generated 1200×630 share image (`/opengraph-image`)
- `sitemap.xml` and `robots.txt` generated at build time
- JSON-LD structured data: `ProfessionalService` (with prices and service area), `WebSite` and `FAQPage`
- Web app manifest, SVG favicon and theme colour
- Semantic HTML: one `h1`, labelled sections, ordered process list, skip link
- Self-hosted fonts via `next/font` (no layout shift), static rendering, security headers
- `www` → bare-domain redirect so Google indexes one version

## Deploy to Vercel with your Hostinger domain

1. Push this folder to a GitHub repo, then import it at vercel.com → **Add New → Project**.
2. Add the environment variables above in **Settings → Environment Variables**, then deploy.
3. In Vercel → **Settings → Domains**, add `bluepeaklab.in` and `www.bluepeaklab.in`.
4. In Hostinger → **Domains → DNS / Nameservers**, keep Hostinger's nameservers (so your email keeps working) and add the records Vercel shows. Typically:
   - `A` record, name `@`, value `76.76.21.21`
   - `CNAME` record, name `www`, value `cname.vercel-dns.com`
   Use the exact values Vercel displays. Do **not** touch the MX, SPF, DKIM or DMARC records for your `hello@bluepeaklab.in` mailbox.
5. Once live, add the site in Google Search Console, verify it, and submit `https://bluepeaklab.in/sitemap.xml`.
6. Test the structured data with Google's Rich Results Test.
