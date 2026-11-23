import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog de saúde",
  description:
    "Artigos informativos da Clínica Mundi sobre Cardiologia, Pediatria e prevenção — com linguagem clara e responsável.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Clínica Mundi",
    description:
      "Conteúdo útil para famílias e pacientes em Manaus.",
    images: [{ url: "/images/blog-prevencao.jpg" }],
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div>
      <section className="pattern-soft border-b border-olive-700/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
            Blog
          </p>
          <h1 className="section-title mt-3 max-w-3xl">
            Orientação clara para o dia a dia
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Textos educativos sobre Cardiologia, Pediatria e prevenção. Não
            substituem consulta médica.
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden border border-olive-700/15 bg-surface"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive-700">
                  {post.category} · {post.readMinutes} min
                </p>
                <h2 className="mt-2 font-serif text-3xl leading-snug text-olive-950">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-olive-800 underline underline-offset-4"
                >
                  Ler artigo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
