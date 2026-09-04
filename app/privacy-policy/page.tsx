import { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Perfect Health Center",
  description: "Privacy policy regarding patient inquiry and health information handling at Perfect Health Center.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-primary-subtle shadow-card">
        <div className="flex items-center gap-3 text-primary-main mb-4">
          <Shield className="w-6 h-6" />
          <span className="font-semibold text-xs uppercase tracking-wider">Patient Privacy</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-text-body leading-relaxed">
          <p>
            At <strong>Perfect Health Center</strong> (operated by Dr. Pragati Khobragade), we hold patient confidentiality and medical privacy in the highest regard. This Privacy Policy explains how information gathered through our website (<Link href="/" className="text-primary-main underline">perfecthealthcenter.in</Link>) and consultation forms is collected, used, and safeguarded.
          </p>

          <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you submit a consultation request or schedule an appointment via our website, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-text-muted">
            <li>Patient full name</li>
            <li>Contact telephone / WhatsApp number</li>
            <li>Email address (optional)</li>
            <li>Preferred consultation type (in-person in Diva East or online)</li>
            <li>Brief description of health symptoms or specialty required</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
            2. How We Use Your Information
          </h2>
          <p>
            The information you provide is used exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-text-muted">
            <li>Contact you to confirm, reschedule, or manage your clinical appointment</li>
            <li>Prepare relevant medical case-taking context for Dr. Pragati prior to your consultation</li>
            <li>Respond to direct patient inquiries submitted via contact forms</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
            3. Data Protection &amp; Confidentiality
          </h2>
          <p>
            We do <strong>not</strong> sell, rent, trade, or share your personal or health information with any third-party advertisers or marketing agencies. All inquiries submitted are processed over encrypted HTTPS connections.
          </p>

          <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
            4. Contact Us
          </h2>
          <p>
            If you have questions regarding our privacy practices or wish to update any contact details on file, please reach out to us at:
            <br />
            <strong>Perfect Health Center</strong>
            <br />
            Mumra Devi Colony, Diva East, Thane – 400612, Maharashtra
            <br />
            Phone: <a href="tel:+919273431261" className="text-primary-main underline">+91 92734 31261</a>
            <br />
            Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pragativuplekar@gmail.com" target="_blank" rel="noopener noreferrer" className="text-primary-main underline" title="Compose email in Gmail">pragativuplekar@gmail.com ↗</a>
          </p>
        </div>
      </div>
    </div>
  );
}
