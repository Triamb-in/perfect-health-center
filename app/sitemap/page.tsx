import { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Home,
  UserCheck,
  Stethoscope,
  PhoneCall,
  Award,
  Video,
  ImageIcon,
  HelpCircle,
  Clock,
  ShieldAlert,
  FileCode2,
  ArrowRight,
  Sparkles,
  Calendar,
  MessageCircle,
  Cookie,
} from "lucide-react";
import { defaultClinicData } from "@/content/defaultClinicData";

export const metadata: Metadata = {
  title: "Website Sitemap & Directory — Perfect Health Center Diva East",
  description:
    "Explore the complete website structure of Perfect Health Center. Quick navigation to clinical services, homeopathy treatments, doctor credentials, clinic timings, and patient guides.",
  alternates: {
    canonical: "/sitemap",
  },
};

export default function SitemapPage() {
  const mainPages = [
    {
      title: "Home",
      href: "/",
      desc: "Welcome overview, clinic mission, featured treatments, and doctor introduction.",
      icon: Home,
      badge: "Main",
    },
    {
      title: "About Dr. Pragati",
      href: "/about",
      desc: "20+ years clinical experience, education, philosophy, and verified council registration.",
      icon: UserCheck,
      badge: "Profile",
    },
    {
      title: "Specialties & Treatments",
      href: "/services",
      desc: "Comprehensive guide to treated conditions, symptoms, and holistic care paths.",
      icon: Stethoscope,
      badge: "Clinical",
    },
    {
      title: "Contact & Clinic Visit",
      href: "/contact",
      desc: "Location map in Diva East, telephone, WhatsApp, clinic timings, and appointment request.",
      icon: PhoneCall,
      badge: "Visit",
    },
  ];

  const specialtyLinks = defaultClinicData.specialties.map((s) => ({
    title: s.title,
    href: `/services#${s.id}`,
    desc: s.shortDesc,
    conditions: s.conditions.slice(0, 3).join(", ") + (s.conditions.length > 3 ? "..." : ""),
  }));

  const clinicResources = [
    {
      title: "Verified Medical Credentials",
      href: "/#credentials",
      desc: "Council registration certificates, clinical degrees, and legal medical verifications.",
      icon: Award,
    },
    {
      title: "Health Videos & Doctor Talks",
      href: "/#videos",
      desc: "Clinical discussions, seasonal wellness tips, and patient education videos.",
      icon: Video,
    },
    {
      title: "Clinic Gallery & Ambience",
      href: "/#gallery",
      desc: "Tour of consultation suite, patient waiting lounge, and remedy dispensary.",
      icon: ImageIcon,
    },
    {
      title: "Consultation Process",
      href: "/#patient-info",
      desc: "4-step clinical flow from detailed case-taking to root-cause formulation.",
      icon: Compass,
    },
    {
      title: "Clinic Timings & Consultation Hours",
      href: "/#patient-info",
      desc: "Morning (10:30 AM – 1:30 PM) & Evening (6:30 PM – 10:00 PM) schedules.",
      icon: Clock,
    },
    {
      title: "Frequently Asked Questions (FAQs)",
      href: "/#patient-info",
      desc: "Answers on homeopathy safety, age groups, dosage instructions, and treatments.",
      icon: HelpCircle,
    },
  ];

  const legalLinks = [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
      desc: "How patient information and consultation inquiries are safeguarded.",
      icon: ShieldAlert,
    },
    {
      title: "Terms of Use",
      href: "/terms-of-use",
      desc: "Medical disclaimer, consultation terms, and digital platform policies.",
      icon: ShieldAlert,
    },
    {
      title: "Cookie Policy",
      href: "/cookie-policy",
      desc: "Transparent details on essential cookies and India's DPDP Act 2023 compliance.",
      icon: Cookie,
    },
    {
      title: "Search Engine XML Sitemap",
      href: "/sitemap.xml",
      desc: "Standardized sitemap index for search bots and indexing crawlers.",
      icon: FileCode2,
      isExternal: true,
    },
  ];

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#fafaf7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle text-primary-dark font-medium text-xs tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-primary-main" />
            <span>Website Directory</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Sitemap &amp; Navigation Guide
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Find every page, specialty treatment, patient guide, and resource across the Perfect Health Center website in one place.
          </p>
        </div>

        {/* Section 1: Main Pages */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary-main" />
            <h2 className="font-serif text-2xl font-bold text-primary-dark">
              Core Pages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {mainPages.map((page, idx) => {
              const Icon = page.icon;
              return (
                <Link
                  key={idx}
                  href={page.href}
                  className="group bg-white rounded-2xl p-6 border border-primary-subtle hover:border-primary-main/40 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-subtle/70 text-primary-dark flex items-center justify-center group-hover:bg-primary-dark group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-main bg-primary-subtle/50 px-2.5 py-0.5 rounded-full">
                        {page.badge}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-primary-dark mb-2 group-hover:text-primary-main transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                      {page.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary-main group-hover:translate-x-1 transition-transform">
                    <span>Visit page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Section 2: Clinical Specialties */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Stethoscope className="w-5 h-5 text-primary-main" />
            <h2 className="font-serif text-2xl font-bold text-primary-dark">
              Specialties &amp; Conditions Treated
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specialtyLinks.map((spec, idx) => (
              <Link
                key={idx}
                href={spec.href}
                className="group bg-white rounded-2xl p-6 border border-primary-subtle hover:border-primary-main/40 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary-main/70">
                      0{idx + 1}.
                    </span>
                    <h3 className="font-serif font-bold text-base text-primary-dark group-hover:text-primary-main transition-colors">
                      {spec.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-3">
                    {spec.desc}
                  </p>
                  <div className="bg-[#fafaf7] p-2.5 rounded-xl border border-primary-subtle/60 mb-4">
                    <span className="text-[11px] font-medium text-text-muted block">
                      Common conditions: <strong className="text-primary-dark font-semibold">{spec.conditions}</strong>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary-main group-hover:translate-x-1 transition-transform">
                  <span>View treatment details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 3: Patient Resources & In-Clinic Info */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Compass className="w-5 h-5 text-primary-main" />
            <h2 className="font-serif text-2xl font-bold text-primary-dark">
              Patient Information &amp; Media
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clinicResources.map((res, idx) => {
              const Icon = res.icon;
              return (
                <Link
                  key={idx}
                  href={res.href}
                  className="group bg-white rounded-2xl p-5 border border-primary-subtle hover:border-primary-main/40 shadow-subtle hover:shadow-card transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary-subtle/60 text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary-dark group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-primary-dark group-hover:text-primary-main transition-colors mb-1">
                      {res.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {res.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Section 4: Legal & Technical */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <ShieldAlert className="w-5 h-5 text-primary-main" />
            <h2 className="font-serif text-2xl font-bold text-primary-dark">
              Policies &amp; Technical Records
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {legalLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="group bg-white rounded-2xl p-5 border border-primary-subtle hover:border-primary-main/40 shadow-subtle hover:shadow-card transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary-subtle/60 text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary-dark group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h3 className="font-serif font-bold text-sm text-primary-dark group-hover:text-primary-main transition-colors">
                        {item.title}
                      </h3>
                      {item.isExternal && (
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                          .xml
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Consultation CTA */}
        <div className="bg-primary-dark rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#a3d9b1] font-semibold block mb-1">
              Need Direct Guidance?
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Ready to schedule your appointment?
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Meet Dr. Pragati Khobragade at Perfect Health Center Diva East or book an online homeopathic consultation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-dark hover:bg-[#ebf4ef] px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-subtle"
            >
              <Calendar className="w-4 h-4 text-primary-main" />
              <span>Book Appointment</span>
            </Link>
            <a
              href={defaultClinicData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-subtle"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
