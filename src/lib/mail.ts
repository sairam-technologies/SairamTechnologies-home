import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

type ContactPayload = {
  name: string;
  email: string;
  request: string;
};

function env(name: string) {
  return process.env[name]?.trim() ?? "";
}

export function contactInbox() {
  return env("CONTACT_TO_EMAIL") || "prabir.padhy@sairamtechnologies.in";
}

export function isSmtpConfigured() {
  return Boolean(env("SMTP_HOST") && env("SMTP_USER") && env("SMTP_PASS"));
}

export function isHttpsMailConfigured() {
  return Boolean(env("WEB3FORMS_ACCESS_KEY") || env("RESEND_API_KEY"));
}

function isRenderHost() {
  return env("RENDER") === "true" || Boolean(env("RENDER_SERVICE_ID"));
}

export async function sendContactEmail(payload: ContactPayload) {
  if (isHttpsMailConfigured()) {
    if (env("WEB3FORMS_ACCESS_KEY")) {
      await sendViaWeb3Forms(payload);
      return;
    }
    await sendViaResend(payload);
    return;
  }

  const skipSmtp = isRenderHost() || env("SMTP_SKIP") === "true";
  if (!skipSmtp && isSmtpConfigured()) {
    await sendViaSmtp(payload);
    return;
  }

  throw new Error("No mail transport configured");
}

async function sendViaWeb3Forms({ name, email, request }: ContactPayload) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: env("WEB3FORMS_ACCESS_KEY"),
      subject: `Website request from ${name}`,
      from_name: name,
      email,
      replyto: email,
      message: [
        "New request from the Sairam Technologies website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Request:",
        request,
      ].join("\n"),
    }),
  });

  const json = (await res.json()) as { success?: boolean };
  if (!res.ok || !json.success) {
    throw new Error("Web3Forms rejected the message");
  }
}

async function sendViaResend({ name, email, request }: ContactPayload) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        env("CONTACT_FROM_EMAIL") ||
        "Sairam Technologies <onboarding@resend.dev>",
      to: [contactInbox()],
      reply_to: email,
      subject: `Website request from ${name}`,
      text: [
        "New request from the Sairam Technologies website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Request:",
        request,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    throw new Error("Resend rejected the message");
  }
}

async function sendViaSmtp({ name, email, request }: ContactPayload) {
  const port = Number(env("SMTP_PORT") || "587");
  const smtp: SMTPTransport.Options = {
    host: env("SMTP_HOST"),
    port,
    secure: env("SMTP_SECURE") === "true" || port === 465,
    connectionTimeout: 20_000,
    auth: {
      user: env("SMTP_USER"),
      pass: env("SMTP_PASS"),
    },
  };
  const transporter = nodemailer.createTransport(smtp);
  const from = env("CONTACT_FROM_EMAIL") || env("SMTP_USER") || contactInbox();

  await transporter.sendMail({
    from: `"Sairam Technologies" <${from}>`,
    to: contactInbox(),
    replyTo: `"${name}" <${email}>`,
    subject: `Website request from ${name}`,
    text: [
      "New request from the Sairam Technologies website.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Request:",
      request,
    ].join("\n"),
    html: `
      <p>New request from the Sairam Technologies website.</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
      <strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Request:</strong></p>
      <p>${escapeHtml(request).replace(/\n/g, "<br/>")}</p>
    `,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
