"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = "accepted" | "rejected" | null;
const STORAGE_KEY = "mattos-cookie-consent";

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
      window.dispatchEvent(new CustomEvent("mundi-consent", { detail: saved }));
    }
    setReady(true);
  }, []);

  function save(value: Exclude<Consent, null>) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    window.dispatchEvent(new CustomEvent("mundi-consent", { detail: value }));
  }

  if (!ready || consent) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="cookie-safe fixed inset-x-0 bottom-0 z-[60] border-t border-navy-900/15 bg-surface/97 px-4 py-3 shadow-[0_-8px_30px_rgba(0,43,69,0.12)] backdrop-blur-md md:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="font-serif text-lg text-navy-900">Cookies e privacidade</p>
          <p className="mt-1.5 text-[0.8125rem] leading-snug text-ink-muted sm:text-sm">
            Usamos cookies essenciais. Analytics só com consentimento (LGPD).{" "}
            <Link href="/cookies" className="font-medium text-navy-800 underline">
              Cookies
            </Link>{" "}
            ·{" "}
            <Link href="/privacidade" className="font-medium text-navy-800 underline">
              Privacidade
            </Link>
            .
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-2 md:flex md:w-auto">
          <button
            type="button"
            onClick={() => save("rejected")}
            className="touch-target rounded-sm border border-navy-900/20 px-3 py-3 text-sm font-semibold text-navy-900"
          >
            Só essenciais
          </button>
          <button
            type="button"
            onClick={() => save("accepted")}
            className="touch-target rounded-sm bg-navy-900 px-3 py-3 text-sm font-semibold text-white"
          >
            Aceitar analytics
          </button>
        </div>
      </div>
    </div>
  );
}
