import { Metadata } from "next";
import Link from "next/link";
import { FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use — Perfect Health Center",
  description: "Terms of use and clinical disclaimer for Perfect Health Center website.",
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-primary-subtle shadow-card">
        <div className="flex items-center gap-3 text-primary-main mb-4">
          <FileCheck className="w-6 h-6" />
          <span className="font-semibold text-xs uppercase tracking-wider">Legal Terms</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
          Terms of Use &amp; Medical Disclaimer
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-text-body leading-relaxed">
          <p>
            Welcome to the official website of <strong>Perfect Health Center</strong>. By browsing this website or submitting an appointment request, you agree to the following terms and guidelines.
          </p>

          <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
            1. Medical Information Disclaimer
          </h2>
          <p>
            The content, health articles, FAQs, and specialty descriptions on this website are provided for informational, educational, and general guidance purposes only. They do not constitute personalized medical advice, formal clinical diagnosis, or a replacement for an in-person consultation with a qualified medical doctor. Always consult with Dr. Pragati Khobragade or your primary healthcare provider regarding specific medical conditions.
          </p>

          <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
            2. Appointment Inquiries
          </h2>
          <p>
            Submitting an online booking or contact form represents an appointment request and is subject to clinic slot confirmation by our front desk staff. Emergency medical emergencies should be directed immediately to the nearest hospital casualty or emergency care facility.
          </p>

          <h2 className="font-serif text-xl font-bold text-primary-dark pt-4">
            3. Contact Information
          </h2>
          <p>
            For any queries regarding clinic terms, please contact:
            <br />
            <strong>Perfect Health Center</strong>
            <br />
            Mumra Devi Colony, Diva East, Thane – 400612, Maharashtra
            <br />
            Phone: <a href="tel:+919273431261" className="text-primary-main underline">+91 92734 31261</a>
          </p>
        </div>
      </div>
    </div>
  );
}
