import { NextRequest, NextResponse } from "next/server";
import { bookingFormSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/ratelimit";
import { sendClinicEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const { success, remaining, reset } = await checkRateLimit(`booking_${ip}`);
    if (!success) {
      return NextResponse.json(
        {
          error: "Too many appointment requests submitted. Please wait a few minutes before trying again or call +91 92734 31261.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": reset.toString(),
          },
        }
      );
    }

    // 2. Parse request body safely
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request payload" },
        { status: 400 }
      );
    }

    // 3. Honeypot check
    if (body.company_honeypot && body.company_honeypot.length > 0) {
      return NextResponse.json({
        message: "Appointment request received successfully",
      });
    }

    // 4. Server-side validation
    const validationResult = bookingFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid appointment details provided",
          details: validationResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { fullName, phone, preferredDate, consultationType, specialty, notes } =
      validationResult.data;

    // 5. Log operational event (privacy-safe: zero patient health data or PII)
    console.log("[telemetry] Clinic appointment booking request received", {
      timestamp: new Date().toISOString(),
      consultationType,
      specialty,
      hasNotes: Boolean(notes),
    });

    // 6. Send email notification to Dr. Pragati (non-blocking failure)
    const emailSent = await sendClinicEmail({
      type: "booking",
      fullName,
      phone,
      preferredDate,
      consultationType,
      specialty,
      notes,
    });

    if (!emailSent) {
      // Email failed but we don't fail the patient request — log for visibility
      console.error(
        "[book-appointment] Email notification failed — booking was still accepted. " +
          "Check Vercel logs or configure RESEND_API_KEY."
      );
    }

    return NextResponse.json(
      {
        message: "Appointment booking requested successfully",
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error("Error processing booking request:", error);
    return NextResponse.json(
      { error: "Internal server error processing appointment request" },
      { status: 500 }
    );
  }
}

