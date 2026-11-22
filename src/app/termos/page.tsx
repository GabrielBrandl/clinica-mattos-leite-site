import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Termos de Serviço" };

export default function TermosPage() {
  return (
    <LegalPage title="Termos de Serviço" updated="22 de novembro de 2026">
      <p>
        Ao usar o site da {site.name} ({site.legalName}, CNPJ {site.cnpj}), você
        concorda com estes Termos.
      </p>
      <h2 className="font-serif text-2xl text-navy-900">1. Objeto</h2>
      <p>
        Site informativo e de facilitação de contato para agendamento. Não
        substitui atendimento médico.
      </p>
      <h2 className="font-serif text-2xl text-navy-900">2. Limitações</h2>
      <p>
        Sem avaliações fabricadas nem promessas terapêuticas. Agenda e valores
        devem ser confirmados com a clínica.
      </p>
      <h2 className="font-serif text-2xl text-navy-900">3. Contato</h2>
      <p>
        {site.email} | {site.phoneDisplay} | {site.address.full}
      </p>
    </LegalPage>
  );
}
