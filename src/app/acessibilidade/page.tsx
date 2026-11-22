import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Acessibilidade" };

export default function AcessibilidadePage() {
  return (
    <LegalPage title="Acessibilidade" updated="22 de novembro de 2026">
      <p>
        A {site.name} busca acessibilidade digital: skip link, navegação por
        teclado, contraste, textos alternativos e hierarquia semântica.
      </p>
      <p>
        Feedback: {site.email} | {site.phoneDisplay}.
      </p>
    </LegalPage>
  );
}
