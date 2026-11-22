import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Especialidades",
  description: `Áreas de atuação da ${site.name}: pediatria, nutrologia, saúde hormonal, longevidade, emagrecimento e saúde intestinal.`,
};

export default function EspecialidadesPage() {
  return (
    <div>
      <section className="pattern-soft border-b border-navy-900/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:px-8">
          <h1 className="section-title">Especialidades</h1>
          <p className="mt-4 max-w-2xl text-ink-muted">
            {site.tagline}. Conteúdo oficial da clínica.
          </p>
        </div>
      </section>
      <section className="section-pad mx-auto max-w-6xl space-y-6 px-4 sm:px-5 md:px-8">
        {site.specialties.map((item) => (
          <article key={item.slug} className="border border-navy-900/10 bg-surface p-6 md:p-8">
            <p className="text-sm font-medium text-mint-deep">{item.catchphrase}</p>
            <h2 className="mt-2 font-serif text-3xl text-navy-900">{item.title}</h2>
            <p className="mt-3 max-w-3xl text-ink-muted">{item.description}</p>
            <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
              {item.services.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mint-deep" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4">
              <Link href={`/especialidades/${item.slug}`} className="text-sm font-semibold underline">
                Detalhes
              </Link>
              <Link
                href={`/agendar?especialidade=${item.slug}`}
                className="text-sm font-semibold underline"
              >
                Agendar
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
