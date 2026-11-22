import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: `FAQ da ${site.name}: horários, endereço e agendamento.`,
};

export default function FaqPage() {
  return (
    <div>
      <FaqJsonLd items={site.faq} />
      <section className="pattern-soft border-b border-navy-900/10">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-5">
          <h1 className="section-title">Perguntas frequentes</h1>
        </div>
      </section>
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-12 sm:px-5">
        {site.faq.map((item) => (
          <details key={item.q} open className="border border-navy-900/10 p-5">
            <summary className="cursor-pointer list-none font-serif text-xl text-navy-900 [&::-webkit-details-marker]:hidden">
              {item.q}
            </summary>
            <p className="mt-3 text-sm text-ink-muted">{item.a}</p>
          </details>
        ))}
        <Link
          href="/agendar"
          className="mt-4 inline-flex rounded-sm bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
        >
          Agendar consulta
        </Link>
      </section>
    </div>
  );
}
