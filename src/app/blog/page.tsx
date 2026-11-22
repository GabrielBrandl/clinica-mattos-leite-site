import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Artigos da ${site.name} sobre longevidade, saúde hormonal e prevenção.`,
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div>
      <section className="pattern-soft border-b border-navy-900/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:px-8">
          <h1 className="section-title">Blog</h1>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Conteúdo educativo — não substitui consulta médica.
          </p>
        </div>
      </section>
      <section className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {sorted.map((post) => (
            <article key={post.slug} className="border border-navy-900/10 bg-surface">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/9]">
                  <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="50vw" />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-700">
                  {post.category}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-navy-900">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-sm text-ink-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
