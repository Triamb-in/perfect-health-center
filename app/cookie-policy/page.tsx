import { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck, CheckCircle2, Lock, Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy — Perfect Health Center Diva East",
  description:
    "Information on cookies, functional local storage, and privacy compliance under India's Digital Personal Data Protection Act (DPDP Act 2023) at Perfect Health Center.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-primary-subtle shadow-card">
          
          {/* Header Tag */}
          <div className="flex items-center gap-2.5 text-primary-main mb-4">
            <Cookie className="w-5 h-5 text-primary-main" />
            <span className="font-semibold text-xs uppercase tracking-wider">
              Transparency &amp; Compliance
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Cookie Policy
          </h1>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary-subtle/50 text-primary-dark text-xs font-semibold mb-8 border border-primary-subtle/60">
            <ShieldCheck className="w-4 h-4 text-primary-main" />
            <span>Framed under India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act 2023)</span>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-text-body leading-relaxed">
            <p>
              This Cookie Policy explains how <strong>Perfect Health Center</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, operated by Dr. Pragati Khobragade, Diva East, Thane) uses cookies and browser local storage when you visit our official website (<Link href="/" className="text-primary-main underline font-medium">perfecthealthcenter.in</Link>).
            </p>

            <h2 className="font-serif text-xl font-bold text-primary-dark pt-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-main" />
              <span>1. What Are Cookies and Local Storage?</span>
            </h2>
            <p>
              Cookies are small text files placed on your device by your web browser when visiting a website. Local storage is a modern web standard that allows websites to remember necessary preferences on your own computer or mobile device without sending that data to advertising networks.
            </p>

            <h2 className="font-serif text-xl font-bold text-primary-dark pt-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary-main" />
              <span>2. Cookies and Storage We Actually Use</span>
            </h2>
            <p>
              We believe in minimal, purposeful data handling. We only use strictly necessary and functional elements to keep the clinic website operating properly:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#fafaf7] border border-primary-subtle">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <strong className="font-serif text-primary-dark text-sm">Consent Preference (`phc_cookie_consent`)</strong>
                  <span className="text-[10px] bg-primary-subtle text-primary-dark px-2 py-0.5 rounded font-semibold uppercase">Essential</span>
                </div>
                <p className="text-xs sm:text-sm text-text-muted">
                  Stores your response when you choose &ldquo;Accept&rdquo; or &ldquo;Reject non-essential&rdquo; on the cookie notice, preventing the banner from reappearing repeatedly during future visits.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#fafaf7] border border-primary-subtle">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <strong className="font-serif text-primary-dark text-sm">Clinic Studio Administration Session</strong>
                  <span className="text-[10px] bg-primary-subtle text-primary-dark px-2 py-0.5 rounded font-semibold uppercase">Admin Only</span>
                </div>
                <p className="text-xs sm:text-sm text-text-muted">
                  Encrypted session authentication tokens used strictly when authorized clinic doctors log in to manage clinic hours, FAQs, or content at `/studio`. Regular clinic visitors are not affected.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
              3. What We Do NOT Use
            </h2>
            <p>
              We hold patient trust in the highest regard:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-text-muted">
              <li><strong>Zero Browser Storage of Health Inquiries:</strong> We do <strong>not</strong> persist appointment or contact form fields in browser storage (no <code>localStorage</code>, no <code>sessionStorage</code>, and no draft-saving cookies). Form inputs exist exclusively in temporary page memory (React component state) while typing and are destroyed on reload or navigation, protecting private medical details on shared or family devices.</li>
              <li>We do <strong>not</strong> use third-party advertising cookies or cross-site tracking pixels (no Facebook Pixel, no ad network tracking).</li>
              <li>We do <strong>not</strong> build user tracking profiles or sell browsing habits to data brokers.</li>
              <li>Your health inquiry and consultation history remain strictly confidential between you and the doctor.</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-primary-dark pt-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary-main" />
              <span>4. Digital Personal Data Protection Act (DPDP Act 2023) Compliance</span>
            </h2>
            <p>
              Under India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act 2023):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-text-muted">
              <li><strong>Purpose Limitation:</strong> Any patient information you voluntarily submit (such as name, phone number, or symptoms) is collected and processed exclusively for the specified purpose of scheduling appointments, responding to medical inquiries, or providing clinical care.</li>
              <li><strong>Right to Review and Erasure:</strong> Patients have the right to request access, correction, or deletion of their contact details on record at any time.</li>
              <li><strong>No Data Monetization:</strong> Patient records are never commodified, sold, or shared with commercial marketers.</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-primary-dark pt-4 flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-primary-main" />
              <span>5. How to Control or Disable Cookies</span>
            </h2>
            <p>
              You can adjust or clear cookies at any time directly through your web browser settings:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-text-muted">
              <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Third-party cookies</li>
              <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies</li>
              <li><strong>Apple Safari:</strong> Settings &rarr; Safari &rarr; Privacy &amp; Security</li>
              <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data</li>
            </ul>
            <p className="text-xs text-text-muted">
              Note: Disabling all cookies may prevent your banner preference from being saved between visits, but the clinic website will remain accessible.
            </p>

            <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
              6. Relationship to Our Privacy Policy
            </h2>
            <p>
              This Cookie Policy operates in tandem with our complete{" "}
              <Link href="/privacy-policy" className="text-primary-main underline font-semibold">
                Privacy Policy
              </Link>
              , which governs how patient consultation submissions, contact inquiries, and health records are safeguarded.
            </p>

            <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
              7. Clinic Contact Details
            </h2>
            <p>
              If you have questions regarding our cookie practices or wish to submit a data inquiry under the DPDP Act 2023, please contact:
              <br />
              <strong className="text-primary-dark font-serif">Perfect Health Center</strong>
              <br />
              Mumra Devi Colony, Diva East, Thane – 400612, Maharashtra
              <br />
              Phone:{" "}
              <a href="tel:+919273431261" className="text-primary-main underline font-medium">
                +91 92734 31261
              </a>
              <br />
              Email:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pragativuplekar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-main underline font-medium"
              >
                pragativuplekar@gmail.com ↗
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
