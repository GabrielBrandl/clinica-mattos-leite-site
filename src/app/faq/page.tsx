import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "FAQ da Clínica Mundi: agendamento, documentos, especialidades, endereço e atendimento em Manaus.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div>
      <FaqJsonLd items={site.faq} />
      <section className="pattern-soft border-b border-olive-700/10">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-5 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
            FAQ
          </p>
          <h1 className="section-title mt-3">Perguntas frequentes</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Respostas objetivas para ajudar no agendamento e na visita à
            clínica.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-4 px-4 py-12 sm:px-5 sm:py-16">
        {site.faq.map((item) => (
          <details
            key={item.q}
            className="border border-olive-700/15 bg-surface p-5 open:bg-cream-soft"
            open
          >
            <summary className="cursor-pointer list-none font-serif text-xl text-olive-950 [&::-webkit-details-marker]:hidden">
              {item.q}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.a}</p>
          </details>
        ))}

        <div className="pt-6">
          <Link
            href="/agendar"
            className="inline-flex min-h-11 items-center rounded-sm bg-olive-800 px-5 py-3 text-sm font-semibold text-cream"
          >
            Agendar consulta
          </Link>
        </div>
      </section>
    </div>
  );
}
