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
    title: specialty.title,
    description: specialty.description,
    alternates: { canonical: `/especialidades/${specialty.slug}` },
  };
}

export default async function SpecialtyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) notFound();

  return (
    <div>
      <section className="hero-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:px-8">
          <p className="text-mint">{specialty.catchphrase}</p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">{specialty.title}</h1>
        </div>
      </section>
      <section className="section-pad mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <p className="text-base leading-relaxed text-ink-muted">
            {specialty.description}
          </p>
          <p className="mt-4 text-sm text-ink">{specialty.forWhom}</p>
          <ul className="mt-6 space-y-2 text-sm">
            {specialty.services.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mint-deep" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <aside className="space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={specialty.image}
              alt={specialty.imageAlt}
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
          <Link
            href={`/agendar?especialidade=${specialty.slug}`}
            className="touch-target inline-flex w-full items-center justify-center rounded-sm bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Agendar {specialty.title}
          </Link>
        </aside>
      </section>
    </div>
  );
}
