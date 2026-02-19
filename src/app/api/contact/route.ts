import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Resend } from "resend";

// Rate limit: max 3 requests per IP per 15 minutes
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const YOUR_EMAIL = "contact@yusefturin.com";
const FROM_EMAIL = "contact@contact.yusefturin.com";

const BASE_FONT = `'Nunito Sans','Helvetica Neue',Helvetica,Arial,sans-serif`;
const GOOGLE_FONT = `<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600&display=swap" rel="stylesheet"/>`;

const sharedHeader = `
  <tr><td style="padding-bottom:36px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td><p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#ADB5A9;">Yusef Turin</p></td>
      <td align="right"><p style="margin:0;font-size:11px;color:#B5BAC0;">Portfolio</p></td>
    </tr></table>
    <hr style="border:none;border-top:1px solid #E6E6E6;margin:14px 0 0 0;"/>
  </td></tr>
`;

const sharedFooter = `
  <tr><td>
    <hr style="border:none;border-top:1px solid #E6E6E6;margin:0 0 18px 0;"/>
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td><p style="margin:0;font-size:11px;color:#ADB5A9;">yusefturin.com</p></td>
      <td align="right"><p style="margin:0;font-size:11px;color:#B5BAC0;">Portfolio Contact</p></td>
    </tr></table>
  </td></tr>
`;

const notificationEmail = (email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>${GOOGLE_FONT}</head>
<body style="margin:0;padding:0;background-color:#FAFBFC;font-family:${BASE_FONT};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFBFC;padding:48px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
        ${sharedHeader}
        <tr><td style="padding-bottom:18px;">
          <span style="display:inline-block;background-color:#508D5912;border:1px solid #508D5930;border-radius:4px;padding:3px 11px;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#508D59;">New Message</span>
        </td></tr>
        <tr><td style="padding-bottom:36px;">
          <h1 style="margin:0;font-size:34px;font-weight:300;color:#1A1A19;line-height:1.2;letter-spacing:-0.02em;">Someone reached out<br/>to you.</h1>
        </td></tr>
        <tr><td style="padding-bottom:14px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;border:1px solid #E6E6E6;border-radius:6px;">
            <tr><td style="padding:18px 22px;">
              <p style="margin:0 0 4px 0;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#ADB5A9;">From</p>
              <p style="margin:0;font-size:15px;font-weight:400;color:#1A1A19;">${email}</p>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding-bottom:48px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;border:1px solid #E6E6E6;border-left:3px solid #508D59;border-radius:6px;">
            <tr><td style="padding:22px;">
              <p style="margin:0 0 10px 0;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#ADB5A9;">Message</p>
              <p style="margin:0;font-size:15px;font-weight:300;color:#676767;line-height:1.8;">${message.replace(/\n/g, "<br/>")}</p>
            </td></tr>
          </table>
        </td></tr>
        ${sharedFooter}
      </table>
    </td></tr>
  </table>
</body>
</html>
`;

const autoreplyEmail = () => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>${GOOGLE_FONT}</head>
<body style="margin:0;padding:0;background-color:#FAFBFC;font-family:${BASE_FONT};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFBFC;padding:48px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
        ${sharedHeader}
        <tr><td style="padding-bottom:36px;">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="width:32px;height:2px;background-color:#508D59;font-size:0;line-height:0;">&nbsp;</td>
            <td style="width:4px;">&nbsp;</td>
            <td style="width:10px;height:2px;background-color:#508D5940;font-size:0;line-height:0;">&nbsp;</td>
          </tr></table>
        </td></tr>
        <tr><td style="padding-bottom:16px;">
          <h1 style="margin:0;font-size:34px;font-weight:300;color:#1A1A19;line-height:1.2;letter-spacing:-0.02em;">Message received.</h1>
        </td></tr>
        <tr><td style="padding-bottom:40px;">
          <p style="margin:0;font-size:16px;font-weight:300;color:#676767;line-height:1.75;">Thank you for getting in touch. I've received your message and will get back to you as soon as possible.</p>
        </td></tr>
        <tr><td style="padding-bottom:48px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;border:1px solid #E6E6E6;border-radius:6px;">
            <tr><td style="padding:22px 24px;">
              <p style="margin:0 0 4px 0;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#ADB5A9;">In the meantime</p>
              <p style="margin:0;font-size:14px;font-weight:300;color:#676767;line-height:1.6;">Explore my work at <a href="https://yusefturin.com" style="color:#508D59;text-decoration:none;font-weight:600;">yusefturin.com</a></p>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding-bottom:48px;">
          <p style="margin:0 0 4px 0;font-size:13px;font-weight:300;color:#ADB5A9;">Warm regards,</p>
          <p style="margin:0;font-size:17px;font-weight:400;color:#1A1A19;letter-spacing:0.01em;">Yusef Turin</p>
        </td></tr>
        ${sharedFooter}
      </table>
    </td></tr>
  </table>
</body>
</html>
`;

async function verifyRecaptcha(token: string): Promise<boolean> {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    }
  );
  const data = await response.json();
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { email, message, token } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    if (!token || !(await verifyRecaptcha(token))) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed" },
        { status: 403 }
      );
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: YOUR_EMAIL,
      subject: `New message from ${email}`,
      html: notificationEmail(email, message),
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thanks for reaching out — Yusef Turin",
      html: autoreplyEmail(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}