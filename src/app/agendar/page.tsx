import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agendar consulta",
  description: `Agende consulta na ${site.name}. Seg–Qui 8h–18h, Sex 8h–12h. Adrianópolis, Manaus.`,
  alternates: { canonical: "/agendar" },
};

export default function AgendarPage() {
  return (
    <div>
      <section className="hero-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:px-8">
          <Image
            src="/logo-secundaria.png"
            alt=""
            width={200}
            height={50}
            className="mb-6 h-10 w-auto object-contain opacity-90"
          />
          <h1 className="font-serif text-4xl md:text-6xl">Solicite sua consulta</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Seg–Qui 8h–18h · Sex 8h–12h · Fechado fins de semana e feriados.
          </p>
        </div>
      </section>
      <section className="section-pad mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-[1fr_0.85fr] md:px-8">
        <Suspense
          fallback={
            <div className="border border-navy-900/10 p-8 text-sm text-ink-muted">
              Carregando formulário…
            </div>
          }
        >
          <BookingForm />
        </Suspense>
        <aside className="space-y-5">
          <div className="bg-navy-900 p-6 text-white">
            <h2 className="font-serif text-2xl">Horários oficiais</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {site.hours.map((h) => (
                <li key={h.day}>
                  <strong className="text-mint">{h.day}:</strong> {h.time}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-navy-900/10 p-6 text-sm text-ink-muted">
            <p>WhatsApp {site.phoneDisplay}</p>
            <p className="mt-2 break-all">{site.email}</p>
            <p className="mt-2">{site.address.full}</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
