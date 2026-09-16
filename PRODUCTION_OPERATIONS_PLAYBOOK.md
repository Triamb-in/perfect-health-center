# Perfect Health Center — Production Operations & Architecture Playbook

**Domain:** [https://perfecthealthcenter.in](https://perfecthealthcenter.in/)  
**Repository:** [https://github.com/Triamb-in/perfect-health-center](https://github.com/Triamb-in/perfect-health-center)  
**Stack:** Next.js (App Router) + React + TypeScript + Vercel + Sanity CMS  

---

> [!IMPORTANT]
> **Core Architectural Principle:**  
> **GitHub controls developer code.**  
> **Sanity controls client content.**  
> **Vercel deploys code without mutating or overwriting CMS data.**  
> Continuous deployments via GitHub and Vercel will **never** call Sanity mutation endpoints, re-seed, delete, or overwrite client content.

---

## 1. Developer Deployment Workflow (Code & Infrastructure)

```
[Developer Local Machine] 
   └── git commit & git push
        └── [GitHub Repository: Triamb-in/perfect-health-center]
             └── [Vercel Automated CI/CD Build]
                  ├── 1. `next build` (zero mutations, zero network writes to Sanity)
                  ├── 2. Compile TypeScript & Validate Static HTML Pages (10/10)
                  └── 3. Deploy Production Artifact
```

### Safety Rules:
1. `npm run build` runs `next build` **only**. It does NOT execute seed scripts, does NOT upload assets to Sanity, and does NOT run `createOrReplace`.
2. Developer changes to UI, CSS, layout, security headers, metadata, or structured data deploy safely through Vercel without altering any published Sanity records.
3. If Sanity CMS is temporarily unreachable, the website gracefully falls back to verified static data while logging server-side diagnostic errors (`[Sanity] CMS request failed`).

---

## 2. Client Content Management Workflow (Self-Service CMS)

```
[Client / Clinic Doctor]
   └── Logs in to Sanity Studio (/studio)
        └── Edits clinic details, specialties, timings, FAQs, certificates, or gallery
             └── Clicks "Publish" in Sanity Studio
                  └── Published immediately to Sanity production dataset
                       └── Website reads new content dynamically (0 GitHub commits, 0 Vercel redeploys required!)
```

### Why Edits Reflect Immediately:
- `lib/sanity/client.ts` uses `useCdn: false` on server-side queries, bypassing edge-CDN propagation lag.
- Next.js dynamic routes (`revalidate = 0`) retrieve the latest published Sanity documents on-demand.
- Published changes are live without requiring a developer to push code or Vercel to rebuild.

---

## 3. Required Production Environment Variables (Vercel)

Ensure these environment variables are configured in the **Vercel Project Settings → Environment Variables**:

| Variable Name | Environment | Description / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Production, Preview | Sanity Project ID (e.g. `ciisvyoq`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Production, Preview | Sanity Dataset (e.g. `production`) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Production, Preview | API Version (e.g. `2024-03-01`) |
| `SANITY_API_READ_TOKEN` | Production (Secret) | Server-side read token for querying published content |
| `NEXT_PUBLIC_SITE_URL` | Production, Preview | `https://perfecthealthcenter.in` |
| `RESEND_API_KEY` | Production (Secret) | Resend API key for appointment notification emails |
| `CLINIC_NOTIFICATION_EMAIL` | Production | Recipient email (e.g. `pragativuplekar@gmail.com`) |
| `CLINIC_FROM_EMAIL` | Production | Verified sender (e.g. `appointments@perfecthealthcenter.in`) |
| `UPSTASH_REDIS_REST_URL` | Production (Secret) | Distributed serverless Redis URL for rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | Production (Secret) | Distributed serverless Redis Token |
| `MEDIA_SIGNING_SECRET` | Production (Secret) | 64-char hex secret for HMAC watermarked media signatures |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Production | Search Console verification token string |
| `NEXT_PUBLIC_GA_ID` | Production | Google Analytics 4 Measurement ID from clinic's Google Analytics account (e.g. `G-XXXXXXXXXX`). Left blank until client provides actual GA4 ID. |

> [!CAUTION]
> **Never set `SANITY_API_WRITE_TOKEN` in client-facing browser bundles.**  
> Write tokens are strictly for developer CLI migrations and must never be exposed or used during page rendering.

---

## 4. Safe Sanity Seeding / Bootstrap Procedure

The seeding script (`scripts/seedSanity.ts`) is designed exclusively for initial project bootstrapping on empty datasets. Because it executes `createOrReplace`, **strict multi-layer safeguards are permanently active**:

1. **Vercel Block:** The script automatically detects `VERCEL=1` and terminates immediately with a fatal exit code.
2. **Production Block:** The script terminates if `NODE_ENV=production` unless `--allow-production-overwrite` is supplied.
3. **Confirmation Requirement:** The script refuses execution unless `--confirm-seed` is explicitly provided.

### To safely run bootstrap in local development:
```bash
# Refuses to run (safety guard):
npm run seed:sanity

# Explicit, intentional local execution:
npm run seed:sanity -- --confirm-seed
```

---

## 5. Google Search Console (GSC) Setup & Verification

1. Open **[Google Search Console](https://search.google.com/search-console)**.
2. Add a property for `https://perfecthealthcenter.in`.
3. **Verification Options:**
   - **Option A (Instant Meta Tag):** Add the verification string to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel. Next.js automatically outputs `<meta name="google-site-verification" content="..." />` into the page `<head>`.
   - **Option B (DNS TXT Record at GoDaddy):** Add a `TXT` record with host `@` and value `google-site-verification=...`.

---

## 6. XML Sitemap Submission

1. In Search Console, select **Indexing → Sitemaps**.
2. Enter `sitemap.xml` in the field.
3. Submit and verify status changes to **Success**.
4. Canonical XML sitemap URL: `https://perfecthealthcenter.in/sitemap.xml`.

---

## 7. URL Inspection & Reindexing Workflow

1. In Search Console, paste any public URL (e.g. `https://perfecthealthcenter.in/`) into the top search bar (**URL Inspection**).
2. Click **Test Live URL** to confirm that Googlebot can fetch and render the page successfully.
3. Click **Request Indexing**.
4. Use this after major updates to core pages (`/`, `/about`, `/services`, `/contact`).

---

## 8. Google Business Profile (GBP) Checklist for Clinic Owner

A website alone cannot guarantee Google Maps 3-Pack placement. The clinic owner must claim and verify their official **Google Business Profile**:

- [ ] **Exact Business Name:** `Perfect Health Center` (Avoid keyword stuffing like "Best Homeopathy Clinic in Diva" to prevent Google suspension).
- [ ] **Primary Category:** `Homeopathic Pharmacy` or `Homeopathic Clinic` or `General Practitioner`.
- [ ] **Secondary Categories:** `Skin Care Clinic`, `Medical Clinic`, `Doctor`.
- [ ] **Exact Address:** `Mumra Devi Colony, Diva East, Thane, Maharashtra 400612, India`.
- [ ] **Phone Number:** `+91 92734 31261`.
- [ ] **Website URL:** `https://perfecthealthcenter.in`.
- [ ] **Appointment Link:** `https://perfecthealthcenter.in/contact`.
- [ ] **Clinic Hours:** Monday to Saturday: `10:30 AM – 10:00 PM`; Sunday: `Closed`.
- [ ] **Real Photos:** High-resolution photos of the clinic exterior, interior consultation room, pharmacy counter, and doctors.

---

## 9. Consistent NAP (Name, Address, Phone) Reference

Maintain this exact NAP consistency across all directories (Google Maps, Practo, Justdial, Sulekha):

```
Name:     Perfect Health Center
Doctor:   Dr. Pragati Khobragade
Address:  Mumra Devi Colony, Diva East, Thane – 400612, Maharashtra, India
Phone:    +91 92734 31261
Website:  https://perfecthealthcenter.in
```

---

## 10. Legitimate Patient Review Strategy

- **Never buy, fabricate, or incentivize fake reviews.** Google's spam detection algorithm penalizes sudden bursts of unverified reviews.
- **Natural Collection:** Print a clean QR code linking to your Google Business Profile review link at the clinic billing/reception desk.
- **Doctor Guidance:** Invite long-term patients who experienced positive outcomes to share an honest, voluntary review detailing their experience.

---

## 11. Technical SEO & Schema Verification

- **Robots.txt:** Accessible at `https://perfecthealthcenter.in/robots.txt`.
- **JSON-LD Structured Data:**
  - `MedicalBusiness` / `Physician` schema is embedded with stable ID `https://perfecthealthcenter.in/#medicalbusiness`.
  - `FAQPage` schema is **strictly restricted** to pages that visibly display FAQ questions (`/`).
  - No fabricated review counts or ratings exist in structured data.
- **Canonical URLs:** Every indexable page defines its own canonical link in metadata.

---

## 12. AI Crawler & LLM Discoverability Verification

- **`public/llms.txt`:** Formatted to provide accurate, factual knowledge regarding clinic identity, services, practitioners, and geographical location in Diva East, Thane.
- **Crawler Access:** `robots.txt` explicitly allows legitimate AI search and indexing crawlers including `Googlebot`, `OAI-SearchBot`, `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `Applebot`.
- **Realistic Expectation:** Structured and clean entity data makes the clinic easily discovered and cited by AI engines, but **no technical implementation can guarantee recommendation in chat interfaces**.

---

## 13. Healthcare Marketing Compliance Notice

All public copy on `perfecthealthcenter.in` is framed under ethical medical advertising standards:
- **No Absolute Guarantees:** Avoid words like "100% cure", "permanent eradication", "dissolves all stones", or "eliminates infection".
- **Approved Phrasing:** Use "individualized constitutional care", "supportive symptom management", "gentle therapeutic protocols", and "holistic primary healthcare".
- Any new medical services added in Sanity CMS should be reviewed by Dr. Pragati Khobragade or Dr. Vijay Uplekar prior to publishing.

---

## 14. Google Analytics 4 (GA4) Setup & Verification

Automated SEO audit tools check for Google Analytics by verifying that the script is delivered without errors and matches an active Google Analytics property.
- **Root Cause of Audit Warning:** A dummy tracking ID (`G-PHC2026DIVA`) was previously used as a fallback. Dummy IDs return 404/invalid stream errors when tested by audit bots.
- **Repository Solution:** The dummy fallback has been removed. The application conditionally loads Google Analytics scripts **only** when a genuine `NEXT_PUBLIC_GA_ID` is set in Vercel environment variables.
- **Action for Clinic / Site Owner:**
  1. Go to [Google Analytics](https://analytics.google.com/) and create or open the property for `perfecthealthcenter.in`.
  2. Navigate to **Admin → Data Streams → Web Stream**.
  3. Copy your Measurement ID (formatted as `G-XXXXXXXXXX`).
  4. In the **Vercel Dashboard**, go to **Project Settings → Environment Variables**.
  5. Add `NEXT_PUBLIC_GA_ID` with your Measurement ID for **Production**.
  6. Redeploy or trigger a build. The GA script will then execute with your verified property, passing all audit validations.

---

## 15. Domain DNS SPF & Email Deliverability (Action for Domain Owner)

> [!IMPORTANT]
> **SPF (Sender Policy Framework) is a DNS record issue, not a Next.js code issue.**  
> Application code cannot alter DNS records. The domain owner must add the SPF TXT record directly inside their domain registrar / DNS management console (**GoDaddy DNS** for `perfecthealthcenter.in`).

### Actual Mail Sending Services for `perfecthealthcenter.in`:
1. **Transactional Website Notifications (Resend):** The contact and appointment booking forms send transactional emails through **Resend** (`api.resend.com`) using sender `appointments@perfecthealthcenter.in`. Resend routes its outgoing mail through **Amazon SES** (`include:amazonses.com`).
2. **Notification Recipient Inboxes:** The clinic receives booking details directly into their Google/Gmail inboxes (`pragativuplekar@gmail.com` and `Uplekarvijay78@gmail.com`).
3. **If Google Workspace / Gmail is used to send `@perfecthealthcenter.in` mail:** Google Workspace sending servers require `include:_spf.google.com`.

### Exact DNS Action for the Domain Owner in GoDaddy DNS:
1. Log into your **GoDaddy Account** and navigate to **DNS Management** for `perfecthealthcenter.in`.
2. Inspect your existing **TXT** records. (There is currently only a Google site verification TXT record; no SPF record exists).
3. Click **Add New Record** with the following values:

| Field | Value | Notes |
| :--- | :--- | :--- |
| **Type** | `TXT` | Text record |
| **Name / Host** | `@` | Points to the root domain `perfecthealthcenter.in` |
| **Value (Resend only)** | `v=spf1 include:amazonses.com ~all` | Authorizes Amazon SES / Resend to send on behalf of the domain |
| **Value (Resend + Google Workspace)** | `v=spf1 include:amazonses.com include:_spf.google.com ~all` | Use this if you also send outbound mail from Google Workspace |
| **TTL** | `1 Hour` (or `Default / 3600`) | Standard propagation time |

> [!WARNING]
> **Rule of One SPF Record:** A domain must have **exactly one** SPF TXT record. Do not create multiple SPF records; merge all authorized senders into a single `v=spf1 ... ~all` string.

