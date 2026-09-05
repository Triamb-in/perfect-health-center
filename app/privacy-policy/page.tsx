import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, FileText, CheckCircle2, UserCheck, AlertCircle, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Patient Data Protection — Perfect Health Center",
  description:
    "Comprehensive patient data privacy policy complying with India's Digital Personal Data Protection Act (DPDP Act 2023) at Perfect Health Center, Diva East, Thane.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-primary-subtle shadow-card">
        
        {/* Header Badge */}
        <div className="flex items-center gap-2.5 text-primary-main mb-4">
          <Shield className="w-5 h-5" />
          <span className="font-semibold text-xs uppercase tracking-wider">
            DPDP Act 2023 Compliance &amp; Patient Confidentiality
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
          Patient Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-text-muted mb-8 pb-6 border-b border-primary-subtle">
          Last Updated: September 2026 • Governed under India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act 2023)
        </p>

        <div className="space-y-8 text-sm sm:text-base text-text-body leading-relaxed">
          
          {/* Section 1: Data Fiduciary */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-primary-main" />
              <span>1. Data Fiduciary Identification</span>
            </h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023, <strong>Perfect Health Center</strong> (operated by Dr. Pragati Khobragade, Consulting Homeopath &amp; General Physician, Reg. No. 34913) acts as the <em>Data Fiduciary</em> for personal data voluntarily provided through this website (
              <Link href="/" className="text-primary-main underline font-medium">
                perfecthealthcenter.in
              </Link>
              ) and associated consultation scheduling forms.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-text-muted">
              Clinic Address: Mumra Devi Colony, Diva East, Thane – 400612, Maharashtra, India.
            </p>
          </section>

          {/* Section 2: Categories of Data Collected */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary-main" />
              <span>2. Categories of Personal Data Collected</span>
            </h2>
            <p>
              We adhere strictly to the principle of <em>data minimization</em>. When you schedule an appointment or submit a clinical inquiry, we collect only information necessary to triage and schedule your consultation:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3 text-sm text-text-muted">
              <li><strong>Contact Identifiers:</strong> Full name, telephone / WhatsApp contact number, and optional email address.</li>
              <li><strong>Consultation Preferences:</strong> Preferred appointment date, consultation mode (in-person clinic visit in Diva East or online video session), and broad health specialty.</li>
              <li><strong>Health Symptoms / Context:</strong> Optional notes detailing your primary complaints or health concerns to prepare clinical context for Dr. Pragati.</li>
              <li><strong>Zero Passive Identification:</strong> We do not log IP addresses to patient records, nor do we deploy biometric, facial recognition, or automated behavioral tracking.</li>
            </ul>
          </section>

          {/* Section 3: Purpose Limitation & Lawful Basis */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-main" />
              <span>3. Lawful Basis &amp; Purpose Limitation</span>
            </h2>
            <p>
              Your data is processed strictly on the basis of your affirmative, informed consent given when submitting our consultation booking or contact forms. Information is used exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3 text-sm text-text-muted">
              <li>Direct telephone or WhatsApp communication to confirm, reschedule, or coordinate your clinic visit.</li>
              <li>Enabling Dr. Pragati Khobragade to review relevant medical context prior to your case-taking session.</li>
              <li>Transmitting automated booking confirmation notices to the clinic administrative team.</li>
            </ul>
            <p className="mt-3 font-semibold text-primary-dark text-xs sm:text-sm">
              We never commodify, monetize, rent, or transfer patient data to third-party pharmaceutical companies, advertising networks, or commercial brokers.
            </p>
          </section>

          {/* Section 4: Data Retention Schedule */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary-main" />
              <span>4. Explicit Data Retention Periods</span>
            </h2>
            <p>
              In compliance with Section 8(7) of the DPDP Act 2023, personal data is not retained beyond the period necessary to fulfill the purpose for which it was gathered:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-[#fafaf7] border border-primary-subtle">
                <h4 className="font-semibold text-sm text-primary-dark mb-1">Inquiry Data (Non-Converted)</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  General inquiries or booking requests where a patient consultation does not materialize are automatically expunged from operational systems within <strong>90 days</strong>.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#fafaf7] border border-primary-subtle">
                <h4 className="font-semibold text-sm text-primary-dark mb-1">Clinical Patient Records</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Where a clinical consultation is conducted, medical case-taking records are governed by statutory guidelines established by the Maharashtra Council of Homoeopathy and state medical regulations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Data Principal Rights under DPDP Act 2023 */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-main" />
              <span>5. Your Rights as a Data Principal</span>
            </h2>
            <p>
              The DPDP Act 2023 guarantees patients the following enforceable legal rights regarding their personal data:
            </p>
            <div className="space-y-3 mt-4">
              <div className="p-4 rounded-xl bg-[#fafaf7] border border-primary-subtle">
                <h4 className="font-semibold text-sm text-primary-dark mb-1">Right to Access Summary:</h4>
                <p className="text-xs text-text-muted">You have the right to request a readable summary of personal data held about you by the clinic and the identities of any processors involved in transmission.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#fafaf7] border border-primary-subtle">
                <h4 className="font-semibold text-sm text-primary-dark mb-1">Right to Correction &amp; Updation:</h4>
                <p className="text-xs text-text-muted">You may request the correction of inaccurate or misleading contact information and the completion of incomplete profile details.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#fafaf7] border border-primary-subtle">
                <h4 className="font-semibold text-sm text-primary-dark mb-1">Right to Erasure (Right to be Forgotten):</h4>
                <p className="text-xs text-text-muted">You may request the deletion of your personal inquiry records, provided retention is no longer mandated under statutory medical recordkeeping laws.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#fafaf7] border border-primary-subtle">
                <h4 className="font-semibold text-sm text-primary-dark mb-1">Right to Withdraw Consent:</h4>
                <p className="text-xs text-text-muted">You may withdraw your consent for future communications at any time. Withdrawal does not affect the lawfulness of processing undertaken prior to the withdrawal.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#fafaf7] border border-primary-subtle">
                <h4 className="font-semibold text-sm text-primary-dark mb-1">Right of Grievance Redressal:</h4>
                <p className="text-xs text-text-muted">You have the right to readily accessible grievance redressal mechanisms through our designated Grievance Officer detailed below.</p>
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-text-body">
              <strong>How to Exercise Your Rights:</strong> Submit an email request to{" "}
              <a href="mailto:pragativuplekar@gmail.com" className="text-primary-main underline font-medium">
                pragativuplekar@gmail.com
              </a>{" "}
              with the subject line <em>&ldquo;DPDP Patient Data Request — [Your Name]&rdquo;</em>. All verified requests are acknowledged within 48 hours.
            </p>
          </section>

          {/* Section 6: Cookie Policy Linkage & Storage Security */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary-main" />
              <span>6. Cookie Usage &amp; Client-Side Storage Architecture</span>
            </h2>
            <p>
              Our website uses only essential session mechanics and does <strong>not</strong> employ cross-site tracking cookies, third-party analytics pixels, or advertisement trackers.
            </p>
            <p className="mt-2">
              <strong>Zero Browser Storage of Health Concerns:</strong> While filling out consultation forms, patient inputs exist strictly within your browser&apos;s volatile runtime memory (React component state). They are never written to <code>localStorage</code>, <code>sessionStorage</code>, or persistent browser files. For comprehensive information on how cookies are handled and how to manage your preferences, please consult our dedicated{" "}
              <Link href="/cookie-policy" className="text-primary-main underline font-medium">
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* Section 7: Grievance Redressal Officer */}
          <section className="p-6 rounded-2xl bg-[#f2f6f1] border-2 border-primary-subtle">
            <h2 className="font-serif text-xl font-bold text-primary-dark mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary-main" />
              <span>7. Designated Grievance Redressal Officer</span>
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mb-4">
              In accordance with Section 10 and Section 12 of India&apos;s Digital Personal Data Protection Act, 2023, the designated Grievance Officer for Perfect Health Center is:
            </p>

            <div className="bg-white rounded-xl p-5 border border-primary-subtle shadow-subtle space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <UserCheck className="w-4 h-4 text-primary-main flex-shrink-0" />
                <div>
                  <span className="text-xs text-text-muted">Designated Officer:</span>
                  <p className="font-semibold text-primary-dark">Dr. Pragati Khobragade</p>
                  <p className="text-xs text-text-muted">Medical Director &amp; Data Fiduciary Representative (Reg. No. 34913)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-main flex-shrink-0" />
                <div>
                  <span className="text-xs text-text-muted">Official Email:</span>
                  <p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=pragativuplekar@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-main underline font-semibold"
                    >
                      pragativuplekar@gmail.com ↗
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-main flex-shrink-0" />
                <div>
                  <span className="text-xs text-text-muted">Clinic Contact:</span>
                  <p>
                    <a href="tel:+919273431261" className="text-primary-main underline font-semibold">
                      +91 92734 31261
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-text-muted">Clinic Address:</span>
                  <p className="text-xs sm:text-sm text-text-body">
                    Perfect Health Center, Mumra Devi Colony, Diva East, Thane – 400612, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-text-muted mt-4 leading-relaxed">
              <strong>Resolution Timelines:</strong> Grievance requests are officially acknowledged within 48 business hours and thoroughly addressed within 30 days of receipt in accordance with the Digital Personal Data Protection Act, 2023.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
