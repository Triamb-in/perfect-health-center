import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/ratelimit";
import { sendClinicEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    // 1. IP identification for rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const { success, remaining, reset } = await checkRateLimit(`contact_${ip}`);
    if (!success) {
      return NextResponse.json(
        {
          error: "Too many contact requests submitted. Please wait a few minutes before trying again or call the clinic directly.",
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

    // 3. Bot honeypot check
    if (body.website_honeypot && body.website_honeypot.length > 0) {
      // Silently drop bot submission with 200 OK
      return NextResponse.json({
        message: "Message received successfully",
      });
    }

    // 4. Server-side Zod validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid form data provided",
          details: validationResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { fullName, phone, email, specialty, message } =
      validationResult.data;

    // 5. Log operational event (privacy-safe: zero patient health data or PII)
    console.log("[telemetry] Clinic contact inquiry received", {
      timestamp: new Date().toISOString(),
      specialty,
      hasMessage: Boolean(message),
    });

    // 6. Send email notification to Dr. Pragati (non-blocking failure)
    const emailSent = await sendClinicEmail({
      type: "contact",
      fullName,
      phone,
      email,
      specialty,
      message,
    });

    if (!emailSent) {
      // Email failed but we do not fail the patient request — log for visibility
      console.error(
        "[contact] Email notification failed — inquiry was still accepted. " +
          "Check Vercel logs or configure RESEND_API_KEY."
      );
    }

    return NextResponse.json(
      {
        message: "Consultation inquiry received successfully",
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "Internal server error processing request" },
      { status: 500 }
    );
  }
}
