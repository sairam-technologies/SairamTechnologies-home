"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { Button } from "./Button";
import { ContactForm } from "./ContactForm";

type ContactContextValue = {
  open: () => void;
  close: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactProvider");
  }
  return ctx;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactContext.Provider value={{ open, close }}>
      {children}
      <ContactDialog open={isOpen} onClose={close} />
    </ContactContext.Provider>
  );
}

export function ContactTrigger({
  children,
  className = "",
  variant = "primary",
  size = "md",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "invert";
  size?: "md" | "lg";
  onClick?: () => void;
}) {
  const { open } = useContactModal();
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        onClick?.();
        open();
      }}
    >
      {children}
    </Button>
  );
}

function ContactDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    const firstField = panelRef.current?.querySelector<HTMLElement>(
      "input, textarea, button",
    );
    firstField?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close contact form"
        className="absolute inset-0 bg-navy/55 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[1] max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-line bg-cream p-6 shadow-[0_40px_80px_-32px_rgba(11,28,51,0.55)] sm:max-w-lg sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
              Contact
            </p>
            <h2 id={titleId} className="font-display mt-2 text-3xl tracking-tight">
              Contact Sairam Technologies
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Share your name, email, and request. We will write back.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-navy"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6">
          <ContactForm variant="modal" />
        </div>
      </div>
    </div>
  );
}
