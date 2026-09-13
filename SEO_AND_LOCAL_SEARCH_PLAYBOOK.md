# Perfect Health Center — SEO & Local Search Playbook

This playbook documents the exact setup, technical configurations, and operational workflows to ensure **Perfect Health Center** (`perfecthealthcenter.in`) ranks on Google Search, Google Maps, and AI answer engines (ChatGPT, Google Gemini, Perplexity).

---

## 1. Verified NAP Profile (Name, Address, Phone)

> [!IMPORTANT]
> **NAP Consistency is critical.** Search engines and AI answer engines verify your legitimacy by cross-checking this identical string across Google Business Profile, the website, Practo, and Justdial.

* **Business Name:** `Perfect Health Center`
* **Doctor Name:** `Dr. Pragati Khobragade`
* **Address Line:** `Mumra Devi Colony, Diva East`
* **City / Locality:** `Thane`
* **Pincode:** `400612`
* **State:** `Maharashtra`
* **Full Formatted Address:** `Perfect Health Center, Mumra Devi Colony, Diva East, Thane – 400612, Maharashtra`
* **Phone:** `+91 92734 31261`
* **Website:** `https://perfecthealthcenter.in`
* **Hours:** Monday – Saturday: `10:30 AM – 10:00 PM` | Sunday: `Closed`

---

## 2. Google Search Console (GSC) Setup & Indexing

### A. Ownership Verification

#### Method 1: DNS TXT Record at GoDaddy (Recommended for Domain Property)
1. Go to **[Search Console](https://search.google.com/search-console)** and choose **Domain** property: `perfecthealthcenter.in`.
2. Copy the TXT verification record provided by Google (e.g. `google-site-verification=XXXXXXXXXXXXXXXXX`).
3. Log in to **GoDaddy** → **Domain Portfolio** → **`perfecthealthcenter.in`** → **DNS**.
4. Click **Add New Record**:
   * **Type:** `TXT`
   * **Name / Host:** `@`
   * **Value:** `google-site-verification=XXXXXXXXXXXXXXXXX`
   * **TTL:** `1/2 Hour` (or Default)
5. Save and allow 5–15 minutes for propagation, then click **Verify** in Search Console.

#### Method 2: HTML Meta Tag (Instant / Automatic)
Next.js is now configured to inject the verification tag into the `<head>` of all pages automatically.
* In `.env.local` (and in your Vercel Project Environment Variables), set:
  ```env
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your_verification_string_here"
  ```
  *(Only enter the code string inside the `content="..."` attribute, not the full `<meta>` tag).*

---

### B. Submit Sitemap
Once verified in Search Console:
1. Navigate to **Indexing** → **Sitemaps** in the left sidebar.
2. In the text field, type:
   ```text
   sitemap.xml
   ```
3. Click **Submit**. Google will read `https://perfecthealthcenter.in/sitemap.xml` directly.

---

### C. Request Instant Indexing (URL Inspection)
1. In the top search bar ("*Inspect any URL in 'perfecthealthcenter.in'*"), enter:
   ```text
   https://perfecthealthcenter.in/
   ```
2. Click **Request Indexing**.
3. Repeat for primary landing routes:
   * `https://perfecthealthcenter.in/about`
   * `https://perfecthealthcenter.in/services`
   * `https://perfecthealthcenter.in/contact`

---

## 3. Google Business Profile (GBP) Setup

1. Visit **[business.google.com](https://business.google.com)**.
2. Search for `Perfect Health Center` to verify no unclaimed listing exists at Diva East. If none exists, create a new one.
3. Configure profile details:
   * **Business Name:** `Perfect Health Center`
   * **Primary Category:** `Homeopathic clinic` (or `Homeopath`)
   * **Secondary Category:** `General practitioner`
   * **Address:** `Mumra Devi Colony, Diva East, Thane – 400612, Maharashtra`
   * **Phone:** `+91 92734 31261`
   * **Website:** `https://perfecthealthcenter.in`
   * **Hours:** `10:30 AM – 10:00 PM` (Mon–Sat), Sunday: Closed
4. Complete Google verification (Postcard / Video / Phone).
5. Add real clinic photos once verified.

---

## 4. Patient Reviews (AI Search Catalyst)

AI tools (ChatGPT search, Gemini, Perplexity) ground local recommendations on **Google Maps review velocity and volume**.

* **Target:** Collect **10–15 genuine patient reviews** within the first 6–8 weeks.
* **Review Link:** Once GBP is verified, generate the direct shortlink from Google Business Profile manager.
* **WhatsApp Outreach:** Share the link with satisfied patients with a simple message:
  > *"Dear [Patient Name], thank you for visiting Perfect Health Center. If Dr. Pragati helped you, please take 30 seconds to share your feedback on Google: [Google Review Link]. It helps other families find care."*
* **Never buy or automate fake reviews** — Google algorithmically penalizes review bursts and suspends profiles.

---

## 5. Local Directory Citations (NAP Consistency)

Register identical NAP profiles on:
1. **Practo:** [practo.com](https://practo.com) (Doctor & Clinic profile)
2. **Justdial:** [justdial.com](https://justdial.com) (Thane / Diva East listing)
3. **Sulekha:** [sulekha.com](https://sulekha.com)
