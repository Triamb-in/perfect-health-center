import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  BookOpen,
  Sparkles,
  Heart,
  Activity,
  AlertCircle,
} from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";

export const metadata: Metadata = {
  title: "Homeopathy for Chronic Illness",
  description:
    "How constitutional homeopathy treats chronic skin, asthma, migraine, and joint conditions without side effects at Perfect Health Center in Diva East, Thane.",
  alternates: {
    canonical: "/articles/benefits-of-homeopathy-for-chronic-illness",
  },
};

export default async function ChronicIllnessArticlePage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7]">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Tag */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary-main uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Clinical Health Guide • Homeopathic Medicine</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 leading-tight">
            Benefits of Homeopathy for Chronic Illness: A Root-Cause Healing Approach
          </h1>
          <p className="text-sm text-text-muted">
            Medically Reviewed by <strong>Dr. Pragati Khobragade</strong> &amp; <strong>Dr. Vijay Uplekar</strong> • Perfect Health Center, Diva East, Thane
          </p>
        </div>

        {/* Hero Card Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary-subtle shadow-card mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                Why Chronic Conditions Need Constitutional Treatment
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Chronic illnesses—such as recurrent bronchial asthma, eczema, psoriasis, chronic migraines, allergic rhinitis, and arthritis—often share a common pitfall: conventional medications provide temporary symptom suppression, but the underlying inflammation and immune hypersensitivity remain unresolved.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle/80 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-text-dark font-medium leading-relaxed">
              At Perfect Health Center, Dr. Pragati Khobragade and Dr. Vijay Uplekar specialize in classical constitutional homeopathy, focusing on stimulating your body&apos;s innate regulatory defense systems for long-term health resilience.
            </p>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-10 text-text-body text-base sm:text-lg leading-relaxed">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                1
              </span>
              <span>Root-Cause Resolution vs. Symptom Suppression</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              Many patients visiting our Diva East clinic arrive after years of dependency on antihistamines, corticosteroid creams, or daily pain relievers. While these therapies offer quick crisis relief, they do not address the susceptibility of the patient.
            </p>
            <p className="text-sm sm:text-base text-text-body mb-4">
              Constitutional homeopathy evaluates the patient as a unique biological individual. By analyzing emotional triggers, physical stamina, environmental sensitivities, and genetic family history, a micro-diluted natural remedy is selected to re-balance immune signaling.
            </p>
            <ul className="space-y-2 mt-4 text-xs sm:text-sm text-text-dark font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Eliminates recurring disease cycles rather than pushing symptoms inward</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Promotes gradual tapering of temporary suppressive medications under medical supervision</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-main flex-shrink-0" />
                <span>Strengthens cellular resistance against weather changes, stress, and allergens</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                2
              </span>
              <span>Common Chronic Illnesses Successfully Addressed</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-6">
              Over two decades of clinical experience at Perfect Health Center has demonstrated predictable, sustainable improvement in conditions including:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <h3 className="font-semibold text-primary-dark text-sm sm:text-base mb-1">
                  Chronic Skin Disorders
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Psoriasis, recalcitrant eczema, fungal ringworm infections, urticaria, and acne vulgaris treated gently without topical steroid atrophy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <h3 className="font-semibold text-primary-dark text-sm sm:text-base mb-1">
                  Respiratory Allergies &amp; Asthma
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Chronic allergic bronchitis, allergic rhinitis (sneezing bouts), and nocturnal asthma attacks with reduced inhaler dependency.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <h3 className="font-semibold text-primary-dark text-sm sm:text-base mb-1">
                  Digestive &amp; Anorectal Conditions
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Piles (hemorrhoids), anal fissures, irritable bowel symptoms, and recurrent hyperacidity managed safely.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <h3 className="font-semibold text-primary-dark text-sm sm:text-base mb-1">
                  Migraines &amp; Hormonal Balance
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Vascular throbbing headaches, PCOS, menstrual irregularities, and stress-triggered hair fall.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                3
              </span>
              <span>Zero Drug Toxicity &amp; Non-Habit Forming</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              A major advantage of homeopathic remedies is their high safety profile. Prepared through potentized micro-dilutions, they do not cause stomach ulceration, kidney stress, or liver toxicity even during prolonged therapies.
            </p>
            <p className="text-sm sm:text-base text-text-body">
              This makes homeopathy safe for all life stages—from newborn infants to elderly patients managing multiple concurrent health challenges.
            </p>
          </section>
        </div>

        {/* CTA Card */}
        <div className="mt-14 bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center shadow-floating">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Consult Dr. Pragati &amp; Dr. Vijay for Chronic Care
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Take the first step toward lasting health recovery. Schedule an in-person case-taking session at our Diva East clinic or arrange an online consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-primary-dark px-7 py-3.5 rounded-xl font-semibold text-sm shadow-button transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Consultation</span>
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
