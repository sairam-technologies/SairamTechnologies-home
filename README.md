# Sairam Technologies

Company website for **Sairam Technologies** — a product studio that publishes apps and delivers software services. Built with Next.js (React) and ready to host on Vercel and a custom domain.

## Products on the site

- [Family-Rx Health Box](https://family-prescription-box.vercel.app) — family prescriptions, reports, documents, and nutrition
- [School Bus Notifier](https://school-bus-location-notifier.vercel.app) — live bus tracking and arrival alerts

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (your domain). Used for sitemap and Open Graph. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Address shown on the site |
| `CONTACT_TO_EMAIL` | Inbox that receives contact-form messages (`prabir.padhy@sairamtechnologies.in`) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Free SMTP for [Nodemailer](https://nodemailer.com) (open source) |
| `CONTACT_FROM_EMAIL` | Optional From address (defaults to `SMTP_USER`) |

## Contact form email (free, open source)

The form does **not** need a paid email API. It uses **[Nodemailer](https://nodemailer.com)** (MIT, open source) and the **SMTP of the mailbox you already have**.

Email cannot be sent by Next.js or Vercel alone. You need a mailbox that can send. You already have one: `prabir.padhy@sairamtechnologies.in`. Point Nodemailer at that account’s SMTP — there is no monthly fee for this library or for using your own inbox.

1. Copy `.env.example` to `.env.local`.
2. Fill SMTP from the provider that hosts `@sairamtechnologies.in`:

| If your mail is hosted by | `SMTP_HOST` | Port |
| --- | --- | --- |
| Zoho Mail | `smtp.zoho.in` (India) or `smtp.zoho.com` | `587` |
| Google Workspace / Gmail | `smtp.gmail.com` | `587` |
| Microsoft 365 | `smtp.office365.com` | `587` |
| cPanel / GoDaddy / Namecheap | `mail.sairamtechnologies.in` or `smtp.sairamtechnologies.in` | `587` |

3. Set `SMTP_USER` to `prabir.padhy@sairamtechnologies.in` and `SMTP_PASS` to that account’s password. If the host uses 2FA (Gmail, Workspace, some Zoho plans), create an **App Password** and use that as `SMTP_PASS`.
4. On Vercel: **Settings → Environment Variables** — add the same `SMTP_*` and `CONTACT_TO_EMAIL` values, then redeploy.

Until SMTP is set, Send still opens a mail draft instead of delivering to your inbox.

**Do not** self-host a mail server (Postfix, Mailcow, Postal) just for this form. That is unpaid in license only — you would still pay for a VPS, DNS, and spam reputation. Nodemailer + your existing mailbox is the free path.

## Deploy on Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com/new), import the project. Framework preset: **Next.js**. Build command `next build`, output is automatic.
3. Add environment variables from the table above. For production, set `NEXT_PUBLIC_SITE_URL` to `https://your-domain.com`.
4. Deploy.

### Custom domain

1. In the Vercel project: **Settings → Domains**.
2. Add `your-domain.com` and `www.your-domain.com`.
3. At your DNS provider, add the records Vercel shows (usually an A record to `76.76.21.21` and a CNAME for `www`).
4. Wait for SSL to issue. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS URL and redeploy.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — run the production server
- `npm run lint` — ESLint
