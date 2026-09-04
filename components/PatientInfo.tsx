import React from "react";
import { FileText, Clock, CreditCard, HelpCircle } from "lucide-react";
import { ClinicData } from "@/types";
import { FAQAccordion } from "./FAQAccordion";

interface PatientInfoProps {
  clinicData: ClinicData;
}

export function PatientInfo({ clinicData }: PatientInfoProps) {
  const steps = [
    {
      number: "1",
      title: "Detailed Case Taking",
      desc: "In-depth clinical discussion exploring physical symptoms, medical history, environmental stressors, and emotional constitution.",
    },
    {
      number: "2",
      title: "Root-Cause Evaluation",
      desc: "Dr. Pragati evaluates physical examination results, lifestyle triggers, and diagnostic reports to identify underlying drivers.",
    },
    {
      number: "3",
      title: "Individualized Remedy Formulation",
      desc: "Prescribing exact, high-purity homeopathic remedies tailored specifically to your constitutional health profile.",
    },
    {
      number: "4",
      title: "Follow-Up & Wellness Tracking",
      desc: "Regular follow-ups to monitor vitality, assess symptom relief, refine dosages, and support long-term wellbeing.",
    },
  ];

  return (
    <section id="patient-info" className="py-14 sm:py-20 lg:py-28 bg-[#fafaf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="section-tag">Patient Guide</div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary-dark mb-3 sm:mb-4">
            Patient Information
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Everything you need to know about our consultation process, clinic timings in Diva East, and answers to common questions.
          </p>
        </div>

        {/* Process & Timings 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-14 sm:mb-20">
          
          {/* Left Column: 4-Step Timeline Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 lg:p-9 border border-primary-subtle shadow-subtle">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-primary-subtle">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle flex items-center justify-center text-primary-dark">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-primary-dark">
                Consultation Process
              </h3>
            </div>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-dark text-white font-bold text-xs sm:text-sm flex items-center justify-center flex-shrink-0 mt-0.5 shadow-subtle">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-primary-dark mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Timings & Payment Modes Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-7 lg:p-9 border border-primary-subtle shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary-subtle">
                <div className="w-10 h-10 rounded-xl bg-primary-subtle flex items-center justify-center text-primary-dark">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary-dark">
                  Clinic Timings
                </h3>
              </div>

              <div className="space-y-3 mb-8">
                {clinicData.hours.map((hour, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-primary-subtle/40 border border-primary-subtle"
                  >
                    <span className="text-sm font-semibold text-text-dark">
                      {hour.days}
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        hour.isClosed ? "text-red-600" : "text-primary-dark"
                      }`}
                    >
                      {hour.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4 text-primary-main" />
                <h4 className="font-sans font-bold text-sm text-primary-dark">
                  Accepted In-Clinic Payment Modes
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {clinicData.paymentModes.map((mode, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-subtle text-primary-dark px-3 py-1.5 rounded-lg text-xs font-semibold"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* FAQs Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-primary-main font-semibold text-xs tracking-wider uppercase mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
              Frequently Asked Questions
            </h3>
          </div>

          <FAQAccordion faqs={clinicData.faqs} />
        </div>

      </div>
    </section>
  );
}
