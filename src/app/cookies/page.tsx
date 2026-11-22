import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Aviso de Cookies" };

export default function CookiesPage() {
  return (
    <LegalPage title="Aviso de Cookies" updated="22 de novembro de 2026">
      <p>
        A {site.name} usa cookies essenciais e, com consentimento, cookies de
        medição (analytics).
      </p>
      <p>
        Gerencie preferências no banner ou limpando cookies do navegador.
        Contato: {site.email}.
      </p>
    </LegalPage>
  );
}
