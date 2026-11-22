import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FaqJsonLd } from "@/components/JsonLd";
import { getRecentPosts } from "@/lib/blog";
import { site, whatsappUrl } from "@/lib/site";

export default function Home() {
  const posts = getRecentPosts(3);

  return (
    <>
      <FaqJsonLd items={site.faq} />

      <section
        aria-labelledby="hero-heading"
        className="hero-navy relative overflow-hidden text-white"
      >
        <div className="relative mx-auto grid min-h-[min(92dvh,900px)] max-w-6xl items-center gap-10 px-4 py-14 sm:px-5 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
          <div>
            <Image
              src="/logo-principal.png"
              alt={site.name}
              width={420}
              height={180}
              className="reveal h-auto w-full max-w-[340px] object-contain md:max-w-[400px]"
              priority
            />
            <p className="reveal reveal-delay-1 mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              Manaus · Desde {site.foundedYear}
            </p>
            <h1 id="hero-heading" className="sr-only">
              {site.name} — {site.tagline}
            </h1>
            <p className="reveal reveal-delay-2 mt-4 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              {site.tagline}. Cuidado clínico com elegância, prevenção e
              acompanhamento responsável no Ed. The Office.
            </p>
            <div className="reveal reveal-delay-3 hero-cta mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/agendar"
                className="touch-target inline-flex items-center justify-center rounded-sm bg-mint px-6 py-3.5 text-sm font-semibold text-navy-900 hover:bg-mint-soft"
              >
                Agendar consulta
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target inline-flex items-center justify-center rounded-sm border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-2xl md:mx-0 md:justify-self-end">
            <Image
              src="/images/dra-fabia.jpg"
              alt="Dra. Fábia Mattos — Clínica Mattos Leite"
              fill
              className="object-cover object-[50%_20%]"
              sizes="(max-width: 768px) 90vw, 420px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-navy-900/10 bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-5 md:px-8">
          {[
            {
              t: "Horário oficial",
              d: "Seg–Qui 8h–18h · Sex 8h–12h · Fechado fins de semana e feriados",
            },
            {
              t: "Adrianópolis",
              d: "Ed. The Office, Sala 311 — Av. Mário Ypiranga, 315",
            },
            {
              t: "Equipe",
              d: "Dra. Fábia Mattos e Dr. Felipe Leite",
            },
          ].map((item) => (
            <div key={item.t} className="border-l-2 border-mint pl-4">
              <h2 className="font-serif text-xl text-navy-900">{item.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="especialidades" className="pattern-soft">
        <div className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
              Especialidades
            </p>
            <h2 className="section-title mt-3">Áreas de atuação</h2>
            <p className="mt-4 text-base text-ink-muted">
              Textos oficiais da clínica — com linguagem clara e sem promessas
              de resultado.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {site.specialties.map((item) => (
              <article
                key={item.slug}
                className="border border-navy-900/10 bg-surface p-6 transition hover:border-mint"
              >
                <p className="text-sm font-medium text-mint-deep">
                  {item.catchphrase}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-navy-900 md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                  <Link
                    href={`/especialidades/${item.slug}`}
                    className="text-sm font-semibold text-navy-800 underline"
                  >
                    Saiba mais
                  </Link>
                  <Link
                    href={`/agendar?especialidade=${item.slug}`}
                    className="text-sm font-semibold text-navy-800 underline"
                  >
                    Agendar
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" className="bg-surface">
        <div className="section-pad mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-2 md:px-8">
          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src="/images/equipe-mattos-leite.jpg"
              alt="Dra. Fábia Mattos e Dr. Felipe Leite — Clínica Mattos Leite"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
              Equipe
            </p>
            <h2 className="section-title mt-3">Quem cuida de você</h2>
            <div className="mt-8 space-y-6">
              {site.doctors.map((doc) => (
                <article key={doc.slug} className="border-t border-navy-900/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint-deep">
                    {doc.role}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-navy-900">
                    {doc.name}
                  </h3>
                  {doc.crm ? (
                    <p className="mt-1 text-xs text-ink-muted">{doc.crm}</p>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {doc.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hero-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl">
              Solicite seu horário
            </h2>
            <p className="mt-3 text-white/80">
              Segunda a quinta 8h–18h · Sexta 8h–12h. Sem atendimento em fins de
              semana e feriados.
            </p>
          </div>
          <Link
            href="/agendar"
            className="touch-target inline-flex items-center justify-center rounded-sm bg-mint px-6 py-3.5 text-sm font-semibold text-navy-900"
          >
            Ir para agendamento
          </Link>
        </div>
      </section>

      <section className="pattern-soft">
        <div className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="section-title">Blog</h2>
            <Link href="/blog" className="text-sm font-semibold text-navy-800 underline">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="border border-navy-900/10 bg-surface">
                <div className="relative aspect-[16/10]">
                  <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-navy-900">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-surface">
        <div className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <h2 className="section-title">Perguntas frequentes</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {site.faq.map((item) => (
              <details key={item.q} className="border border-navy-900/10 p-5 open:bg-cream">
                <summary className="cursor-pointer list-none font-serif text-xl text-navy-900 [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-ink-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="localizacao" className="pattern-soft">
        <div className="section-pad mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="section-title">Localização e horários</h2>
            <p className="mt-4 text-ink-muted">{site.address.full}</p>
            <dl className="mt-6 space-y-2 text-sm">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 border-b border-navy-900/10 py-2">
                  <dt className="font-medium text-ink">{h.day}</dt>
                  <dd className="text-ink-muted">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden border border-navy-900/10">
            <iframe
              title={`Mapa ${site.name}`}
              src={site.address.mapsEmbed}
              className="h-[280px] w-full border-0 sm:h-[340px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="contato" className="bg-surface border-t border-navy-900/10">
        <div className="section-pad mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="section-title">Contato</h2>
            <p className="mt-4 text-ink-muted">
              Prefere agendar? Use a{" "}
              <Link href="/agendar" className="font-semibold text-navy-800 underline">
                página de agendamento
              </Link>
              .
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                WhatsApp:{" "}
                <a href={whatsappUrl()} className="text-navy-800 underline">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                E-mail:{" "}
                <a href={`mailto:${site.email}`} className="break-all text-navy-800 underline">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="border border-navy-900/10 p-5 md:p-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
