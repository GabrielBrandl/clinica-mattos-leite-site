"use client";

import { useEffect, useState } from "react";

/**
 * Scripts de medição só carregam após consentimento explícito (LGPD).
 * Substitua MEASUREMENT_ID quando a clínica configurar Google Analytics / Tag Manager.
 */
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const current = window.localStorage.getItem("mattos-cookie-consent");
    if (current === "accepted") setAllowed(true);

    function onConsent(event: Event) {
      const detail = (event as CustomEvent<string>).detail;
      setAllowed(detail === "accepted");
    }

    window.addEventListener("mundi-consent", onConsent);
    return () => window.removeEventListener("mundi-consent", onConsent);
  }, []);

  useEffect(() => {
    if (!allowed || !MEASUREMENT_ID) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID, { anonymize_ip: true });

    return () => {
      script.remove();
    };
  }, [allowed]);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
