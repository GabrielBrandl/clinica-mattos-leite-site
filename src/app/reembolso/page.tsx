import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Política de Reembolso" };

export default function ReembolsoPage() {
  return (
    <LegalPage title="Política de Reembolso" updated="22 de novembro de 2026">
      <p>
        Cancelamentos e reembolsos de consultas na {site.name} devem ser
        solicitados com antecedência razoável (preferencialmente 24h).
      </p>
      <p>
        Contato: {site.email} | {site.phoneDisplay}. Condições específicas são
        confirmadas no agendamento.
      </p>
    </LegalPage>
  );
}
