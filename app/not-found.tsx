import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 bg-gradient-to-b from-[#f6f6f1] via-[#ecece4] to-[#f2f2eb]">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-primary-subtle shadow-card">
        <div className="w-16 h-16 rounded-full bg-primary-subtle text-primary-dark flex items-center justify-center mx-auto mb-5 font-serif font-bold text-2xl">
          404
        </div>

        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-dark mb-3">
          Page Not Found
        </h1>

        <p className="text-sm text-text-muted mb-8 leading-relaxed">
          The clinic page you are looking for might have been moved or does not exist. Please return to the homepage or reach out to our team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-dark hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-button transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-primary-subtle text-primary-dark px-6 py-3 rounded-xl text-sm font-semibold border border-primary-subtle transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
