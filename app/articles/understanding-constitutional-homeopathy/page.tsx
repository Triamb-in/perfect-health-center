import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  BookOpen,
  Sparkles,
  HeartHandshake,
  Search,
  UserCheck,
  Layers,
} from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";

export const metadata: Metadata = {
  title: "Constitutional Homeopathy Guide",
  description:
    "Learn how constitutional homeopathy works: in-depth case-taking, totality of symptoms, and root-cause healing by Dr. Pragati & Dr. Vijay in Diva East, Thane.",
  alternates: {
    canonical: "/articles/understanding-constitutional-homeopathy",
  },
};

export default async function ConstitutionalHomeopathyArticlePage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7]">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Tag */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary-main uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Foundational Principles • Clinical Practice</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 leading-tight">
            Understanding Constitutional Homeopathy: The Art of Whole-Person Healing
          </h1>
          <p className="text-sm text-text-muted">
            Clinical Explanation by <strong>Dr. Pragati Khobragade</strong> &amp; <strong>Dr. Vijay Uplekar</strong> • Perfect Health Center, Diva East, Thane
          </p>
        </div>

        {/* Hero Card Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary-subtle shadow-card mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                What Makes Constitutional Homeopathy Truly Unique?
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                In conventional medicine, different organs are treated by isolated specialists: a dermatologist treats the skin rash, a pulmonologist treats the breathing difficulty, and a gastroenterologist treats the acid reflux. In constitutional homeopathy, these are recognized as expressions of a single underlying vital disturbance.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle/80 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-text-dark font-medium leading-relaxed">
              Constitutional prescribing aims to find the single remedy whose symptom picture mirrors the totality of the patient&apos;s physical constitution, emotional disposition, and immunological susceptibility.
            </p>
          </div>
        </div>

        {/* The 4-Step Clinical Process */}
        <div className="space-y-10 text-text-body text-base sm:text-lg leading-relaxed">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                1
              </span>
              <span>The In-Depth Case-Taking Session</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              When you consult Dr. Pragati Khobragade or Dr. Vijay Uplekar at our Diva East clinic, your initial session is an unhurried, conversational evaluation. We explore:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-text-dark">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                <span><strong>Physical Generals:</strong> Appetite, food cravings/aversions, thermal preferences (chilly vs. warm patient), thirst, and perspiration patterns.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                <span><strong>Sleep &amp; Rhythms:</strong> Sleep positions, recurring dream themes, daytime fatigue patterns, and weather sensitivities.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                <span><strong>Mental &amp; Emotional Disposition:</strong> Anxiety triggers, grief reactions, introverted/extroverted temperament, and work stress.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                <span><strong>Past &amp; Family Medical History:</strong> Genetic predispositions to asthma, diabetes, psoriasis, or allergies.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                2
              </span>
              <span>Why One Remedy Can Heal Multiple Ailments</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              Patients often wonder how a single small vial of sweet globules can simultaneously clear up eczema on their hands, ease their morning asthma, and calm their chronic migraine headaches.
            </p>
            <p className="text-sm sm:text-base text-text-body">
              The answer lies in systemic balance: the remedy does not chemically attack the skin rash or anesthetize the head pain. Instead, it sends an energetic stimulus to your neuro-immune axis, restoring homeostatic balance so your own defense mechanisms resolve all three symptoms concurrently.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                3
              </span>
              <span>What to Expect During Your Recovery</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              Constitutional healing follows established homeopathic laws of cure (Hering&apos;s Law):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <span className="font-bold text-xs uppercase tracking-wider text-primary-main block mb-1">Step 1: Vitality</span>
                <p className="text-xs sm:text-sm text-text-body">Energy levels, sleep quality, and emotional calm improve first.</p>
              </div>
              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <span className="font-bold text-xs uppercase tracking-wider text-primary-main block mb-1">Step 2: Inside-Out</span>
                <p className="text-xs sm:text-sm text-text-body">Internal organ symptoms improve before outward superficial skin manifestations.</p>
              </div>
              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <span className="font-bold text-xs uppercase tracking-wider text-primary-main block mb-1">Step 3: Permanence</span>
                <p className="text-xs sm:text-sm text-text-body">Chronic flare-ups decrease in frequency, intensity, and duration until fully resolved.</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Card */}
        <div className="mt-14 bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center shadow-floating">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Schedule a Constitutional Case-Taking Session
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Experience genuine whole-person care. Visit Dr. Pragati Khobragade and Dr. Vijay Uplekar at Perfect Health Center in Diva East, Thane.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-primary-dark px-7 py-3.5 rounded-xl font-semibold text-sm shadow-button transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book In-Clinic or Video Session</span>
            </Link>
            <a
              href={`tel:${clinicData.contact.phone}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call {clinicData.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
