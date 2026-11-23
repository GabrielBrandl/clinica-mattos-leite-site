import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acessibilidade",
  description: `Compromissos de acessibilidade digital da ${site.name}.`,
};

export default function AcessibilidadePage() {
  return (
    <LegalPage title="Acessibilidade" updated="16 de novembro de 2026">
      <p>
        A {site.name} busca tornar este site utilizável pelo maior número
        possível de pessoas, alinhado a boas práticas de acessibilidade web
        (incluindo princípios WCAG).
      </p>

      <h2 className="font-serif text-2xl text-olive-900">
        1. Recursos implementados
      </h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Link “Ir para o conteúdo principal” no início da página;</li>
        <li>Navegação por teclado com foco visível;</li>
        <li>Textos alternativos (alt) em imagens significativas;</li>
        <li>Contraste aprimorado entre texto e fundo da marca;</li>
        <li>Hierarquia de títulos e landmarks semânticos;</li>
        <li>Respeito a preferências de redução de movimento.</li>
      </ul>

      <h2 className="font-serif text-2xl text-olive-900">2. Limitações</h2>
      <p>
        Mapas embutidos e plataformas externas (WhatsApp, Instagram, Doctoralia)
        podem ter barreiras próprias. Estamos abertos a melhorias contínuas.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">3. Feedback</h2>
      <p>
        Encontrou uma barreira? Escreva para {site.email} ou ligue{" "}
        {site.phoneDisplay} descrevendo a página e o problema. Responderemos o
        mais breve possível.
      </p>
    </LegalPage>
  );
}
