import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  BookOpen,
  Baby,
  Smile,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { getClinicData } from "@/lib/sanity/getContent";

export const metadata: Metadata = {
  title: "Pediatric Homeopathy Guide",
  description:
    "Gentle homeopathic pediatric care for children in Diva East, Thane. Safe immunity support, colic, allergies & cold remedies by Dr. Pragati & Dr. Vijay.",
  alternates: {
    canonical: "/articles/pediatric-care-homeopathy",
  },
};

export default async function PediatricCareArticlePage() {
  const clinicData = await getClinicData();

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7]">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Tag */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary-main uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Parent Health Guide • Child Immunity &amp; Homeopathy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 leading-tight">
            Pediatric Care: What Every Parent Should Know About Gentle Healing
          </h1>
          <p className="text-sm text-text-muted">
            Clinical Guidance from <strong>Dr. Pragati Khobragade</strong> &amp; <strong>Dr. Vijay Uplekar</strong> • Perfect Health Center, Diva East, Thane
          </p>
        </div>

        {/* Hero Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary-subtle shadow-card mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0">
              <Baby className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                Nurturing Growing Immunity Without Harsh Pharmaceuticals
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                As parents, few things cause more anxiety than watching a child suffer through repeated cycles of high fever, chronic tonsillitis, wheezing, or painful digestive colic. Frequent antibiotic courses can disrupt a child&apos;s delicate gut microbiome and leave immunity weakened.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle/80 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-text-dark font-medium leading-relaxed">
              Homeopathy provides sweet, easy-to-administer sugar globules that stimulate natural defense mechanisms without causing drowsiness, stomach upset, or pharmaceutical resistance.
            </p>
          </div>
        </div>

        {/* Core Principles for Parents */}
        <div className="space-y-10 text-text-body text-base sm:text-lg leading-relaxed">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                1
              </span>
              <span>Why Children Respond Remarkably Well to Homeopathy</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              A child&apos;s biological vitality is fresh and resilient. Unlike adults with decades of suppressed symptoms or polypharmacy, children rapidly absorb and respond to constitutional homeopathic micro-doses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <h3 className="font-semibold text-primary-dark text-sm mb-1 flex items-center gap-2">
                  <Smile className="w-4 h-4 text-primary-main" />
                  <span>Sweet &amp; Stress-Free</span>
                </h3>
                <p className="text-xs sm:text-sm text-text-muted">
                  No bitter syrups, injections, or struggle. Children happily take natural cane-sugar pills without trauma.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 border border-primary-subtle">
                <h3 className="font-semibold text-primary-dark text-sm mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary-main" />
                  <span>Zero Sedation</span>
                </h3>
                <p className="text-xs sm:text-sm text-text-muted">
                  Unlike antihistamines, homeopathic allergy medicines do not make children drowsy, allowing normal school focus.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                2
              </span>
              <span>Key Pediatric Conditions Treated in Diva East</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-6">
              At Perfect Health Center, Dr. Pragati and Dr. Vijay have treated thousands of infants and school-going children for conditions including:
            </p>

            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-primary-subtle">
                <CheckCircle2 className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-primary-dark block text-sm">Recurrent Tonsillitis &amp; Adenoids:</strong>
                  <span className="text-xs sm:text-sm text-text-muted">
                    Preventing surgical removal of tonsils through natural lymphatic drainage and anti-inflammatory constitutional remedies.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-primary-subtle">
                <CheckCircle2 className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-primary-dark block text-sm">Childhood Asthma &amp; Bronchial Allergies:</strong>
                  <span className="text-xs sm:text-sm text-text-muted">
                    Relieving seasonal coughing spasms, cold air sensitivities, and chest tightness gently and effectively.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-primary-subtle">
                <CheckCircle2 className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-primary-dark block text-sm">Infantile Colic &amp; Dentition Irritability:</strong>
                  <span className="text-xs sm:text-sm text-text-muted">
                    Soothing painful teething diarrhea, restless sleep, and severe abdominal gas in babies safely.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-primary-subtle">
                <CheckCircle2 className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-primary-dark block text-sm">Pediatric Eczema &amp; Cradle Cap:</strong>
                  <span className="text-xs sm:text-sm text-text-muted">
                    Restoring healthy baby skin barriers without steroid thinning or chemical ointments.
                  </span>
                </div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-subtle shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-subtle text-primary-dark text-sm font-bold flex items-center justify-center">
                3
              </span>
              <span>A Supportive Partnership with Parents</span>
            </h2>
            <p className="text-sm sm:text-base text-text-body mb-4">
              We take time to listen to you as parents—understanding your child&apos;s eating habits, sleeping patterns, fears, and growth milestones. Our treatment is never a rushed 2-minute prescription, but an ongoing partnership to build robust lifetime wellness.
            </p>
          </section>
        </div>

        {/* CTA Card */}
        <div className="mt-14 bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center shadow-floating">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Schedule a Gentle Consultation for Your Child
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Visit Perfect Health Center in Diva East, Thane for gentle, child-friendly care with Dr. Pragati Khobragade and Dr. Vijay Uplekar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-primary-dark px-7 py-3.5 rounded-xl font-semibold text-sm shadow-button transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Child Consultation</span>
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
