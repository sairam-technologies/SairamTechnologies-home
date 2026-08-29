"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";
import { site } from "@/lib/site";

const field =
  "mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted/70 focus:border-teal";

export function ContactForm({ variant = "page" }: { variant?: "page" | "modal" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [usedMailDraft, setUsedMailDraft] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("sending");

    const form = event.currentTarget;
    const data = {
      name: String(new FormData(form).get("name") ?? ""),
      email: String(new FormData(form).get("email") ?? ""),
      request: String(new FormData(form).get("request") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; fallback?: boolean };

      if (!res.ok || !json.ok) {
        throw new Error("Could not send");
      }

      if (json.fallback) {
        const subject = encodeURIComponent("Sairam Technologies — Request");
        const body = encodeURIComponent(
          `${data.request}\n\n— ${data.name}\n${data.email}`,
        );
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        setUsedMailDraft(true);
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError(`Something went wrong. Email us directly at ${site.email}.`);
    }
  }

  if (status === "sent") {
    return (
      <div
        className={
          variant === "modal"
            ? "rounded-2xl border border-line bg-paper p-6"
            : "rounded-3xl border border-line bg-paper p-8 sm:p-10"
        }
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
          Request received
        </p>
        <h2 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">
          Thank you. We will write back.
        </h2>
        <p className="mt-4 text-sm leading-7 text-ink/75">
          {usedMailDraft ? (
            <>
              If a mail draft opened, send it to complete the note. You can
              also write us at{" "}
              <a className="font-medium text-navy underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </>
          ) : (
            <>Your request was sent to {site.email}. We will write back.</>
          )}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        variant === "modal"
          ? "space-y-4"
          : "rounded-3xl border border-line bg-cream p-6 sm:p-8"
      }
    >
      <label className="block text-sm font-medium">
        Name
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <label className="block text-sm font-medium">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className={field}
        />
      </label>
      <label className="block text-sm font-medium">
        Request
        <textarea
          required
          name="request"
          rows={5}
          className={`${field} resize-y`}
          placeholder="What do you need from Sairam Technologies?"
        />
      </label>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <div className={variant === "modal" ? "pt-1" : "mt-6"}>
        <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
          {status === "sending" ? "Sending…" : "Send request"}
        </Button>
      </div>
    </form>
  );
}
