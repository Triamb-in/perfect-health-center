import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export type ClinicEmailPayload =
  | {
      type: "contact";
      fullName: string;
      phone: string;
      email?: string;
      specialty: string;
      message?: string;
    }
  | {
      type: "booking";
      fullName: string;
      phone: string;
      preferredDate?: string;
      consultationType: string;
      specialty: string;
      notes?: string;
    };

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildHtml(payload: ClinicEmailPayload): string {
  const row = (label: string, value: string | undefined) =>
    value
      ? `<tr>
          <td style="padding:6px 12px;font-weight:600;color:#134633;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:6px 12px;color:#1a1a1a;">${escapeHtml(value)}</td>
        </tr>`
      : "";

  let rows = "";
  if (payload.type === "contact") {
    rows =
      row("Name", payload.fullName) +
      row("Phone", payload.phone) +
      (payload.email ? row("Email", payload.email) : "") +
      row("Specialty / Concern", payload.specialty) +
      (payload.message ? row("Message", payload.message) : "");
  } else {
    rows =
      row("Patient Name", payload.fullName) +
      row("Phone", payload.phone) +
      row("Preferred Date", payload.preferredDate) +
      row("Consultation Type", payload.consultationType) +
      row("Specialty / Concern", payload.specialty) +
      (payload.notes ? row("Additional Notes", payload.notes) : "");
  }

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4ee;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4ee;padding:32px 16px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #d4e6cd;">
        <tr>
          <td style="background:#134633;padding:24px 32px;">
            <p style="margin:0;color:#a3d9b1;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Perfect Health Center</p>
            <h1 style="margin:4px 0 0;color:#ffffff;font-size:20px;font-weight:700;">
              ${payload.type === "booking" ? "New Appointment Request" : "New Contact Form Submission"}
            </h1>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px;">
            <p style="margin:0 0 16px;color:#555;font-size:14px;">
              A patient submitted a ${payload.type === "booking" ? "booking request" : "contact inquiry"} on your website.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #d4e6cd;border-radius:8px;overflow:hidden;">
              <tbody>${rows}</tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px;background:#f4f4ee;border-top:1px solid #d4e6cd;">
            <p style="margin:0;color:#888;font-size:12px;">
              Sent automatically by your Perfect Health Center website. Contact the patient directly at the phone number above.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildSubject(payload: ClinicEmailPayload): string {
  const safeName = payload.fullName.replace(/[\r\n\t]/g, " ").trim().slice(0, 80);
  if (payload.type === "booking") {
    return `New appointment request — ${safeName}`;
  }
  return `New contact form submission — ${safeName}`;
}

/**
 * Sends a notification email to Dr. Pragati on a new form submission.
 * Returns true on success, false on failure (never throws).
 * Errors are logged to console (visible in Vercel function logs).
 */
export async function sendClinicEmail(
  payload: ClinicEmailPayload
): Promise<boolean> {
  if (!resend) {
    console.warn(
      "[email] RESEND_API_KEY not set — email notification skipped. " +
        "Add RESEND_API_KEY to Vercel environment variables to enable email delivery."
    );
    return false;
  }

  const recipientEmail =
    process.env.CLINIC_NOTIFICATION_EMAIL ||
    process.env.NOTIFICATION_EMAIL ||
    "pragativuplekar@gmail.com";

  const fromSender =
    process.env.CLINIC_FROM_EMAIL ||
    "Perfect Health Center <appointments@perfecthealthcenter.in>";

  try {
    const { error } = await resend.emails.send({
      from: fromSender,
      to: [recipientEmail],
      subject: buildSubject(payload),
      html: buildHtml(payload),
    });

    if (error) {
      console.error("[email] Resend API error:", error);
      return false;
    }

    console.log(
      `[email] Sent to ${recipientEmail}: "${buildSubject(payload)}"`
    );
    return true;
  } catch (err) {
    console.error("[email] Failed to send notification:", err);
    return false;
  }
}
