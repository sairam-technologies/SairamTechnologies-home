import { NextResponse } from "next/server";
import {
  CONTACT_INBOX,
  isSmtpConfigured,
  sendContactEmail,
} from "@/lib/mail";

type Payload = {
  name?: string;
  email?: string;
  request?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = (body.request ?? body.message)?.trim() ?? "";

  if (name.length < 2 || !isEmail(email) || message.length < 4) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (isSmtpConfigured()) {
    try {
      await sendContactEmail({ name, email, request: message });
      return NextResponse.json({ ok: true });
    } catch (error) {
      console.error("Contact SMTP send failed", error);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  }

  const key = process.env.RESEND_API_KEY;
  if (key) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ??
          "Sairam Technologies <onboarding@resend.dev>",
        to: [CONTACT_INBOX],
        reply_to: email,
        subject: `Website request from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          "",
          `Request:\n${message}`,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true, fallback: true });
}
