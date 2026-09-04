"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { bookingFormSchema, BookingFormData } from "@/lib/validations";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    phone: "",
    preferredDate: "",
    consultationType: "In-Person",
    specialty: "Homeopathy",
    notes: "",
    company_honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

    const result = bookingFormSchema.safeParse(formData);
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
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to confirm booking");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact the clinic directly.");
    }
  };

  const handleResetAndClose = () => {
    setStatus("idle");
    setFormData({
      fullName: "",
      phone: "",
      preferredDate: "",
      consultationType: "In-Person",
      specialty: "Homeopathy",
      notes: "",
      company_honeypot: "",
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div
        className="relative max-w-lg w-full max-h-[94vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-floating border border-primary-subtle"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-subtle text-primary-dark hover:bg-primary-dark hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-primary-dark text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-button">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-primary-dark mb-2">
              Appointment Requested!
            </h3>
            <p className="text-sm text-text-body mb-6">
              Thank you, <strong>{formData.fullName}</strong>. Dr. Pragati&apos;s team at Perfect Health Center will review your requested date (<strong>{formData.preferredDate}</strong>) and call you at <strong>{formData.phone}</strong> to confirm your consultation slot.
            </p>
            <button
              onClick={handleResetAndClose}
              className="bg-primary-dark hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-button transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-primary-main text-xs font-semibold uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4" />
              <span>Easy Online Scheduling</span>
            </div>

            <h3 id="booking-title" className="font-serif font-bold text-2xl text-primary-dark mb-2">
              Book an Appointment
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mb-6">
              Choose your preferred date and consultation mode for Dr. Pragati Khobragade.
            </p>

            {status === "error" && (
              <div className="p-3.5 mb-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="company_honeypot"
                  value={formData.company_honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="m-name" className="block text-xs font-bold text-primary-dark mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  id="m-name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter patient full name"
                  required
                  className={`w-full px-4 py-2.5 rounded-xl border bg-cream-50 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-dark ${
                    errors.fullName ? "border-red-500" : "border-primary-subtle"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="m-phone" className="block text-xs font-bold text-primary-dark mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="m-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className={`w-full px-4 py-2.5 rounded-xl border bg-cream-50 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-dark ${
                      errors.phone ? "border-red-500" : "border-primary-subtle"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="m-date" className="block text-xs font-bold text-primary-dark mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="m-date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-cream-50 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-dark ${
                      errors.preferredDate ? "border-red-500" : "border-primary-subtle"
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="m-type" className="block text-xs font-bold text-primary-dark mb-1">
                  Consultation Mode
                </label>
                <select
                  id="m-type"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-primary-subtle bg-cream-50 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
                >
                  <option value="In-Person">In-Person Clinic Visit (Diva East, Thane)</option>
                  <option value="Online">Online Video Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-primary-dark hover:bg-primary-hover disabled:bg-primary-main/60 text-white py-3.5 px-6 rounded-xl font-semibold text-sm shadow-button transition-all duration-200 mt-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <span>Confirm Booking Request</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
