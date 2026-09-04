import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .trim(),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
    .max(16, "Phone number is too long")
    .regex(/^[0-9+\s\-()]+$/, "Phone contains invalid characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  specialty: z
    .string()
    .min(1, "Please select a specialty or health concern")
    .default("General Inquiry"),
  message: z
    .string()
    .max(1000, "Message must be under 1000 characters")
    .optional()
    .or(z.literal("")),
  // Honeypot field for bot protection (must be empty from legitimate users)
  website_honeypot: z.string().max(0, "Bot submission detected").optional(),
});

// Appointment Booking Modal Schema
export const bookingFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .trim(),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
    .max(16, "Phone number is too long")
    .regex(/^[0-9+\s\-()]+$/, "Phone contains invalid characters")
    .trim(),
  preferredDate: z
    .string()
    .min(1, "Please select your preferred appointment date"),
  consultationType: z.enum(["In-Person", "Online"]),
  specialty: z.string().optional().default("Homeopathy"),
  notes: z.string().max(500, "Notes too long").optional().or(z.literal("")),
  // Honeypot
  company_honeypot: z.string().max(0, "Bot submission detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
