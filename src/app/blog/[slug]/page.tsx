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
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <BlogPostJsonLd
        title={post.title}
        description={post.excerpt}
        url={`${site.url}/blog/${post.slug}`}
        image={post.image}
        date={post.date}
      />
      <header className="relative min-h-[42vh] overflow-hidden text-white">
        <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-3xl flex-col justify-end px-4 pb-12 sm:px-5">
          <p className="text-xs uppercase tracking-[0.18em] text-mint">{post.category}</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">{post.title}</h1>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-5">
        <p className="text-lg text-ink-muted">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink">
          {post.content.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <aside className="mt-12 border border-navy-900/10 bg-cream p-6">
          <h2 className="font-serif text-2xl text-navy-900">Agendar consulta</h2>
          <p className="mt-2 text-sm text-ink-muted">
            {site.name} — {site.tagline}
          </p>
          <Link
            href="/agendar"
            className="mt-5 inline-flex rounded-sm bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Ir para agendamento
          </Link>
        </aside>
        <p className="mt-10 text-sm">
          <Link href="/blog" className="text-navy-800 underline">
            ← Voltar ao blog
          </Link>
        </p>
      </div>
    </article>
  );
}
