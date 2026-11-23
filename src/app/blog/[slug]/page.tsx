import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostJsonLd } from "@/components/JsonLd";
import { getPost, posts } from "@/lib/blog";
import { site } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [...post.keywords],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;

  return (
    <article>
      <BlogPostJsonLd
        title={post.title}
        description={post.excerpt}
        url={url}
        image={post.image}
        date={post.date}
      />

      <header className="relative min-h-[46vh] overflow-hidden text-cream">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive-950/72" />
        <div className="relative mx-auto flex min-h-[46vh] max-w-3xl flex-col justify-end px-4 pb-12 sm:px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/75">
            {post.category} · {post.readMinutes} min de leitura
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-cream/80">
            Publicado em{" "}
            {new Date(post.date + "T12:00:00").toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-5 sm:py-16">
        <p className="text-lg leading-relaxed text-ink-muted">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <aside className="mt-12 border border-olive-700/15 bg-cream-soft p-6">
          <h2 className="font-serif text-2xl text-olive-950">
            Quer agendar uma consulta?
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            A Clínica Mundi atende Cardiologia e Pediatria em Manaus.
          </p>
          <Link
            href="/agendar"
            className="mt-5 inline-flex min-h-11 items-center rounded-sm bg-olive-800 px-5 py-3 text-sm font-semibold text-cream"
          >
            Ir para agendamento
          </Link>
        </aside>

        <p className="mt-10 text-sm">
          <Link href="/blog" className="font-medium text-olive-800 underline">
            ← Voltar ao blog
          </Link>
        </p>
      </div>
    </article>
  );
}
