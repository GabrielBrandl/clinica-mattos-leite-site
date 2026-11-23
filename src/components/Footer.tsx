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
  const year = 2026;

  return (
    <footer className="border-t border-olive-700/15 bg-olive-950 text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-5 sm:py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <p className="font-serif text-[1.75rem] tracking-wide sm:text-3xl">
            {site.name}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-cream/70">
            {site.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/80">
            Cardiologia e Pediatria em Manaus, com acolhimento e orientação
            clara no Cond. Mundi.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/90">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
            Contato
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/90">
            <li>
              <a href={`tel:+${site.phoneE164}`} className="hover:underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Doctoralia
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
            Dados da empresa
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-cream/90">
            <li>{site.legalName}</li>
            <li>CNPJ {site.cnpj}</li>
            <li>{site.address.full}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-cream/70 sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <nav aria-label="Documentos legais">
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center underline-offset-4 hover:text-cream hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-8 text-xs leading-relaxed text-cream/55 sm:px-5 md:px-8">
          Este site tem caráter informativo e não substitui consulta, diagnóstico
          ou tratamento médico. Não utilizamos avaliações fabricadas nem
          promessas de resultado. A identidade visual e o logotipo pertencem à
          Clínica Mundi. {site.imageCredits}
        </p>
      </div>
    </footer>
  );
}
