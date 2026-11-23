import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSpecialty, site } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return site.specialties.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) return {};

  return {
    title: `${specialty.title} em Manaus`,
    description: specialty.description,
    alternates: { canonical: `/especialidades/${specialty.slug}` },
    openGraph: {
      title: `${specialty.title} | Clínica Mundi`,
      description: specialty.description,
      images: [{ url: specialty.image, alt: specialty.imageAlt }],
    },
  };
}

export default async function SpecialtyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) notFound();

  return (
    <div>
      <section className="relative min-h-[42vh] overflow-hidden text-cream">
        <Image
          src={specialty.image}
          alt={specialty.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive-950/75" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-4 pb-12 sm:px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/75">
            Especialidade
          </p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">
            {specialty.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-cream/85 md:text-lg">
            {specialty.short}
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <h2 className="font-serif text-3xl text-olive-950">Sobre o atendimento</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {specialty.description}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {specialty.forWhom}
          </p>
          <h3 className="mt-8 font-serif text-2xl text-olive-900">Serviços</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            {specialty.services.map((service) => (
              <li key={service} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-700" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-ink-muted">
            Conteúdo informativo. Não substitui avaliação médica individualizada
            nem garante resultados clínicos.
          </p>
        </div>

        <aside className="space-y-5">
          <div className="border border-olive-700/15 bg-olive-950 p-6 text-cream">
            <h2 className="font-serif text-2xl">Agendar {specialty.title}</h2>
            <p className="mt-3 text-sm text-cream/80">
              Solicite horário pelo formulário ou WhatsApp. Confirmamos conforme
              a agenda.
            </p>
            <Link
              href={`/agendar?especialidade=${specialty.slug}`}
              className="mt-5 inline-flex min-h-11 items-center rounded-sm bg-cream px-5 py-3 text-sm font-semibold text-olive-950"
            >
              Solicitar agendamento
            </Link>
          </div>
          <div className="border border-olive-700/15 bg-surface p-6 text-sm text-ink-muted">
            <p>
              Endereço: {site.address.full}
            </p>
            <p className="mt-3">Telefone: {site.phoneDisplay}</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
