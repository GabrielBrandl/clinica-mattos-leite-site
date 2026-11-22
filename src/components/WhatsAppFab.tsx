"use client";

import { site, whatsappUrl } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab fixed z-[55] inline-flex items-center gap-2 rounded-full bg-[#1f6b3a] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,43,69,0.28)] transition hover:bg-[#185730] md:bottom-6 md:right-6"
      aria-label={`WhatsApp ${site.phoneDisplay}`}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="currentColor">
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.96.52 3.79 1.44 5.39L2 22l4.95-1.55a9.86 9.86 0 0 0 5.09 1.39h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.52 13.98c-.23.65-1.34 1.2-1.86 1.28-.48.07-1.08.1-1.74-.11-.4-.12-.91-.3-1.57-.59-2.76-1.2-4.55-3.98-4.69-4.17-.14-.18-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.23.57.79 1.97.86 2.11.07.14.12.31.02.5-.1.18-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.17-.18.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.32.07.12.07.67-.16 1.32Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
