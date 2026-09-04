"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validations";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    specialty: "Homeopathy",
    message: "",
    website_honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    // Client-side Zod validation
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        specialty: "Homeopathy",
        message: "",
        website_honeypot: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please call the clinic directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-primary-subtle/60 border border-primary-light/30 rounded-2xl p-8 text-center animate-fadeIn">
        <div className="w-14 h-14 bg-primary-dark text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h4 className="font-serif font-bold text-2xl text-primary-dark mb-2">
          Thank You!
        </h4>
        <p className="text-sm sm:text-base text-text-body mb-6">
          Your consultation request has been received. Dr. Pragati&apos;s team at Perfect Health Center will contact you shortly to confirm your appointment time.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs font-bold text-primary-dark uppercase tracking-wider underline hover:text-primary-main"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Hidden honeypot field for bot spam protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_honeypot">Leave this blank</label>
        <input
          type="text"
          id="website_honeypot"
          name="website_honeypot"
          value={formData.website_honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-primary-dark mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ananya Sharma"
            required
            className={`w-full px-4 py-3 rounded-xl border bg-cream-50 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-dark transition-all ${
              errors.fullName ? "border-red-500" : "border-primary-subtle"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-primary-dark mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            required
            className={`w-full px-4 py-3 rounded-xl border bg-cream-50 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-dark transition-all ${
              errors.phone ? "border-red-500" : "border-primary-subtle"
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-primary-dark mb-1">
            Email Address (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ananya@example.com"
            className={`w-full px-4 py-3 rounded-xl border bg-cream-50 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-dark transition-all ${
              errors.email ? "border-red-500" : "border-primary-subtle"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="specialty" className="block text-xs font-bold text-primary-dark mb-1">
            Specialty Required
          </label>
          <select
            id="specialty"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-primary-subtle bg-cream-50 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-dark transition-all"
          >
            <option value="Homeopathy">Homeopathy Consultation</option>
            <option value="General Practice">General Practice</option>
            <option value="Women's Health">Women&apos;s Health</option>
            <option value="Children's Health">Children&apos;s Health</option>
            <option value="Chronic Disease">Chronic Diseases</option>
            <option value="Lifestyle Disorders">Lifestyle Disorders</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-primary-dark mb-1">
          Brief Health Concern or Preferred Appointment Time
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe symptoms or preferred visit time..."
          className="w-full px-4 py-3 rounded-xl border border-primary-subtle bg-cream-50 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-dark transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-primary-dark hover:bg-primary-hover disabled:bg-primary-main/60 text-white py-3.5 px-6 rounded-xl font-semibold text-sm shadow-button transition-all duration-200"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processing Request...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Appointment Request</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-text-muted text-center">
        Your health details are kept strictly confidential under our patient privacy policy.
      </p>
    </form>
  );
}
