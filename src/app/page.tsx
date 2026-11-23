import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FaqJsonLd } from "@/components/JsonLd";
import { getRecentPosts } from "@/lib/blog";
import { site, whatsappUrl } from "@/lib/site";

export default function Home() {
  const recentPosts = getRecentPosts(3);
  const featured = site.specialties.slice(0, 4);

  return (
    <>
      <FaqJsonLd items={site.faq} />

      <section
        aria-labelledby="hero-heading"
        className="relative isolate min-h-[min(94dvh,920px)] overflow-hidden text-cream"
      >
        <Image
          src="/images/hero.jpg"
          alt="Ambiente acolhedor inspirado na identidade visual da Clínica Mundi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-950/94 via-olive-900/78 to-olive-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-950/55 via-transparent to-olive-950/25" />

        <div className="relative mx-auto flex min-h-[min(94dvh,920px)] max-w-6xl flex-col justify-end gap-10 px-4 pb-14 pt-28 sm:px-5 sm:pb-20 md:grid md:grid-cols-[1.15fr_0.85fr] md:items-end md:justify-center md:px-8 md:pb-24">
          <div className="max-w-2xl">
            <p className="reveal text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cream/80 sm:text-xs sm:tracking-[0.26em]">
              {site.tagline} · Manaus · Desde {site.foundedYear}
            </p>
            <h1
              id="hero-heading"
              className="reveal reveal-delay-1 mt-4 font-serif tracking-wide"
            >
              <span className="hero-title block">Clínica</span>
              <span className="hero-title-accent block">Mundi</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg md:text-xl">
              {site.bioInstagram}
            </p>
            <div className="reveal reveal-delay-3 hero-cta mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Link
                href="/agendar"
                className="touch-target inline-flex items-center justify-center rounded-sm bg-cream px-6 py-3.5 text-sm font-semibold text-olive-950 transition hover:bg-cream-deep"
              >
                Agendar consulta
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target inline-flex items-center justify-center rounded-sm border border-cream/40 px-6 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            </div>
            <p className="mt-5 text-xs text-cream/70">
              Instagram {site.instagramHandle} · {site.followersNote}
            </p>
          </div>

          <aside className="reveal reveal-delay-2 relative mx-auto w-full max-w-sm overflow-hidden border border-cream/20 bg-olive-950/35 shadow-2xl backdrop-blur-sm md:mx-0 md:justify-self-end">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/dra-patricia.jpg"
                alt="Dra. Patrícia Sicchar — Medicina de Longevidade (Instagram oficial)"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 360px"
                priority
              />
            </div>
            <div className="border-t border-cream/15 px-4 py-3 text-sm text-cream/85">
              Dra. Patrícia Sicchar · Medicina de Longevidade
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-olive-700/10 bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-5 md:px-8">
          {site.pillars.map((item) => (
            <div key={item.title} className="border-l-2 border-olive-700/30 pl-4">
              <h2 className="font-serif text-xl text-olive-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="especialidades"
        aria-labelledby="especialidades-heading"
        className="pattern-soft"
      >
        <div className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive-700 sm:text-xs">
                Especialidades
              </p>
              <h2 id="especialidades-heading" className="section-title mt-3">
                O que atendemos na Clínica Mundi
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Conteúdo alinhado ao Instagram oficial e aos canais públicos da
                clínica — sem promessas de resultado.
              </p>
            </div>
            <Link
              href="/especialidades"
              className="text-sm font-semibold text-olive-800 underline underline-offset-4"
            >
              Ver todas
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((specialty) => (
              <article
                key={specialty.slug}
                className="group overflow-hidden border border-olive-700/15 bg-surface"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={specialty.image}
                    alt={specialty.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-3xl text-olive-900">
                    {specialty.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {specialty.short}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    <Link
                      href={`/especialidades/${specialty.slug}`}
                      className="text-sm font-semibold text-olive-800 underline underline-offset-4"
                    >
                      Detalhes
                    </Link>
                    <Link
                      href={`/agendar?especialidade=${specialty.slug}`}
                      className="text-sm font-semibold text-olive-800 underline underline-offset-4"
                    >
                      Agendar
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" aria-labelledby="equipe-heading" className="bg-surface">
        <div className="section-pad mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]">
            <Image
              src="/images/galeria-04.jpg"
              alt="Dra. Patrícia Sicchar — conteúdo oficial do Instagram"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive-700 sm:text-xs">
              Equipe
            </p>
            <h2 id="equipe-heading" className="section-title mt-3">
              Profissionais da Clínica Mundi
            </h2>
            <div className="mt-8 space-y-7">
              {site.doctors.map((doctor) => (
                <article
                  key={doctor.slug}
                  className="border-t border-olive-700/15 pt-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
                    {doctor.role}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-olive-950 md:text-3xl">
                    {doctor.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-muted">
                    {doctor.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {doctor.focus.map((item) => (
                      <li
                        key={item}
                        className="border border-olive-700/20 bg-cream-soft px-3 py-1.5 text-xs font-medium text-olive-900"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-ink-muted">
              Acompanhe o dia a dia no{" "}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-olive-800 underline"
              >
                Instagram {site.instagramHandle}
              </a>{" "}
              e opiniões no{" "}
              <a
                href={site.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-olive-800 underline"
              >
                Doctoralia
              </a>
              . Não publicamos avaliações fabricadas.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="instagram-heading"
        className="pattern-soft border-y border-olive-700/10"
      >
        <div className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive-700 sm:text-xs">
                Instagram
              </p>
              <h2 id="instagram-heading" className="section-title mt-3">
                Do feed oficial para o site
              </h2>
              <p className="mt-3 max-w-2xl text-base text-ink-muted">
                Artes e fotos publicadas em {site.instagramHandle}. Siga para
                novidades, campanhas e agenda.
              </p>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center rounded-sm bg-olive-800 px-5 py-3 text-sm font-semibold text-cream"
            >
              Abrir Instagram
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {site.gallery.map((item) => (
              <a
                key={item.src}
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[3/4] overflow-hidden border border-olive-700/10"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" aria-labelledby="sobre-heading" className="bg-surface">
        <div className="section-pad mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive-700 sm:text-xs">
              Sobre a clínica
            </p>
            <h2 id="sobre-heading" className="section-title mt-3">
              Medicina feita com presença desde {site.foundedYear}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              A {site.name} é um consultório particular no Cond. Mundi (Aleixo).
              Pelo Instagram e Linktree oficiais, a clínica se apresenta como
              referência multidisciplinar — pediatria, saúde da mulher, idosos,
              longevidade, cardiologia e suporte nutricional — com agenda diária
              e opções de atendimento domiciliar.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Razão social: {site.legalName}. CNPJ {site.cnpj}.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              {site.prepTips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-700" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative min-h-[240px] overflow-hidden sm:min-h-full">
              <Image
                src="/images/hero.jpg"
                alt="Identidade visual acolhedora da Clínica Mundi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="space-y-4">
              <div className="border border-olive-700/15 bg-olive-950 p-5 text-cream">
                <h3 className="font-serif text-2xl">Contatos oficiais</h3>
                <ul className="mt-4 space-y-2 text-sm text-cream/85">
                  <li>WhatsApp {site.phoneDisplay}</li>
                  <li>Telefone {site.phoneAltDisplay}</li>
                  <li className="break-all">{site.email}</li>
                  <li>{site.instagramHandle}</li>
                  <li>linktr.ee/clinicamundi</li>
                </ul>
              </div>
              <div className="border border-olive-700/15 bg-cream-soft p-5 text-sm text-ink-muted">
                Highlights do Instagram: Atendimentos, Contatos, Localização,
                Pediatria, Domiciliar e campanhas educativas.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden text-cream">
        <Image
          src="/images/saude-mulher.jpg"
          alt="Ambiente de consulta da Clínica Mundi"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive-950/82" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20 md:px-8">
          <h2 className="max-w-xl font-serif text-4xl md:text-5xl">
            Agenda aberta — solicite seu horário
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85">
            Pediatria, longevidade, saúde da mulher, cardiologia e demais
            atendimentos sob confirmação da equipe.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/agendar"
              className="touch-target inline-flex items-center justify-center rounded-sm bg-cream px-6 py-3.5 text-sm font-semibold text-olive-950"
            >
              Formulário de agendamento
            </Link>
            <a
              href={site.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center justify-center rounded-sm border border-cream/40 px-6 py-3.5 text-sm font-semibold text-cream"
            >
              Linktree oficial
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="blog-heading" className="bg-surface">
        <div className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive-700 sm:text-xs">
                Blog
              </p>
              <h2 id="blog-heading" className="section-title mt-3">
                Conteúdo educativo para famílias
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-olive-800 underline underline-offset-4"
            >
              Ver todos os artigos
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col border border-olive-700/15 bg-cream-soft/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive-700">
                    {post.category}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug text-olive-950">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-heading" className="pattern-soft">
        <div className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <h2 id="faq-heading" className="section-title">
            Perguntas frequentes
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {site.faq.map((item) => (
              <details
                key={item.q}
                className="group border border-olive-700/15 bg-surface p-5 open:bg-cream-soft"
              >
                <summary className="cursor-pointer list-none font-serif text-xl text-olive-950 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-3">
                    {item.q}
                    <span className="text-olive-700 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="localizacao"
        aria-labelledby="localizacao-heading"
        className="bg-surface"
      >
        <div className="section-pad mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive-700 sm:text-xs">
                Localização
              </p>
              <h2 id="localizacao-heading" className="section-title mt-3">
                Cond. Mundi, Aleixo — Manaus
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {site.address.full}
              </p>
              <dl className="mt-6 space-y-2 text-sm">
                {site.hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between gap-4 border-b border-olive-700/10 py-2"
                  >
                    <dt className="font-medium text-ink">{item.day}</dt>
                    <dd className="text-right text-ink-muted">{item.time}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${site.address.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-olive-800 underline"
              >
                Abrir no Google Maps
              </a>
            </div>
            <div className="overflow-hidden border border-olive-700/15">
              <iframe
                title={`Mapa da ${site.name}`}
                src={site.address.mapsEmbed}
                className="h-[260px] w-full border-0 sm:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        aria-labelledby="contato-heading"
        className="pattern-soft border-t border-olive-700/10"
      >
        <div className="section-pad mx-auto grid max-w-6xl gap-8 px-4 sm:gap-12 sm:px-5 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive-700 sm:text-xs">
              Contato
            </p>
            <h2 id="contato-heading" className="section-title mt-3">
              Fale com a Clínica Mundi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Canais oficiais do Linktree e Instagram. Para agendar, prefira o{" "}
              <Link href="/agendar" className="font-medium text-olive-800 underline">
                formulário
              </Link>{" "}
              ou WhatsApp.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink">WhatsApp</dt>
                <dd>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive-800 underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Telefone</dt>
                <dd>{site.phoneAltDisplay}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">E-mail</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-olive-800 underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="border border-olive-700/15 bg-surface p-4 sm:p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
