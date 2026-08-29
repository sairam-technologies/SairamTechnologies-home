import nodemailer from "nodemailer";

export const CONTACT_INBOX =
  process.env.CONTACT_TO_EMAIL ?? "prabir.padhy@sairamtechnologies.in";

export function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim(),
  );
}

export async function sendContactEmail({
  name,
  email,
  request,
}: {
  name: string;
  email: string;
  request: string;
}) {
  const port = Number(process.env.SMTP_PORT ?? "587");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    process.env.SMTP_USER ||
    CONTACT_INBOX;

  await transporter.sendMail({
    from: `"Sairam Technologies" <${from}>`,
    to: CONTACT_INBOX,
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
