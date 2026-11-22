import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" updated="22 de novembro de 2026">
      <p>
        Esta Política descreve como a {site.name} ({site.legalName}, CNPJ{" "}
        {site.cnpj}) trata dados pessoais no site e canais digitais, em
        conformidade com a LGPD (Lei nº 13.709/2018).
      </p>
      <h2 className="font-serif text-2xl text-navy-900">1. Controlador</h2>
      <p>
        {site.legalName}, {site.address.full}. Contato: {site.email} |{" "}
        {site.phoneDisplay}.
      </p>
      <h2 className="font-serif text-2xl text-navy-900">2. Dados coletados</h2>
      <p>
        Nome, telefone/WhatsApp, especialidade de interesse e mensagem — apenas
        o necessário para retorno. Não envie dados sensíveis de saúde pelo
        formulário.
      </p>
      <h2 className="font-serif text-2xl text-navy-900">3. Finalidades</h2>
      <p>
        Retornar agendamentos e dúvidas; operar e proteger o site; analytics
        somente com consentimento; obrigações legais.
      </p>
      <h2 className="font-serif text-2xl text-navy-900">4. Direitos</h2>
      <p>
        Acesso, correção, eliminação, portabilidade e revogação de consentimento
        via {site.email}.
      </p>
    </LegalPage>
  );
}
