import React from "react";
import { MapPin, Phone, Mail, Clock, Youtube } from "lucide-react";
import { ClinicData } from "@/types";
import { ContactForm } from "./ContactForm";

interface ContactSectionProps {
  clinicData: ClinicData;
}

export function ContactSection({ clinicData }: ContactSectionProps) {
  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="section-tag">Reach Out</div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary-dark mb-3 sm:mb-4">
            Contact &amp; Visit Us
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Schedule an in-person clinic consultation in Diva East or an online video session with {clinicData.doctorName}.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-10 sm:mb-14">
          
          {/* Left Column: Clinic Contact Details */}
          <div className="lg:col-span-5 bg-cream-50 rounded-2xl p-5 sm:p-7 lg:p-9 border border-primary-subtle shadow-subtle flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-2xl text-primary-dark mb-2">
                {clinicData.clinicName}
              </h3>
              <p className="text-sm text-text-muted mb-8 leading-relaxed">
                Visit our clinic in Diva East, Thane or connect via phone or WhatsApp for prompt consultation booking.
              </p>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary-dark mb-1">
                      Clinic Address
                    </h4>
                    <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                      {clinicData.address.fullFormatted}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary-dark mb-1">
                      Phone &amp; WhatsApp
                    </h4>
                    <div className="flex flex-col gap-1">
                      <a
                        href={`tel:${clinicData.contact.phone}`}
                        className="text-xs sm:text-sm font-bold text-primary-dark hover:text-primary-main hover:underline"
                      >
                        {clinicData.contact.phoneFormatted}
                      </a>
                      <a
                        href={clinicData.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary-main hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>Chat directly on WhatsApp →</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary-dark mb-1">
                      Email Address
                    </h4>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${clinicData.contact.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-primary-dark hover:text-primary-main hover:underline inline-flex items-center gap-1"
                      title="Compose email in Gmail"
                    >
                      <span>{clinicData.contact.email}</span>
                      <span className="text-[11px] opacity-70">↗</span>
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary-dark mb-1">
                      Working Hours
                    </h4>
                    <div className="text-xs sm:text-sm text-text-body space-y-0.5">
                      {clinicData.hours.map((h, i) => (
                        <p key={i} className={h.isClosed ? "text-red-600 font-medium" : ""}>
                          {h.days}: {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube Social Link */}
            {clinicData.contact.youtubeChannelUrl && (
              <div className="pt-6 border-t border-primary-subtle/80">
                <a
                  href={clinicData.contact.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-red-50 text-red-700 hover:bg-red-600 hover:text-white transition-colors text-xs font-semibold"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Subscribe on YouTube</span>
                </a>
              </div>
            )}

          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 lg:p-9 border border-primary-subtle shadow-card">
            <h3 className="font-serif font-bold text-2xl text-primary-dark mb-2">
              Request Consultation
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mb-6">
              Fill in your details below and our team will get in touch to confirm your appointment slot.
            </p>

            <ContactForm />
          </div>

        </div>

        {/* Embedded Google Maps */}
        <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-subtle border border-primary-subtle">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6067084531815!2d73.04580477593674!3d19.186461348386345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfae960d22bb%3A0x5d46c34219c91da9!2sPerfect%20Health%20Center!5e0!3m2!1sen!2sin!4v1723000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Perfect Health Center Diva East Location Map"
          />
        </div>

      </div>
    </section>
  );
}
