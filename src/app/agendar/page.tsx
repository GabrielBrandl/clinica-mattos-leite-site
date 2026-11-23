import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agendar consulta",
  description:
    "Solicite agendamento de consulta de Cardiologia ou Pediatria na Clínica Mundi, Manaus. Retorno pelo WhatsApp com confirmação de horário.",
  alternates: { canonical: "/agendar" },
  openGraph: {
    title: "Agendar consulta | Clínica Mundi",
    description:
      "Escolha especialidade, data preferencial e envie sua solicitação com segurança (LGPD).",
    images: [{ url: "/images/consulta.jpg", alt: "Consulta médica" }],
  },
};

function BookingFallback() {
  return (
    <div className="border border-olive-700/15 bg-surface p-8 text-sm text-ink-muted">
      Carregando formulário de agendamento…
    </div>
  );
}

export default function AgendarPage() {
  return (
    <div>
      <section className="relative overflow-hidden text-cream">
        <Image
          src="/images/consulta.jpg"
          alt="Ambiente preparado para consulta médica"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive-950/78" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/75">
            Agendamento
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl md:text-6xl">
            Solicite sua consulta
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
            Preencha o formulário em 2 passos. Coletamos só o necessário para
            confirmar disponibilidade e retornar pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-[1fr_0.85fr] md:px-8">
        <Suspense fallback={<BookingFallback />}>
          <BookingForm />
        </Suspense>

        <aside className="space-y-6">
          <div className="border border-olive-700/15 bg-olive-950 p-6 text-cream">
            <h2 className="font-serif text-2xl">Como funciona</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-cream/85">
              <li>Escolha Cardiologia ou Pediatria</li>
              <li>Informe data e período preferenciais</li>
              <li>Enviamos a solicitação ao WhatsApp da clínica</li>
              <li>Confirmamos o horário conforme agenda</li>
            </ol>
          </div>
          <div className="border border-olive-700/15 bg-surface p-6">
            <h2 className="font-serif text-2xl text-olive-950">Horários</h2>
            <dl className="mt-4 space-y-2 text-sm">
              {site.hours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between gap-3 border-b border-olive-700/10 py-2"
                >
                  <dt className="font-medium text-ink">{item.day}</dt>
                  <dd className="text-ink-muted">{item.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-ink-muted">
              Telefone: {site.phoneDisplay}
              <br />
              E-mail: {site.email}
            </p>
          </div>
          <div className="border border-olive-700/15 bg-cream-soft p-6 text-sm leading-relaxed text-ink-muted">
            <p>
              Este formulário não realiza confirmação automática de agenda. A
              confirmação depende da disponibilidade da equipe médica.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
