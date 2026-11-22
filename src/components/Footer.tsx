import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

const legal = [
  { href: "/privacidade", label: "Política de Privacidade" },
  { href: "/termos", label: "Termos de Serviço" },
  { href: "/cookies", label: "Aviso de Cookies" },
  { href: "/reembolso", label: "Política de Reembolso" },
  { href: "/acessibilidade", label: "Acessibilidade" },
];

const nav = [
  { href: "/especialidades", label: "Especialidades" },
  { href: "/agendar", label: "Agendar" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-5 md:grid-cols-4 md:px-8">
        <div>
          <Image
            src="/logo-secundaria.png"
            alt={site.name}
            width={240}
            height={64}
            className="h-12 w-auto object-contain"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            {site.tagline}. Atendimento em Adrianópolis, Manaus.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-mint">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">
            Contato
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all">
                {site.email}
              </a>
            </li>
            <li>{site.address.full}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">
            Horários
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {site.hours.map((item) => (
              <li key={item.day}>
                <span className="block font-medium text-white">{item.day}</span>
                {item.time}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/60">
            CNPJ {site.cnpj}
            <br />
            {site.legalName}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-white/60 sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 {site.name}. Todos os direitos reservados.</p>
          <nav aria-label="Documentos legais">
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-mint">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-8 text-xs leading-relaxed text-white/45 sm:px-5 md:px-8">
          Conteúdo informativo. Não substitui consulta médica. Não utilizamos
          avaliações fabricadas nem promessas de resultado. {site.imageCredits}
        </p>
      </div>
    </footer>
  );
}
