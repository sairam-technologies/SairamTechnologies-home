import { NextResponse } from "next/server";
import {
  isHttpsMailConfigured,
  isSmtpConfigured,
  sendContactEmail,
} from "@/lib/mail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

  if (!isHttpsMailConfigured() && !isSmtpConfigured()) {
    console.error("Contact send skipped: SMTP or WEB3FORMS_ACCESS_KEY is not set");
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }

  try {
    await sendContactEmail({ name, email, request: message });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact send failed", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
