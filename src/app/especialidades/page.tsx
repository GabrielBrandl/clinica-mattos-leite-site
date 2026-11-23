import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Especialidades médicas",
  description:
    "Conheça as especialidades da Clínica Mundi em Manaus: Cardiologia e Pediatria, com serviços e orientação para agendamento.",
  alternates: { canonical: "/especialidades" },
};

export default function EspecialidadesPage() {
  return (
    <div>
      <section className="pattern-soft border-b border-olive-700/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
            Especialidades
          </p>
          <h1 className="section-title mt-3 max-w-3xl">
            Cardiologia e Pediatria em Manaus
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Atendimento ambulatorial presencial no Cond. Mundi, com foco em
            acolhimento, clareza e acompanhamento responsável.
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl space-y-14 px-4 sm:px-5 md:px-8">
        {site.specialties.map((specialty, index) => (
          <article
            key={specialty.slug}
            className={`grid items-center gap-8 md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={specialty.image}
                alt={specialty.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl text-olive-950">
                {specialty.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {specialty.description}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink">
                <strong>Para quem:</strong> {specialty.forWhom}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {specialty.services.map((service) => (
                  <li key={service} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-700" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={`/especialidades/${specialty.slug}`}
                  className="touch-target inline-flex items-center rounded-sm border border-olive-700/30 px-5 py-3 text-sm font-semibold text-olive-900"
                >
                  Detalhes
                </Link>
                <Link
                  href={`/agendar?especialidade=${specialty.slug}`}
                  className="touch-target inline-flex items-center rounded-sm bg-olive-800 px-5 py-3 text-sm font-semibold text-cream"
                >
                  Agendar
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
